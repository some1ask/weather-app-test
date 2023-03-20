<!-- eslint-disable max-len -->
<template>
<div class="weather-container">
  <div class="weather-card">
    <h2>Погода в {{ item.weatherData?.name }}</h2>
    <div class="weather-info">
      <div class="weather-icon">
        <img :src="iconPath" alt="WeatherIcon">
      </div>
      <div class="weather-data">
        <p class="weather-temperature">{{item.weatherData.main?.temp}}°C</p>
        <p class="weather-description">{{this.description}}</p>
        <p class="weather-location">Wind: {{ item.weatherData.wind?.speed }} m/s</p>
      </div>
    </div>
    <Graph :graphId="item.id" :graphInfo="item.fiveDaysData.list"/>
    <div class="weather-controls">
      <button class="weather-controls-delete" v-show="item.isFavorite" @click="isPopupOpen = true">Delete</button>
      <Popup :isDeletePopup="true" :text="'Delete?'" @deleteItem="deleteItem(item.id)" v-if="isPopupOpen" @close="isPopupOpen = false"/>
      <button class="weather-controls-favorites" :class="{'added':item.isFavorite}" @click="addToFavorites(item.id)">Favorites</button>
    </div>
  </div>
</div>
</template>

<script>
import Graph from './Graph.vue';
import Popup from './Popup.vue';

export default {
  name: 'WeatherInfo',
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  components: {
    Graph,
    Popup,
  },
  watch: {
    item: {
      immediate: false,
      deep: true,
      handler(newVal, oldVal) {
        console.log(oldVal, 'oldval');
        if (oldVal === undefined) {
          this.iconPath = '../assets/img/missing.png';
          this.description = '';
          console.log(this.iconPath);
        }
        this.iconPath = `https://openweathermap.org/img/wn/${this.item.weatherData.weather[0]?.icon}@2x.png`;
        this.description = `${this.item.weatherData.weather[0].description}`;
        return true;
      },
    },
  },
  mounted() {
  },
  computed: {
  },
  data() {
    return {
      isPopupOpen: false,
      iconPath: '',
      description: '',
    };
  },
  methods: {
    deleteItem(id) {
      console.log('i wanna delete', id);
      this.$emit('deleteItem', id);
    },
    addToFavorites(id) {
      this.$emit('addToFavorites', id);
    },
  },
};
</script>

<style scoped lang="scss">
.weather{
  &-container{
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    gap:10px;

  }
  &-card {
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    text-align: left;
    max-width:550px;
    min-width:350px;
  h2 {
    margin-top: 0;
  }
}
  &-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
  }
  &-icon {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    background-color: rgb(100, 138, 251);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
  }
  &-data {
  text-align: left;
  }
  &-temperature {
    font-size: 40px;
    font-weight: bold;
    margin: 0;
  }
  &-description {
    font-size: 20px;
    margin: 5px 0;
  }
  &-location {
    font-size: 16px;
    margin: 0;
  }
  &-controls{
    display: flex;
    margin-top:20px;
    justify-content: space-between;
    &-delete{
      display: inline-block;
      background-color: #e74c3c;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover{
        background-color: #c0392b;
      }
      &:active{
        background-color: #d35400;
      }
    }
    &-favorites{
      display: inline-block;
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover{
        background-color: #2980b9;
      }
      &.added{
        background-color: #f1c40f;
        pointer-events:none;
        &:hover{
          background-color: #f39c12;
        }
        &.active{
          background-color: #e67e22;
        }
      }
    }
  }
}

</style>
