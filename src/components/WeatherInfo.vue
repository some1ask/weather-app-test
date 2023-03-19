<template>
<div class="weather-container">
  <div class="weather-card">
    <h2>Погода в {{ weatherData?.name }}</h2>
    <div class="weather-info">
      <div class="weather-icon">
        <img :src="iconPath" alt="WeatherIcon">
      </div>
      <div class="weather-data">
        <p class="weather-temperature">--°C</p>
        <p class="weather-description">--</p>
        <p class="weather-location">--</p>
      </div>
    </div>
    <button @click="deleteItem(cardId)">Delete</button>
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
    justify-content: center;
    flex-direction:column;
    gap:10px;
  }
  &-card {
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
  h2 {
    margin-top: 0;
  }
}
&-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

&-icon {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  background-color: rgb(125, 243, 208);
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
}

</style>
