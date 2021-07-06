---
title: "bubbling, capturing"
date: "2021-06-10"
description: "버블링과 캡처링"
tags: ["javascript"]
---

## 버블링과 캡쳐링

### 버블링 🎈🎈
한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 작동하고, 이어서 부모 요소의 핸들러가 동작합니다.
가장 최상단의 조상요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작합니다.
> 다만 focus이벤트와 같이 버블링 되지 않는 이벤트도 있습니다.

### 버블링 중단하기
***event.stopPropagation() 으로 버블링을 중단 할 수 있습니다!***

요소에 할당된 다른 핸들러의 동작도 막으려면 event.stopImmediatePropagation()을 사용해야 합니다.


### 캡처링
```
1. 캡처링 단계 – 이벤트가 하위 요소로 전파되는 단계
 HTML → BODY → FORM → DIV
2. 타깃 단계 – 이벤트가 실제 타깃 요소에 전달되는 단계
 P
3. 버블링 단계 – 이벤트가 상위 요소로 전파되는 단계
 DIV → FORM → BODY → HTML
```

![image](https://user-images.githubusercontent.com/61695175/121494869-170fcc00-ca14-11eb-9753-770f4b779de2.png)

<이미지참고>javascript.info

<td>를 클릭하면 이벤트 최상단 조상에서 시작해 아래로 전파 됩니다(캡처링 단계)
이벤트가 타깃 요소에 도착 (타깃 단계)
다시 위로 전파 된다 (버블링 단계)
 
캡처링 단계를 이용해야 하는 경우는 흔치 않다.
  
### 이벤트 위임(Delegation)
캡처링과 버블링을 활용하면 강력한 핸들링 패턴인 이벤트 위임을 구현 할 수 있습니다.
이벤트 위임으로 요소마다 핸들링을 할당 하지 않고, 요소의 공통 조상에 이벤트 핸들러를 단 하나만 할당해도 여러 요소를 한꺼번에 다룰 수 있습니다.
  
```
<div id="menu">
  <button data-action="save">저장하기</button>
  <button data-action="load">불러오기</button>
  <button data-action="search">검색하기</button>
</div>

onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
}
```

### Reference
KoJavaScriptInfo