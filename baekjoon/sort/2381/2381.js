/*
문제
N(1 ≤ N ≤ 50,000)개의 점들이 있을 때, 최대 L1-metric 거리를 찾으시오.

두 점의 좌표가 (a, b), (c, d)일 때, 두 점의 L1-metric 거리는 |a-c|+|b-d|이다.

입력
첫째 줄에 N이 주어진다. 다음 N개의 줄에는 각 점의 x, y좌표가 주어진다. 각 좌표의 범위는 -1,000,000이상 1,000,000이하이다.

출력
첫째 줄에 최대 거리를 출력한다.

예제 입력 1
5
1 1
3 5
2 7
8 1
4 4

예제 출력 1
12
*/

// 입력 받기
const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split("\n");
const inputN = Number(input[0]);
const inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(input[i].toString().trim().split(" ").map(v => Number(v)));
}

// 문제풀이
// max(x+y) - min(x+y) 혹은
// max(x-y) - min(x-y) 중에 답이 있으므로 이 값을 찾아서 최댓값을 구한다.
function solution(inputN, inputArr) {
    let ret = [];
    
    //x+y 배열
    let sumVal= inputArr.map(inputArr => inputArr[0]+inputArr[1]);
    //x-y 배열
    let subVal = inputArr.map(inputArr => inputArr[0]-inputArr[1]);

    ret.push(Math.max(...sumVal) - Math.min(...sumVal));
    ret.push(Math.max(...subVal) - Math.min(...subVal));

    console.log(Math.max(...ret));
}

//정답 출력
solution(inputN, inputArr);