<template>
  <li>
    <input
      type="checkbox"
      :value="modelValue.done"
      @input="check($event)"
    />

    <p>{{ modelValue.title }}</p>
    <!-- <p>{{ done }}</p> -->
  </li>
</template>

<script setup lang="ts">
import Task from './Task'

const props = defineProps<{
  modelValue: Task
}>()

const emit = defineEmits(['update:modelValue'])

function check(event: Event) {
  const newDone = (event.target as HTMLInputElement).checked;
  props.modelValue.done = newDone;
  // console.log(newDone, typeof(newDone));
  emit('update:modelValue', props.modelValue)
}
</script>

<style></style>
