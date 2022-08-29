import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import demoForm from '../components/demoForm.vue'
import PreciseDescription from '../components/projects/PRECISE/description.vue';
import processingSolar from '../components/projects/PRECISE/description-processing-solar.vue';
import modelBuilding from '../components/projects/PRECISE/description-model-building.vue';
import amiCleansing from '../components/projects/PRECISE/description-ami-cleansing';
import alertNotification from '../components/projects/PRECISE/description-alert-notifications.vue';
import preciseSolarData from '../components/projects/PRECISE/solar-data.vue'
import preciseTimeSeriesAnalysis from '../components/projects/PRECISE/time-series-analysis.vue'
import advancedInverterSettings from '../components/projects/PRECISE/advanced-inverter-settings.vue'
import emergeDescription from '../components/projects/EMERGE/description.vue'
import emergeFeederModeling from '../components/projects/EMERGE/feederModeling.vue'
import emergeSolarScenarios from '../components/projects/EMERGE/solarScenarios.vue'
import emergeAdvancedMetrics from '../components/projects/EMERGE/advancedMetrics.vue'
import emergeDashboard from '../components/projects/EMERGE/dashboard.vue'
import evolveDescription from '../components/projects/EVOLVE/description.vue'
import evolveLoadProfile from '../components/projects/EVOLVE/loadProfile.vue'
import evolveSolar from '../components/projects/EVOLVE/solar.vue'
import evolveEnergyStorage from '../components/projects/EVOLVE/energyStorage.vue'
import evolveElectricVehicle from '../components/projects/EVOLVE/electricVehicle.vue'
import evolveDashboard from '../components/projects/EVOLVE/dashboard.vue'
import shiftDescription from '../components/projects/SHIFT/description.vue'
import shiftUseCases from '../components/projects/SHIFT/useCases.vue'
import effortDescription from '../components/projects/EFFORT/description.vue'
import preciseAMIGIS from '../components/projects/PRECISE/ami-gis.vue'
import preciseDashboard from '../components/projects/PRECISE/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectView,
    children: [
      {
        path: 'precise/description',
        component: PreciseDescription,
        children: [
          {
            path: 'processing-solar-application',
            component: processingSolar
          },
          {
            path: 'model-building',
            component: modelBuilding
          },
          {
            path: 'ami-cleaning-integration',
            component: amiCleansing
          },
          {
            path: 'alerts-notification',
            component: alertNotification
          }
        ]
      },
      {
        path: 'precise/solar-application',
        component: preciseSolarData
      },
      {
        path: 'precise/time-series-analysis',
        component: preciseTimeSeriesAnalysis
      },
      {
        path: 'precise/advanced-inverter-settings',
        component: advancedInverterSettings
      },
      {
        path: 'precise/ami-gis',
        component: preciseAMIGIS
      },
      {
        path: 'precise/dashboard',
        component: preciseDashboard
      },
      {
        path: 'emerge/description',
        component: emergeDescription
      },
      {
        path: 'emerge/feeder-modeling',
        component: emergeFeederModeling
      },
      {
        path: 'emerge/solar-scenarios',
        component: emergeSolarScenarios
      },
      {
        path: 'emerge/advanced-metrics',
        component: emergeAdvancedMetrics
      },
      {
        path: 'emerge/dashboard',
        component: emergeDashboard
      },
      {
        path: 'evolve/description',
        component: evolveDescription
      },
      {
        path: 'evolve/load-profile',
        component: evolveLoadProfile
      },
      {
        path: 'evolve/solar',
        component: evolveSolar
      },
      {
        path: 'evolve/energy-storage',
        component: evolveEnergyStorage
      },
      {
        path: 'evolve/electric-vehicle',
        component: evolveElectricVehicle
      },
      {
        path: 'evolve/dashboard',
        component: evolveDashboard
      },
      {
        path: 'shift/description',
        component: shiftDescription
      },
      {
        path: 'shift/use-cases',
        component: shiftUseCases
      },
      {
        path: 'effort/description',
        component: effortDescription
      }

    ]
  },
  {
    path: '/publications',
    name: 'publications',
    component: () => import(/* webpackChunkName: "about" */ '../views/PublicationsView.vue')
  },
  {
    name: 'demo',
    path: '/demo/:project',
    component: demoForm
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
