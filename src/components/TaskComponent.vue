<template>
  <li>
    <input
      type="checkbox"
      :value="modelValue.done"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <p>{{ modelValue.title }}</p>
    <!-- <p>{{ done }}</p> -->
  </li>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import Task from './Task'

const props = defineProps<{
  modelValue: Task
}>()

const updateEmit = defineEmits(['update:modelValue'])

function check() {
  props.modelValue.toggle()
}
</script>

<style></style>
