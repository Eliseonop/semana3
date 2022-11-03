const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const email = document.querySelector("#email").value;
  const telefono = document.querySelector("#telefono").value;
  const direccion = document.querySelector("#direccion").value;
  const ciudad = document.querySelector("#ciudad").value;
  const numero = document.querySelector("#numero").value;
  const fecha = document.querySelector("#fecha").value;
  const cvv = document.querySelector("#cvv").value;

  const data = {
    nombre,
    apellido,
    email,
    telefono,
    direccion,
    ciudad,
    numero,
    fecha,
    cvv,
  };

  //    abrir una nueva ventana
  const newWindow = window.open("", "newWindow", "width=400, height=400");
  newWindow.document.write(`
  <h1>Gracias por tu compra</h1>
  <p>Nombre: ${data.nombre}</p>
  <p>Apellido: ${data.apellido}</p>
  <p>Email: ${data.email}</p>
  <p>Telefono: ${data.telefono}</p>
  <p>Direccion: ${data.direccion}</p>
  <p>Ciudad: ${data.ciudad}</p>
  <p>Numero: ${data.numero}</p>
  <p>Fecha: ${data.fecha}</p>
  <p>Cvv: ${data.cvv}</p>
  `);
});