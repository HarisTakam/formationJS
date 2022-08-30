
(function(){
    /* Algorithme
    l'orsue l'on clique sur onglet
        on retire la classe active sur l'onglet actif
        j'ajoute la classe active sur l'onglet actuel

        on retire la classe active sur le contenu actuel
        j'ajoute la classe active sur le contenu conrrespondant a mon clique
*/
var AfficherOnglet = function(a, annimations){
    if (annimations === undefined){
        annimations = true
    }
    var li = a.parentNode
    var div  = a.parentNode.parentNode.parentNode
    var activeTab = div.querySelector(".tab-content.active") //contenu actif
    var aAfficher = div.querySelector(a.getAttribute("href")) // contenu a afficher

    if (li.classList.contains("active")) {
        return false
    }
    //on retire la classe active sur l'onglet actif
    div.querySelector(".tabs .active").classList.remove("active")

    //j'ajoute la classe active sur l'onglet actuel
    li.classList.add("active")

    //on retire la classe active sur le contenu actuel
    //div.querySelector(".tab-content.active").classList.remove("active")
    //j'ajoute la classe active sur le contenu conrrespondant a mon clique
    //div.querySelector(a.getAttribute("href")).classList.add("active")

    if (annimations) {
        activeTab.classList.add("fade")
        activeTab.classList.remove('in')
        var transitionend = function(){
            this.classList.remove('fade')
            this.classList.remove('active')
            aAfficher.classList.add('active')
            aAfficher.classList.add('fade')
            aAfficher.offsetWidth
            aAfficher.classList.add('in')
            activeTab.removeEventListener('transitionend',transitionend)
            activeTab.removeEventListener('webkitTransitionEnd',transitionend)
            activeTab.removeEventListener('oTransitionEnd',transitionend)
    } 
        activeTab.addEventListener('transitionend',transitionend )
        activeTab.addEventListener('webkitTransitionEnd',transitionend )
        activeTab.addEventListener('oTransitionEnd',transitionend )
    } else{
        aAfficher.classList.add('active')
        activeTab.classList.remove('active')
    }
    /*
        on ajoute la classe fade sur l'element actif
        a la fin de l'animation
            on retire la classe fade et active
            on ajoute la classe fade et active a l'elemet a afficher
            on ajoute la classe in
    */
}

var tabs = document.querySelectorAll(".tabs a")
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(e){
        AfficherOnglet(this)
    })
}

/*
    on recupere le hash
    ajouter la classe active sur le lien href="hash"
    retire la classe active sur les autres onglets
    afficher et masques les contenus
 */
var hashchange = function(e){
    var hash = window.location.hash
    var a = document.querySelector('a[href= "' + hash +'"]')
    if (a !== null && !a.classList.contains("active")) {
        AfficherOnglet(a, e !== undefined)
    } 
}

window.addEventListener('hashchange',hashchange)
hashchange()
}) ()