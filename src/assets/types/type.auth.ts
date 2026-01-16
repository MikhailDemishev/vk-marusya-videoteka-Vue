import type { ValidateLoginForm } from '@/api/auth/login/login.schemas'
import type { ValidateRegForm } from '@/api/auth/register/register.schemas'
import type { Component } from 'vue'

export type AuthType = 'login' | 'register' | 'success'

export type AuthInputField<T extends string> = {
  name: T
  placeholder: string
  iconId?: string
  type?: 'text' | 'number' | 'password' | 'email'
  modelValue?: string
  'onUpdate:modelValue'?: (value: string) => void
}

export type AuthConfig<T extends string> = {
  title: string
  switchBtn: string
  switchTo: AuthType

  form?: Component

  inputFields: AuthInputField<T>[]
}

export type LoginKeys = keyof ValidateLoginForm
export type RegisterKeys = keyof ValidateRegForm
