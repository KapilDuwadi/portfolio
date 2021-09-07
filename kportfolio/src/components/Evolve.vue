<template>
    <div>
        <div class="flexme jspacebet">
          <div>
            <h2>EVOLVE</h2>
            <p>Approx. 8 minutes (Read time)</p>
          </div>
          <div class="flexme centre">
              <h4 class="mr-20">Repository</h4>
              <a href="https://github.com/nrel/evolve" target="_blank"><img src="../assets/github.svg" width='40' height="40"></a>
          </div>
        </div>

        <div class="flexme centre jcentre">
          <button class="highlight-button" @click="demo_button_clicked">Request a DEMO</button>
          <a href="https://www.nrel.gov/docs/fy21osti/79069.pdf" target="_blank"><button class="highlight-button">Download a Report</button></a>
        </div>

        <DemoForm v-if="demoform" @cancelClicked="handleDemoFormCancel" @submitClicked="handleDemoSubmit" :key="evolve"/>
        <ThankYou v-if="thankyou" @cancelClicked="handleThankRemoval"/>

        <p class="m20">EVOLVE is an opensource software framework developed using Python and React at National Renewable Energy Laboratrory (NREL) in 2020. This tool allows user to study impact on net load variation under the influence of electric vehicles, energy storage and solar.</p>

        <h3 class="subtitle m20">Features of EVOLVE </h3>

        <div class="work-inner-container">
          <div class="left-bar-inner-container">
            <h3 @click="handle_click('loadprofder')" v-bind:class="{ background_orange: loadprofder }">Load profile and DERs impact</h3>
            <h3 @click="handle_click('dermodel')" v-bind:class="{ background_orange: dermodel }">DER modeling</h3>
            <h3 @click="handle_click('dashboard')" v-bind:class="{ background_orange: dashboard }">Interactive dashboard</h3>
          </div>
          <div class="right-bar-inner-container">
            <LoadProfileDerImpact v-if="loadprofder"/>
            <DerModel v-if="dermodel"/>
            <Dashboard v-if="dashboard"/>
          </div>
        </div>
    </div>
        
</template>

<script>
import LoadProfileDerImpact from '../components/LoadProfileDerImpact.vue';
import DerModel from '../components/DerModeling.vue';
import Dashboard from '../components/EvolveDashboard.vue';
import DemoForm from '../components/DemoForm.vue';
import ThankYou from '../components/ThankYou.vue';

export default {
    name: "Evolve",
    data (){
        return{
            loadprofder: true,
            dermodel: false,
            dashboard: false,
            demoform: false,
            thankyou:false
        }
    },
    components: {
        LoadProfileDerImpact,
        DerModel,
        Dashboard,
        DemoForm,
        ThankYou
    },
    methods: {
        handle_click(name){
            console.log(name)
            let arr = ["loadprofder", "dermodel", "dashboard"]
            arr.forEach( (item, index) => {
                console.log(item, index)
                if(item === name){
                    this[item]=true
                }else{
                    this[item]=false
                }
            })
        },
        demo_button_clicked(){
          this.demoform = true
        },
        handleDemoFormCancel(){
          this.demoform = false
        },
        handleDemoSubmit(){
          this.demoform = false
          window.scrollTo(0,0)
          this.thankyou = true
        },
        handleThankRemoval(){
          this.thankyou = false
        }
    }
}
</script>

<style>

</style>