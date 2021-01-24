---
title: "앱성능개선"
date: "2021-01-24"
---

### 1. useMemo, useCallback, useRef, React.memo 렌더량 줄이기

컴퍼넌트가 React.memo()로 래핑 될 때, React는 컴퍼넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.

컴퍼넌트가 같은 props로 자주 렌더링되거나, 무겁고 비용이 큰 연산이 있는 경우, React.memo()로 컴퍼넌트를 래핑할 필요가 있다.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/378ee5b1-3e8f-4173-a678-4b2da01c9099/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210124T110759Z&X-Amz-Expires=86400&X-Amz-Signature=3e7816ff386f7e0324d992705b98b6a48cacd91588de61b952ec4b04f1dac86f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)
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

![clean up](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1e10e74-dee8-4c6e-aebf-78f50fee1d4f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210124T110258Z&X-Amz-Expires=86400&X-Amz-Signature=59a058f69a836076149a1b8a43ebcae5484a6858e02f06ba642898065757101d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

before

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2e8fcd4-494f-405b-a23d-e4a3f27cc11f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210124T110323Z&X-Amz-Expires=86400&X-Amz-Signature=67e23e97ee333d34e85493bb597ab00b03953f418d0a949f883318eb7f1c802a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


after

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9335fe83-91cb-4b68-a651-e4be2347c589/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210124T110358Z&X-Amz-Expires=86400&X-Amz-Signature=ae83fe5bf14dacbec52218b595d26cd2914dfadf27d49f9c158679f376ff6746&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e6ab5ae5-e4ba-475d-8684-c3f7de5d63d9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210124T110435Z&X-Amz-Expires=86400&X-Amz-Signature=dd08db32f12dd69b9b16d1b53fe765ddfe6cd3d2adaa6fff9e4625eaf1f6154f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0a2d1b8f-c022-4bd3-8606-bd176cb9e8c6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210124T110506Z&X-Amz-Expires=86400&X-Amz-Signature=5493bf9765ff7d782464dab848407e1b395244b8e1532f2ee02c16c2d397e502&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

### 9.1

cache network requests data
cache image

library 사용시 native library 위주로 사용하자 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b71b407e-84bf-4332-a486-09d01264aa5a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b71b407e-84bf-4332-a486-09d01264aa5a/Untitled.png)

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
