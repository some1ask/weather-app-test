<!-- eslint-disable max-len -->
<!--eslint-disable-next-line max-len-->
<template>
  <div id="">Favorites
    <div v-for="item in cities" :key="item.id">

      <WeatherInfo v-if="item.isSearched" :item="item" @deleteItem="deleteCard"/>
    </div>
  </div>
</template>

<script>
import WeatherInfo from '../components/WeatherInfo.vue';

export default {
  name: 'FavoritesView',
  components: {
    WeatherInfo,
  },
  data() {
    return {
      cities: [],

    };
  },
  methods: {
    deleteCard(value) {
      // let favorites = [];
      this.cities = this.cities.filter((item) => item.id !== value);
      // if (localStorage.getItem('favorites')) {
      //   favorites = JSON.parse(localStorage.getItem('favorites'));
      //   favorites = [...this.cities];
      //   localStorage.setItem('favorites', JSON.stringify(favorites));
      // }
    },
  },
  mounted() {
    if (localStorage.getItem('favorites') !== null) {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      console.log(favorites, 'from Favorites');
      this.cities = favorites;
    }
  },
};
</script>

<style>

</style>
