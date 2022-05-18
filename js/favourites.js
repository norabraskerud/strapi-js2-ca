import { getExistingFavs } from "./favFunctions.js";

const favourites = getExistingFavs();

const productContainer = document.querySelector(".list-container");

if (favourites.length === 0) {
    productContainer.innerHTML = "No favourites yet";
}

favourites.forEach((favourite) => {
    productContainer.innerHTML += `<div class="list">
                                    <h4>${favourite.title}</h4>
                                    <i class="fa-regular fa-heart"></i>
                                </div>`;
});