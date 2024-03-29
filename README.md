# React 심화 아웃소싱 프로젝트 "ReacTube"

## 🖥️ 프로젝트 소개

"ReacTube" - Youtube API를 이용하여 리액트 관련 영상을 공유하는 웹사이트

## 🖥️ 테스트 계정
- email : test@test.com
- password : Test1234 

## 🎬 구현 사이트 이미지

- 배포 링크 : https://reactube-publish.vercel.app/
  |페이지|이미지|
  |:------:|:------:|
  |메인 페이지|![메인페이지](./src/assets/screenshot/mainpage.png)|
  |로그인 페이지|![로그인페이지](./src/assets/screenshot/Loginpage.png)|
  |회원 가입 페이지|![회원가입페이지](./src/assets/screenshot/Signupage.png)|
  |홈 페이지|![홈페이지](./src/assets/screenshot//homepage.png)|
  |페이지 내 검색 결과|![페이지 내 검색 결과](./src/assets/screenshot/pagesearchresult.png)|
  |Youtube 검색 결과|![Youtube 검색 결과](./src/assets/screenshot/youtubesearchresult.png)|
  |상세 페이지|![상세페이지](./src/assets/screenshot/detailpage.png)|
  |댓글|![댓글](./src/assets/screenshot/comments.png)|

## 🕰️ 개발 기간

- 2024.02.23 (금) - 2024.02.28 (수)

## ❗ 요구 사항

- Youtube API 사용하기

## 📌 구현 기능

- 회원가입, 로그인 (supabase auth), 가입 확인 메일 (resend api)
- 로그인 인증 완료 후 홈페이지로 이동
- 홈페이지
- 1. 글 작성, 다른 유저들의 글 확인, 검색 기능, 글 클릭 시 상세페이지로 이동
- 2. Youtube 검색 API를 이용하여 검색어에 따른 결과 출력, 로딩
- 상세페이지
- 1. Youtube iframe을 이용하여 영상 재생 기능
- 2. 댓글 작성 기능 : 가입한 아이디 or 닉네임 입력하여 설정
- supabase : 작성한 글, 댓글, 유저에 대한 정보 저장

## 🔗 컴포넌트 구조

- 컴포넌트 구조 / 레이아웃, 페이지, redux, routes 구조
- ![컴포넌트 구조](./src/assets/screenshot/component%20구조.png), ![다른 구성요소](./src/assets/screenshot/component%20구조2.png)

## ⚙️ 개발 환경 / 기술스택

- npm
- create-react-app
- React
- JavaScript
- HTML
- CSS
- RTK
- React-Query
- supabase
- vercel
