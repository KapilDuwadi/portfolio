<template>
  <div class="container">
    <div class='back1'>
    </div>
    <div class="logo">
      <h2>K</h2>
    </div>
    <div class="nav">
      <router-link to="/" class="nav-item">Home</router-link> 
      <router-link to="/work" class="nav-item">Works</router-link>
      <router-link to="/education" class="nav-item">Education</router-link>
      <router-link to="/publication" class="nav-item">Publication</router-link>
    </div>
  </div>

  <router-view/>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

:root {
  --primary-color: #252e40;
  --logo-background: #1e232c;
}

*{
  margin: 0;
  padding: 0;
}

body{
  background: var(--primary-color);
  font-family: 'Roboto', sans-serif;
  position: relative;
}

.container {
  margin: 30px 10% 0 10%;
  display: flex;
  justify-content: space-between;
}

.nav{
  display: flex;
  width: 70%;
  justify-content: space-between;
}

.nav-item {
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  font-style: normal;
  padding: 5px 10px;
  height: 25px;
}

.nav-item:hover{
  border: 1px dashed white;
  border-radius: 5px;
}

.logo{
  width: 60px;
  height: 60px;
  background: var(--logo-background);
  transform: rotate(45deg);
  border-radius: 15px;
  margin-top: -10px;
}

.logo h2{
  transform: rotate(-45deg);
  color: white;
  padding-left: 16px;
  padding-top: 10px;
  font-size: 30px;
}

.back1{
  position: absolute;
  width: 600px;
  height: 600px;
  top: 0px;
  left: -15%;
  background: #C2B960;
  opacity: 0.05;
  transform: rotate(45deg);
  z-index: -1;
}

.router-link-active{
  color: orange;
}

</style>
