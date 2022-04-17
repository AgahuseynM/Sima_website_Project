<template>
  <generation/>
  <services/>
  <users/>
  <partner/>
  <news/>
  <question/>
  <sign/>
</template>

<script>
import Generation from '@/components/generation/generation.component.vue'
import Services from '@/components/services/services.component.vue'
import Users from '@/components/users/users.component.vue'
import Partner from '@/components/partner/partner.component.vue'
import News from '@/components/news/news.component.vue'
import Question from '@/components/question/question.component.vue'
import Sign from '@/components/sign/sign.component.vue'


export default {
  name: 'main-component',
  components: {
    Generation,
    Services,
    Users,
    Partner,
    News,
    Question,
    Sign,
  }
}
</script>

<style scoped>

</style>