function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.gaps = [];//希尔排序的间隔序列
    for(var i = 0; i < numElements; i ++) {
        this.dataStore[i] = i;
    }
}

CArray.prototype.setData = function () {
    for(var i = 0; i < this.numElements; i ++) {
        this.dataStore[i] = Math.ceil(Math.random() * (this.numElements + 1));
    }
}

CArray.prototype.clear = function () {
    for(var i = 0; i < this.numElements; i ++) {
        this.dataStore[i] = 0;
    }
}

CArray.prototype.insert = function (ele) {
    this.dataStore[this.pos ++] = ele;
}

CArray.prototype.toString = function () {
    var restr = '';
    for(var i = 0; i < this.numElements; i ++) {
        restr += this.dataStore[i] + ' ';
    }
    return restr;
}

CArray.prototype.swap = function (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//冒泡排序
CArray.prototype.bubbleSort = function () {
    var startTime = new Date().getTime();
    var len = this.numElements;
    for(var i = 0; i < len - 1; i ++) {
        for(var j = 0; j < len - i; j ++) {
            if(this.dataStore[j] > this.dataStore[j + 1]) {
                this.swap(this.dataStore, j, j + 1);
            }
        }
    }
    var endTime = new Date().getTime();
    var elapsed = endTime - startTime;
    console.log('The time of bubbleSort: ' + elapsed);
}

//选择排序
CArray.prototype.selectSort = function () {
    var startTime = new Date().getTime();
    var len = this.numElements;
    for(var i = 0; i < len - 1; i ++) {
        var data1 = this.dataStore[i];
        var minIndex = i;
        for(var j = i + 1; j < len; j ++) {
            var data2 = this.dataStore[j];
            if(data1 > data2) {
                data1 = data2;
                minIndex = j;
            }
        }
        if(i != minIndex) {
            this.swap(this.dataStore, i, minIndex);            
        }
    }
    var endTime = new Date().getTime();
    var elapsed = endTime - startTime;
    console.log('The time of selectSort: ' + elapsed);
}

//插入排序
CArray.prototype.insertionSort = function () {
    var startTime = new Date().getTime();
    var len = this.numElements;
    for(var i = 1; i < len; i ++) {
        var temp = this.dataStore[i];
        var j = i;
        while(j > 0 && this.dataStore[j - 1] > temp) {
            this.dataStore[j] = this.dataStore[j - 1];
            j --;
        }
        this.dataStore[j] = temp;
    }
    var endTime = new Date().getTime();
    var elapsed = endTime - startTime;
    console.log('The time of insertionSort: ' + elapsed);
}


//希尔排序
CArray.prototype.setGaps = function (arr) {
    this.gaps = arr;
}
CArray.prototype.shellSort = function () {
    var startTime = new Date().getTime();
    var len = this.numElements;
    for(var i = 0; i < this.gaps.length; i ++) {
        for(var j = this.gaps[i]; j < len; j ++) {
            var temp = this.dataStore[j];            
            for(var k = j; k > 0 && this.dataStore[k - this.gaps[i]] > temp; k -= this.gaps[i]) {
                this.dataStore[k] = this.dataStore[k - this.gaps[i]];
            }
            this.dataStore[k] = temp;            
        }
    }
    var endTime = new Date().getTime();
    var elapsed = endTime - startTime;
    console.log('The time of shellSort: ' + elapsed);
}

//归并排序
// 自顶向下的递归方法（递归深度太深）
CArray.prototype.mergeSort = function () {
    var startTime = new Date().getTime();
    this.dataStore = this.mergeSortHelper(this.dataStore);
    var endTime = new Date().getTime();
    var elapsed = endTime - startTime;
    console.log('The time of mergeSort: ' + elapsed);
}
CArray.prototype.mergeSortHelper = function (arr) {
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2);
    var left = arr.slice(0, middle),
        right = arr.slice(middle);
    return this.merge(this.mergeSortHelper(left), this.mergeSortHelper(right));
}
CArray.prototype.merge = function (left, right) {
    var result = [];
    result = left.concat(right);
    return result.sort(function (a, b) {
        return a - b;
    });
}
//自底向上



//快速排序
CArray.prototype.quickSort = function (arr) {
    var startTime = new Date().getTime();
    this.dataStore = this.quickSortHelper(this.dataStore);
    var endTime = new Date().getTime();
    var elapsed = endTime - startTime;
    console.log('The time of quickSort: ' + elapsed);
}
CArray.prototype.quickSortHelper = function (arr) {
    if(arr.length < 2) {
        return arr;
    }
    var lesser = [],
        greater = [];
    var pivot = arr[0];
    for(var i = 1; i < arr.length; i ++) {
        if(arr[i] < pivot) {
            lesser.push(arr[i]);
        }else {
            greater.push(arr[i]);
        }
    }
    return this.quickSortHelper(lesser).concat(pivot, this.quickSortHelper(greater));
}
var numElements = 100000;
var myNums1 = new CArray(numElements);
var myNums2 = new CArray(numElements);
var myNums3 = new CArray(numElements);
var myNums4 = new CArray(numElements);
var myNums5 = new CArray(numElements);
var myNums6 = new CArray(numElements);



myNums1.setData();
myNums2.setData();
myNums3.setData();

myNums4.setGaps([5, 3, 1]);
myNums4.setData();
myNums5.setData();
myNums6.setData();

// console.log('before sort: ');
// console.log(myNums6.toString());
myNums1.bubbleSort();
myNums2.selectSort();
myNums3.insertionSort();
myNums4.shellSort();
myNums5.mergeSort();
myNums6.quickSort();
// console.log('after sort: ');
// console.log(myNums6.toString());
