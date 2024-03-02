const form = document.querySelector('form');
const container = document.querySelector('.image-container');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const query = form.querySelector('input').value;
    console.log(query);


    tvmazeAPI(query);
})

async function tvmazeAPI(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`); 
    const movies = await req.json();

    makeImages(movies);
}

function makeImages(movies){
    console.log(movies);
    container.innerHTML = '';
    for(let movie of movies){
        const img = document.createElement('img');
        img.src = movie.show.image ? movie.show.image.medium : 'https://via.placeholder.com/150'; 


        container.appendChild(img);
    }
}
