export const login = (user, token, refresh) => {
    localStorage.setItem('USER', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('refresh_token', refresh)
}

export const getUser = () => {
    const user = localStorage.getItem('USER')
    try {
        return JSON.parse(user)
    } catch (e) {
        return null
    }
}

export const logout = () => {
    localStorage.removeItem('USER')
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
}

export const getToken = () => {
    try { 
        return localStorage.getItem('token')
    } catch (e) {
        //이거 토큰없으므로 처리 해 주기
        return null
    }
}

export const getRefresh = () => {
    try { 
        return localStorage.getItem('refresh_token')
    } catch (e) {
        //이거 토큰없으므로 처리 해 주기
        return null
    }
}