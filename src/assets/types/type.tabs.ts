export interface ITab {
  tabId: string
  label: string
  labelMobile: string
  icon: string
  iconWidth?: string | number
  iconHeight?: string | number
  TabClassName: string
}

export interface ITabProps {
  tabs: ITab[]
  activeTab: string
  classExt: string
}
