---
title: " webpack & babel"
date:  "2021-01-25"
description: "webpack, babel, Polyfill ☃︎"
tags: ["babel", "webpack"]
---

# 웹팩 / 바벨

## 코드품질 

자바스크립트는 끊임없이 진화하는 언어 입니다.
자바스크립트 엔진을 만드는 각 조직은 나름대로 우선순위를 매겨 명세서 내 어떤 기능을 먼저 구현할지 결정합니다.
명세서에 등록된 기능보다 초안에 있는 제안을 먼저 구현하기로 결정하는 경우도 있습니다.

### 바벨(Babel)
명세서에 등록되지 않은 코드를 작성하게 되는 경우가 있는데 이떄 필요한 것이 바로 바벨!
트랜스파일러라고도 하며, 모던 자바스크립트 코드를 구 표준을 준수하는 코드로 바꿔줍니다.
1. 트랜스파일러 - 코드를 재작성해주는 트랜스 파일러는 개발자 컴퓨터에서 동아가며 기존코드 -> 표준을 준수하는 코드로 변경해줌
변경된 코드는 웹사이트 형태로 사용자에게 전달된다.
웹팩과 같은 모던 프로젝트 빌드 시스템은 코드가 수정될 때마다 자동으로 트랜스 파일러를 동작시켜줍니다.

2. 폴리필
명세서엔 새로운 문법이나 기존에 없던 내장 함수에 대한 정의가 추가되곤하는데, 새롭게 표준에 추가된 함수는
명세서 내 정의를 읽고 이에 맞게 직접 함수를 구현해야 사용할 수 있습니다.

자바스크립트는 매우 동적인 언어이기에 원하면 어떤 함수라도 스크립트에 추가할 수 있습니다.
이렇게 변경된 표준을 준수할 수 있게 기존 함수의 동작 방식을 수정하거나, 새롭게 구현한 함수의 스크립트를
"폴리필(Polyfill)" 이라 부릅니다. 구현이 누락된 새로운 기능을 메꿔주는(fill) 역할을 함 

> 모던 자바스크립트를 이용해 스크립트를 작성하려면 트랜스파일러와 폴리필은 필수입니다. 

## webpack
package.json <br />
"build" : "webpack —mode production" 

>npm install style-loader css-loader html-loader html-webpack-plugin

엔트리 포인트? 처음 시작하는 파일 ex) .js <br/>
엔트리/아웃풋 <br/>
npm i -D webpack webpack-cli<br/>

* mode : 개발환경
* entry
* output

node_modules/.bin/webpack —mode development —entry ./src/app.js —output ./dist/main.js

webpack.config.js
````
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
module:{  [//](//files) 어떤 파일과 마주하게 될지 types인지 정의 내려준다
rules:[
			{
				test: /\.(js|jsx)$/, //anyfiles with js/jsx
				exclude: /node_modules/,
				//우리가 다운받은 파일은 이미 최적화 되어 있으므로,
				use:{ //what loader we has to run 
					loader: 'babel-loader'
				}
			},
			{
				test:/\.css$/, //css로 끝나는 파일에 대하여
				use:['style-loader','css-loader']// 로더를 적용한다.
			},
			{
				test:/\.html$/,
				use:{
				loader:'html-loader'
			},
			}
		],
plugins:[{
				new HtmlWebpackPlugin({
				template: './index.html'
			})
			}
		]
	}
}

````


````
class MyPlugin { 
    apply(compiler) {
    compiler.hooks.done.top("My Plugin" ,  stats ⇒{
    console.log("Plugin");})
    }
}
module.exports = MyPlugin;

.webpack.config.js
const MyPlugin = require('./myplugin');

module.exports = {
    plugins: [new My  Plugin(), ]
}
 
````


## babel

@babel/core @babel/cli <br/>

plugin = 변환 <br/>
npx babel **.js
> npm install @babel/core @babel/preset-env @babel/preset-react babel-loader

.babelrc

```jsx
{
"presets" : ["@babel/preset-env", "@babel/preset-react"]
// 자바스크립트 최신문법은 오래된 문법으로 변환시켜준다.
// @babel/preset-react 리액트 기본설정 바벨
}
```

## webpack, babel 설정 예제 파일 (sleact project)
## babel과 webpack 설정
웹팩에 타입스크립트를 받아서 > babel로 처리 > 자바스크립트로 만든다.

webpack.config.ts
```
const config: Configuration = {
  name: 'sleact', // 웹팩 설정 이름
  mode: isDevelopment ? 'development' : 'production',
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], //바벨이 처리할 확장자 목록
    alias: {
      '@hooks': path.resolve(__dirname, 'hooks'), // .../../../ 없애는거 (tsconfig.json, webpack 둘다 해 줘야함)
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
    },
  },
  entry: {
    app: './client',   // ./app.tsx 메인이 될 파일이름
    //app2: './client', //entry를 두개이상이 될 수도 있다. 
  },
    module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader', //tsx 파일에 대해서 바벨로더가 타입스트립트를 자바스크립트로
        options: {
          presets: [ //바꿔줄때 바벨에대한 설정
            [
              '@babel/preset-env', //설정한 브라우저에서나 돌아가게 해줌 (유용하게쓰임)
              {
                targets: { browsers: ['last 2 chrome versions', 'IE11'] }, //최신크롬 지원하도록 (어떤 브라우저에 대응할지 설정)
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react', //리액트 코드 바꿔줌
            '@babel/preset-typescript', //타입스크립트 코드 바꿔줌
          ],
          //핫리로딩 하기 위해 (npm run dev)
          env: {
            development: {
              //@emotion 클래스 네임 ${}적용가능
              plugins: [['@emotion', { sourceMap: true }], require.resolve('react-refresh/babel')],
            },
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
       //바벨은 css 파일도 javascript 로 바꿔준다.
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'], 
      },
    ],
  },
    plugins: [
    //타입스크립트 검사할때 블로킹식으로 해서 하나씩하게 되는데 ts, webpack 동시에 돌아가게끔해서 성능이 좋아짐
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: "./src/**/*",
      // },
    }),
    // 공통적인 것 리액트에서 NODE_ENV라는 변수를 사용 할 수 있게 해준다 *(보통 백엔드(노느런타임)에서만 사용됨)
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' })
  ],
  // 결과물
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js', //entry 의 app.js 
    publicPath: '/dist/',
  },
  //핫 리로딩을 위해서 서버 프록시 설정
  //cors 오류도 피할 수 있다. (보통 개발환경에서만 쓰임) 
   devServer: {
    historyApiFallback: true, // react router할때 필요한 설정
    port: 3090,
    publicPath: '/dist/',
    proxy: {
      '/api/': {
        target: 'http://localhost:3095',
        changeOrigin: true,
      },
    },
  },
  }
```

```
// 개발모드
if (isDevelopment && config.plugins) {
  // 리액트 핫 리로딩을 위한 코드 (보통 CRA로 세팅할 경우 다 포함되어있다) 
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true }));
}
// 배포모드
if (!isDevelopment && config.plugins) {
  // 좀 더 최적화되는 옛날 플러그을 위함
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}
```

