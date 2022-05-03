// 최신 ECMAScript 문법을 구형 ECMAScript(ES5) 문법으로 변환해주는 컴파일러

const { plugins } = require("./.postcssrc");

module.exports = {
  // 모든 javascript파일들을 변환해줌
  presets: ['@babel/preset-env'],
  plugins: [
    // async, await 패턴 사용이 가능해진다
    ['@babel/plugin-transform-runtime']
  ]
}



// package.json파일 옵션 추가
// browserslist 옵션은 현재 npm 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도입니다.
// 그 명시를 Babel 패키지가 활용하게 됩니다.