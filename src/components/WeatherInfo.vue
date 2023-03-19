<template>
<div class="weather-container">
  <div class="weather-card">
    <h2>Погода в {{ weatherData?.name }}</h2>
    <div class="weather-info">
      <div class="weather-icon">
        <img :src="iconPath" alt="WeatherIcon">
      </div>
      <div class="weather-data">
        <p class="weather-temperature">{{weatherData.main?.temp}}°C</p>
        <p class="weather-description">{{weatherData.weather[0].description}}</p>
        <p class="weather-location">Wind: {{ weatherData.wind?.speed }} m/s</p>
      </div>
    </div>
    <div class="weather-controls">
      <button class="weather-controls-delete" @click="deleteItem(cardId)">Delete</button>
      <button class="weather-controls-favorites" @click="deleteItem(cardId)">Favorites</button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'WeatherInfo',
  props: {
    weatherData: {
      type: Object,
      default: () => {},
    },
    cardId: {
      type: Number,
      default: 0,
    },
  },
  components: {
  },
  watch: {
    weatherData: {
      immediate: false,
      handler(newVal, oldVal) {
        console.log(oldVal, 'oldval');
        if (newVal) {
          this.iconPath = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
          console.log(this.iconPath);
        }
      },
    },
  },
  mounted() {
    console.log(this.weatherData);
  },
  computed: {
  },
  data() {
    return {
      isSearched: false,
      cityInfo: null,
      iconPath: '../assets/img/missing.png',
    };
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
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
