let images = [
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

// Instagram and github redirect
let instagramLink = "https://www.instagram.com/jeanbeanbc/"
let githubLink = "https://github.com/Jenni4B"

function instagram(){
    window.location.href = instagramLink;

}
function github(){
    window.location.href = githubLink;

}

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

function enlargeImage(container) {
    const overlay = document.getElementById('image-overlay');
    const enlargedImage = document.getElementById('enlarged-image');
    
    // Set the enlarged image source to the original image source
    const img = container.querySelector('img');
    enlargedImage.src = img.src;
    enlargedImage.alt = img.alt;
    
    overlay.classList.add('active'); // Show the overlay
}

function closeOverlay() {
    const overlay = document.getElementById('image-overlay');
    overlay.classList.remove('active'); // Hide the overlay
}