/* eslint-disable no-shadow */
import RestaurantDbSource from '../../data/Restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
  <main id="main" tabindex="0">
    <section class="content">
      <h2 class="list-restaurant__label">
        Explore Restaurant
        <hr>
      </h2>
      <div class="list-restaurant"></div>
    </section>
`;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restaurant');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
export default Home;
