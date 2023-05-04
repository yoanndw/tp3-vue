<!-- eslint-disable constructor-super -->
<!-- eslint-disable constructor-super -->
<!-- eslint-disable constructor-super -->
<template>
  <input v-model="newTask" />
  <button @click="createTask()">Create task</button>

  <br>

  <p>Filter: </p>
  <button @click="tasksFilter = 'all'">All</button>
  <button @click="tasksFilter = 'remaining'">Remaining</button>
  <button @click="tasksFilter = 'done'">Done</button>

  <ul>
    <TaskComponent
      v-for="(t, i) in shownTasks"
      :key="t.id"
      v-model="shownTasks[i]"
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
const tasksFilter = ref('all')

const filters = {
  all: () => tasks.value,
  done: () => tasks.value.filter(t => t.done),
  remaining: () => tasks.value.filter(t => !t.done)
}

const remainingTasks = computed(filters.remaining)

const shownTasks = computed(() => {
  return filters[tasksFilter.value]()
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
