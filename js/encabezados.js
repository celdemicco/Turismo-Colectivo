// Encabezados.js

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el contenedor donde quieres agregar el contenido del encabezado
    const headerContainer = document.getElementById('header');
    // Obtén el contenedor donde quieres agregar el contenido del pie de página
    const footerContainer = document.getElementById('footer');

    // Fetch para obtener el contenido del archivo header.html
    fetch('../pages/header.html')
        .then(response => {
            // Verifica si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo header.html');
            }
            // Retorna el contenido del archivo como texto
            return response.text();
        })
        .then(data => {
            // Inserta el contenido del encabezado en el contenedor
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            // Maneja cualquier error que pueda ocurrir durante la carga del archivo
            console.error('Error al cargar el encabezado:', error);
        });

    // Fetch para obtener el contenido del archivo footer.html
    fetch('../pages/footer.html')
        .then(response => {
            // Verifica si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo footer.html');
            }
            // Retorna el contenido del archivo como texto
            return response.text();
        })
        .then(data => {
            // Inserta el contenido del pie de página en el contenedor
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            // Maneja cualquier error que pueda ocurrir durante la carga del archivo
            console.error('Error al cargar el pie de página:', error);
        });
});

