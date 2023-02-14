document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if(localStorage.getItem("kirjautunut") === "kyllä") {
        document.getElementById("tervetulo_teksti").textContent += " " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulosnappi").style.display = "";
    }
    else {
        document.getElementById("kirjaudu_ulosnappi").style.display = "none";
    }

}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä")
}

function ulos() {
    localStorage.setItem("kirjautunut", "ulos")
    document.getElementById("kirjautumis_lomake").style.display = "";
    document.getElementById("tervetulo_teksti").textContent = "Tervetuloa"
    document.getElementById("kirjaudu_ulosnappi").style.display = "none";
}