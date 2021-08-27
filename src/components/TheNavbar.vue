<template>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>

  <label class="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" for="menu-toggle"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
    <div class="text-sm lg:flex-grow">
      <router-link to="/home" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </router-link>
      <router-link to="/table" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Table View
      </router-link>
      <router-link to="/panel" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Panel View
      </router-link>
    </div>
  </div>
</nav>

<!--     <div class="navbar shadow-lg bg-neutral text-neutral-content">
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold">
            DaisyUI
          </span>
  </div> 
  <div class="hidden px-2 mx-2 navbar-center lg:flex">
    <div class="flex items-stretch">
          <router-link to="/home" class="btn btn-ghost btn-sm rounded-btn">Home</router-link>
          <router-link to="/table" class="btn btn-ghost btn-sm rounded-btn">Table View</router-link>
          <router-link to="/panel" class="btn btn-ghost btn-sm rounded-btn">Panel View</router-link>
    </div>
  </div> 
  <div class="navbar-end">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">     
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
      </svg>
    </button> 
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
      </svg>
    </button>
  </div>
</div> -->
</template>

<style scoped>
#menu-toggle:checked+#menu {
  display: block;
}

a:hover,
a.active {
  color: red;
  border-color: black;
  background-color: white;
}
</style>