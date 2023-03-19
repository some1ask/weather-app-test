<template>
    <div id="header">
        <img src="../assets/img/logo.png" alt="Logo" class="logo">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/favorites">Favorites</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
};
</script>

<style scoped>
.logo{
  width: 100px;
}
</style>
