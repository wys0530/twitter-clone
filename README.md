## 프로젝트 구조

twitter-clone/
├── public/
├── src/
│ ├── components/
│ │ ├── post/
│ │ │ ├── TweetForm.jsx # 글 작성 폼
│ │ │ ├── TweetItem.jsx # 작성된 트윗 보기 (1개 컴포넌트)
│ │ │ ├── DeleteModal.jsx # 글 삭제 모달
│ │ │ └── ReplyItem.jsx # 글 상세 조회의 댓글 (1개 컴포넌트)
│ │ ├── profile/
│ │ │ ├── ProfileHeader.jsx # 프로필 상단 (사진, 정보 등)
│ │ │ └── ProfilePost.jsx # 해당 사용자가 작성한 트윗 목록
│ │ └── common/
│ │ ├── NavBar.jsx # 좌측 내비게이션 바
│ │ └── Trend.jsx # 우측 트렌드 바
│ ├── pages/
│ │ ├── Home.jsx # 초기화면, 메인 화면
│ │ │ (NavBar + TweetForm + TweetItem 리스트 + Trend)
│ │ ├── Profile.jsx # 프로필 보기
│ │ └── TweetDetail.jsx # 트윗 상세 보기
│ ├── router.jsx # 라우팅 설정 파일
│ └── App.jsx # 앱 전체 레이아웃 및 라우터 출력
