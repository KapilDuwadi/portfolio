<template>
  <div class="work-container">
    <div class="work-menus">
      <h2 @click="handle_click_('emerge')" v-bind:class="{ change_back: emerge }"> EMERGE </h2>
      <h2 @click="handle_click_('evolve')" v-bind:class="{ change_back: evolve }"> EVOLVE </h2>
      <h2 @click="handle_click_('effort')" v-bind:class="{ change_back: effort }"> EFFORT </h2>
      <h2 @click="handle_click_('precise')" v-bind:class="{ change_back: precise }"> PRECISE </h2>
    </div>

    <div class="project-content">
      <Emerge v-if="emerge"/>
      <Evolve v-if="evolve"/>
      <Effort v-if="effort"/>
      <Precise v-if="precise"/>
    </div>
  </div>
  <p class="footer">@KapilDuwadi, 2021</p>
</template>

<script>

import Emerge from '../components/Emerge.vue';
import Evolve from '../components/Evolve.vue';
import Effort from '../components/Effort.vue';
import Precise from '../components/Precise.vue';

export default {
  components:{
   Emerge,
   Evolve,
   Effort,
   Precise
  },
  data(){
    return {
      emerge: true,
      evolve: false,
      effort: false,
      precise: false
    }
  },
  methods: {
        handle_click_(name){
            console.log(name)
            let arr = ["emerge", "evolve", 'effort', "precise"]
            arr.forEach( (item, index) => {
                console.log(item, index)
                if(item === name){
                    this[item]=true
                }else{
                    this[item]=false
                }
            })
        }
    }
}
</script>

<style>


.work-container{
  margin: 20px 10%;
  background: rgba(12,12,12,0.3);
  padding-bottom: 20px;
  min-height: 500px;
}

.work-menus{
  display: flex;
}

.work-menus h2{
  color: white;
  background: black;
  border-radius: 5px;
  padding: 10px 20px;
  text-align: center;
  margin-right: 20px;
  font-size: 1.2em;
  z-index: 2;
}

.work-menus h2:hover{
  background: teal;
}

.project-content{
  margin: 20px 5%;
  color: white;
}

.project-content p{
  letter-spacing: 0.1em;
  padding: 10px 0;
  line-height: 1.8em;
}
.change_back{
  border: 2px solid orange;
}

@media (max-width: 1200px){
  .work-menus h2{
    margin-right: 10px;
  }
}

@media (max-width: 700px){
  .work-menus{
    flex-direction: column;
  }
}




</style>