const openModalBtns = document.querySelectorAll(".openModalBtn"),
    modalContainer = document.getElementById("modalContainer"),
    closeModalBtn = document.getElementById("closeModalBtn"),
    modalContent = document.getElementById("modalContent"),
    contentMap = {
        modal1: document.getElementById("trek1").innerHTML,
        modal2: document.getElementById("trek2").innerHTML,
        modal3: document.getElementById("trek3").innerHTML,
        modal4: document.getElementById("trek4").innerHTML,
        modal5: document.getElementById("trek5").innerHTML,
        modal6: document.getElementById("trek6").innerHTML,
        modal7: document.getElementById("trek7").innerHTML,
        
    };
openModalBtns.forEach(e => {
    e.addEventListener("click", () => {
        let t = e.getAttribute("data-modal-target");
        modalContent.innerHTML = contentMap[t] || "", modalContainer.style.display = "block", document.documentElement.style.overflow = "hidden", window.innerWidth <= 600 ? document.getElementById("modal").style.animation = "slideIn .5s ease-out" : document.getElementById("modal").style.animation = "slideleft .5s ease-in", document.body.style.overflow = "hidden"
    })
}), closeModalBtn.addEventListener("click", () => {
    window.innerWidth <= 600 ? document.getElementById("modal").style.animation = "slideOut .5s ease-out" : document.getElementById("modal").style.animation = "slideleftOut .5s ease-out", setTimeout(function() {
        modalContainer.style.display = "none", document.documentElement.style.overflow = "auto", document.body.style.overflow = "auto", document.getElementById("modal").style.animation = "none"
    }, 500)
}); 
