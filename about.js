// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleVideoButton = document.getElementById('toggle-video');
    const thumbnail = document.getElementById('thumbnail');
    const videoEmbed = document.getElementById('video-embed');
    let videoVisible = false;

    toggleVideoButton.addEventListener('click', () => {
        if (!videoVisible) {
            // Show the video
            const youtubeURL = "https://www.youtube.com/embed/BsE7eDWGFVE?autoplay=1";
            
            let iframe = videoEmbed.querySelector('iframe');
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', 'true');
                videoEmbed.appendChild(iframe);
            }

            iframe.setAttribute('src', youtubeURL);
            videoEmbed.classList.remove('hidden');
            thumbnail.classList.add('hidden');
            videoVisible = true;

            // Set video container size
            videoEmbed.style.width = "800px"; // Set width to match typical YouTube video width
            videoEmbed.style.height = "120px"; // Set height to match typical YouTube video height
        } else {
            // Hide the video and show the thumbnail
            videoEmbed.classList.add('hidden');
            thumbnail.classList.remove('hidden');
            let iframe = videoEmbed.querySelector('iframe');
            if (iframe) {
                iframe.setAttribute('src', ''); // Stop the video
            }
            videoVisible = false;
        }
    });
});

document.querySelector('.download-link').addEventListener('click', function() {
    // Your tracking or additional code here
    console.log('Download link clicked');
});