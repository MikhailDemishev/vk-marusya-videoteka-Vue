import type { ProfileResponse } from '@/api/auth/profile/profile.schemas'

export interface IProfileSettings {
  profile: ProfileResponse | null
}

export interface ProfileInfoItem {
  labelName: string
  value: string
  addParameter: string
  hasIcon: boolean
}
