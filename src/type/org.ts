export interface orgInfo {
    id: string
    name: string
    children: orgInfo[],
    leaf:boolean
}

export class InitData {
    orgList: orgInfo[] = []//展示的内容的数据,接受后台返回的数据
}