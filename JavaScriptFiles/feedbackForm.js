console.log('Script loaded');

// Function to create the feedback page popup

function feedbackPage() {
    console.log('feedbackPage function called');

    // Create overlay and modal container
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.display = 'flex'; // Ensure the overlay is displayed when created

    const modal = document.createElement('div');
    modal.className = 'modal-container';

    // Helper function to create input fields
    const createInputField = (labelText, inputType, inputId, placeholder) => {
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'profile-field';

        const label = document.createElement('label');
        label.setAttribute('for', inputId);
        label.textContent = labelText;

        const input = document.createElement('input');
        input.type = inputType;
        input.id = inputId;
        input.placeholder = placeholder;

        fieldDiv.append(label, input);
        return fieldDiv;
    };

    // Add form fields
    const feedbackForm = document.createElement('form');
    feedbackForm.id = 'feedback-form';
    feedbackForm.append(
        createInputField('Name:', 'text', 'name', 'Your Name'),
        createInputField('Email:', 'email', 'email', 'Email')
    );

    // Add feedback textarea separately
    const feedbackField = document.createElement('div');
    feedbackField.className = 'profile-field';

    const feedbackLabel = document.createElement('label');
    feedbackLabel.setAttribute('for', 'feedback');
    feedbackLabel.textContent = 'Feedback:';

    const feedbackTextarea = document.createElement('textarea');
    feedbackTextarea.id = 'feedbackArea';
    feedbackTextarea.placeholder = 'Your Feedback';

    feedbackField.append(feedbackLabel, feedbackTextarea);
    feedbackForm.append(feedbackField);

    // Add submit feedback button
    const submitFeedbackButton = document.createElement('button');
    submitFeedbackButton.type = 'button';
    submitFeedbackButton.id = 'submit-feedback';
    submitFeedbackButton.textContent = 'Submit Feedback';
    feedbackForm.appendChild(submitFeedbackButton);

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.textContent = 'Close';
    modal.appendChild(closeButton);

    // Append form to modal and modal to overlay
    modal.append(feedbackForm);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Event listeners for closing the modal
    closeButton.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });

    // Event listener to submit feedback
    submitFeedbackButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedbackArea').value;
    
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Feedback:', feedback);
    
        // Basic validation
        if (!name || !email || !feedback) {
            alert("All fields are required.");
            return;
        }
        else{
        // Proceed with form submission
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('feedback', feedback);
    
        alert("Thank you for your feedback!");
    
        // Clear the fields after submitting
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('feedback').value = '';
    
    }});
    
}

document.addEventListener('DOMContentLoaded', () => {

    // Show feedback popup when the "Feedback and Requests" button is clicked
    const openFeedback = document.getElementById('feedback');
    if (openFeedback) {
        console.log('Feedback button found, adding click event listener');
        openFeedback.addEventListener('click', feedbackPage);
    } else {
        console.log('Feedback button not found');
    }
});
