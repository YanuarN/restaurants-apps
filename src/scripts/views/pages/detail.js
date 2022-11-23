import RestaurantDbSource from '../../data/Restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async  render() {
    return `
      <main id="main" tabindex="0">
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      </main>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

  //   LikeButtonInitiator.init({
  //     likeButtonContainer: document.querySelector('#likeButtonContainer'),
  //     favoriteRestaurants: FavoriteRestoIdb,
  //     restaurant: {
  //       id: restaurant.restaurant.id,
  //       name: restaurant.restaurant.name,
  //       city: restaurant.restaurant.city,
  //       pictureId: restaurant.restaurant.pictureId,
  //       rating: restaurant.restaurant.rating,
  //     },
  //   });
  // },
  },
};

export default Detail;
