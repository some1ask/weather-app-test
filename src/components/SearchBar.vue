<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div id="searchBar" class="search-bar">
    <input type="text" name="search" class="search-input" id="search" @input="debounceSearch">
    <div class="search-list-container" v-show="isOpen">
      <ul  class="search-list">
        <li v-for="(city, i) in cities"
          :key="i"
          v-on:click="selectCity(city)"
          @keyup.enter="selectCity"
          >
    {{ city.name }}, {{ city.country }} <span v-if="city.state">, {{ city.state }}</span>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import API_KEY from '../config';

export default {
  name: 'SearchBar',
  data() {
    return {
      cities: null,
      search: '',
      isOpen: false,
    };
  },
  props: {
    cityId: {
      type: Number,
      default: 0,
    },
  },
  created() {
  },
  methods: {
    debounceSearch: _.debounce(function (e) {
      this.search = e.target.value;
      this.isOpen = true;
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.search}&limit=5&appid=${API_KEY}`)
        .then((response) => response.json())
        // eslint-disable-next-line no-return-assign
        .then((data) => {
          if (data.cod === '400') {
            this.isOpen = false;
          } else {
            this.cities = data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
    selectCity(value) {
      this.isOpen = false;
      this.$emit('onClickedCity', [value.lat, value.lon, this.cityId]);
    },
  },
};
</script>

<style scoped lang="scss">
.search{
  &-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    position:relative;
    margin:20px 0px;
  }
  &-input{
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 450px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
    &:focus {
      border-color: #007aff;
    }
  }
  &-list-container{
    width: 450px;
    position: absolute;
    z-index: 1;
    top: 100%;
    background: aliceblue;

  }
  &-list{
    text-align:left;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      padding: 8px 16px;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
      &:last-child{
        border-bottom:none;
      }
    }
  }
}
</style>
