import { request } from '../request'

export const getProduct = (params) => {
  return request.get(params ? `/product?search=${params}` : `/product`)
}
