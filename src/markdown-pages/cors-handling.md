---
title: "CORS (Cross-Origin-Resource Sharting)"
date: "2021-07-07"
description: "CORS (Cross-Origin-Resource Sharting) 이해하기"
tags: ["javascript", "web"]
---

# CORS (Cross-Origin-Resource Sharting) 이해하기

CORS는 모든 웹 개발자라면 어느 시점에서 무조건 직면하게 되는 문제입니다.
때문에 CORS와 오류수정법을 알아봅니다.

![image](https://user-images.githubusercontent.com/61695175/121845880-167f7a00-cd21-11eb-98ec-7b560e7d493a.png)

익숙해 보이는 위 에러메시지가 바로 CORS에러!
위 둘의 출처가 다르기 때문에 CORS에 의해 차단되는 http://localhost:1234 리소스에 대한 요청을 시도하고 있는 것입니다.

이는 사람들이 제어하지 않는 서버의 데이터/API에 액세스하는 것을 방지하기위한 것입니다.

그러나 CORS는 동일한 출처 간의 요청에 대해서는 신경 쓰지 않습니다.
사이트의 출처는 단순히 체계 (http 또는 https), 호스트 이름 (localhost와 같은 도메인 이름) 및 포트 (3000, 80 등)입니다.

클라이언트와 서버간의 요청을 하고 서로 다른 URL에 Access-Control-Allow-Origin있는 경우 각 요청과 함께 서버에서 클라이언트로 
헤더를 전달해야 합니다. 이 헤더의 값은 서버가 데이터에 액세스 할 수 있도록 허용하는 소스입니다.

* expree와 함께 cors 라이브러리를 사용하여 cors오류를 처리하는 방법
우선 cors 라이브러리를 설치한 후 Express 앱에 다름 코드를 작성합니다. 
```
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({ origin: 'http://localhost:1234' }))

// Server code 

app.listen(3000)
```
이 코드는 Access-Control-Allow-Origin값이 있는 헤더 를 보내도록 앱에 지시합니다.
모든 URL이 사이트에 액세스하도록 허용하려면 * 를 사용하여 URL의 원본간 요청을 허용합니다. 

### CORS Preflight

교차원본 URL에 대한 PUT요청 또는 기타 복잡한 요청을 수행하는 경우 위의 작업 만 실제로 작동하지 않습니다.
이는 브라우저가이 PUT 요청을 할 수 있는지 여부를 묻는 서버에 프리 플라이트 요청을 보내기 때문입니다.
이 프리 플라이트 요청에는 Access-Control-Request-Method및 Access-Control-Request-Headers헤더 가 포함됩니다 .
이러한 헤더에는 클라이언트가 요청에 사용하려는 메소드 및 헤더의 값이 포함되어 있으며 메소드와 헤더가 유효한 경우 서버가 다시 반환합니다.

* express에서 cores라이브러리를 사용하는 방법
```
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:1234',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}))

// Server code 

app.listen(3000)
```

### Credentials 다루기

cors에서 처리하기 가장 어려운 마지막 문제는 쿠키입니다. 
쿠키전송을 허용하려면 먼저 credentials가져오기 옵션으로 credentials가 포함되어 있음을 요청해 알려야 합니다. 

```
fetch(url, { credentials: 'include' })
```

* cors 라이브러리를 사용

```
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:1234',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}))

// Server code 

app.listen(3000)
```
