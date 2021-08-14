<template>
<div class="overflow-x-auto">
  <table class="table w-full table-zebra">
    <thead>
      <tr>
        <th>#</th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>Favorite Color</th>
        <th>1</th>
      </tr>
    </thead> 
    <tbody>
      <tr v-for="crypto in cryptos" :key="crypto.symbol">
        <th><img class="w-10 rounded-full" v-bind:src="crypto.image" /></th> 
        <td>{{ crypto.name }}</td> 
        <td>{{ crypto.symbol }}</td> 
        <td>{{ crypto.price }} US$</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  props:['cryptos']
}
</script>