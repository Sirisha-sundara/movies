
const form = document.querySelector('form');
const container = document.querySelector('.image-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let query = form.querySelector('input').value.trim();
    query = query === '' ? 'spiderman' : query; 
    console.log(query);

    await tvmazeAPI(query);
});

const defaultQuery = 'spiderman';
tvmazeAPI(defaultQuery);

async function tvmazeAPI(query) {
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await req.json();
    makeImages(movies);
}

function makeImages(movies) {
    container.innerHTML = '';
    for (let movie of movies) {
        const movieContainerDiv = document.createElement('div');
        movieContainerDiv.classList.add('image-container');

        const img = document.createElement('img');
        img.src = movie.show.image ? movie.show.image.medium : 'https://via.placeholder.com/150';

        const movieLink = document.createElement('a');
        movieLink.href = movie.show.url;
        movieLink.textContent = "Watch this movie";

        movieContainerDiv.appendChild(img);
        movieContainerDiv.appendChild(movieLink);
        
        container.appendChild(movieContainerDiv);
    }
}}
