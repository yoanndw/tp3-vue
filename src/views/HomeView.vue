<template>
  <div class="home">
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
