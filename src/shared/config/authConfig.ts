import type { AuthConfig, LoginKeys, RegisterKeys } from '@/assets/types/type.auth'
import LoginForm from '@/components/Auth/LoginForm.vue'
import RegisterForm from '@/components/Auth/RegisterForm.vue'

export const AUTH_UI: {
  login: AuthConfig<LoginKeys>
  register: AuthConfig<RegisterKeys>
  success: AuthConfig<never>
} = {
  login: {
    title: '',
    switchBtn: 'Регистрация',
    switchTo: 'register',
    form: LoginForm,
    inputFields: [
      {
        name: 'email',
        placeholder: 'Электронная почта',
        iconId: 'icon-email',
      },
      {
        name: 'password',
        placeholder: 'Пароль',
        iconId: 'icon-key',
        type: 'password',
      },
    ],
  },

  register: {
    title: 'Регистрация',
    switchBtn: 'У меня есть аккаунт',
    switchTo: 'login',
    form: RegisterForm,
    inputFields: [
      {
        name: 'email',
        placeholder: 'Электронная почта',
        iconId: 'icon-email',
      },
      {
        name: 'name',
        placeholder: 'Имя',
        iconId: 'icon-avatar',
      },
      {
        name: 'surname',
        placeholder: 'Фамилия',
        iconId: 'icon-avatar',
      },
      {
        name: 'password',
        placeholder: 'Пароль',
        iconId: 'icon-key',
        type: 'text',
      },
      {
        name: 'repeatPassword',
        placeholder: 'Подтвердите пароль',
        iconId: 'icon-key',
        type: 'text',
      },
    ],
  },

  success: {
    title: 'Регистрация завершена!',
    switchBtn: 'Войти',
    switchTo: 'login',
    inputFields: [],
  },
}
