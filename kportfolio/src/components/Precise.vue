<template>
    <div>
        <div class="flexme jspacebet">
          <div>
            <h2>PRECISE</h2>
            <p>Approx. 5 minutes (Read time)</p>
          </div>
          <!-- <div class="flexme centre">
              <h4 class="mr-20">Repository</h4>
              <a href="https://www.nrel.gov/grid/precise-tool.html" target="_blank"><img src="../assets/github.svg" width='40' height="40"></a>
          </div> -->
        </div>

        <div class="flexme centre jcentre">
          <button class="highlight-button" @click="demo_button_clicked">Request a DEMO</button>
          <a href="https://www.nrel.gov/grid/precise-tool.html" target="_blank"><button class="highlight-button">Download a Report</button></a>
        </div>

        <DemoForm v-if="demoform" @cancelClicked="handleDemoFormCancel" @submitClicked="handleDemoSubmit" :key="precise"/>
        <ThankYou v-if="thankyou" @cancelClicked="handleThankRemoval"/>

        <p class="m20">PRECISE is a proprietary software developed using Python at NREL to fast track the
            processing of PV interconnection application. Typically it require weeks if not months to process
            roof top PV interconnection application of a customer and duration varies by utilities. PRECISE does this job in a matter of minutes
            and also helps standarize the process. PRECISE laverages data utility already has to model their distribution network and performs full year
            simulation to find out the best setting for PV inverter.
        </p>

        <h3 class="subtitle m20">Features of PRECISE </h3>

        <div class="work-inner-container">
          <div class="left-bar-inner-container">
            <h3 @click="handle_click('feeder')" v-bind:class="{ background_orange: feeder }">Secondary Modeling</h3>
            <h3 @click="handle_click('pvmodel')" v-bind:class="{ background_orange: pvmodel }">Modeling Customer PV</h3>
            <h3 @click="handle_click('dashboard')" v-bind:class="{ background_orange: dashboard }">PRECISE Dashboard</h3>
          </div>
          <div class="right-bar-inner-container">
            <PreciseFeeder v-if="feeder"/>
            <ModelingPV v-if="pvmodel"/>
            <Dashboard v-if="dashboard"/>
          </div>
        </div>
    </div>
        
</template>

<script>
import PreciseFeeder from '../components/PreciseFeeder.vue';
import ModelingPV from '../components/ModelingPV.vue';
import Dashboard from '../components/PreciseDashboard.vue';
import DemoForm from '../components/DemoForm.vue';
import ThankYou from '../components/ThankYou.vue';

export default {
    name: "Precise",
    data (){
        return{
            feeder: true,
            pvmodel: false,
            dashboard: false,
            demoform: false,
            thankyou:false
        }
    },
    components: {
        PreciseFeeder,
        ModelingPV,
        Dashboard,
        DemoForm,
        ThankYou
    },
    methods: {
        handle_click(name){
            console.log(name)
            let arr = ["feeder", 'pvmodel', 'dashboard']
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