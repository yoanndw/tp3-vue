<!-- eslint-disable constructor-super -->
<!-- eslint-disable constructor-super -->
<!-- eslint-disable constructor-super -->
<template>
  <input v-model="newTask" />
  <button @click="createTask()">Create task</button>

  <ul>
    <TaskComponent
      v-for="(t,i) in tasks"
      :key="i"
      :model="t"
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
  newTask: string = '';

  public created() {
    this.tasks.push(new Task('Code'))
    this.tasks.push(new Task('Eat'))
  }

  createTask() {
    this.tasks.push(new Task(this.newTask))
    this.newTask = ''
  }
}
</script>

<style scoped>
</style>
