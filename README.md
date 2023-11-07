# react-note-app

## [남은 과제]
- 노트 클릭시 상세내용 모달 구현.
- 노트 내의 수정 버튼 클릭시 editor 모달 구현(노트 내용을 포함해야 함).
- 노트 select 태그에 있는 색상, 우선순위 반영.
- 편집기에서 태그 추가했을 때 어떤 태그 추가되었는지 표시.
- 정렬 기능 구현.
- CSS 깔끔하게.

## [전체적인 구성]
- 사이드바와 헤더, 메인페이지로 구성되어있고, 사이드바와 헤더를 제외한 부분은 react-router-dom을 이용해 각각 메인 페이지, 보관함, 휴지통, 에러페이지로 이동할 수 있도록 구현.
- redux와 typescript를 이용하여 변수 선언 및 상태관리.

## [사이드 바]
![sidebar](https://github.com/Jiiker/react-note-app/assets/100774811/45845d08-f6de-42ed-a2d7-f5203e16abe7)
- 'Edit Notes'를 눌러서 새로운 tag를 추가할 수 있도록 함.
- tag를 누르면 해당 tag를 속성으로 가진 노트만 나열.
- Archive와 Trash는 react-router-dom을 이용하여 별도의 페이지로 구현.

## [태그 추가 모달]
![editnotemodal](https://github.com/Jiiker/react-note-app/assets/100774811/1e76f358-40a6-47af-adf5-ec17e2606ba4)
- redux로 상태관리 중인 tagsList에 있는 tag들 나열.
- '태그 추가' 클릭시 인풋 박스 생성.
- 인풋 박스에 입력한 값을 tagsList로 전달.

## [헤더]
![header](https://github.com/Jiiker/react-note-app/assets/100774811/8d2129e2-3fc3-402c-99da-b78a5ede3c2d)
- '+' 버튼을 눌렀을 때 노트 생성 모달 구현.
- react-quill을 이용해서 에디터 만들기.
- 노트 생성 모달 안에 '태그 추가' 클릭시 태그 추가하는 모달 구현.
- 작성하기 클릭시 해당 모달에서 작성한 내용들을 redux 관리되고 있는 notes의 액션 함수에 매개변수로 전달하여 note 오브젝트 추가.

## [메인 페이지]
![pages](https://github.com/Jiiker/react-note-app/assets/100774811/49993b13-a2ed-4b54-9fb1-33820174bddd)
- 클릭한 태그에 따라 모든 노트, 해당 태그에 해당하는 노트만 볼 수 있도록 구현.
- 노트 내부는 제목, 날짜, 내용, 태그 등이 담기고, 고정 기능, 수정, 보관함 담기, 버리기 등의 기능이 있음.
- 고정 설정한 노트 따로 모아서 보여주는 기능 아직 안함.
- 보관함 담기, 버리기 아이콘을 누르면 각각 Archive, Trash 페이지로 이동함.
- 수정 기능 미완성

## [보관함(Archive) 페이지]
![archivenote](https://github.com/Jiiker/react-note-app/assets/100774811/f73bc159-18ee-498c-b45b-8d6df9fac4c5)
- mainpage에 있는 노트 고정 기능은 빼고, 보관함 넣기 기능 대신 되돌리기 기능을 넣어서 mainpage로 돌려보낼 수 있도록 구현.

## [휴지통(Trash) 페이지]
![trashnote](https://github.com/Jiiker/react-note-app/assets/100774811/282e281f-f734-405b-88d4-89a49bf5eb7f)
- 고정 기능, 보관함 넣기 기능은 빼고, 되돌리기 기능을 넣고 버리기 기능은 완전 삭제 기능으로 변경.
