## 백준 입력 받기

1. 입력값이 한 개일 때(한 줄)
```javascript
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
```

2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
```javascript
/* ex)
110 78 158
*/
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
```

3. 입력값이 여러 줄일 때
```javascript
/* ex)
110
78
158
*/
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```

4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
```javascript
/* ex)
3
110 78 158
*/
const fs = require('fs');
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ")
```

5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
```javascript
/* ex)
3
110
78
158
*/
const fs = require('fs');
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```

## [로컬에서 테스트 & 백준에 제출 tip](https://wonyoung2257.tistory.com/36)

### template

```javascript
const fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(" ").map((item) => +item);
    let newArr = [];
    for (let j = 1; j < arr.length; j++) {
        newArr.push(arr[j]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}

function solution(c, inputTestCase) {
    let ret = 0;
    console.log(ret);
}

solution(inputC, inputTestCase);
```