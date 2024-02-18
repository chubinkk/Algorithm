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

// const fs = require('fs');
// const [n,input] = fs.readFileSync("/dev/stdin").toString.trim().split("\n");
// const inputArr = input.trim().split(" ");


// 입력 받기
// const fs = require("fs");
// let input = fs.readFileSync(__dirname + "/input.txt").toString();
// input = input.trim().split("\n");
// const inputC = +input[0];
// const inputTestCase = [];

// for (let i = 1; i <= inputC; ++i) {
//     const arr = input[i].split(" ").map((item) => +item);

//     let newArr = [];
//     for (let j = 1; j < arr.length; j++) {
//         newArr.push(arr[j]);
//     }

//     const testCase = {
//         N: arr[0],
//         arr: newArr,
//     };
//     inputTestCase.push(testCase);
// }

// 입력 받기
const fs = require('fs');
// const [n,input] = fs.readFileSync(__dirname + "/input.txt").toString().trim().split("\n");
// const inputArr = input.trim().split(" ");

// console.log(n, inputArr);

const input1 = fs.readFileSync(__dirname + "/input.txt").toString().trim().split("\n");
const inputN = Number(input1[0]);
const inputLine = [];
for (let i = 1; i < input1.length; i++) {
  inputLine.push(input1[i].toString().trim().split(" ").map(v => Number(v)));
}
 
console.log(inputN); // ? 5
inputLine.forEach(element => {
    console.log(element);
});

// 문제풀이
// function solution(c, inputTestCase) {
function solution(n, inputArr) {
    let ret = 0;
    
    let xVal = inputTestCase.map(inputTestCase => inputTestCase[0]);
    let yVal = inputTestCase.map(inputTestCase => inputTestCase[1]);

    console.log(xVal);
    console.log(yVal);
    console.log(ret);
}

//정답 출력
// solution(inputC, inputTestCase);
// solution(n, inputArr);