import { Stringifiable } from "query-string";

interface iListRow {
  id: number,
  name: string,
  resList: any,
  type: number,
  [propname: string]: any
}

