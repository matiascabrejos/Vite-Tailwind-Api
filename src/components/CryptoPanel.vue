<template>
  <div
    class="flex items-center w-screen min-h-screen"
    style="font-family: 'Muli', sans-serif"
  >
    <div class="container ml-auto mr-auto flex flex-wrap items-start">
      <div class="w-full pl-5 lg:pl-2 mb-4 mt-4"></div>
      <div
        class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
        v-for="crypto in filteredCryptos"
        :key="crypto.sym"
      >
        <div
          class="
            rounded-lg
            m-h-64
            p-2
            transform
            hover:translate-y-2 hover:shadow-xl
            transition
            duration-300
          "
        >
          <div class="rounded-lg p-4 bg-indigo-500 flex flex-col">
            <div>
              <h5
                class="text-right"
                v-bind:style="{
                  color: crypto.percent24hs > 0 ? 'green' : 'red',
                }"
              >
                {{ crypto.percent24hs }}%
              </h5>
              <h5 class="text-white text-2xl font-bold leading-none">
                {{ crypto.name }}
              </h5>
              <span class="text-xs text-gray-400 leading-none">{{
                crypto.symbol
              }}</span>
            </div>
            <div class="flex items-center">
              <div class="text-lg text-white font-light">
                {{ crypto.price }} US$
              </div>
              <img
                class="
                  rounded-full
                  focus:outline-none
                  w-10
                  h-10
                  flex
                  ml-auto
                  transition
                  duration-300
                  stroke-current
                  ring ring-accent ring-offset-base-100 ring-offset-2
                "
                v-bind:src="crypto.image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cryptos', 'filteredCryptos'],
  data() {
    return {
      textSearch: '',
      cryptos: this.cryptos,
      filteredCryptos: this.filteredCryptos,
    }
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
