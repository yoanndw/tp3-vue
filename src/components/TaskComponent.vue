<template>
  <li>
    <input type="checkbox" @click="check()"/>
    <p>{{ props.title }}</p>
    <!-- <p>{{ done }}</p> -->
  </li>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps(['title'])
const done = ref(false)

function check() {
  done.value = !done.value
}
</script>

<style></style>
