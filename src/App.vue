<template>

  <div>
    <nav class="bg-indigo-600 px-5 md:px-20 pt-3 pb-5">
      <div class="grid grid-cols-2">
        <div>
          <router-link to="/"><img src="/images/logo.svg" width="50"></router-link>
        </div>
        <div class="grid grid-cols-3 text-lg text-white items-center hidden md:grid">
          <router-link class="hover:text-red-400" to="/blogs">Blogs</router-link>
          <router-link class="hover:text-red-400" to="/projects">Projects</router-link>
          <router-link class="hover:text-red-400" to="/publications">Publications</router-link>
        </div>
        <div 
          class="hover:pointer space-y-2 absolute right-10 top-6 block md:hidden"
          @click="handle_menu_expand"
          v-if="!minified_menu"
        >
            <span class="block w-8 h-0.5 bg-white"></span>
            <span class="block w-8 h-0.5 bg-white"></span>
            <span class="block w-5 h-0.5 bg-white"></span>
        </div>
      </div>
    </nav>

    <div v-if="minified_menu" class="fixed z-10 bg-sky-900 opacity-95 right-0 top-0 px-10 w-screen md:hidden">
      <div class="flex justify-end mt-5">
        <svg class="h-8 w-8 text-red-500 hover:pointer space-y-2"  
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
        @click="handle_menu_close">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
      <div class="flex h-screen flex-col text-lg text-white mt-5">
          <router-link @click="turnoff_mini_menu" class="hover:text-red-400 py-1" to="/blogs">Blogs</router-link>
          <router-link @click="turnoff_mini_menu" class="hover:text-red-400 py-1" to="/projects">Projects</router-link>
          <router-link @click="turnoff_mini_menu" class="hover:text-red-400 py-1" to="/about">Publications</router-link>
      </div>
    </div>
  </div>
  
  <router-view/>
</template>

<script>

export default {
  data(){
      return {
        minified_menu: false
      }
  },
  methods: {
      handle_menu_expand(){
          this.minified_menu= true
      },
      handle_menu_close(){
          this.minified_menu = false
      },
      turnoff_mini_menu(){
        this.minified_menu = false
      }
  }
}
</script>

<style>

</style>
