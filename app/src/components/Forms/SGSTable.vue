<script setup lang="ts">
import swal from "sweetalert";
import { useRouter } from "vue-router";

const props = defineProps({
  search: String,
  result: Array,
});
const emits = defineEmits(["deleteData"]);

const modalDeleteData = (id: Number) => {
  swal({
    icon: "warning",
    text: "Deletar",
    buttons: {
      confirm: {
        text: "Sim",
      },
    },
  }).then((res) => {
    if (res) {
      emits("deleteData", id);
    }
  });
};
</script>
<template>
  <div class="flex flex-col gap-2 p-4 pt-0">
    <div
      class="cursor-pointer transition-all font-bold w-full mx-auto p-2 md:p-4 bg-slate-600 text-white rounded-lg shadow-md flex flex-row items-center justify-around gap-4 px-4"
    >
      <span class="w-40">{{ "nome" }}</span>
      <span class="w-40 collapse md:visible">{{ "telefone" }}</span>
      <span class="w-40 collapse md:visible">{{ "cidade" }}</span>
      <span class="w-20 collapse md:visible">{{ "conectado" }}</span>
      <span class="w-20 collapse md:visible">{{ "convertido" }}</span>
      <span class="w-20 collapse md:visible">{{ "https" }}</span>
      <span class="w-20">{{ "Ações" }}</span>
    </div>
    <div
      v-if="result?.length == 0"
      class="cursor-pointer w-full mx-auto p-4 bg-neutral-50 dark:bg-slate-800 dark:text-zinc-200 rounded-lg shadow-md flex flex-row items-center justify-around gap-4 px-4"
    >
      {{ "Tabela vazia" }}
    </div>
    <div
      v-for="res in result as any"
      class="cursor-pointer transition-all duration-250 hover:border hover:translate-y-1 w-full mx-auto p-4 bg-neutral-50 dark:bg-slate-800 dark:text-zinc-200 rounded-lg shadow-md flex flex-row items-center justify-around gap-4 px-4"
    >
      <span class="w-40">{{ res.nome }}</span>
      <span class="w-40 collapse md:visible">
        {{ res.email }}
      </span>
      <span class="w-40 collapse md:visible">
        {{ res.tipo_usuario_nome }}
      </span>
      <span class="w-20 collapse md:visible">
        {{ res.is_contacted ? "Sim" : "Não" }}
      </span>
      <span class="w-20 collapse md:visible">
        {{ res.is_converted ? "Sim" : "Não" }}
      </span>
      <span class="w-20 collapse md:visible">
        {{ res.https_expired_date }}
      </span>
      <span class="w-20 flex flex-row gap-2">
        <a
          @click="modalDeleteData(res.id)"
          class="text-black-600 dark:text-orange-600 underline"
          >{{ "deletar" }}</a
        >
      </span>
    </div>
  </div>
</template>
