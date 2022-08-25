<template>
  <div class="px-20 py-10 bg-gray-100">
      
    <h2 class="text-indigo-600 font-bold mb-2 text-2xl"> Skeleton of python project repository: A step closer to writing beautiful code! </h2>
    <p class="text-gray-600 mb-5 italic font-bold text-sm"> Approx. 10 minutes </p>
    
    <img class="object-cover h-80 w-full" src="/images/blogs/computers.jpg">
    
    <div>
    
        <p class="text-gray-500 mt-5 text-base"> Learning to write a code that your users and contributors can easily understand is a key to its popularity as well as usage.
        In this blog, I am going to walk you through simple yet powerful skeleton for your python project that will help you organize your
        code better. First rule is never put your actual code in root directory. Root directory should only contain files for packaging, README, requirements and gitignore... 
        </p>

        <div class="mt-5 pb-5 flex">
            <img src="/images/eye.svg" width="20">
            <span class="text-gray-600 pl-5 text-sm"> 0 reads</span>
        </div>
    
    </div>

    <div class="m-auto p-5 w-full bg-gray-200 md:w-1/2">
        <div v-for="item in ['docs', 'notebooks', 'cli', 'api', 'src', 'tests', '.github/workflows']" :key="item" class="flex items-center mb-2">
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4V13C1 14.6569 2.34315 16 4 16H17.5C19.1569 16 20.5 14.6569 20.5 13V6C20.5 4.34315 19.1569 3 17.5 3H11.4083C10.8161 3 10.237 2.82469 9.74423 2.49615L8.25577 1.50385C7.76297 1.17531 7.18395 1 6.59167 1H4C2.34315 1 1 2.34315 1 4Z" fill="#F5F5F5" stroke="#398DEF"/>
            </svg>
            <p class="pl-3">{{ item }}</p>
        </div>

        <div v-for="item in ['CHANGELOG.md', '.gitignore', 'Dockerfile', '.dockerignore', 'requirements.txt', 'requirements_dev.txt', 'LICENSE.txt', 'README.md', 'setup.py']" :key="item" class="flex items-center pl-8 mb-2">
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4H10M3 7H6M3 10H10M3 13H9M13 13V4C13 2.34315 11.6569 1 10 1H4C2.34315 1 1 2.34315 1 4V13C1 14.6569 2.34315 16 4 16H10C11.6569 16 13 14.6569 13 13Z" stroke="#398DEF"/>
            </svg>
            <p class="pl-3">{{ item }}</p>
        </div>
        
    </div>

    <div class="mt-10">
        <div class="flex items-center pb-2 mb-2 border-b-2">
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4V13C1 14.6569 2.34315 16 4 16H17.5C19.1569 16 20.5 14.6569 20.5 13V6C20.5 4.34315 19.1569 3 17.5 3H11.4083C10.8161 3 10.237 2.82469 9.74423 2.49615L8.25577 1.50385C7.76297 1.17531 7.18395 1 6.59167 1H4C2.34315 1 1 2.34315 1 4Z" fill="#F5F5F5" stroke="#398DEF"/>
            </svg>
            <p class="ml-2"> docs </p>
        </div>

        <p> <span class="text-indigo-500 font-bold"> docs </span> folder is a great place to store all your documentation whether you use 
        <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://www.markdownguide.org/"> markdown </a> or <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://www.sphinx-doc.org/en/master/"> sphinx</a> or 
        <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://jupyterbook.org/en/stable/start/build.html"> jupyter book </a> or
         anything else. You can create subdolders inside it if you want to organize documentation by use cases e.g for command line, interfaces, design architecture etc.</p>

    </div>

    <div class="mt-10">
        <div class="flex items-center pb-2 mb-2 border-b-2">
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4V13C1 14.6569 2.34315 16 4 16H17.5C19.1569 16 20.5 14.6569 20.5 13V6C20.5 4.34315 19.1569 3 17.5 3H11.4083C10.8161 3 10.237 2.82469 9.74423 2.49615L8.25577 1.50385C7.76297 1.17531 7.18395 1 6.59167 1H4C2.34315 1 1 2.34315 1 4Z" fill="#F5F5F5" stroke="#398DEF"/>
            </svg>
            <p class="ml-2"> notebooks </p>
        </div>

        <p> Sometimes you would want to develop demo jupyter notebooks that allow user to play with your code easily and 
            see multiple use cases and how to use it effectively. <span class="text-indigo-500 font-bold"> notebooks </span> 
            folder is a great place to store all of your jupyter notebook codes. If you don't know anything about jupyter notebooks feel free to check out this <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://jupyter.org/"> link. </a></p>
     
    </div>

    <div class="mt-10">
        <div class="flex items-center pb-2 mb-2 border-b-2">
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4V13C1 14.6569 2.34315 16 4 16H17.5C19.1569 16 20.5 14.6569 20.5 13V6C20.5 4.34315 19.1569 3 17.5 3H11.4083C10.8161 3 10.237 2.82469 9.74423 2.49615L8.25577 1.50385C7.76297 1.17531 7.18395 1 6.59167 1H4C2.34315 1 1 2.34315 1 4Z" fill="#F5F5F5" stroke="#398DEF"/>
            </svg>
            <p class="ml-2"> cli </p>
        </div>

        <p> <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://www.codecademy.com/article/command-line-interface"> 
        Command line interface </a>  aka CLI is a way to interact with your code from command line or terminal. I usually use <a class="text-indigo-600 border-b-2 font-bold border-gray-300" href="https://click.palletsprojects.com/en/8.1.x/"> 
            click </a> python module to develop command line interface for my code. <span class="text-indigo-500 font-bold"> code </span> folder is a great location for storing your code for developing command line interface for your tool.</p>
    </div>

  </div>
</template>

<script>
export default {
    name: "pythonSkeletonProject"
}
</script>

<style>

</style>