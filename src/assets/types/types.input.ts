export type InputVariant = 'search' | 'auth' | 'other'

export interface CustomInputProps {
  modelValue: string
  variant: InputVariant
  iconId?: string
  isError?: boolean
  resetField?: boolean
  placeholder?: string
  type: 'text' | 'number' | 'password' | 'email'
}
