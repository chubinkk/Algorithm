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

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
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

