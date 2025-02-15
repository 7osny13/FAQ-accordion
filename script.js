const toggleButtons = document.querySelectorAll('.faq-toggle-btn');




toggleButtons.forEach(button => {
    button.addEventListener('click' , () => {
        const img = button.querySelector("img");
        const answer = button.parentElement.nextElementSibling;
        const isExpanded = button.getAttribute("aria-expanded") === "true";



        // Toggle answer visibility
        answer.hidden = isExpanded ? true : false;

        

        // Toggle aria-expanded for accessibility
        button.setAttribute("aria-expanded", !isExpanded);

        // Change icon based on the current state
        img.src = isExpanded 
        ? "assets/images/icon-plus.svg" 
        : "assets/images/icon-minus.svg";

        img.alt = isExpanded ? "Expand answer" : "Collapse answer";
    })
})