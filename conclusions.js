var audio = new Audio('conclusions.mp3');
var isReading = false;

function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function toggleAudio() {
    if (!isReading) {
        audio.play();
        isReading = true;
    } else {
        audio.pause();
        isReading = false;
    }
}

document.getElementById('horn-icon').addEventListener('click', function() {
    toggleAudio();
    toggleContent('conclusions-text');
});

document.getElementById('conclusions-text').addEventListener('dblclick', function () {
    if (isReading) {
        audio.pause();
        isReading = false;
    }
});
