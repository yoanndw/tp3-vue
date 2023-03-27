<!-- eslint-disable constructor-super -->
<!-- eslint-disable constructor-super -->
<!-- eslint-disable constructor-super -->
<template>
  <ul>
    <TaskComponent
      v-for="(t,i) in tasks"
      :key="i"
      :title="t.title"
    /> <!-- v-bind:title -> prop title du component -->
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TaskComponent from '@/components/TaskComponent.vue'
import Task from '@/components/Task'

@Options({
  components: {
    TaskComponent
  }
})
export default class Todos extends Vue {
  tasks: Task[] = [];

  public created() {
    this.tasks.push(new Task('Code'))
    this.tasks.push(new Task('Eat'))
  }
}
</script>

<style scoped>
</style>
