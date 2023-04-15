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
      :task="t"
    /> <!-- v-bind:title -> prop title du component -->
  </ul>

  <footer>
    <span>
      {{ remainingTasks.length }} remaining task(s).
    </span>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeMount } from 'vue'
import Task from './Task'
import TaskComponent from './TaskComponent.vue'

const tasks = ref([] as Task[])
const newTask = ref('')

const remainingTasks = computed(() => {
  return tasks.value.filter(t => !t.done)
})

onBeforeMount(() => {
  tasks.value.push(new Task('Code'))
  tasks.value.push(new Task('Eat'))
})

function createTask() {
  tasks.value.push(new Task(newTask.value))
  newTask.value = ''
}
</script>

<style scoped>
</style>
