 // Aquí tu código
 const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista');

 agregar.addEventListener('click', function() {
   const elementoNuevo = prompt('Agrega un nuevo elemento:');

   if (elementoNuevo) {
    const li = document.createElement('li'); 
    li.textContent = elementoNuevo;
    lista.appendChild(li);}
});

 
