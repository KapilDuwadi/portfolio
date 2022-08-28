<template>
  <div class="relative bg-gray-100 pb-5">
    <img
      class="w-full h-96 md:h-96"
      src="images/publications/emerge_paper.jpg"
    />
    <div
      class="
        absolute
        h-96
        pl-10
        md:pl-20
        pt-5
        md:pt-12
        px-5
        text-white
        w-full
        bg-gradient-to-r
        from-black
        via-gray-800
        top-0
      "
    >
      <h1
        class="
          w-4/5
          md:w-1/2
          text-indigo-500
          font-bold
          text-xl
          md:text-3xl
          capitalize
        "
      >
        {{ active_publication.title }}
      </h1>
      <p class="text-base md:text-xl mt-3 w-1/2">
        {{ active_publication.authors }}
      </p>

      <div class="flex w-4/5">
        <div>
          <p class="text-base md:text-xl mt-3 text-gray-500">
            {{ active_publication.publisher }}
          </p>
          <p class="text-base md:text-xl text-gray-500">
            {{ active_publication.published_date }}
          </p>
        </div>
        <button
          @click="handle_page_click(active_publication.url)"
          class="
            bg-indigo-500
            mt-5
            text-white
            rounded-md
            ml-3
            md:ml-10
            text-sm
            md:text-base
            w-40
            md:w-auto
            h-10
            hover:bg-indigo-600
          "
        >
          <p class="px-2">Read more</p>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 mt-10 px-10 gap-10 md:grid-cols-2 md:px-20">
      <div
        class="bg-white shadow-md hover:bg-gray-200 hover:cursor-pointer"
        @mouseover="change_active_publication(publication)"
        v-for="publication in publications"
        :key="publication.title"
        @click="handle_page_click(publication.url)"
      >
        <div>
          <div class="bg-indigo-700 px-10 py-5">
            <h1 class="text-white font-bold mb-2 font-mono">
              {{ publication.title }}
            </h1>
            <h1 class="text-white mb-2 text-sm font-mono">
              {{ publication.authors }}
            </h1>
          </div>
          <p
            class="text-sm mb-2 text-justify font-mono px-10 py-2 text-gray-600"
          >
            {{ publication.abstract }}
          </p>

          <h1 class="text-indigo-700 text-sm font-mono px-10">
            {{ publication.publisher }}
          </h1>
          <h1 class="text-indigo-700 text-sm font-mono px-10 pb-5">
            {{ publication.published_date }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publications: [
        {
          title:
            "An Analysis Framework for Distribution\
                  Network DER Integration in India: \
                  Distributed Solar in Tamil Nadu",
          abstract:
            "This report is part of a two-part series that represents a yearlong collaboration with the Tamil Nadu \
                    Generation and Distribution Corporation Limited (TANGEDCO) on power sector planning. The \
                    first report in this series, the Pathways for Tamil Nadu’s Electric Power Sector 2017-2030 report, \
                    outlines the National Renewable Energy Laboratory’s (NREL) work with TANGEDCO's \
                    electricity sector planning department to develop a model of the state’s power system and evaluate \
                    multiple scenarios of system growth given resource constraints, costs of technologies, and power \
                    sector policies. This second report focuses on the rapidly transforming distribution network in the \
                    state. The report outlines a framework developed by NREL with TANGEDCO's distribution utility \
                    to quickly and accurately analyze the impacts of integrating renewable energy, specifically rooftop \
                    solar photovoltaic (PV), onto Tamil Nadu's distribution system. Together these studies help to \
                    prepare Tamil Nadu for a rapidly transforming power system.",
          authors:
            "Kapil Duwadi, Killian McKenna, Akshay Jain, Kajal Gaur, \
                    Adarsh Nagarajan, David Palchak",
          published_date: "March 2021",
          publisher: "National Renewable Energy Laboratory",
          url: "https://www.nrel.gov/docs/fy21osti/78114.pdf",
        },
        {
          title:
            "PREPARING DISTRIBUTION UTILITIES FOR THE FUTURE - \
                    UNLOCKING DEMAND-SIDE MANAGEMENT POTENTIAL",
          abstract:
            "The balance of supply and demand in the power systems has traditionally been served solely through generation \
                    and network capacity planning and operations. However, with increased requirements for flexibility due to the \
                    uptake in variable renewable generation sources such as wind and solar, there is a need to increase demand-side \
                    flexibility. In addition, there are increased communications and flexibility capabilities emerging on the demand- \
                    side from the adoption of advanced metering infrastructures with smart meter deployment and intelligent loads \
                    such as smart thermostats and schedulable white goods (e.g., dishwashers and washing machines). Unlocking \
                    demand-side flexibility can bring system benefits, from peak load reduction bringing about generation capacity \
                    and network upgrade deferral to reducing demand and bringing about more efficient utilization of generation and \
                    network capacity.",
          authors:
            "Killian McKenna, Kapil Duwadi, Shibani Ghosh, Adarsh Nagarajan and David Palchak",
          published_date: "July 2021",
          publisher: "National Renewable Energy Laboratory",
          url: "https://www.nrel.gov/docs/fy21osti/79375.pdf",
        },
        {
          title:
            "PREPARING DISTRIBUTION UTILITIES FOR THE FUTURE – EVOLVING CUSTOMER CONSUMPTION IN \
                RENEWABLE RICH GRIDS:",
          abstract:
            "Historically, power distribution utilities were designed to serve low voltage loads within their territories,\
                  and for decades their planning works were based on the premise that customers only consume power. \
                  During this time, distribution utilities learned customer consumption patterns, identified peak, off-peak, \
                  and shoulder hours and crafted proficient planning and operational strategies to match them. \
                  Over the past decade, solar PV and wind energy adoption has increased at all scales (transmission and \
                  distribution), as illustrated in Figure ES-1. Also, recent and anticipated adoption of battery energy storage \
                  systems (BESS) and electric vehicles (EVs) are changing the landscape of supply and demand. Some of \
                  these emerging technologies are variable in nature and others are not fully understood, thus posing a need \
                for distribution utilities to update the way that they plan and operate their systems.",
          authors:
            "Adarsh Nagarajan, Shibani Ghosh, Kapil Duwadi, Marty Schwarz, Richard Bryce, Ilya Chernyakovskiy, David Palchak",
          published_date: "April 2021",
          publisher: "National Renewable Energy Laboratory",
          url: "https://www.nrel.gov/docs/fy21osti/79069.pdf",
        },
        {
          title:
            "Policy and Regulatory Environment for Utility-Scale Energy Storage: Nepal",
          abstract:
            "This report—Policy and Regulatory Environment for Utility-Scale Energy Storage: Nepal—is \
              part of a series investigating the potential for utility-scale energy storage in South Asia. This \
              report, focused on Nepal, is the third in a series of country-specific evaluations of policy and \
              regulatory environments for energy storage in the region. These evaluations apply the previously \
              developed Energy Storage Readiness Assessment to evaluate the policy and regulatory \
              environment for energy storage in each country and provide insights into the opportunities and \
              barriers related to energy storage growth and deployment. Previous evaluations have applied this \
              framework to India and Bangladesh.",
          authors: "Amy Rose, Kapil Duwadi, David Palchak, and Mohit Joshi",
          published_date: "September 2021",
          publisher: "National Renewable Energy Laboratory",
          url: "https://www.nrel.gov/docs/fy21osti/80591.pdf",
        },
        {
          title:
            "Techno-Economic Analysis of PV Inverter Controllers for Preventing Overvoltage in LV Grids",
          abstract:
            "Voltage-rise due to increasing installation of photovoltaic (PV) systems is a major technical \
        issue in low voltage (LV) distribution networks. A cost-effective approach to address the overvoltage problem \
         is to control the active and reactive power of the existing PV inverters. This paper describes the use of \
         quasi-steady-state time-series (QSTS) software (GridLAB-D) to implement inverter overvoltage prevention \
         strategies, allowing previously infeasible long-term techno-economic analysis of such controllers. \
         Four PV inverter controllers are implemented to evaluate the long-term technical and economic impact \
         on a 12-house LV distribution network. Results quantify PV energy curtailment, distribution system losses, \
         and the impact on electric utility sales and government taxes. Droop methods were shown to be effective to \
         avoid overvoltage, and the use of reactive power reduced PV curtailment by 2-3 times over similar methods \
         that only curtail active power. In addition, the difference between using local (no communication) and \
         a comparable method with communication was shown to be insignificant to justify the additional investment.\
          This work can aid utilities to decide the most effective control and pricing methods, and whether \
          investments in overvoltage prevention infrastructure can be justified under high PV penetration scenarios.",
          authors:
            "R. Mahat, K. Duwadi, F. B. dos Reis, R. Fourney, R. Tonkoski and T. M. Hansen",
          published_date: "June 2020",
          publisher: "IEEE Xplore",
          url: "https://ieeexplore.ieee.org/abstract/document/9161888",
        },
        {
          title:
            "Sustainability Metrics for Inverter-based Voltage Regulation Methods in PV-rich Low Voltage Grids",
          abstract:
            "Increasing distributed solar installations in low voltage distribution grids tend to increase the \
        feeder voltage. Rise in voltage is only acceptable to a certain limit, and control strategies are required to keep \
        voltage within defined bounds for equipment safety and system reliability. PV inverter control strategies are \
        effective tools to prevent overvoltage. Different inverter control strategies have different social, economic, and \
        environmental impacts. Three different sustainability metrics are proposed to quantity these impacts for inverter-based \
        voltage control strategies. Five different PV inverter control strategies are implemented in a radial distribution feeder \
        and power flow is analyzed for one year in a one minute resolution to compute and compare the proposed sustainability metrics. \
        It is shown that the use of reactive power improves sustainability compared to just using active power curtailment. \
        The trade-off of the three objectives were compared using multi-objective optimization for the highest solar irradiance day. \
        Results showed that economic and environmental sustainability are positively correlated, and both are negatively correlated with \
        social sustainability, indicating a required trade-off for voltage control strategies.",
          authors: "K. Duwadi, R. Foutney, R. Tonkoski and T. M. Hansen",
          published_date: "May 2019",
          publisher: "IEEE Xplore",
          url: "https://ieeexplore.ieee.org/abstract/document/8833662",
        },
      ],
      active_publication: {
        title:
          "An Analysis Framework for Distribution\
                  Network DER Integration in India: \
                  Distributed Solar in Tamil Nadu",
        abstract:
          "This report is part of a two-part series that represents a yearlong collaboration with the Tamil Nadu \
                    Generation and Distribution Corporation Limited (TANGEDCO) on power sector planning. The \
                    first report in this series, the Pathways for Tamil Nadu’s Electric Power Sector 2017-2030 report, \
                    outlines the National Renewable Energy Laboratory’s (NREL) work with TANGEDCO's \
                    electricity sector planning department to develop a model of the state’s power system and evaluate \
                    multiple scenarios of system growth given resource constraints, costs of technologies, and power \
                    sector policies. This second report focuses on the rapidly transforming distribution network in the \
                    state. The report outlines a framework developed by NREL with TANGEDCO's distribution utility \
                    to quickly and accurately analyze the impacts of integrating renewable energy, specifically rooftop \
                    solar photovoltaic (PV), onto Tamil Nadu's distribution system. Together these studies help to \
                    prepare Tamil Nadu for a rapidly transforming power system.",
        authors:
          "Kapil Duwadi, Killian McKenna, Akshay Jain, Kajal Gaur, \
                    Adarsh Nagarajan, David Palchak",
        published_date: "March 2021",
        publisher: "National Renewable Energy Laboratory",
        image: "images/publications/emerge_paper.jpg",
        url: "https://www.nrel.gov/docs/fy21osti/78114.pdf",
      },
    };
  },
  methods: {
    change_active_publication(publication) {
      this.active_publication = publication;
    },
    handle_page_click(url) {
      window.open(url);
    },
  },
};
</script>

<style>
</style>

