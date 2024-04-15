const container_contenido = document.getElementById('container_contenido');

//Crear variables para cada uno de los items del menu
const item_menu_index = document.getElementById('item_menu_index');
const item_menu_notificaciones = document.getElementById('item_menu_notificaciones');
const item_menu_ventas = document.getElementById('item_menu_ventas');
const item_menu_favoritos = document.getElementById('item_menu_favoritos');
const item_menu_ordenes = document.getElementById('item_menu_ordenes');
const item_menu_cliente = document.getElementById('item_menu_cliente');

//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del index
item_menu_index.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('index.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del index


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item de notificaciones
item_menu_notificaciones.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('notificaciones.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });  ////Fin de código del menu-item de notificaciones


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item de las ventas
item_menu_ventas.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('ventas.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });  ////Fin de código del menu-item de las ventas


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item de favoritos
item_menu_favoritos.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('favoritos.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });  ////Fin de código del menu-item de favoritos


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item de ordenes
item_menu_ordenes.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('ordenes.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });  ////Fin de código del menu-item de ordenes


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_cliente.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('cliente.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });  ////Fin de código del menu-item del cliente