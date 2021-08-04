## 도입 배경

Node.js는 처음 부터 끝까지 부품들을 조립하다 보면 프로젝트가 탄생한다.

뿐만아니라 규칙도 없고, 제약도 없이 자유롭게 개발이 가능하다.

자유도가 높아 사람마다 스타일과 지향하는 바가 달랐다.

그렇다 보니 팀원끼리 규칙을 맞춰야 하는 시간을 투자해야 했고 규모가 커지면 시간은 덤으로 늘어났다.

    “어떠한 패턴을 따라야 할까?”

    “함수형 프로그래밍으로 해야할까?“

    “폴더는 어디에 넣을까? 파일명은 이걸로 할까?“

    “라우터는 어디에 넣을까? 몇개 만들까?“ …

자유분방한 Node.js를 구조가 있는 규칙이 있는 방법으로 다소 엄격하게 다스릴 프레임워크가 필요했다.

그렇게 Nest.js 를 접하게 되었다.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm -g @nestjs/cli
```

## Project settings
```bash
$ nest
$ nest new <project-name>
```

## Installation ORM & DB

```bash
$ npm install --save @nestjs/typeorm typeorm mysql2
```

## Installation Class (자주 생성하는거 위주)

```bash
$ nest g co (Contoller 생성)
$ nest g s (Service 생성)
$ nest g mo (Module 생성)
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
