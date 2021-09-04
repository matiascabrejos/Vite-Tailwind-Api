<template>
  <!--   <img alt="Vue logo" src="./assets/logo.png" class="mx-auto"/> -->
  <!--   <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!--   <CryptoTable :cryptos="cryptos" />
  <CryptoPanel :cryptos="cryptos" /> -->
  <!-- <input type="text" v-model="textSearch" @keyup="cryptoFilter()"> -->
  <TheNavbar></TheNavbar>
  <router-view
    :cryptos="cryptos"
    :filteredCryptos="filteredCryptos"
    v-slot="slotProps"
  >
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
<!--   <TheFooter></TheFooter> -->
  <!-- <div v-for="crypto in cryptos" :key="crypto.symbol">
    <h1>{{ crypto.name }}</h1>
  </div> -->
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import CryptoTable from './components/CryptoTable.vue'
import CryptoPanel from './components/CryptoPanel.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      cryptos: [],
      filteredCryptos: [],
      textSearch: '',
    }
  },
  mounted() {
    console.log('HELLO!')
    axios(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false#'
    )
      .then(({ data }) => {
        let cryptoAssets = data
        this.cryptos = cryptoAssets.map((crypto) => {
          return {
            image: crypto.image,
            name: crypto.name,
            symbol: crypto.symbol.toUpperCase(),
            price: crypto.current_price.toFixed(2),
            priceChange24hs: crypto.price_change_24h.toFixed(2),
            percent24hs: crypto.price_change_percentage_24h.toFixed(2),
          }
        })
        this.filteredCryptos = this.cryptos
      })
      .catch((err) => console.log(err))
  },
  methods: {
    cryptoFilter() {
      this.filteredCryptos = this.cryptos.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(this.textSearch.toLowerCase())
      )
    },
  },
}
</script>

<style>
.route-enter-from {
  opacity: 0;
}

.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}

body {
  background-color: #444444;
}
</style>
