const images = [
    {
        src: "https://yt3.ggpht.com/XfzZdtU7TYmUk8tLIeduOL-zWlNWvT3PSyh0HtrBggxo0CrFqnySrMKBEp8eQlZhCABEQn3nacvMtD8=s640-c-fcrop64=1,000000d0ffffff2f-rw-nd-v1",
        alt: "a pencil drawing of a girl with many braids"
    },
    {
        src: "https://yt3.ggpht.com/yjX22O4IfHRn_q9qvAZbx1JhLoV07LCzWuwd48dc8l2HEmon2kWG38E96i6g_eU2NESBBpxucMNX=s288-c-fcrop64=1,0000063efffff9c1-rw-nd-v1", 
        alt: "Colored pencil drawing of Usagi from Sailor Moon"
    },
    {
        src: "https://yt3.ggpht.com/FNgjtFs5QkjvTCTvzgevDQUFVegYb5xk012P3IpV8_5UkXFpQ01-TgkyitHjXXQ2teUkfKv3Ec29LA=s288-c-fcrop64=1,09360000f6c9ffff-rw-nd-v1", 
        alt: "pen drawing of an eye"
    },
    {
        src: "https://64.media.tumblr.com/19ad4293e84c72f0cdc14016dc4777a6/f3ca7286bf353358-d4/s540x810/330af57d67178d1af7e7df98fc339ab279349c1a.pnj", 
        alt: "a drawing of a fish"
    }
];

const mainImage = document.getElementById('image-shown');

function updateImage() {
  mainImage.classList.remove('show'); // Trigger fade-out transition

  // Wait for transition to complete before updating
  setTimeout(() => {
    mainImage.src = images[currentIndex].src;
    mainImage.alt = images[currentIndex].alt;

    // Update the caption with the alt text
    const caption = document.getElementById('caption');
    caption.textContent = images[currentIndex].alt;

    mainImage.classList.add('show'); 
  }, 500); 
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1 ) % images.length;
  updateImage();
}

// Instagram and github redirect
let instagramLink = "https://www.instagram.com/jeanbeanbc/"
let githubLink = "https://github.com/Jenni4B"

function instagram(){
    window.open(instagramLink, '_blank');
}

function github(){
    window.open(githubLink, '_blank');
}



// Like and dislike function
document.addEventListener('DOMContentLoaded', function() {

    // Initialize like and dislike counts and states
    
    let likeCount = 0;
    let dislikeCount = 0;
    let liked = false;
    let disliked = false;

    // Get the buttons and display elements

    const likeButton = document.getElementById('likeButton');
    const likeDisplay = document.getElementById('likeCount');
    const dislikeButton = document.getElementById('dislikeButton');
    const dislikeDisplay = document.getElementById('dislikeCount');

    // Like button click event

    likeButton.addEventListener('click', function() {
        if (!liked) {

            // Add like count and change button state

            likeCount++;
            likeButton.style.backgroundColor = '#4CAF50';


            // If dislike is active, reset it

            if (disliked) {
                disliked = false;
                dislikeCount--;
                dislikeButton.style.backgroundColor = '';

                dislikeDisplay.textContent = dislikeCount;
            }
        } else {
            // Decrement like count and reset button state

            likeCount--;
            likeButton.style.backgroundColor = '';

        }
        liked = !liked; // Toggle like state
        likeDisplay.textContent = likeCount;
    });

    // Dislike button click event

    dislikeButton.addEventListener('click', function() {
        if (!disliked) {

            // Increment dislike count and change button state

            dislikeCount++;
            dislikeButton.style.backgroundColor = '#843024';


            // If like is active, reset it

            if (liked) {
                liked = false;
                likeCount--;
                likeButton.style.backgroundColor = '';

                likeDisplay.textContent = likeCount;
            }
        } else {

            // Decrease dislike count and reset button state

            dislikeCount--;
            dislikeButton.style.backgroundColor = '';
        }
        disliked = !disliked; // Toggle dislike state

        dislikeDisplay.textContent = dislikeCount;
        
    });
})

// share function

function shareImage() {
    const image = document.querySelector('.img1');
    if (navigator.share) {
        fetch(image.src)
            .then(response => response.blob())
            .then(blob => {
                const file = new File([blob], 'image.jpg', { type: blob.type });
                navigator.share({
                    files: [file],
                    title: 'Check out this image!',
                    text: 'I found this awesome image and wanted to share it with you.'
                })
                .then(() => console.log('Image shared successfully'))
                .catch((error) => console.error('Error sharing the image:', error));
            });
    } else {
        alert('Web Share API is not supported in your browser. You can manually share the image URL.');
    }
}

// hide button things 
function hideThePic() {
    const image = document.querySelector('.img1');
    const hideButton = document.getElementById('hideButton');
    
    if (image.style.opacity === '0') {
        image.style.opacity = '1';
        hideButton.textContent = '👁️';
        hideButton.setAttribute('aria-label', 'Hide image');

        if (messageElement) {
            messageElement.remove();
        }


    } else {
        image.style.opacity = '0';
        hideButton.textContent = '👁️‍🗨️'; // appears when the image is hidden and dips when the image is visible
        hideButton.setAttribute('aria-label', 'Show image');

        if (!messageElement) {

            // Creates a div element that contains a message when the image is hidden
            messageElement = document.createElement('div');
            messageElement.id = 'hiddenMessage';
            messageElement.textContent = 'Image is hidden';
            messageElement.style.fontSize = '20px';
            messageElement.style.color = '#000000'; 
            parentContainer.appendChild(messageElement);

    }
}}



// Enlarges image on click
function enlargeImage(container) {
    const overlay = document.getElementById('image-overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    
    // Set the enlarged image source to the original image source
    const img = container.querySelector('img');
    enlargedImage.src = img.src;
    enlargedImage.alt = img.alt;
    
    overlay.classList.add('active'); // Show the overlay
}

// Main issue that when I click on other elements such as the like, dislike, share, 
// and hide buttons, it still enlarges the picture 👀

// Resets image size when clicked off
function closeOverlay() {
    const overlay = document.getElementById('image-overlay');
    overlay.classList.remove('active'); // Hide the overlay
}
