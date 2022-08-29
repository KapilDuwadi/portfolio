<template>
  <form class="m-20">
      <h1 class="text-xl font-extrabold text-orange-700"> Please fill the following details to request a DEMO.</h1>
      <label class="block text-gray-500 text-md mt-5 font-bold mb-2" for="grid-first-name">
        Full Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">
      
      <label class="block tracking-wide text-gray-500 text-md mt-5 font-bold mb-2" for="grid-first-name">
        Email Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">
      
      <label class="block tracking-wide text-gray-500 text-md mt-5 font-bold mb-2" for="grid-first-name">
        Project
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" :placeholder="project_name" disabled>
      
      <label class="block tracking-wide text-gray-500 text-md mt-5 font-bold mb-2" for="grid-first-name">
        Preferred date
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date">
      

      <label class="block tracking-wide text-gray-500 text-md mt-5 font-bold mb-2" for="grid-first-name">
        Your Message
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" placeholder="Jane"> </textarea>
      <div>
           <button @click="handle_submit"
                class="mt-3 mr-3 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Send Message
           </button>
           <button 
            @click="handle_cancel"
            class="mt-3 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
            Cancel
           </button>
      </div>
  </form>
</template>

<script>
export default {
    name: "demoForm",
    created() {
      this.project_name = this.$route.params.project
      if (!this.valid_projects.includes(this.project_name)){
        alert(`Not a valid projet ${this.project_name}`)
        this.$router.push({ path: '/', replace: true })
      }
    },
    data(){
      return {
        valid_projects : ['Precise', 'Evolve', 'Emerge', 'Effort', 'Shift'],
        project_name: ''
      }
    },
    methods: {
        handle_cancel(){
            this.$router.push({ path: '/', replace: true })
        }
    }
}
</script>

<style>

</style>