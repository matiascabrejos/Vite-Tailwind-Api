<template>
<div class="overflow-x-auto container mx-auto px-4">
  <div class="form-control pb-6">
  <label class="label">
    <span class="label-text">Name/Symbol Filter</span>
  </label> 
  <input type="text" placeholder="Name/Symbol" class="input input-primary input-bordered" v-model="textSearch" @keyup="cryptoFilter()">
</div> 
  <table class="table w-full table-fixed table-zebra">
    <thead>
      <tr>
        <th>#</th> 
        <th>NAME</th> 
        <th>SYMBOL</th> 
        <th>PRICE</th>
        <th>CHANGE 24H</th>
        <th>CHANGE 24H</th>
      </tr>
    </thead> 
    <tbody>
      <tr v-for="crypto in filteredCryptos" :key="crypto.symbol">
        <th><img class="w-10 rounded-full" v-bind:src="crypto.image" /></th> 
        <td>{{ crypto.name }}</td> 
        <td>{{ crypto.symbol }}</td> 
        <td>{{ crypto.price }} US$</td>
        <td v-bind:style="{color: crypto.priceChange24hs  > 0 ? 'green' : 'red'}">{{ crypto.priceChange24hs }}</td>
        <td v-bind:style="{color: crypto.percent24hs  > 0 ? 'green' : 'red'}">{{ crypto.percent24hs }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  props:['cryptos', 'filteredCryptos'],
  data() {
    return {
      textSearch: '',
      cryptos: this.cryptos,
      filteredCryptos: this.filteredCryptos
    }
  },
   methods: {
    cryptoFilter() {
      this.filteredCryptos = this.cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(this.textSearch.toLowerCase())      
      )
    }
  }
}
</script>