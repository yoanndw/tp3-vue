<template>
  <!-- <ul v-for="t in tasks"> -->
    <TaskComponent title="Code" />
  <!-- </ul> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TaskComponent from '@/components/TaskComponent.vue'

@Options({
  components: {
    TaskComponent
  }
})
export default class Todos extends Vue {
  // tasks: 
}
</script>

<style scoped>
</style>
