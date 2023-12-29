import createContactPage from "./contact";
import createMenuPage from "./main-menu";
import createRestaurantHomepage from "./restaurantPage";

const createTabs = () => {
    const content = document.querySelector("#content");

    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')

    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click', () => {
        clearContent()
        createRestaurantHomepage();
    })

    div2.addEventListener('click', () => {
        clearContent()
        createMenuPage();
    })

    div3.addEventListener('click', () => {
        clearContent()
        createContactPage();
    })

    function clearContent() {
        const content = document.querySelector("#content");
        const pageContent = document.querySelector(".page-content")

        if(pageContent){
            content.removeChild(pageContent);
        }
    }
}


export default createTabs