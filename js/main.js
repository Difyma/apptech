let currentScreen = 'today-screen';
let isPlaying = false;

function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    document.getElementById(screenId).classList.add('active');

    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Map screen to nav index
    const navMap = {
        'today-screen': 0,
        'programs-screen': 1,
        'program-detail': 1,
        'program-detail-leadership': 1,
        'program-detail-productivity': 1,
        'program-detail-speak': 1,
        'program-detail-pivot': 1,
        'audiowaves-screen': 2,
        'community-screen': 3,
        'profile-screen': 4
    };

    if (navMap[screenId] !== undefined) {
        document.querySelectorAll('.nav-item')[navMap[screenId]].classList.add('active');
    }

    currentScreen = screenId;
    window.scrollTo(0, 0);
}

function playAudio(title, subtitle) {
    document.getElementById('player-title').textContent = title;
    document.getElementById('player-subtitle').textContent = subtitle;
    document.getElementById('floating-player').style.display = 'flex';
    isPlaying = true;
    updatePlayIcon();
}

function closePlayer() {
    document.getElementById('floating-player').style.display = 'none';
    isPlaying = false;
}

function togglePlay() {
    isPlaying = !isPlaying;
    updatePlayIcon();
}

function updatePlayIcon() {
    const icon = document.getElementById('play-icon');
    if (isPlaying) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function playVideo() {
    alert('Video player would open here with:\n• Speed controls (0.75x - 1.5x)\n• Quality selector (480p/720p)\n• Subtitles toggle\n• Background audio mode');
}

// Category pills toggle
document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', function () {
        this.parentElement.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
    });
});

// Timer buttons toggle
document.querySelectorAll('.timer-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.querySelectorAll('.timer-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});
