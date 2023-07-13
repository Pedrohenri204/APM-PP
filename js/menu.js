
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)


var btnExp = document.querySelector('#btn-expa')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

// slide


let contador = 1;

setInterval(function(){
    document.getElementById('slide' + contador). checked = true;
    contador ++;

    if( contador > 5) {
        contador = 1;
    }
},4000)