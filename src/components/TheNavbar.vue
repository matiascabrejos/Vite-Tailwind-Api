<template>

<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>

  <label class="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" for="menu-toggle"><svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menu">
    <div class="text-sm lg:flex-grow">
      <router-link to="/home" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-accent mr-4">
        Home
      </router-link>
      <router-link to="/table" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-accent mr-4">
        Table View
      </router-link>
      <router-link to="/panel" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-accent">
        Panel View
      </router-link>
    </div>
  </div>
</nav>
</template>

<style scoped>
#menu-toggle:checked+#menu {
  display: block;
}


/* a:hover,
a.active {
  color: red;
  border-color: black;
  background-color: white;
} */

nav {
  background-color: #171717;
}
</style>