<template>
    <div>
        <div class="flexme jspacebet">
          <div>
            <h2>EMERGE</h2>
            <p>Approx. 10 minutes (Read time)</p>
          </div>
          <div class="flexme centre">
              <h4 class="mr-20">Repository</h4>
              <a href="https://github.com/nrel/emerge" target="_blank"><img src="../assets/github.svg" width='40' height="40"></a>
          </div>
        </div>

        <div class="flexme centre jcentre">
          <button class="highlight-button" @click="demo_button_clicked">Request a DEMO</button>
          <a href="https://www.nrel.gov/docs/fy21osti/78114.pdf" target="_blank"><button class="highlight-button">Download a Report</button></a>
        </div>

        <DemoForm v-if="demoform" @cancelClicked="handleDemoFormCancel" @submitClicked="handleDemoSubmit" :key="emerge"/>
        <ThankYou v-if="thankyou" @cancelClicked="handleThankRemoval"/>

        <p class="m20">EMeRGE is an opensource software framework developed using Python at National Renewable Energy Laboratory (NREL) in 2020. This tool allows user to develop distribution feeder model using GIS data, develop customized solar deployment scenarios, compute and compare risk metrics at both system and asset level and visualize them in an easy to use interactive dashboard.</p>

        <iframe width="100%" height="361" src="https://www.youtube.com/embed/29AiUPDd3n0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        <h3 class="subtitle m20">Features of EMERGE </h3>

        <div class="work-inner-container">
          <div class="left-bar-inner-container">
            <h3 @click="handle_click('feeder_model')" v-bind:class="{ background_orange: feeder_model }">Feeder Model Development</h3>
            <h3 @click="handle_click('pv_scen')" v-bind:class="{ background_orange: pv_scen }">Custom PV Scenarios</h3>
            <h3 @click="handle_click('risk_metric')" v-bind:class="{ background_orange: risk_metric }">Risk metrics for both systems and assets</h3>
            <h3 @click="handle_click('dashboard')" v-bind:class="{ background_orange: dashboard }">Interactive dashboard</h3>
          </div>
          <div class="right-bar-inner-container">
            <FeederModel v-if="feeder_model"/>
            <PVScenario v-if="pv_scen"/>
            <RiskMetric v-if="risk_metric"/>
            <Dashboard v-if="dashboard"/>
          </div>
        </div>
    </div>
        
</template>

<script>
import FeederModel from '../components/FeederModel.vue';
import PVScenario from '../components/PVScenario.vue';
import RiskMetric from '../components/RiskMetric.vue';
import Dashboard from '../components/EmergeDashboard.vue';
import DemoForm from '../components/DemoForm.vue';
import ThankYou from '../components/ThankYou.vue';

export default {
    name: "Emerge",
    data (){
        return{
            feeder_model: true,
            pv_scen: false,
            dashboard: false,
            risk_metric: false,
            demoform: false,
            thankyou:false
        }
    },
    components: {
        FeederModel,
        PVScenario,
        RiskMetric,
        Dashboard,
        DemoForm,
        ThankYou
    },
    methods: {
        handle_click(name){
            console.log(name)
            let arr = ["feeder_model", "pv_scen", 'risk_metric', "dashboard"]
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

.right-bar-inner-container img{
    width:100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid orange;
    border-radius: 5px;
    margin-top: 20px;
}



.right-bar-inner-container{
    margin: 20px 5%;
}

.work-inner-container{
  margin-top: 20px;
  background: rgba(191, 179, 179, 0.05);
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 500px;
}
.left-bar-inner-container{
  background: rgba(23, 22, 22, 0.5);
  position: relative;
  z-index: 2;
}

.left-bar-inner-container h3{
  padding: 10px 20px;
  font-style: normal;
  font-size: 1.0em;
  border: 2px;
  border: 2px solid rgba(0,0,0,0)
}

.left-bar-inner-container h3:hover{
  border: 2px solid orange;
  border-radius: 5px;
  cursor: pointer;
}

.background_orange{
    background: orange;
}

.subtitle{
  color: orange;
  font-size: 1.2em;
}

.highlight-button{
  color: white;
  background: #374052;
  outline: none;
  font-size: 1.1em;
  margin: 0 50px;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: 2px solid #374052;
  z-index: 2;
}

.highlight-button:hover{
  cursor: pointer;
  border: 2px solid orange;
}

.mr-20{
  margin-right: 20px;
}

.jcentre{
  justify-content: center;
}

.centre{
 align-items: center;
}

.jspacebet{
  justify-content: space-between;
}

.flexme{
  display: flex;
}

@media (max-width: 700px){
  .work-menus{
    flex-direction: column;
  }

  .work-inner-container{
    display: flex;
    flex-direction: column;
  }
  .highlight-button{
    margin-right: 10px;
    margin-left: 10px;
  }
}

</style>