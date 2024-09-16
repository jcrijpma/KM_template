// Functie om te verwijzen naar een nieuwe pagina
function navigateTo(page) {
    window.location.href = `${page}.html`;
}

// Functie om een zoekopdracht te simuleren
function searchLessons() {
    const searchTerm = document.querySelector('.search-input').value;
    alert(`Zoeken naar: ${searchTerm}`);
}

// Functie om gefilterde resultaten weer te geven
function showResults() {
    const projectType = document.getElementById('projectType').value;
    const soortProject = document.getElementById('soortProject').value;
    const jaartallen = document.getElementById('jaartallen').value;
    const soortenDocumenten = document.getElementById('soortenDocumenten').value;
    const afdelingen = document.getElementById('afdelingen').value;

    // Simuleer het tonen van de resultaten
    alert(`Resultaten:
    Project Type: ${projectType}
    Soort Project: ${soortProject}
    Jaartallen: ${jaartallen}
    Soorten Documenten: ${soortenDocumenten}
    Afdelingen: ${afdelingen}`);
}