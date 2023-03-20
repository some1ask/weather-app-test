<!-- eslint-disable max-len -->
<template>
  <div>
    <div v-for="item in cities" :key="item.id">
      <SearchBar :cityId="item.id" @onClickedCity="searchCity" v-if="!item.isSearched"/>

      <WeatherInfo v-if="item.isSearched" :cardId="item.id" :graphData="item.fiveDaysData.list" :weatherData="item.weatherData" @deleteItem="deleteCard"/>
    </div>
    <div class="button-wrapper">
      <button class="button-add" @click="addCard">Add</button>
    </div>
    <Popup :text="'Please delete some element'" v-if="isPopupOpen" @closePopup="isPopupOpen = false"/>
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
        id: this.cities.length, weatherData: {}, fiveDaysData: {}, isSearched: false,
      });
      return true;
    },
    deleteCard(value) {
      this.cities.splice(value, 1);
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
