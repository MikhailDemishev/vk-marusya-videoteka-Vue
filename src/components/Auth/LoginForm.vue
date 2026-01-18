<script setup lang="ts">
import { LoginValidateSchema, type ValidateLoginForm } from '@/api/auth/login/login.schemas'
import FormField from './FormField.vue'
import Input from '../UI/Input.vue'
import Button from '../UI/buttons/Button.vue'
import { AUTH_UI } from '../../shared/config/authConfig'
import { reactive, ref } from 'vue'
import { useLogin } from '@/composables/auth/useLogin'

const inputProps = AUTH_UI.login.inputFields
const loginMutation = useLogin()
const hasTriedToLogin = ref(false)
const hasFinishedLogin = ref(false)

const form = reactive<ValidateLoginForm>({
  email: '',
  password: '',
})

const errors = reactive<Partial<Record<keyof ValidateLoginForm, string>>>({})
const resetErrorsOnChange = () => loginMutation.reset()
const handleSubmit = async () => {
  hasTriedToLogin.value = true
  Object.keys(errors).forEach((key) => {
    delete errors[key as keyof ValidateLoginForm]
  })

  const result = LoginValidateSchema.safeParse(form)

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof ValidateLoginForm
      errors[field] = issue.message
    })
    return
  }

  loginMutation.mutate(result.data, {
    onSuccess: () => {
      form.email = ''
      form.password = ''
      hasFinishedLogin.value = true
    },
    onError: () => {
      hasFinishedLogin.value = true
    },
  })
}
</script>

<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <FormField
      v-for="(inputEl, index) in inputProps"
      :key="index"
      class="login-form__field"
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
        @input="resetErrorsOnChange"
      />
    </FormField>

    <p
      v-if="hasTriedToLogin && hasFinishedLogin && loginMutation.isError"
      class="login-form__error-text"
    >
      Неверный логин или пароль
    </p>

    <Button type="submit" variant="primary" size="m" class="register-form__btn"> Войти </Button>
  </form>
</template>
