const menus = document.querySelectorAll(".topmenu");
const sections = document.querySelectorAll(".autoscroll");

const offset = 150;
let scrollDuration = 1000;
let horizontalScrollDuration = 1000;

// easing
function easeInOutQuad(t, b, c, d){
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2)-1) + b;
}

// vertical scroll
function smoothScrollTo(targetY, duration, callback){
  let startY = window.scrollY;
  let diff = targetY - startY;
  let start;

  function step(time){
    if (!start) start = time;
    let progress = time - start;

    let y = easeInOutQuad(progress, startY, diff, duration);
    window.scrollTo(0, y);

    if(progress < duration){
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      callback && callback();
    }
  }
  requestAnimationFrame(step);
}

// horizontal scroll
function smoothHorizontalScrollTo(container, target, duration){
  let start = container.scrollLeft;
  let diff = target - start;
  let startTime;

  function step(time){
    if (!startTime) startTime = time;
    let progress = time - startTime;

    let x = easeInOutQuad(progress, start, diff, duration);
    container.scrollLeft = x;

    if(progress < duration){
      requestAnimationFrame(step);
    } else {
      container.scrollLeft = target;
    }
  }
  requestAnimationFrame(step);
}

// ðŸ‘‡ IMPORTANT: all menus sync
function setActiveAllMenus(id){
  menus.forEach(menu=>{
    let links = menu.querySelectorAll("a");

    links.forEach(link=>{
      link.parentNode.classList.remove("active");

      if(link.getAttribute("href") === "#"+id){
        link.parentNode.classList.add("active");

        scrollMenuToActive(menu, link);
      }
    });
  });
}

// center active item
function scrollMenuToActive(menu, link){
  let menuRect = menu.getBoundingClientRect();
  let linkRect = link.getBoundingClientRect();

  let offset = linkRect.left - (menuRect.left + menuRect.width/2 - linkRect.width/2);
  let target = menu.scrollLeft + offset;

  smoothHorizontalScrollTo(menu, target, horizontalScrollDuration);
}

// click event (ALL MENUS)
menus.forEach(menu=>{
  const links = menu.querySelectorAll("a");

  links.forEach(link=>{
    link.addEventListener("click", function(e){
      e.preventDefault();

      let id = link.getAttribute("href");
      let target = document.querySelector(id);

      if(target){
        let top = target.offsetTop - offset;

        smoothScrollTo(top, scrollDuration, ()=>{
          setActiveAllMenus(id.replace("#",""));
        });
      }
    });
  });
});

// scroll active detect
function updateActiveMenuItem(){
  sections.forEach(section=>{
    let rect = section.getBoundingClientRect();

    if(rect.top < 160 && rect.bottom > 140){
      setActiveAllMenus(section.id);
    }
  });
}

window.addEventListener("scroll", updateActiveMenuItem);