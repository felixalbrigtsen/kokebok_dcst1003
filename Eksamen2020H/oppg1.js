const prices = {
    "Kano": 395,
    "Kajakk": 495,
    "Supboard": 295
};
document.getElementById("btn_order").onclick = (e)=> {
    e.preventDefault();
    //Hent verdier fra DOM
    const boat1 = document.getElementById("boat1_type").value;
    const boat2 = document.getElementById("boat2_type").value;
    const rent_time_from = document.getElementById("rent_time_from").value;
    const rent_time_to = document.getElementById("rent_time_to").value;
    const rent_loc_from = document.getElementById("rent_loc_from").value;
    const rent_loc_to = document.getElementById("rent_loc_to").value;
    const rent_comment = document.getElementById("rent_comment").value;

    //Valider tids-inputs
    const time_from = new Date(rent_time_from);
    const time_to = new Date(rent_time_to);
    let currentTime = new Date();
    //Disse gir også automatisk feil om det ikke er valgt noe i det hele tatt
    if (time_from < currentTime) {
        alert("Utleietidspunktet må være etter nåværende tid");
        return;
    }
    if (time_to < currentTime) {
        alert("Retur-tidspunktet må være etter nåværende tid");
        return;
    }
    if (time_from > time_to) {
        alert("Utleietidspunktet må være før returtidspunktet");
        return;
    }

    let price = 0;

    //Finn grunnprisene for båtene
    price += prices[boat1];
    if (boat2 != "Ingen") {
        price += prices[boat2];
    }
    //Finn antall dager, rund opp
    const days = Math.ceil((time_to - time_from) / (1000 * 60 * 60 * 24));
    price *= days;

    //Legg på eventuelt gebyr og tilhørende tekstlinje
    let locationFee = "";
    if (rent_loc_from != rent_loc_to) {
        price += 50;
        locationFee = `<p>Lokasjonsgebyr: 50 kr</p>`;
    }
    
    //Generer tekstlinjer. boat2Text er tom dersom ingen båt er valgt.
    const boat1Text = `<p>Båt 1: ${boat1} til ${prices[boat1]} kr pr dag</p>`;
    const boat2Text = boat2 != "Ingen" ? `<p>Båt 2: ${boat2} til ${prices[boat2]} kr pr dag</p>` : "";

    //Vis resultatene på skjermen
    document.getElementById("rent_result").innerHTML = `
        ${boat1Text}
        ${boat2Text}
        -------------------------------------------------
        <p>Fra: ${rent_time_from}</p>
        <p>Til: ${rent_time_to}</p>
        <p>Antall dager: ${days}</p>
        -------------------------------------------------
        <p>Lokasjon: ${rent_loc_from} - ${rent_loc_to}</p>
        ${locationFee}
        -------------------------------------------------
        <p>Kommentar: ${rent_comment}</p>
        -------------------------------------------------
        <p>Totalpris: ${price} kr</p>
    `;
};

//Initialiser datoer til "om en time" og "Om en time og et døgn"
let currentTime = new Date();
let startTime = new Date(currentTime.getTime() + (1000 * 60 * 60 * 2));
let endTime = new Date(startTime.getTime() + (1000 * 60 * 60 * 24));
document.getElementById("rent_time_from").value = startTime.toISOString().substr(0,16);
document.getElementById("rent_time_to").value = endTime.toISOString().substr(0,16);