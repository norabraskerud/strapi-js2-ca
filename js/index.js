import { baseUrl } from "./api/api.js";
import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";

const productsUrl = baseUrl + "/articles";

createMenu();

(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const url = await response.json();
        console.log(url);

        container.innerHTML = "";

        url.forEach(function (product) {
            container.innerHTML += `<a class="product" href="detail.html?id=${product.id}">
                                        <h4>${product.title}</h4>
                                        <p>Author: ${product.author}</p>
                                        <p>Summary:${product.summary}</p>
                                        <i class="fa-regular fa-heart"></i>
                                    </a>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();


const favButtons = document.querySelectorAll(".list i");

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
console.log(handleClick)
}