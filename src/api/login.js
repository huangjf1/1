import request from './request'
// 获取手机验证码
const queryPhoneCode = data => request({
  url: '/account/sms/code',
  data,
  loading: false,
  method: 'POST'
})
// 获取邮箱验证码
const queryEmailCode = data => request({
  url: '/account/email/code',
  data,
  loading: false,
  method: 'POST'
})

export default {
  queryPhoneCode,
  queryEmailCode
}