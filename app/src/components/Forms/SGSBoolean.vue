<script setup lang="ts">
const props = defineProps({
  title: String,
  reference: Object,
  referenceName: String,
});
</script>
<template>
  <div class="flex flex-col gap-2">
    <label class="mb-0.5 block text-black dark:text-zinc-200">
      {{ props.title }}
    </label>
    <label class="switch">
      <input type="checkbox" v-model="props.reference![props.referenceName!]" />
      <span class="slider"></span>
    </label>
  </div>
</template>
<style scoped>
.switch {
  --secondary-container: #4f7c4d;
  --primary: #3ae242;
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.7em;
  height: 1.8em;
}

.switch input {
  display: none;
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #313033;
  transition: 0.2s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.2em;
  bottom: 0.2em;
  background-color: #aeaaae;
  transition: 0.4s;
}

input:checked + .slider::before {
  background-color: var(--primary);
}

input:checked + .slider {
  background-color: var(--secondary-container);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--secondary-container);
}

input:checked + .slider:before {
  transform: translateX(1.9em);
}
</style>
