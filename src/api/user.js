import request from '@/utils/request'

const BASE_URL = process.env.VUE_APP_BASE_URL

export function userInfo (options) {
  return request({
    url: BASE_URL + '/core/company/page',
    method: 'get',
    params: options
  })
}
