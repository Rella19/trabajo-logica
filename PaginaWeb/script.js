function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const pensamientoInput = document.getElementById("pensamiento");
const publiButton = document.getElementById("publicar");
const pensamientosDiv = document.getElementById("pensamientos");


publiButton.addEventListener("click", () => {
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const pensamiento = pensamientoInput.value;
    //const imagen = document.getElementsByid('imagen ')
    //imagen.classList.remove('oculta');
    if (nombre && apellido && pensamiento) {
        const pensamientoDiv = document.createElement("div");
        pensamientoDiv.classList.add("pensamiento"); 
         pensamientoDiv.innerHTML = `
            <h3>${nombre} ${apellido}</h3>
            <p>${pensamiento}</p>
        `;

        pensamientosDiv.appendChild(pensamientoDiv);

        nombreInput.value = "";
        apellidoInput.value = "";
        pensamientoInput.value = "";

                
    }});
   //gallery//
   const fotoInput = document.getElementById("foto");
const comentarioInput = document.getElementById("comentario");
const ubicacionInput = document.getElementById("ubicacion");
const publicarButton = document.getElementById("publicar");
const fotosDiv = document.getElementById("fotos");

publicarButton.addEventListener("click", () => {
    const foto = fotoInput.files[0];
    const comentario = comentarioInput.value;
    const ubicacion = ubicacionInput.value;

    if (foto) {
        const fotoURL = URL.createObjectURL(foto);
        const fotoDiv = document.createElement("div");
        fotoDiv.classList.add("foto");
        fotoDiv.innerHTML = `
            <img src="${fotoURL}" alt="Foto">
            <p>${comentario}</p>
            <p>Ubicación: ${ubicacion}</p>
            <button class="like">Me gusta</button>
        `;

        fotosDiv.appendChild(fotoDiv);

        comentarioInput.value = "";
        ubicacionInput.value = "";
    }
});

fotosDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("like")) {
        const likeButton = event.target;
        likeButton.textContent = "¡Te gusta!";
    }
});

const hotelsByCountry = {
    Paris: [
        'https://www.example.com/hotel-1-paris',
        'https://www.example.com/hotel-2-paris',
    ],
    London: [
        'https://www.example.com/hotel-1-london',
        'https://www.example.com/hotel-2-london',
    ],
    Tokyo: [
        'https://www.example.com/hotel-1-tokyo',
        'https://www.example.com/hotel-2-tokyo',
    ],
};


    function updateHotels() {
        const country = document.getElementById('countries').value;
        const hotels = hotelsByCountry[country];

        let html = '';
        for (let i = 0; i < hotels.length; i++) {
            html += `<a href="${hotels[i]}">Hotel ${i + 1}</a><br>`;
        }

        document.getElementById('hotels').innerHTML = html;
    }

    // Ejecutar la función 'updateHotels' cuando se selecciona un país
    document.getElementById('countries').addEventListener('change', updateHotels);

    // Actualizar los enlaces a los hoteles al cargar la página
    updateHotels();

