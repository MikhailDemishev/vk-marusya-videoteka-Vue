export type ProfileTabId = 'profile' | 'favorites'

export interface ITab {
  tabId: ProfileTabId
  label: string
  labelMobile: string
  icon: string
  iconWidth?: string | number
  iconHeight?: string | number
  TabClassName: string
}

export interface ITabProps {
  tabs: ITab[]
  activeTab: ProfileTabId
  classExt: string
}
