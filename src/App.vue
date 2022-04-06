<template>
  <component-header/>
  <new-generation/>
  <services/>
  <partners-users/>
  <be-partner/>
  
</template>

<script>
import ComponentHeader from './components/Section_Header/ComponentHeader.vue'
import NewGeneration from './components/Section_New_Generation/NewGeneration.vue'
import Services from './components/Section_Services/Services.vue'
import PartnersUsers from './components/Section_Partners_&_Users/PartnersUsers.vue'
import BePartner from './components/Section_Be_Partner/BePartner.vue'


export default {
  name: 'App',
  components: {
    ComponentHeader,
    NewGeneration,
    Services,
    PartnersUsers,
    BePartner
  }
}
</script>

<style lang="scss" src="./App.scss">
</style>
