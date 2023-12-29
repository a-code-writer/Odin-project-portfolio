import createRestaurantHomepage from './restaurantPage'
import createTabs from './tabs';


function initialLoad(){
    createTabs();
    createRestaurantHomepage();
}

export default initialLoad;