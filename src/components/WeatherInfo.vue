<template>
<div class="weather-container">
  <div class="weather-card">
    <h2>Погода</h2>
    <div class="weather-info">
      <div class="weather-icon">
        <!-- Иконка погоды -->
      </div>
      <div class="weather-data">
        <p class="weather-temperature">--°C</p>
        <p class="weather-description">--</p>
        <p class="weather-location">--</p>
      </div>
    </div>
  </div>
  <div class="weather-card">
    <h2>Погода</h2>
    <div class="weather-info">
      <div class="weather-icon">
        <!-- Иконка погоды -->
      </div>
      <div class="weather-data">
        <p class="weather-temperature">--°C</p>
        <p class="weather-description">--</p>
        <p class="weather-location">--</p>
      </div>
    </div>
  </div>
  <div class="weather-card">
    <h2>Погода</h2>
    <div class="weather-info">
      <div class="weather-icon">
        <!-- Иконка погоды -->
      </div>
      <div class="weather-data">
        <p class="weather-temperature">--°C</p>
        <p class="weather-description">--</p>
        <p class="weather-location">--</p>
      </div>
    </div>
  </div>
  <div class="weather-card">
    <h2>Погода</h2>
    <div class="weather-info">
      <div class="weather-icon">
        <!-- Иконка погоды -->
      </div>
      <div class="weather-data">
        <p class="weather-temperature">--°C</p>
        <p class="weather-description">--</p>
        <p class="weather-location">--</p>
      </div>
    </div>
  </div>
  <div class="weather-card">
    <h2>Погода</h2>
    <div class="weather-info">
      <div class="weather-icon">
        <!-- Иконка погоды -->
      </div>
      <div class="weather-data">
        <p class="weather-temperature">--°C</p>
        <p class="weather-description">--</p>
        <p class="weather-location">--</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WeatherInfo',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.weather{
  &-container{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  &-card {
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
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
  background-color: #f0f0f0;
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
