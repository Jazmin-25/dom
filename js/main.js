let btnEjecutar = document.getElementById("btnEjecutar")
// Busca el elemento que tenga el ID
document.getElementById ("encabezado")
// innerText: es un texto dentro de un elemento en consola
encabezado.innerText ="<strike>Encabezado</strike>";
// innerHTML: HTML dentro de un elemento , se interpreta como estructura de HTML
encabezado.innerHTML = "&copy; &lt; &gt <strike> Encabezado </strike>";
//Selecciona todas las etiquetas dentro del doocumento, regresa un HTMLCOLLECTION 
let lista = document.getElementsByTagName("ul"); //traera todas las etiquetas
//NO ES UN ARREGLO
console.log(lista.length);
//console.log(lista[0]);
console.log(lista.item(0));
// Selecciona todos los elementos dentro de document que contengan en el class
// list-group-item, regresa un HTMLCollection
let listGroup =document.getElementsByClassName("list-group-item");
console.log(listGroup.length);
// Selector CSS mediante querySelector, trae  un elemento
let elemento = document.querySelector("ul > li");
console.log(elemento);

let elementos = document.querySelectorAll("ul > li")
console.log(elementos);

 let elemento2 = document.querySelectorAll("ul > li:last-child");
 console.log(elemento2.length);
 console.log(elemento2);

 let elemento3 = document.querySelectorAll("ul > li:first-child");
 console.log(elemento3.length);
 console.log(elemento3);

 btnEjecutar.addEventListener("click", function(event){
    event.preventDefault();

    let ul = document.getElementsByClassName("list-group");
    console.log(ul[0]);
    //ul[0].innerHTML = ul[0].innerHTML + "";
    //Metodo create Element
    let li6 = document.createElement("li");
    li6.innerText = "A sixth item";
    li6.className="list-group-item";
    console.log(li6);
    // append // ultimo de la lista 
    //ul[0].append(li6);

    //prepend // al principio de la lista
    ul[0].prepend(li6)
    //antes de la lista
    ul[0].before(li6)
    ul[0].after(li6);
///---------
//html que se va a insertar
ul[1].insertAdjacentHTML('beforeend', '<li class="list-group-item">A sixth item</li>')
let li7 =document.createElement("li");
li7.innerText = "A seventh item";
ul[1].insertAdjacentElement('beforrend', li7);
 });