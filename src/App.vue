<template>
  <div id="app">
    <!-- <Header />でHeader.vueを表示 -->
    <Header />
    <img alt="Vue logo" src="./assets/logo.png" />


    <h1>見出し</h1>

  
    <router-view />

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <Footer />でHeader.vueを表示 -->
    <Footer />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/modules/Header";
import Footer from "./components/modules/Footer"; // add
// add Footer
export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    Footer
  },
  methods: {
    about(){
      this.$router.push('/pages/about')
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>