<template>
  <div class="bg-gray-200 min-h-screen text-white p-10">
    <h1 class="text-indigo-600 font-bold"> Latest blogs </h1>

    <div class="flex mt-3 shadow-md">
        <!-- <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-10 pl-5 bg-white rounded-tl-md" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="gray" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg> -->
      <input class="h-10 w-full px-5 rounded-tr-md rounded-tl-md outline-none text-indigo-500" 
        type="search" 
        placeholder="Search for blogs !"
        v-model='search'
        > 
      
    </div> 
    <div class="flex bg-white hover:bg-gray-200 hover:cursor-pointer px-3 py-5 shadow-md border-t" 
      v-for="item in filteredSearch.slice(0,3)" :key="item.title"
      @click="handle_blog_click"> 
        <img class="rounded-tl-md rounded-md w-20" :src="item.image" width="250">
        <div class="px-3">
          <h3 class="text-indigo-600 font-bold text-sm"> {{ item.title  }} </h3>
          <p class="text-gray-600 hidden md:block"> {{ item.content.substring(0, 100) }}...</p>
        </div>
    </div> 

    <div class="w-full mt-5 mb-3 bg-gray-100 rounded-md shadow-md md:flex hover:cursor-pointer hover:bg-gray-200"
      v-for="blog in blogs" :key="blog.title" @click="handle_blog_click"
    >
      
      <img class="rounded-tl-md rounded-tr-md w-full md:w-1/3 md:rounded-bl-md md:rounded-tr-none" :src="blog.image" width="250">
      
      <div class="mx-8 my-5 md:w-2/3 flex-row justify-between">
        <h2 class="text-indigo-600 font-bold text-lg"> {{blog.title}} </h2>
        <p class="text-gray-500 mt-5 text-base"> {{ blog.content}}
        </p>

        
        <div class="flex justify-between items-center">

          <div class="mt-5 pb-5 flex">
            <img src="/images/eye.svg" width="20">
            <span class="text-gray-600 pl-5 text-sm"> {{blog.reads}} reads</span>
          </div>

          <div>
            <p class="text-gray-600 text-sm"> Approx. {{blog.minutes}} minutes </p>
          </div>

        </div>
        
      </div>

    </div>


  </div>
</template>

<script>

export default {
  computed : {
    filteredSearch(){
      return this.blogs.filter( d => {
        if (this.search == ''){
          return false
        }
        return d.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      })
    }
  },
  data() {
    return {
      search: '',
      blogs: [
        {
          title: "Skeleton of python project repository: \
          A step closer to writing beautiful code!",
          content: "Learning to write a code that your users and contributors can easily understand is a key to its popularity as well as usage.\
          In this blog, I am going to walk you through simple yet powerful skeleton for your python project that will help you organize your \
          code better. First rule is never put your actual code in root directory. Root directory should only contain files for packaging, README, requirements and gitignore... ",
          reads: 10,
          link: '',
          minutes: 10,
          image: '/images/blogs/computers.jpg'
        },
        {
          title: "Hosting your portfolio website in AWS for free!",
          content: "You have just finished developing your website and now you want to deploy it so other people can access it on the internet. In this blog\
          I am going to show you how I deployed my porfolio in AWS for free for the first year. Although this may not be the perfect solution for you but hopefully you will gain some idea for your deployment.",
          reads: 10,
          link: '',
          minutes: 10,
          image: '/images/blogs/website.jpg'
        },
        {
          title: "Snapshot distribution system powerflow analysis using Python and OpenDSS!",
          content: "You have just heard of this opensource tool OpenDSS which allows to perform three phase unbalanced power flow analysis but don't know how to get started. This blog will help\
          you use python to perform powerflow analysis using OpenDSS engine with the help of module called OpenDSSDirect.py.",
          reads: 10,
          link: '',
          minutes: 10,
          image: '/images/blogs/dgrid.jpg'
        },
        {
          title: "Roof top solar hosting capacity analysis in distribution systems!",
          content: "Recent increase in grid edge devices have sparked research in distribution system trying to understand their impacts. One \
          of the topic that is of interest to utility is hosting capacity analysis. In this blog I am going to explain in simple terms what hosting capacity \
          is and how you can compute it for distribution network.",
          reads: 15,
          link: '',
          minutes: 15,
          image: '/images/blogs/hosting-capacity.jpg'
        }
      ]
    }
  },
  methods: {
    handle_blog_click(){
      this.$router.push('/blogs/python-skeleton-project')
    }
  }

}
</script>

<style>

</style>