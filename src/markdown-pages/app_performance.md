---
title: "앱성능개선"
date: "2021-01-24"
description: "작성중..︎"
---

### 1. useMemo, useCallback, useRef, React.memo 렌더량 줄이기

컴퍼넌트가 React.memo()로 래핑 될 때, React는 컴퍼넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.

컴퍼넌트가 같은 props로 자주 렌더링되거나, 무겁고 비용이 큰 연산이 있는 경우, React.memo()로 컴퍼넌트를 래핑할 필요가 있다.

### 2. 안티패턴 피하기

### 3. React Native에서 "Remote debugger is in a background tab"경고 제거

```
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);
```

[https://stackoverflow.com/questions/41146446/get-rid-of-remote-debugger-is-in-a-background-tab-warning-in-react-native](https://stackoverflow.com/questions/41146446/get-rid-of-remote-debugger-is-in-a-background-tab-warning-in-react-native)

[https://crosscheck.tistory.com/2174](https://crosscheck.tistory.com/2174)

### 4. react native performance monitor
````
flipper
React Profiler
React-DevTools
why-did-you-render
bundle-visualizer
react-native 번들에 무엇이 있는지 확인한다.  
````


### 5. RAM format


### 6. inline require 사용


### 7. use native driver

[useNativeDriver] : True로 변경
매번 브릿지를 거치지 않고 네이티브에서 애니메이션을 수행하므로 부드러운 움직임을 나타낼 수 있습니다.


### 8. inline 요소 사용 지양
````
<Component onPress={()⇒onclick()} />

const onClick = () ⇒ {}
<Component onPress={onClick} />

````

### 9. clean up 처리하기 (login presenter)

````
setTimeout(()=>{
    setIsTimeover(false);
},1000);
````

````
const timeOut = setTimeout(()=>{
                    setIsTimeover(false);
                },1000);

clearTimeOut(timeOut)
````

useEffect 내의 componentWillMount(return () => {})를 사용할 경우 빈배열의 의존성 피하기.


### 9.1

cache network requests data
cache image

library 사용시 native library 위주로 사용하기

### 10. Styled-component

-> emotion 변경 

  > Animated, theme 적용

 참고 : [https://emotion.sh/docs/styled](https://emotion.sh/docs/styled)

  > Color > Theme 적용

  참고 : [https://emotion.sh/docs/theming](https://emotion.sh/docs/theming)


### 11. 글자를 빼서 공통적으로 관리(언어팩)


### 12. Hermes 적용(JavaScript engine, 현재 android 한정)

React-native Version ≥ 0.60.4

[참고] : 

    [https://engineering.fb.com/2019/07/12/android/hermes/](https://engineering.fb.com/2019/07/12/android/hermes/)

    [https://reactnative.dev/docs/hermes](https://reactnative.dev/docs/hermes)

android/app/build.gradle 파일수정

```
project.ext.react = [
      entryFile: "index.js",
     enableHermes: false  // clean and rebuild if changing
     enableHermes: true  // clean and rebuild if changing
  ]
```

프로젝트 clean & build

```bash
$ cd android && ./gradlew clean
```

### 13. Production 시 console.* 방지

bundled(webpack / metro에 의해 묶인?) App에서 console.log는 Javascript thread에 병목현상을 발생시킬 수 있음.

babel plugin 설치

```bash
npm i babel-plugin-transform-remove-console --save-dev
```

.babelrc 수정

```json
{
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
}
```

### 14.
> [https://www.novemberfive.co/blog/react-performance-navigation-animations](https://www.novemberfive.co/blog/react-performance-navigation-animations)
