<template>
<div class="flex items-center bg-indigo-100 w-screen min-h-screen" style="font-family: 'Muli', sans-serif;">
  <div class="container ml-auto mr-auto flex flex-wrap items-start">
    <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
    </div>
    <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2" v-for="crypto in filteredCryptos" :key="crypto.sym">
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 class="text-right">{{ crypto.percent24hs }} {{ crypto.priceChange24hs }}</h5>
            <h5 class="text-white text-2xl font-bold leading-none">
              {{ crypto.name }}
            </h5>
            <span class="text-xs text-gray-400 leading-none">{{ crypto.symbol }}</span>
          </div>
          <div class="flex items-center">
            <div class="text-lg text-white font-light" v-bind:style="{color: crypto.price > 100 ? 'green' : 'red'}">
              {{ crypto.price }} US$	
            </div>
            <img class="rounded-full focus:outline-none w-10 h-10 flex ml-auto transition duration-300 stroke-current" v-bind:src="crypto.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ['cryptos', 'filteredCryptos']
}
</script>

