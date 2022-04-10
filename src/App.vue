<template>
  <component-header/>
  <new-generation/>
  <services/>
  <partners-users/>
  <be-partner/>
  <campaigns-news/>
  <have-question/>
  <sign-everywhere/>
  <component-footer/>
</template>

<script>
import ComponentHeader from './components/Section_Header/ComponentHeader.vue'
import NewGeneration from './components/Section_New_Generation/NewGeneration.vue'
import Services from './components/Section_Services/Services.vue'
import PartnersUsers from './components/Section_Partners_&_Users/PartnersUsers.vue'
import BePartner from './components/Section_Be_Partner/BePartner.vue'
import CampaignsNews from './components/Section_Campaigns_&_News/CampaignsNews.vue'
import HaveQuestion from './components/Section_Have_Question/HaveQuestion.vue'
import SignEverywhere from './components/Section_Sign_Everywhere/SignEverywhere.vue'
import ComponentFooter from './components/Section_Footer/ComponentFooter.vue'


export default {
  name: 'App',
  components: {
    ComponentHeader,
    NewGeneration,
    Services,
    PartnersUsers,
    BePartner,
    CampaignsNews,
    HaveQuestion,
    SignEverywhere,
    ComponentFooter
  }
}
</script>

<style lang="scss" src="./App.scss">
</style>
