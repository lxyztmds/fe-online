export interface userInfo {
    id: string
    name: string
}
export class InitData{
    userList:userInfo[]=[]//展示的内容的数据,接受后台返回的数据
}