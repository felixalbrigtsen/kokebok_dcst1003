// Gitt følgende index.html fil:
// <html>
// <head>
// <meta charset="UTF-8" />
// </head>
// <body></body>
// <script src="app.js"></script>
// </html>
// Skriv app.js slik at:
//    - Etter 2 sekunder blir en knapp opprettet. Denne knappen skal være posisjonert 50 punkter fra venstre
//      kant av siden/vinduet, og 50 punkter fra toppen av siden/vinduet.
//      -   Når knappen klikkes skal den flyttes til 100 punkter fra venstre kant av siden/vinduet, og 100
//          punkter fra toppen av siden/vinduet. I tillegg skal koordinatene til musmarkøren skrives ut, for
//          eksempel: "Mouse position: 62 60".
//    - Hvert sekund skal bakgrunnsfargen til siden/vinduet settes til en tilfeldig blåfarge.

//Heading-element for å skrive museposisjonen på skjermen
let out = document.createElement("h2");
document.body.appendChild(out);

let btn = document.createElement("button");
btn.innerText = "Klikk her!";
btn.style.marginLeft = "50px";
btn.style.marginTop = "50px";

btn.onclick = (evt)=>{
    btn.style.marginLeft = "100px";
    btn.style.marginTop = "100px";

    //Finn og skriv musens posisjon
    mousePosText = `Mouse position: ${evt.clientX} ${evt.clientY}`
    console.log(mousePosText);
    out.innerHTML = mousePosText;
}

setTimeout(()=>{
    document.body.appendChild(btn);
}, 2000);

setInterval(()=>{
    //Velg en tilfeldig blåfarge. (Tolket på en annen måte enn LF!)
    //LF-metoden:
    // const farge = `rgb(0,0,${Math.floor(Math.random()*256)}`;

    //Rød og grønn er tilfeldige heltall fra 0 til 127, gjort om til heksadesimal(00-7F) og paddet til 2 tegn lengde(altså, 4 -> 04)
    const r = ("00"+(Math.floor(Math.random()*128)).toString(16)).slice(-2)
    const g = ("00"+(Math.floor(Math.random()*128)).toString(16)).slice(-2)
    const b = (255).toString(16); // = FF, alltid maksimum

    const farge = r+g+b; //Heksadesimal fargestreng, på formatet FFFFFF, betyr RRGGBB fra 0 til 255 for hver farge.
    document.body.style.backgroundColor = farge;
}, 1000); //Hvert sekund
