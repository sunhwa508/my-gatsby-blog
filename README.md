# 개츠비로 기술블로그 만들기
![image](https://user-images.githubusercontent.com/61695175/124564202-ca38dd00-de7b-11eb-8b9d-4d7e712644ae.png)


## 초기세팅 Gatsby cli
>npx gatsby new gatsby-blog

## deploy
>netlify
* 깃에 연동 되어, 코드 커밋시 자동 배포 됩니다. 
<br/>https://sunhwa.netlify.app/

## 🧐 What's inside?
A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: 이 디렉토리에는 프로젝트가 의존하는 모든 코드 모듈 (npm 패키지)이 자동으로 설치됩니다.

2.  **`/src`**: 이 디렉토리에는 사이트 헤더 또는 페이지 템플릿과 같이 사이트의 프런트 엔드에 표시되는 내용 (브라우저에 표시되는 내용)과 관련된 모든 코드가 포함됩니다. src"소스 코드"에 대한 규칙입니다.

3.  **`.gitignore`**: 이 파일은 버전 기록을 추적하거나 유지하지 않아야하는 파일을 git에게 알려줍니다. (깃에 커밋되지 않게 합니다.)

4.  **`.prettierrc`**: Prettier는 코드 서식을 일관되게 유지하는 데 도움이되는 도구입니다.

5.  **`gatsby-browser.js`**: 이 파일은 Gatsby가 Gatsby 브라우저 API (있는 경우)의 사용을 찾을 것으로 예상하는 곳 입니다. 이를 통해 브라우저에 영향을 미치는 기본 Gatsby 설정을 사용자 정의 / 확장 할 수 있습니다.

6.  **`gatsby-config.js`**:  이것은 Gatsby 사이트의 기본 구성 파일입니다. 여기에서 사이트 제목 및 설명, 포함 할 Gatsby 플러그인 등과 같은 사이트 (메타 데이터)에 대한 정보를 지정할 수 있습니다 . 
자세한 내용은 개츠비 구성 문서 를 확인하세요.

7.  **`gatsby-node.js`**: 이 파일은 Gatsby가 Gatsby Node API (있는 경우)의 사용을 찾을 것으로 예상하는 곳 입니다. 이를 통해 사이트 빌드 프로세스의 일부에 영향을 미치는 기본 Gatsby 설정을 사용자 지정 / 확장 할 수 있습니다.

8.  **`gatsby-ssr.js`**: :이 파일은 Gatsby가 Gatsby 서버 측 렌더링 API (있는 경우)의 사용을 찾을 것으로 예상하는 곳 입니다. 이를 통해 서버 측 렌더링에 영향을 미치는 기본 Gatsby 설정을 사용자 정의 할 수 있습니다.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** 이것은 프로젝트에 설치된 npm 종속성의 정확한 버전을 기반으로 자동 생성 된 파일입니다. (이 파일을 직접 변경하지 않습니다).

11. **`package.json`**: 메타 데이터 (프로젝트 이름, 작성자 등)와 같은 항목이 포함 된 Node.js 프로젝트 용 매니페스트 파일입니다. 이 매니페스트는 npm이 프로젝트에 설치할 패키지를 아는 방법입니다.

12. **`README.md`**: 프로젝트에 대한 유용한 참조 정보가 포함 된 텍스트 파일입니다.

## Reference

[gatsby 공식문서](https://www.gatsbyjs.com/starters/?)