<template>
  <li>
    <input type="checkbox" />
    <p>{{ title }}</p>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    title: String
  }
})
export default class TaskComponent extends Vue {
  title!: string;
}
</script>

<style></style>
