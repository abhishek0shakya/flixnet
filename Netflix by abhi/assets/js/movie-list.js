'user strict';

import { api_key, fetchDataFromServer } from "./api.js";
import { sidebar } from "./sidebar.js";
import { createMovieCard } from "./movie-card.js";
import { search } from "./search.js";


// collectc genre name & url parameter from local storage
const genreName = window.localStorage.getItem("genreName");
const urlParam = window.localStorage.getItem("urlParam");

const pageContent = document.querySelector("[page-content]");

// use sidebar
sidebar();


let currentPage = 1;
let totalPages = 0;


fetchDataFromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&page=${currentPage}&${urlParam}`, function({ results: movieList, total_pages }) {

    totalPages = total_pages;

    document.title = `${genreName} Movies - Flixnet`;


    const movieListElem = document.createElement("section");
    movieListElem.classList.add("movie-list", "genre-list");
    movieListElem.ariaLabel = `${genreName} Movies`;

    movieListElem.innerHTML = `
    <div class="title-wrapper">
        <h1 class="heading">All ${genreName} Movies</h1>
    </div>

    <div class="grid-list"></div>

    <button class="btn load-more" load-more>Load More</button>
    `;

 
    // add movie card based on fetched item 
    for(const movie of movieList) {
        const movieCard = createMovieCard(movie);

        movieListElem.querySelector(".grid-list").appendChild(movieCard);
    }

    pageContent.appendChild(movieListElem);


    // load more button functionalitiy
    document.querySelector("[load-more]").addEventListener("click", function() {

        if(currentPage >= totalPages) {
            this.style.display = "none"; // hide the button if there are no more pages
            return;
        }

        currentPage++;
        this.classList.add("loading"); // add a loading class to the button while fetching data

        fetchDataFromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&page=${currentPage}&${urlParam}`, ({ results: movieList }) => {

            for(const movie of movieList) {
                const movieCard = createMovieCard(movie);

                movieListElem.querySelector(".grid-list").appendChild(movieCard);
            }

            this.classList.remove("loading"); // remove loading class after fetching and appending data

        });

    });

});

// use search model
search();