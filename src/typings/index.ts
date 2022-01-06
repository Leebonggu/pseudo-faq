
export type ActionType = {
  type: string
  payload?: Record<string, unknown>
}

export interface FAQTabType {
  id: number
  title: string
}
export interface FAQContentType {
  id: string | number
  summary: string
  details?: React.ReactNode
}
export interface FAQCategoryType {
  id: string | number
  title: string
  contents: FAQContentType[]
}