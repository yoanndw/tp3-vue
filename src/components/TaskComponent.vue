<template>
  <li>
    <input type="checkbox" @click="check()"/>
    <p>{{ props.task.title }}</p>
    <!-- <p>{{ done }}</p> -->
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Task from './Task'

const props = defineProps<{
  task: Task
}>()

function check() {
  props.task.toggle()
}
</script>

<style></style>
