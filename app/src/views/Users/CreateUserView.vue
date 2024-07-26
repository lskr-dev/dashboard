<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 * @active
 */
import { onMounted, ref, type Ref } from "vue";
import { useGlobalStore } from "@/stores/global";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import FormLayout from "@/layouts/FormLayout.vue";
import SGSButton from "@/components/Buttons/SGSButton.vue";
import SGSInput from "@/components/Forms/SGSInput.vue";
import SGSDivider from "@/components/Forms/SGSDivider.vue";
import type {
  ApiResponse,
  ButtonController,
  InputController,
  Usuario,
} from "@/Helpers/Types";
import { buttonHandler, validateInputParameter } from "@/Helpers/Validator";
import { Response } from "@/Helpers/Response";
import { clearUserData } from "@/Helpers/Free";
import { bindKey } from "@/Helpers/Binder";
import SGSBoolean from "@/components/Forms/SGSBoolean.vue";
import SGSDate from "@/components/Forms/SGSDate.vue";

const request = useGlobalStore().request;

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false,
});

const nameController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false,
});
const cityController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false,
});
const phoneController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false,
});

const apiFormData: Ref<Usuario> = ref(<Usuario>{
  name: "",
  city: "",
  phone: "",
  is_contacted: false,
  is_converted: false,
  https_expired_date: null,
});

const validateData = (): boolean => {
  const isValidName = validateInputParameter(
    nameController.value,
    apiFormData.value.name
  );
  const isValidCity = validateInputParameter(
    cityController.value,
    apiFormData.value.city
  );
  const isValidPhone = validateInputParameter(
    phoneController.value,
    apiFormData.value.phone
  );

  return isValidCity && isValidName && isValidPhone;
};

const sendData = async () => {
  buttonHandler(buttonController.value, true);

  if (!validateData()) {
    return buttonHandler(buttonController.value, false);
  }

  await request
    .store("/usuario", apiFormData.value)
    .then((res: ApiResponse) => {
      if (res.status) {
        Response.show("success", res.messageCode);
      } else {
        Response.show("error", res.messageCode);
      }
    })
    .catch((err) => {
      Response.show("error", "unexpected-error");
    })
    .finally(() => {
      buttonHandler(buttonController.value, false);
      clearUserData(apiFormData.value);
    });
};

onMounted(() => {
  bindKey("Enter", sendData);
});
</script>
<template>
  <DefaultLayout>
    <FormLayout title="Criar usuário">
      <template #body>
        <SGSInput
          label="Nome"
          required
          :reference="apiFormData"
          referenceName="nome"
          :controller="nameController"
        />
        <SGSDivider />
        <SGSInput
          label="Cidade"
          required
          :reference="apiFormData"
          referenceName="city"
          :controller="cityController"
        />
        <SGSDivider />
        <SGSInput
          label="Telefone"
          :mask="'(##) # ####-####'"
          required
          :reference="apiFormData"
          referenceName="phone"
          :controller="phoneController"
        />
        <SGSDivider />
        <SGSBoolean
          :title="'Cliente conectado ?'"
          :reference="apiFormData"
          referenceName="is_contacted"
        />
        <SGSDivider />
        <SGSBoolean
          :title="'Cliente convertido ?'"
          :reference="apiFormData"
          referenceName="is_converted"
        />
        <SGSDivider />
        <SGSDate
          v-if="apiFormData.is_converted"
          :title="'Data https expirado'"
          :reference="apiFormData"
          referenceName="https_expired_date"
        />
      </template>
      <template #handler>
        <SGSButton
          @click="sendData"
          label="Salvar"
          :controller="buttonController"
        />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
