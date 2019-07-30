// token
// 1.保存token
// 2.多个组件都要用

const USER_KEY = 'user'
// 设置
export const getUser = () => JSON.parse(window.localStorage.getItem(USER_KEY))
// 获取
export const setUser = (data) => window.localStorage.setItem(USER_KEY, JSON.stringify(data))
// 移出
export const removeUser = () => window.localStorage.removeItem(USER_KEY)
