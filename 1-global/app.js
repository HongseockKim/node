const fs = require('fs');//vs code가 node 모듈이구나 라고 인식;

console.log(global);
global.hello = () =>{
    console.log('helllow WTF');
}
global.hello();
//여기에서 global 이란 기본 적으로 nodejs 가 가지고 있는 함수 즉 명령어
//nodejs doc 사이트에서 global 명령어들을 찾아볼수 있다.
//컨트롤 누르고 확인하고싶은 명령어 클릭하면 그에 해당하는 많은 명령어를 볼수 있음;