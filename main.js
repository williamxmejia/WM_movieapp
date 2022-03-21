function getMovies() {
    fetch("https://yellow-silky-petroleum.glitch.me/movies").then(resp => resp.json()).then(data => {
            const movies = document.getElementById('movies-text');
            for (let i = 0; i < data.length; i++) {
                let title = data[i].title;
                let year =  data[i].year;
                let rating = data[i].rating;
                let actors = data[i].actors;
                let image = data[i].poster;
                movies.innerHTML =
                    `<div className="card" style="width: 18rem;" id="movies-text">
    <img src=${image} alt="...">
        <div className="card-body">
            <h5 className="card-title"> ${title}</h5>
            <p className="card-text">${year}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">${rating}/5</li>
            <li className="list-group-item">${actors}</li>
            <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
                </div>`

            }
        }
    )

}

// function getTitle(){
//     fetch("https://yellow-silky-petroleum.glitch.me/movies").then(resp => resp.json()).then(data => data[0].title);
// }

console.log(getMovies())
getMovies()


const moviesURL = "https://yellow-silky-petroleum.glitch.me/movies";

console.log(moviesURL);

// let movie = getMovies()

// console.log(movie.title)

// const movies = document.getElementById('movies-text');
//
// movies.innerHTML =
//     `<div className="card" style="width: 18rem;" id="movies-text">
//     <img src="https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00…QtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg" className="card-img-top" alt="...">
//         <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
//                 card's content.</p>
//         </div>
//         <ul className="list-group list-group-flush">
//             <li className="list-group-item">An item</li>
//             <li className="list-group-item">A second item</li>
//             <li className="list-group-item">A third item</li>
//         </ul>
//         <div className="card-body">
//             <a href="#" className="card-link">Card link</a>
//             <a href="#" className="card-link">Another link</a>
//         </div>
// </div>`

// function moviesText() {
//
// }
//
// moviesText()