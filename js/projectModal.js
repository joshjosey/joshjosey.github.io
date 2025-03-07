//javascript to load project data into a modal popup
document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');

    //link each button to the modal
    document.querySelectorAll(".see-more-btn").forEach(button => {
        button.addEventListener("click", function () {

            const projectUrl = this.getAttribute("data-url");

            fetch(projectUrl)
                .then(response => response.text())
                .then(data => {
                    modalBody.innerHTML = data;
                    modalOverlay.style.display = "flex";
                    document.body.classList.add("model-open");
                })
                .catch(error => {
                    modalBody.innerHTML = "<p>Error loading project details.</p>";
                    console.error('Error:', error);
                });
        });
    });
    
    //close the modal
    closeModal.addEventListener("click", function () {
        modalOverlay.style.display = "none";
        document.body.classList.remove("model-open");
    });

    //close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = "none";
            document.body.classList.remove("model-open");
        }
    });


});