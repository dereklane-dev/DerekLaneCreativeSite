document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // stop page reload
        console.log("JS intercepted the submit");

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then(result => {
            feedback.innerHTML = result;
            form.reset();
        })
        .catch(err => {
            feedback.innerHTML = '<p class="error-message">Error sending message. Try again.</p>';
            console.error(err);
        });
    });
});
