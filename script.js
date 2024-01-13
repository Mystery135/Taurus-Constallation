function showStarInfo(name, picture, distance, radius, mass, amagnitude, abmagnitude, lumin, spectraltype, evo, age, info, showTable) {
    let infoPanel = document.querySelector("#star-info-panel");
    infoPanel.classList.toggle("visible");

    document.querySelector("#star-name").textContent = name;

    document.querySelector("#panel-img").src = picture;


    document.querySelector("#table-star-name").textContent = name;

    document.querySelector("#table-distance").textContent = distance + " light years";

    document.querySelector("#table-radius").innerHTML = radius + " R<sub>☉</sub>";

    document.querySelector("#table-mass").innerHTML = mass + " M<sub>☉</sub>";

    document.querySelector("#table-apparent-magnitude").textContent = amagnitude;

    document.querySelector("#table-absolute-magnitude").textContent = abmagnitude;

    document.querySelector("#table-luminosity").textContent = lumin;

    document.querySelector("#table-spectral-type").textContent = spectraltype;

    document.querySelector("#table-evo").textContent = evo;

    document.querySelector("#table-age").textContent = age;

    document.querySelector("#star-info").textContent = info;

    if (showTable == false){
        document.querySelector("#star-table").style.display = 'none';
    }else{
        document.querySelector("#star-table").style.display = 'block';
    }



}



function hideStarInfo(){

    let infoPanel = document.querySelector("#star-info-panel");
    infoPanel.classList.toggle("visible");
    

}

document.addEventListener('click', function(event) {
    let panel = document.querySelector("#star-info-panel");
    let isClickInsidePanel = panel.contains(event.target) || event.target.classList.contains("star");

    if (!isClickInsidePanel && panel.classList.contains('visible')) {
        panel.classList.remove('visible');
    }
});

