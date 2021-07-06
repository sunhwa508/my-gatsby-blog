---
title: " 웹 벨 바 팩 "
date:  "2021-01-25"
description: "☃︎"
tags: ["babel"]
---

### 웹팩 / 바벨 

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

크로스 브라우징을 해결하기 위해 나옴 (트렌스파일) <br/>
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