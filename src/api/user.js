// 处理用户相关的api请求
import request from '@/utils/request.js'

export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
// 导出一个对象，该对象中有方法login
