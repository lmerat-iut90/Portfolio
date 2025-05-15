
<template>
    <div id="app">
        <NavBar />
        <router-view></router-view>
        <FooterVue/>
    </div>
</template>

<script>


import NavBar from "@/components/NavBar.vue";
import FooterVue from "@/components/FooterVue.vue";

export default {
  name: 'App',
  components: {
      FooterVue,
      NavBar
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
