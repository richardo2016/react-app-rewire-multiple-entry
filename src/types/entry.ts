
export interface EntryParam {
  entry: string,
  entryNameHash?: boolean,
  template?: string,
  outPath?: string
}

export interface EntryWebpack {
  name: string,
  entry: string,
  template: string,
  outPath: string
}

export interface EntryMap {
  [key:string]:string
}