<script setup lang="ts">
import { onUnmounted } from "vue";

const props = defineProps({
  title: String,
  reference: Object,
  referenceName: String,
});

onUnmounted(() => {
  props.reference![props.referenceName!] = null;
});
</script>
<template>
  <div class="flex flex-col gap-2">
    <label class="mb-0.5 block text-black dark:text-zinc-200">
      {{ props.title }}
    </label>
    <input
      type="date"
      class="w-full rounded border-[1.5px] text-black border-stroke py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      v-model="props.reference![props.referenceName!]"
    />
  </div>
</template>
