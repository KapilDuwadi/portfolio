<template>
    <div>
        <div class="flexme jspacebet">
          <div>
            <h2>EFFORT</h2>
            <p>Approx. 5 minutes (Read time)</p>
          </div>
          <div class="flexme centre">
              <h4 class="mr-20">Repository</h4>
              <a href="https://github.com/nrel/effort" target="_blank"><img src="../assets/github.svg" width='40' height="40"></a>
          </div>
        </div>

        <div class="flexme centre jcentre">
          <button class="highlight-button" @click="demo_button_clicked">Request a DEMO</button>
          <a href="https://www.nrel.gov/docs/fy21osti/79375.pdf" target="_blank"><button class="highlight-button">Download a Report</button></a>
        </div>

        <DemoForm v-if="demoform" @cancelClicked="handleDemoFormCancel" @submitClicked="handleDemoSubmit" :key="effort"/>
        <ThankYou v-if="thankyou" @cancelClicked="handleThankRemoval"/>

        <p class="m20">EFFORT is
            an analysis framework developed in Python for modeling and designing TOU tariffs using optimization.
            It uses historical time series system-level load data, cost and capacity data of dispatchable generators,
            and consumer price responsiveness to compute optimal on-peak and off-peak price ratios. The utility can
            customize the level of consumer price responsiveness based on surveyed information and pricing trails to
            better reflect the response levels of their consumers. In addition to this, independent modules are also
            included to generate realistic on-peak hours by analyzing utility load profile data. Utilities can also
            compute seasonal TOU by grouping year-long load profiles into multiple seasons to specifically target
            seasonal changes in peak load consumption patterns. Scenario analysis can be leveraged in the absence of
            data required for computing realistic consumer price responsiveness.</p>

        <h3 class="subtitle m20">Features of EFFORT </h3>

        <div class="work-inner-container">
          <div class="left-bar-inner-container">
            <h3 @click="handle_click('optmodel')" v-bind:class="{ background_orange: optmodel }">Optimization Model</h3>
          </div>
          <div class="right-bar-inner-container">
            <OptimizationModel v-if="optmodel"/>
          </div>
        </div>
    </div>
        
</template>

<script>
import OptimizationModel from '../components/OptimizationModel.vue';
import DemoForm from '../components/DemoForm.vue';
import ThankYou from '../components/ThankYou.vue';

export default {
    name: "Effort",
    data (){
        return{
            optmodel: true,
            dermodel: false,
            dashboard: false,
            demoform: false,
            thankyou:false
        }
    },
    components: {
        OptimizationModel,
        DemoForm,
        ThankYou
    },
    methods: {
        handle_click(name){
            console.log(name)
            let arr = ["optmodel"]
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