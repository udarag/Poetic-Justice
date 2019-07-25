import api from '@/services/api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  },
  login (credentials) {
    return api().post('login', credentials)
  },
  poem (words) {
    return api().post('poem', words)
  },
  getPoems () {
    return api().get('getPoems')
  }
}
