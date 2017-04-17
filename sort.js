function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
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
    var len = this.numElements;
    for(var i = 0; i < len - 1; i ++) {
        for(var j = 0; j < len - i; j ++) {
            if(this.dataStore[j] > this.dataStore[j + 1]) {
                this.swap(this.dataStore, j, j + 1);
            }
        }
    }
}

//选择排序
CArray.prototype.selectSort = function () {
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
}

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log('before sort: ');
console.log(myNums.toString());
// myNums.bubbleSort();
myNums.selectSort();
console.log('after sort: ');
console.log(myNums.toString());
