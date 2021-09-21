<template>
  <div
    class="hero min-h-screen"
  >
    <div class="hero-overlay"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-accent">Crypto</h1>
        <p class="mb-5 font-bold text-accent">
          Stay tuned with the latest data about cryptocurrencies in our two
          formats: Table view or Panel view.
        </p>
        <div class="flex justify-center items-center">
          <the-button @click="$router.push('panel')">PANEL VIEW</the-button>
          <the-button @click="$router.push('table')">TABLE VIEW</the-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from './TheButton.vue'
export default {
  components: {
    TheButton,
  },
  props: ['cryptos', 'filteredCryptos'],
  methods: {
    test() {
      console.log(this.cryptos)
      console.log(this.filteredCryptos)
    },
  },
}
</script>

<style scoped>
.btn {
  margin-right: 20px;
}
</style>
