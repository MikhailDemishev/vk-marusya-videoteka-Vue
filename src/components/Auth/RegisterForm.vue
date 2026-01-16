<script setup lang="ts">
import { RegisterValidateSchema, type ValidateRegForm } from '@/api/auth/register/register.schemas'
import { useRegister } from '@/composables/auth/useRegister'
import { AUTH_UI } from './authConfig'
import { reactive, ref } from 'vue'
import FormField from './FormField.vue'
import Input from '../UI/Input.vue'
import Button from '../UI/buttons/Button.vue'

const inputProps = AUTH_UI.register.inputFields
const registerMutation = useRegister()
const hasTriedToRegister = ref(false)
const hasFinishedRegister = ref(false)

/**
 * form state
 */
const form = reactive<ValidateRegForm>({
  email: '',
  name: '',
  surname: '',
  password: '',
  repeatPassword: '',
})

/**
 * errors state
 */
const errors = reactive<Partial<Record<keyof ValidateRegForm, string>>>({})

/**
 * reset mutation errors on input change
 */
const resetErrorsOnChange = () => {
  registerMutation.reset()
}

/**
 * submit handler
 */
const handleSubmit = async () => {
  hasTriedToRegister.value = true
  // очистка ошибок
  Object.keys(errors).forEach((key) => {
    delete errors[key as keyof ValidateRegForm]
  })

  const result = RegisterValidateSchema.safeParse(form)

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof ValidateRegForm
      errors[field] = issue.message
    })
    return
  }

  registerMutation.mutate(result.data, {
    onSuccess: () => {
      form.email = ''
      form.name = ''
      form.surname = ''
      form.password = ''
      form.repeatPassword = ''
      hasFinishedRegister.value = true
    },
    onError: () => {
      hasFinishedRegister.value = true
    },
  })
}
</script>

<template>
  <form class="register-form" @submit.prevent="handleSubmit" autocomplete="off">
    <FormField
      v-for="inputEl in inputProps"
      :key="inputEl.name"
      class="register-form__field"
      :label="inputEl.name"
      :errorMessage="errors[inputEl.name]"
    >
      <Input
        v-model="form[inputEl.name]"
        variant="auth"
        :placeholder="inputEl.placeholder"
        :id="inputEl.name"
        :iconId="inputEl.iconId"
        :type="inputEl.type ?? 'text'"
        :isError="!!errors[inputEl.name]"
        @update:modelValue="resetErrorsOnChange"
      />
    </FormField>

    <p
      v-if="hasTriedToRegister && hasFinishedRegister && registerMutation.isError"
      class="register-form__error-text"
    >
      Пользователь с таким email уже существует
    </p>

    <Button type="submit" size="m" variant="primary" class="register-form__btn">
      Создать аккаунт
    </Button>
  </form>
</template>
