export default function createMenu() {

    const container = document.querySelector(".menu-container");

    container.innerHTML = `<div class="menu">
                            <a href="index.html">Home</a>
                            <a href="favourites.html">Favourites</a>
                            <a href="login.html">Log in</a>
                            </div>`;

}