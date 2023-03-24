<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Todos />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Todos from '@/components/Todos.vue'

@Options({
  components: {
    Todos
  }
})
export default class HomeView extends Vue {}
</script>
