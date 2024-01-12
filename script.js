function showStarInfo(info){
let infoPanel = document.querySelector("#star-info-panel");
infoPanel.classList.toggle("visible");
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
