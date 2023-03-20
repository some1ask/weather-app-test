<!-- eslint-disable no-multi-assign -->
<!-- eslint-disable max-len -->
<template>
  <div>
    <div v-for="item in cities" :key="item.id">
      <SearchBar :cityId="item.id" @onClickedCity="searchCity" v-if="!item.isSearched"/>

      <WeatherInfo v-if="item.isSearched" :item="item" @deleteItem="deleteCard" @addToFavorites="addToFavorites"/>
    </div>
    <div class="button-wrapper">
      <button class="button-add" @click="addCard">Add</button>
    </div>
    <Popup :isDeletePopup="false" :text="'Please delete some element'" v-if="isPopupOpen"  @close="isPopupOpen = false"/>
  </div>

</template>

<script>
import WeatherInfo from '../components/WeatherInfo.vue';
import SearchBar from '../components/SearchBar.vue';
import Popup from '../components/Popup.vue';
import API_KEY from '../config';

export default {
  name: 'HomeView',
  components: {
    WeatherInfo,
    SearchBar,
    Popup,
  },
  mounted() {
    // this.cities.forEach((elem) => { elem.isSearched = false; });
  },
  watch: {
  },
  data() {
    return {
      isPopupOpen: false,
      cities: [{
        id: 0,
        isSearched: false,
        isFavorite: false,
        weatherData: {},
        fiveDaysData: {},
      }],
    };
  },
  methods: {
    addCard() {
      if (this.cities.length === 5) {
        this.isPopupOpen = true;
        return false;
      }
      this.cities.push({
        // eslint-disable-next-line max-len
        id: this.cities.length, weatherData: {}, fiveDaysData: {}, isFavorite: false, isSearched: false,
      });
      return true;
    },
    deleteCard(value) {
      // let favorites = [];
      this.cities = this.cities.filter((item) => item.id !== value);
      // if (localStorage.getItem('favorites')) {
      //   favorites = JSON.parse(localStorage.getItem('favorites'));
      //   favorites = [...this.cities];
      //   localStorage.setItem('favorites', JSON.stringify(favorites));
      // }
    },
    addToFavorites(value) {
      let favorites = [];
      const favorite = this.cities.find((elem) => elem.id === value);
      console.log(favorite, 'favorite');
      favorite.isFavorite = true;
      console.log(localStorage.getItem('favorites'));
      if (localStorage.getItem('favorites') !== null) {
        favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites.push(favorite);
        console.log(favorites, 'fromLocal');
      } else {
        favorites.push(favorite);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        console.log(favorites, 'pushed');
      }
    },
    searchCity(city) {
      const [lat, lon, id] = city;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          this.cities[id].weatherData = data;
          return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        })
        .then((response) => response.json())
        .then((data) => {
          this.cities[id].fiveDaysData = data;
        });
      this.cities[id].isSearched = true;
    },
  },
};
</script>

<style scoped lang="scss">
 .button{
  &-add{
    display: inline-block;
    background-color: #2ecc71;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #27ae60;
    }

    &:active {
      background-color: #1d8348;
    }
    }
 }
</style>
