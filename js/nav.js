function home() {
    // Using JavaScript to load the home HTML
    fetch('home.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('main-content').innerHTML = data;
        typeWriter("#typeText",["Computer Scientist","Graduate Student","Problem Solver"],150);
    })
    .catch(error => console.error('Error loading the main content:', error));
}

function about(){
    // Using JavaScript to load the content HTML
    fetch('about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            createSlideshow('#academicSlideshow',10000);
            createSlideshow('#abroadSlideshow',5000);
            createSlideshow('#campSlideshow',5000);
        })
        .catch(error => console.error('Error loading the main content:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    // Call the home function once when the page is initially loaded
    home();
});