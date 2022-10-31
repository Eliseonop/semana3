// url https://you.com/proxy?url=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bLHA5mZ28GgJhisqkFxV0AHaHa%26w%3D690%26c%3D7%26pid%3DApi%26p%3D0

// generar 10 divs con imagen y texto con id h1 resaltado de color rojo


for (let i = 0; i < 10; i++) {
    let div = document.createElement('div');
    div.innerHTML = `<img src="https://dam.ngenespanol.com/wp-content/uploads/2019/04/oso-panda-fotografias.png" alt="imagen" width="200px" height="200px">
    <h1>hola</h1>`;
    document.body.appendChild(div);
}