# KWEB 2026-1 FE 구제 과제 — 할 일 관리(To-Do) 웹 애플리케이션

이 저장소는 KWEB 2026학년도 1학기 프론트엔드 준회원 승급 **구제 과제**의 시작 템플릿입니다.
`GET /todos` (전체 할 일 조회) 기능과 UI 뼈대는 **정답 예시**로 완성되어 있습니다. 이 패턴을 참고하여 나머지 `TODO` 부분을 직접 구현하세요.

과제 명세 전문은 별도로 제공된 `FE 구제 과제 (2026-1).md` 문서를 참고하세요.

---

## 제출 방법 (Fork & Pull Request)

1. 이 템플릿 저장소를 본인 계정으로 **Fork** 합니다.
2. Fork 한 저장소를 clone 하여 과제를 구현합니다.
3. 완료 후 본인 fork에서 **원본 저장소로 Pull Request**를 생성합니다.
4. PR 설명에 아래 3가지를 **본인의 언어로** 작성합니다.
   - 구현하면서 내린 주요 설계 결정
   - 막혔던 부분과 해결 방법
   - 로컬 실행 방법 요약

---

## 폴더 구조 (React + Vite)

```
src/
├── main.jsx                # React 앱 엔트리 포인트
├── App.jsx                 # 조건부 렌더링(탭 전환) 및 메인 레이아웃
├── api/
│   └── todoApi.js          # 백엔드(Mock API) 통신 함수 모음 (fetch)
├── components/
│   ├── TodoList.jsx        # [정답 예시] 할 일 목록 렌더링
│   ├── TodoItem.jsx        # 개별 할 일 아이템 (수정/삭제 로직 필요)
│   └── TodoInput.jsx       # 할 일 추가 입력폼 (생성 로직 필요)
├── pages/
│   ├── TodoPage.jsx        # 할 일 관리 메인 페이지
│   └── ReviewPage.jsx      # 스터디 회고 페이지
└── styles/
    ├── index.css           # 글로벌 CSS 변수 및 리셋
    └── App.css             # 컴포넌트별 디자인
```

---

## 로컬 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 & Fake API 실행

`json-server`를 이용한 Fake API 서버와 `Vite` 개발 서버를 동시에 실행합니다.

```bash
npm start
```

정상적으로 실행되면 아래 두 개의 서버가 구동됩니다:
- Fake API 서버: `http://localhost:3000` (`db.json` 기반)
- React 앱: `http://localhost:5173` (터미널 출력에 따라 포트가 다를 수 있습니다)

---

## 구현 체크리스트

- [ ] `GET /todos/:id` — 개별 할 일 데이터 조회 (선택적 사용)
- [ ] `POST /todos` — 새로운 할 일 생성
- [ ] `PATCH /todos/:id` — 할 일 완료 상태 토글
- [ ] `DELETE /todos/:id` — 할 일 삭제
- [ ] 스터디 회고 페이지 내용 작성 (`src/pages/ReviewPage.jsx` 수정)
- [ ] 조건부 렌더링으로 탭 메뉴 완성 (정답 예시로 일부 제공)

> **Hint**: `src/api/todoApi.js`에 fetch 호출 로직을 먼저 확인한 후, 컴포넌트 동작을 살펴보세요.

---

## 생성형 AI 사용 명시 (필수)

과제 수행 중 생성형 AI를 사용했다면, 사용한 부분과 프롬프트를 아래에 정확히 적어주세요.
단, 스터디 회고 페이지의 내용과 PR 설명은 반드시 **본인이 직접** 작성해야 합니다.

- (예시) `POST /todos`의 fetch 요청 작성에 참고 — 프롬프트: "fetch를 사용하여 json-server에 POST 요청을 보내는 방법은?"
-

## Disclaimer

이 템플릿은 제작에 생성형 AI가 사용되었습니다.
