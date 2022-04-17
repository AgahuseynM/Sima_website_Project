<template>
   <div>
     <header-component/>
     <router-view/>
     <footer-component/>
   </div>
</template>

<script>
import HeaderComponent from "@/components/header/header.component.vue"
import FooterComponent from '@/components/footer/footer.component.vue'


export default {
  name: 'App',
  components: {
    "header-component": HeaderComponent,
    "footer-component": FooterComponent
  }
}
</script>

<style lang="scss" src="./App.scss">
</style>


