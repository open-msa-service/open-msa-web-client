# 커뮤니티 사이트(UI)

**커뮤니티 사이트**의 서버 보기([이동](https://github.com/open-msa-service/open-msa-web-server))


### Auth 관리
#### axios interceptor
- registerServiceWorker.js
- axios.interceptors.request에서 request에 관한 인증 관리
- axios.interceptors.response에서 response에 관한 인증 관리
- response에서 refresh-token에 관한 관리 진행


#### local storage
- User : 사용자 id 저장
- token : access-token 저장
- refresh-token : refresh-token 저장
- login(user, token, refresh-token) : storage 저장
- logout : storage 삭제 진행


### API 명세
Server API 명세는 커뮤니티 사이트의 서버 **ReadMe**를 참고해 주시기 바랍니다.
