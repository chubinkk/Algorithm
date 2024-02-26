function isPalindrome(arr) {
    let left = arr[0];
    let right = arr[arr.length-1]
    arr.forEach(element => {
        
    });
    
}

function solution(n, m) {
    let answer = 0;
    let strNum = [];

    for (n ; n <= m; n++) {
        strNum.push(n.toString());
    }

    isPalindrome(strNum);

    return answer;
}

//  출력
let n = 1;
let m = 30;
solution(n, m);

// let n = 100;
// let m = 300;
// solution(n, m);