document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); 

        const formData = {
            firstName: document.getElementById("firstName").value.trim(),
            lastName: document.getElementById("lastName").value.trim(),
            email: document.getElementById("email").value.trim(),
            subject: document.getElementById("subject").value.trim(),
            message: document.getElementById("message").value.trim(),
        };

        if (!formData.firstName || !formData.email) {
            alert("First Name and Email are required!");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                form.reset();
            } else {
                alert("Error sending email: " + result.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send email.");
        }
    });
});
