for (let i = 1; i <= 10; i++) {
  // mostrar 1 circulo y que desplace de arriba hacia abajo
  document.body.innerHTML += `<marquee direction="down" behavior="alternate" SCROLLAMOUNT="5"  > 
    <div id="circulo" ></div>
            </marquee>`
}
