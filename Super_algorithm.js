function recurFib(n) {
    if(n <= 2) {
        return 1;
    }else {
        return recurFib(n -1) + recurFib(n - 2);
    }
}

function dynFib(n) {
    var val = [];
    for(var i = 0; i <= n; i ++) {
        val[i] = 0;
    }
    if(n == 1 || n == 2) {
        return 1;
    }else {
        val[1] = 1;
        val[2] = 1;
        for(var i = 3; i <= n; i ++) {
            val[i] = val[i - 1] + val[i - 2];
        }
        return val[n];
    }
 }

function iterFib(n) {
    var result = 1;
    var last = 1;
    var nextLast = 1;
    for(var i = 3; i <= n; i ++) {
        result = last + nextLast;
        last = nextLast;
        nextLast = result;
    }
    return result;
}

 //寻找最长公共字串
function lcs(word1, word2) {
    var len1 = word1.length,
        len2 = word2.length;
    var max = 0;
    var index = 0;
    var lcsarr = [];
    var retstr = '';
    for(var i = 0; i <= len1; i ++) {
        lcsarr[i] = [];
        for(var j = 0; j <= len2; j ++) {
            lcsarr[i][j] = 0;
        }
    }

    for(var i = 0; i <= len1; i ++) {
        for(var j = 0; j <= len2; j ++) {
            if(i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            }else {
                if(word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                    if(max < lcsarr[i][j]) {
                        max = lcsarr[i][j];
                        index = i;
                    }
                }else {
                    lcsarr[i][j] = 0;
                }
            }
        }
    }

    for(var k = index - max; k <= max; k ++) {
        retstr += word2[k];
    }
    return retstr;
}

//背包问题：递归解决法案
function max(a, b) {
    return a > b ? a : b;
}
function knapsack(capacity, size, value, n) {
    if(n == 0 || capacity == 0) {
        return 0;
    }
    if(size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    }else {
        return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1), knapsack(capacity, size, value, n - 1));
    }
}
//背包问题：动态规划方案
function dKnapsack(capacity, size, value, n) {
    var K = [];
    for(var i = 0; i <= n; i ++){
        K[i] = [];
    }

    for(var i = 0; i <= n; i ++) {
        var str = '';
        for(var w = 0; w <= capacity; w ++) {
            if(i == 0 || w == 0) {
                K[i][w] = 0;
            }else if(size[i - 1] <= w) {
                K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w]);
            }else {
                K[i][w] = K[i - 1][w];
            }
            str += K[i][w] + ' ';
        }
        console.log(str);
    }
    return K[n][capacity];
}




//贪心算法:解决部分背包问题
function ksack(capacity, size, value, n) {
    var goodsArr = [];
    for(var i = 0; i < n; i ++) {
        goodsArr[i] = {
            size: size[i],
            value: value[i],
            prize: value[i] / size[i]
        }
    }
    goodsArr.sort(function (a, b) {
        return b.prize - a.prize;
    });
    var load = 0;
    var i = 0;
    var w = 0;
    while(load < capacity && i < n) {
        if(weight[i] <= (capacity - load)) {
            w += value[i];
            load += weight[i];
        }else {
            w += (capacity - load) * goodsArr[i].prize;
            load = capacity;
        }
        i ++;
    }
    return w;
}


//  var n = 100;
//  var start = new Date().getTime();
//  console.log(recurFib(n));
//  var stop = new Date().getTime();
//  console.log('递归计算耗时-' + (stop - start) + '毫秒');
//  start = new Date().getTime();
//  console.log(dynFib(n));
//  stop = new Date().getTime();
//  console.log('动态规划耗时-' + (stop - start) + '毫秒');
//   start = new Date().getTime();
//  console.log(iterFib(n));
//  stop = new Date().getTime();
//  console.log('迭代版本耗时-' + (stop - start) + '毫秒');

// var word1 = 'abbcce',
//     word2 = 'dbbcceefg';
// var sameWord = lcs(word1, word2);
// console.log('The same word between ' + word1 + ' and ' + word2 + ' is: ' + sameWord);


// var value = [4, 5, 10, 11, 13];
// var size = [3, 4, 7, 8, 9];
// var capacity = 16;
// var n = 5;
// // console.log(knapsack(capacity, size, value, n));
// console.log(dKnapsack(capacity, size, value, n));

var value = [50, 140, 60, 60];
var weight = [5, 20, 10, 12];
var capacity = 30;
var n = 4;
console.log(ksack(capacity, weight, value, n))