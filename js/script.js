 // Aquí tu código
 const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista');

// Es mejor meter la funcion fuera del addeventlistener, por si queremos reutilizarla
 agregar.addEventListener('click', function() {
   const elementoNuevo = prompt('Agrega un nuevo elemento:');

   if (elementoNuevo) {
    const li = document.createElement('li'); 
    li.textContent = elementoNuevo;
    lista.appendChild(li);}
});

// Al final del if podemos poner un else con un alert por si el usuario no introduce un dato 
