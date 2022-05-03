// ESM
// CommonJS (Node.js)

// import autoprefixer from 'autoprefixer'

// const autoprefixer = require('autoprefixer')


// export {
//   plugins: [
//     autoprefixer
//   ]
// }

// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

// 간소화
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

// package.json파일 옵션 추가
  // browserslist 옵션은 현재 npm 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도입니다.
  // 그 명시를 Autoprefixer 패키지가 활용하게 됩니다.