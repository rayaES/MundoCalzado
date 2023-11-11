// ====================================== //
const items = document.querySelector('.tiendaSeccion')

// Section shop
const divOut = document.querySelector('.buySection')
const divChildOut = document.querySelector('.buyDiv')

// Model
const elemInput = document.querySelector('.cantProduct')
const elemSelect = document.querySelector('.desplegable')
const elemBoton = document.querySelector('.botonShop')
const contText = document.querySelector('.conteoProducts')



// ====================================== //
// Functions compras
function closeModel(){
    divOut.style.display="none";
    elemSelect.value = 0;
    elemSelect.style = "";
    elemInput.value = '';
    elemBoton.style = ""
}


divOut.addEventListener('click', e => {
    if(!divChildOut.contains(e.target)){
        closeModel();
    }
});


items.addEventListener('click', e => {
    const elementClic = e.target;

    if (elementClic.getAttribute('class') =='cuadMolde'){
        divItem = e.target
        divItems = divItem.parentNode
    } else {
        subDiv = e.target.parentNode
        divItem = subDiv.parentNode
        divItems = divItem.parentNode
    }
    
    if(divItems.getAttribute('class')=='multVenta'){
        elemBoton.disabled = true;
    
        const imgShoe = divItem.querySelector('.imgE')
    
        const title = divItem.querySelector('p.title').textContent
        const precio = divItem.querySelector('p.desc').textContent
        
    
        // Definir y establecer atributos Model
        const buyImg = divOut.querySelector('.buyImg')
        const titleBuy = divOut.querySelector('.titleBuy')
        const precioBuy = divOut.querySelector('.precioBuy')
    
        buyImg.setAttribute('src',imgShoe.getAttribute('src'));
        titleBuy.innerHTML = title
        precioBuy.innerHTML = precio
    
        divOut.style.display="flex";
    }
})


// Verificar antes de 'Añadir al carro'

elemInput.addEventListener('keyup', e => {
    if(elemInput.value.length>0){
        if(elemSelect.value!='0'){
            elemBoton.style.background = "#1b1b1b"
            elemBoton.style.cursor = "pointer"
            elemBoton.removeAttribute('disabled')
        } else {
            elemBoton.style.background = "white"
            elemBoton.style.cursor = "not-allowed"
        }
    } else {
        elemBoton.style.background = "white"
        elemBoton.style.cursor = "not-allowed"
    }
});

elemSelect.addEventListener("change", e => {
    if(elemSelect.value!='0'){
        elemSelect.style.background = "#eeeeee"
        elemSelect.style.color = "#1b1b1b"

        if(elemInput.value.length>0){
            elemBoton.style.background = "#1b1b1b"
            elemBoton.style.cursor = "pointer"
            elemBoton.removeAttribute('disabled')
        } else {
            elemBoton.style.background = "white"
            elemBoton.style.cursor = "not-allowed"
        }
    } else {
        elemSelect.style.background = "#1b1b1b"
        elemSelect.style.color = "white"
        
        elemBoton.style.background = "white"
        elemBoton.style.cursor = "not-allowed"
    }
});

//Agregar al Carro
let total = 0;

function addToCar(){
    cantInd = Number(elemInput.value);
    total += cantInd;
    contText.innerHTML = total
    closeModel()
}