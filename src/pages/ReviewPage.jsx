import React from 'react';

const ReviewPage = () => {
  return (
    <div className="review-page">
      <h2>스터디 회고</h2>
      <div className="review-content">
        <h3>1. 이번 과제를 진행하며 느낀 점 및 새롭게 알게 된 점</h3>
        <p>
          React의 상태 관리와 REST API 통신을 직접 연결해보면서, 화면에 보이는 데이터가 단순한 로컬 상태가 아니라 서버와 주고받는 값이라는 감각을 익힐 수 있었습니다.
          특히 <code>fetch</code>로 서버에 변경을 요청한 뒤, 그 결과를 다시 상태에 반영해 화면을 갱신하는 흐름을 여러 컴포넌트에 걸쳐 일관되게 구현하면서 React 데이터 흐름에 대한 이해가 깊어졌다고 생각합니다.
          fetch API의 응답이 성공했는지 먼저 확인한 뒤에 데이터를 처리해야 한다는 것과, 컴포넌트 간에 상태 갱신 함수를 props로 전달해 데이터 동기화를 맞추는 패턴을 새롭게 알게 되었습니다.
        </p>

        <h3>2. 어려웠던 점과 해결 과정</h3>
        <ul>
          API 호출이 끝나기 전에 상태를 업데이트하면 화면이 최신 데이터를 반영하지 못하는 문제가 있었습니다.
          API 호출을 먼저 await로 기다린 뒤, 성공했을 때만 콜백을 호출하도록 순서를 정리하여 해결했습니다.
        </ul>
      </div>
    </div>
  );
};

export default ReviewPage;
