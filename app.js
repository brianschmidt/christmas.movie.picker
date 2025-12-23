// Christmas Movies Database
// Using IMDb/Amazon direct poster image URLs
const christmasMovies = [
    {
        id: 1,
        title: "Home Alone",
        year: 1990,
        poster: "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        id: 2,
        title: "Elf",
        year: 2003,
        poster: "https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        id: 3,
        title: "The Polar Express",
        year: 2004,
        poster: "https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_.jpg"
    },
    {
        id: 4,
        title: "A Christmas Story",
        year: 1983,
        poster: "https://m.media-amazon.com/images/M/MV5BNTgzODczMzM2OF5BMl5BanBnXkFtZTgwNjgzMjEyMDE@._V1_.jpg"
    },
    {
        id: 5,
        title: "National Lampoon's Christmas Vacation",
        year: 1989,
        poster: "https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODgwLTkxNDYtYzQ3ZjNhNjkwODMwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        id: 6,
        title: "It's a Wonderful Life",
        year: 1946,
        poster: "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_.jpg"
    },
    {
        id: 7,
        title: "How the Grinch Stole Christmas",
        year: 2000,
        poster: "https://m.media-amazon.com/images/M/MV5BNWNiNTczNzEtMjQyZC00MjFmLTkzMDMtODk4ZGMyZmE0N2E4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        id: 8,
        title: "A Christmas Carol",
        year: 2009,
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0MjE0MzMzNV5BMl5BanBnXkFtZTcwNjcyMzMzMg@@._V1_.jpg"
    },
    {
        id: 9,
        title: "The Santa Clause",
        year: 1994,
        poster: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        id: 10,
        title: "Die Hard",
        year: 1988,
        poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        id: 11,
        title: "Love Actually",
        year: 2003,
        poster: "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg"
    },
    {
        id: 12,
        title: "The Nightmare Before Christmas",
        year: 1993,
        poster: "https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_.jpg"
    },
    {
        id: 13,
        title: "Home Alone 2: Lost in New York",
        year: 1992,
        poster: "https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        id: 14,
        title: "Miracle on 34th Street",
        year: 1947,
        poster: "https://m.media-amazon.com/images/M/MV5BNGM2NjQxNDktMWY0OS00YmZkLWEzMmYtMGYzOTE3YjM1YjI5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
    },
    {
        id: 15,
        title: "The Holiday",
        year: 2006,
        poster: "https://m.media-amazon.com/images/M/MV5BMTUyNTE3MDM1NF5BMl5BanBnXkFtZTcwMDA4Mzc1NA@@._V1_.jpg"
    },
    {
        id: 16,
        title: "Jingle All the Way",
        year: 1996,
        poster: "https://m.media-amazon.com/images/M/MV5BMjExNTY5OTg3NV5BMl5BanBnXkFtZTcwNDI3MjA1MQ@@._V1_.jpg"
    },
    {
        id: 17,
        title: "Fred Claus",
        year: 2007,
        poster: "https://m.media-amazon.com/images/M/MV5BMTcyODQzNDc1MV5BMl5BanBnXkFtZTcwODc0OTcyMw@@._V1_.jpg"
    },
    {
        id: 18,
        title: "The Muppet Christmas Carol",
        year: 1992,
        poster: "https://m.media-amazon.com/images/M/MV5BMTQwODg0NDYtYjg4ZS00YTJhLWI5NDgtMjkzNTQ0MTQ3ODNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        id: 19,
        title: "Scrooged",
        year: 1988,
        poster: "https://m.media-amazon.com/images/M/MV5BYjA0NDMyYTgtMDgxOC00NGVlLTllMzMtZGY0NDg5YjFiMWM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        id: 20,
        title: "Klaus",
        year: 2019,
        poster: "https://m.media-amazon.com/images/M/MV5BMTkwOTc1NTk0NF5BMl5BanBnXkFtZTgwODY0Mzg4NzM@._V1_.jpg"
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
