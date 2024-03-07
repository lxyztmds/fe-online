import delay from '../utils/delay'
import { orgInfo } from '@/type/org'
const getOrgData = (): orgInfo[] => {
  const count = Math.floor(Math.random() * 20)
  return Array(count)
    .fill(0)
    .map(() => {
      return {
        id: Math.random() + '',
        name: (Math.random() + 1).toString(36).substring(7),
        children:[],
        leaf:false
      }
    })
}

const query = (parentId: string = '0') => {
  return delay(getOrgData())
}

const orgApi = {
  query,
}

export default orgApi
