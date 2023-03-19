<!-- eslint-disable max-len -->
<template>
  <div>
    <div v-for="item in cities" :key="item.id">
      <SearchBar :cityId="item.id" @onClickedCity="searchCity" v-if="!item.isSearched"/>

      <WeatherInfo v-if="item.isSearched" :cardId="item.id" :weatherData="item.weatherData" @deleteItem="deleteCard"/>
    </div>
    <button @click="addCity">Add</button>
  </div>

</template>

<script>
import WeatherInfo from '../components/WeatherInfo.vue';
import SearchBar from '../components/SearchBar.vue';
import API_KEY from '../config';

export default {
  name: 'HomeView',
  components: {
    WeatherInfo,
    SearchBar,
  },
  mounted() {

  },
  data() {
    return {
      currentIndex: 0,
      cities: [{
        id: 0,
        isSearched: false,
        weatherData: {},
      }],
    };
  },
  methods: {
    addCity() {
      this.cities.push({ id: this.cities.length, weatherData: {}, isSearched: false });
    },
    deleteCard(value) {
      console.log(value);
      this.cities.splice(value, 1);
    },
    searchCity(city) {
      const [lat, lon, id] = city;
      console.log(id);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(2)}&lon=${lon.toFixed(2)}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          this.cities[id].weatherData = data;
          console.log(this.cities[id]);
        });
      this.cities[id].isSearched = true;
    },
  },
};
</script>

<style>

</style>
