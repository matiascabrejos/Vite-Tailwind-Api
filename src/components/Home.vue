<template>
<div class="hero min-h-screen" style="background-image: url(&quot;https://copper2.wpengine.com/wp-content/uploads/2021/03/top-10-tokens-01.jpg&quot;);">
  <div class="hero-overlay bg-opacity-60"></div> 
  <div class="text-center hero-content text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold text-accent">
            Crypto
          </h1> 
      <p class="mb-5 font-bold text-accent">
            Stay tuned with the latest data about cryptocurrencies in our two formats: Table view or Panel view.
          </p> 
      <router-link to="/table" class="btn btn-primary" @click="test">TABLE VIEW</router-link>
      <router-link to="/panel" class="btn btn-primary">PANEL VIEW</router-link>   
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:['cryptos', 'filteredCryptos'],
  methods: {
    test() {
      console.log(this.cryptos);
      console.log(this.filteredCryptos);
    }
  }
}
</script>


<style scoped>
.btn {
    margin-right: 20px;
}
</style>