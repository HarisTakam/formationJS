/*
var button  = document.querySelector(".spoiller button")
button.addEventListener('click', function(e){
    this.nextElementSibling.classList.add('visible')
    this.parentNode.removeChild(this)
})
*/

var sp = document.querySelectorAll(".spoiller")
var  createSpoillerButton = function (element){

    // on cree le span
    var span = document.createElement("span")
    span.className = "spoiller-content"
    span.innerHTML = element.innerHTML

    // on creer le button
    var button = document.createElement("button")
    button.textContent = "Afficher le spoiller"

    // ajoute l'element au DOM
    element.innerHTML = ""
    element.appendChild(button)
    element.appendChild(span)

    // On met l'ecouteur au click
    button.addEventListener('click', function(){
        button.parentNode.removeChild(button)
        span.classList.add("visible")
    })
}

for (let i = 0; i < sp.length; i++) {
    createSpoillerButton(sp[i])
    
}