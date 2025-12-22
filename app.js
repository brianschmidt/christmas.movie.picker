// Christmas Movies Database
const christmasMovies = [
    {
        id: 1,
        title: "Home Alone",
        year: 1990,
        poster: "https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
    },
    {
        id: 2,
        title: "Elf",
        year: 2003,
        poster: "https://image.tmdb.org/t/p/w500/oOleziEempUPu96jkGs0Pj6tKxj.jpg"
    },
    {
        id: 3,
        title: "The Polar Express",
        year: 2004,
        poster: "https://image.tmdb.org/t/p/w500/iNBs6xGJVgwazZeqWUhdCyKR7EL.jpg"
    },
    {
        id: 4,
        title: "A Christmas Story",
        year: 1983,
        poster: "https://image.tmdb.org/t/p/w500/qTfE33WUUD7IaM9EFVvbTvlYoyU.jpg"
    },
    {
        id: 5,
        title: "National Lampoon's Christmas Vacation",
        year: 1989,
        poster: "https://image.tmdb.org/t/p/w500/hZn69mqYDqYzg3X2oza3bKEYsAA.jpg"
    },
    {
        id: 6,
        title: "It's a Wonderful Life",
        year: 1946,
        poster: "https://image.tmdb.org/t/p/w500/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg"
    },
    {
        id: 7,
        title: "The Grinch",
        year: 2000,
        poster: "https://image.tmdb.org/t/p/w500/5Fh1YpQVPNboJASOYlPLOqpMcCi.jpg"
    },
    {
        id: 8,
        title: "A Christmas Carol",
        year: 2009,
        poster: "https://image.tmdb.org/t/p/w500/yx3EMoxrBgqJoYIbymqFVekJrqx.jpg"
    },
    {
        id: 9,
        title: "The Santa Clause",
        year: 1994,
        poster: "https://image.tmdb.org/t/p/w500/xBP5ZjAdxo3dNZv5APfwdgEYuid.jpg"
    },
    {
        id: 10,
        title: "Die Hard",
        year: 1988,
        poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg"
    },
    {
        id: 11,
        title: "Love Actually",
        year: 2003,
        poster: "https://image.tmdb.org/t/p/w500/5tABfNnUR32hBDKnkCH5LCKlJRD.jpg"
    },
    {
        id: 12,
        title: "The Nightmare Before Christmas",
        year: 1993,
        poster: "https://image.tmdb.org/t/p/w500/oQffRNjK8e19rF7xVYEN8ew0j7b.jpg"
    },
    {
        id: 13,
        title: "Home Alone 2: Lost in New York",
        year: 1992,
        poster: "https://image.tmdb.org/t/p/w500/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg"
    },
    {
        id: 14,
        title: "Miracle on 34th Street",
        year: 1994,
        poster: "https://image.tmdb.org/t/p/w500/qGGUmLjnYfJHIOs7kBbHZPujcos.jpg"
    },
    {
        id: 15,
        title: "The Holiday",
        year: 2006,
        poster: "https://image.tmdb.org/t/p/w500/6loGhnozT5dJeKgOG3i6dEQPRYO.jpg"
    },
    {
        id: 16,
        title: "Jingle All the Way",
        year: 1996,
        poster: "https://image.tmdb.org/t/p/w500/eiZ2OjwHKHMXx1P4iagPp01qclQ.jpg"
    },
    {
        id: 17,
        title: "Fred Claus",
        year: 2007,
        poster: "https://image.tmdb.org/t/p/w500/j2qvFLgdLnnNMBlEmKIjQrl9rik.jpg"
    },
    {
        id: 18,
        title: "The Muppet Christmas Carol",
        year: 1992,
        poster: "https://image.tmdb.org/t/p/w500/2LTigUOuLQeLKiPMDuSvEMpIoWD.jpg"
    },
    {
        id: 19,
        title: "Scrooged",
        year: 1988,
        poster: "https://image.tmdb.org/t/p/w500/zVqwFh4vyKMQBKMjcrNmIFWXhv.jpg"
    },
    {
        id: 20,
        title: "Klaus",
        year: 2019,
        poster: "https://image.tmdb.org/t/p/w500/q125RHUDgR4gjwh1QkfYuJLYkL.jpg"
    }
];

// Local Storage Keys
const STORAGE_KEY = 'christmasMoviePicker_watched';

// DOM Elements
const movieDisplay = document.getElementById('movie-display');
const pickBtn = document.getElementById('pick-btn');
const watchedBtn = document.getElementById('watched-btn');
const resetBtn = document.getElementById('reset-btn');
const statusEl = document.getElementById('status');
const moviesRemainingEl = document.getElementById('movies-remaining');

// State
let currentMovie = null;

// Get watched movies from localStorage
function getWatchedMovies() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Save watched movies to localStorage
function saveWatchedMovies(watched) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watched));
}

// Get unwatched movies
function getUnwatchedMovies() {
    const watched = getWatchedMovies();
    return christmasMovies.filter(movie => !watched.includes(movie.id));
}

// Update movies remaining display
function updateMoviesRemaining() {
    const unwatched = getUnwatchedMovies();
    const total = christmasMovies.length;
    const remaining = unwatched.length;
    moviesRemainingEl.textContent = `🎬 ${remaining} of ${total} movies remaining`;
}

// Pick a random movie
function pickRandomMovie() {
    const unwatched = getUnwatchedMovies();

    if (unwatched.length === 0) {
        showAllWatchedMessage();
        return;
    }

    // Add revealing animation
    movieDisplay.classList.add('revealing');

    // Generate random number
    const randomIndex = Math.floor(Math.random() * unwatched.length);
    currentMovie = unwatched[randomIndex];

    // Display after animation
    setTimeout(() => {
        movieDisplay.classList.remove('revealing');
        displayMovie(currentMovie);
    }, 500);
}

// Display a movie
function displayMovie(movie) {
    movieDisplay.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title} poster" class="movie-poster"
             onerror="this.src='https://via.placeholder.com/300x450?text=No+Poster'">
        <h2 class="movie-title">${movie.title}</h2>
        <p class="movie-year">(${movie.year})</p>
    `;

    watchedBtn.style.display = 'inline-block';
    statusEl.textContent = '';
    updateMoviesRemaining();
}

// Mark current movie as watched
function markAsWatched() {
    if (!currentMovie) return;

    const watched = getWatchedMovies();
    if (!watched.includes(currentMovie.id)) {
        watched.push(currentMovie.id);
        saveWatchedMovies(watched);
    }

    statusEl.textContent = `✓ "${currentMovie.title}" marked as watched!`;
    statusEl.className = 'status success';
    watchedBtn.style.display = 'none';
    currentMovie = null;

    updateMoviesRemaining();

    // Check if all movies watched
    if (getUnwatchedMovies().length === 0) {
        setTimeout(showAllWatchedMessage, 1500);
    }
}

// Show all watched message
function showAllWatchedMessage() {
    movieDisplay.innerHTML = `
        <div class="all-watched">
            <div class="celebration">🎉🎄🎅</div>
            <h2>You've watched them all!</h2>
            <p>Congratulations! You're a true Christmas movie champion!</p>
            <p style="margin-top: 1rem;">Click "Reset Watch History" to start fresh.</p>
        </div>
    `;
    watchedBtn.style.display = 'none';
    statusEl.textContent = '';
}

// Reset watch history
function resetWatchHistory() {
    if (confirm('Are you sure you want to reset your watch history? This will mark all movies as unwatched.')) {
        localStorage.removeItem(STORAGE_KEY);
        currentMovie = null;
        watchedBtn.style.display = 'none';

        movieDisplay.innerHTML = `
            <div class="placeholder">
                <span class="gift-icon">🎁</span>
                <p>Click the button to unwrap your movie!</p>
            </div>
        `;

        statusEl.textContent = 'Watch history cleared! Ready for a fresh start.';
        statusEl.className = 'status info';

        updateMoviesRemaining();
    }
}

// Event Listeners
pickBtn.addEventListener('click', pickRandomMovie);
watchedBtn.addEventListener('click', markAsWatched);
resetBtn.addEventListener('click', resetWatchHistory);

// Initialize
updateMoviesRemaining();
