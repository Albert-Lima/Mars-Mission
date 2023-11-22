var BttMostrarMais = document.querySelector('#bttTextMore')
var TextoExploração = document.querySelector('#TextExploration')
var BoxOfText = document.querySelector('#BoxTextExploration')

function MostrarTexto(){
    BttMostrarMais.innerText = 'mostrar menos'
    TextoExploração.style.height = 'max-content'
    BoxOfText.style.height = 'max-content'
    BttMostrarMais.removeEventListener('click', MostrarTexto)
    BttMostrarMais.addEventListener('click', MostrarMenos)
    function MostrarMenos(){
        BttMostrarMais.innerText = 'mostrar mais'
        BttMostrarMais.removeAttribute('style')
        TextoExploração.removeAttribute('style')
        BttMostrarMais.addEventListener('click', MostrarTexto)
        BttMostrarMais.removeEventListener('click', MostrarMenos)
    }
}
BttMostrarMais.addEventListener('click', MostrarTexto)



var bttReturn = document.querySelector('#returnTop')
var topo = document.querySelector('#topo')

function ToTop(){
    var topoRect = topo.getBoundingClientRect()
    var centeryTop = topoRect.top + topoRect.height/2 - window.innerHeight/ 2
    window.scrollTo({
        top: centeryTop + window.scrollY,
        behavior: 'smooth'
    })
}
bttReturn.addEventListener('click', ToTop)