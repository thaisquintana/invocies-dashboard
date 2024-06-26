export type Columns = {
  header?: string
  label?: string
  disableSortBy?: boolean
  hasCheckbox?: boolean
  actions?: boolean
  icon?: boolean
  id?: string
}

export type UserData = {
  id: number
  name?: string
  email?: string
  plan?: string
  status?: string
}

export type TableProps = {
  data: UserData[]
  columns: Columns[]
  buttonActions?: (rowId: number) => React.ReactElement
}

export type Rows = {
  id: number
  name?: string
}
