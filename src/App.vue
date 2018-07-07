<template>
  <div id="app">
    <header-part />
    <!-- <img src="./assets/logo.svg" width="200"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <main>
      <LandingPage />
    </main>
    <footer-part />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import LandingPage from './components/LandingPage.vue';
import HeaderPart from './components/childcomponents/HeaderPart.vue';
import FooterPart from './components/childcomponents/FooterPart.vue';
import SelectedCountry from './components/childcomponents/SelectedCountry.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    HeaderPart,
    FooterPart,
    LandingPage,
    SelectedCountry,
  },
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Overpass:100,300,400');
@import '../src/assets/styles/style.scss'
</style>
