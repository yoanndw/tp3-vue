<template>
  <li>
    <input type="checkbox" @click="check()"/>
    <p>{{ model.title }}</p>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Task from './Task'

@Options({
  props: {
    model: Task
  }
})
export default class TaskComponent extends Vue {
  check() {
    this.model.toggle()
  }
}
</script>

<style></style>
