function CArray(numElements) {
    this.dataStore = [];
    this.numElements = numElements;
    this.pos = 0;
    for(var i = 0; i < this.numElements; i ++) {
        this.dataStore[i] = i;
    }
}

CArray.prototype.setData = function() {
    var len = this.numElements;
    for(var i = 0; i < len; i ++) {
        this.dataStore[i] = Math.floor(Math.random() * (len + 1));
    }
    this.dataStore.sort(function (a, b) {
        return a - b;
    });
}

CArray.prototype.clear = function () {
    var len = this.numElements;
    for(var i = 0; i < len; i ++) {
        this.dataStore[i] = 0;
    }
}

CArray.prototype.insert = function(ele) {
    this.dataStore[this.pos ++] = ele;
}

CArray.prototype.toString = function () {
    var ret = '';
    var len = this.numElements;
    for(var i = 0; i < len; i ++) {
        ret += this.dataStore[i] + ' ';
    }
    return ret;
}

CArray.prototype.swap = function (index1, index2) {
    var temp = this.dataStore[index1];
    this.dataStore[index1] = this.dataStore[index2];
    this.dataStore[index2] = temp;
}

//自组织顺序查找（每次查找的元素位置会提前）
CArray.prototype.seqSearch1 = function (data) {
    var len = this.numElements;
    for(var i = 0; i < len; i ++) {
        if(this.dataStore[i] == data) {
            this.swap(i, i - 1);
            return true;
        }
    }
    return false;
}
//自组织顺序查找（每次查找，如果该元素不在总长度的20%内，会将找到的元素放到第一位）80-20法则
CArray.prototype.seqSearch2 = function (data) {
    var len = this.numElements;
    for(var i = 0; i < len; i ++) {
        if(this.dataStore[i] == data) {
            if(i > Math.round(0.2 * len)) {
                this.swap(i, 0);
            }
            return true;
        }
    }
    return false;
}
//二分法查找算法
CArray.prototype.binSearch = function (data) {
    var len = this.numElements;
    var upperBound = len - 1,
        lowerBound = 0;
    while(lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if(this.dataStore[mid] > data) {
            upperBound = mid - 1;
        }else if(this.dataStore[mid] < data) {
            lowerBound = mid + 1;
        }else {
            return mid;
        }
    }
    return -1;
}
//二分法总是查找中间的值，统计重复值
CArray.prototype.count = function (data) {
    var count = 0;
    var pos = this.binSearch(data);
    var len = this.numElements;
    if(pos > -1) {
        count ++;
        for(var i = pos - 1; i >= 0; i--) {
            if(this.dataStore[i] == data) {
                count ++;
            }else {
                break;
            }
        }
        for(var j = pos + 1; j < len; j ++) {
            if(this.dataStore[j] == data) {
                count ++;
            }else {
                break;
            }
        }
    }
    return count;
}

var numElements = 10;
var myNums1 = new CArray(numElements);
// var myNums2 = new CArray(numElements);
myNums1.setData();
// myNums2.setData();
console.log(myNums1.toString());
myNums1.seqSearch2(7);
// console.log(myNums2.binSearch(7));
// console.log(myNums2.count(7))
console.log(myNums1.toString());

