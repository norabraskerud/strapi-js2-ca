import { renderList } from "./renderList.js";

export function searchList(lists) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        // console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredLists = lists.filter(function (list) {
            if (list.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        console.log(filteredLists)

        renderList(filteredLists);
    };
}



