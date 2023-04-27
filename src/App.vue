<template>
  <div id="app">
    <Header />
    <router-view>
    </router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
body{
  background: url('./assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;

}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
