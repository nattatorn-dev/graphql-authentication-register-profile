import localStorage from 'localStorage'
import router from './router'

export default {
    login(){
        return localStorage.getItem('id')
    },
    logout(){
        router.go('/auth')
        localStorage.removeItem('id')
        localStorage.removeItem('public_key')
    }
}