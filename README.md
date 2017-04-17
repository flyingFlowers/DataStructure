# 一级标题  
## 二级标题  
### 三级标题  
#### 四级标题  
##### 五级标题  
###### 六级标题 


#### 无序列表
* 1
* 2
- 3
- 4

#### 有序列表
1. 一
2. 二 

> 这里是引用

要注意符号和文本间的空格


#### 插入链接

[Baidu](http://baidu.com)

#### 插入图片

![baozou](./baozou.jpg)

*这是斜体的写法*

**这是粗体的写法**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


`function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.gaps = [];//希尔排序的间隔序列
    for(var i = 0; i < numElements; i ++) {
        this.dataStore[i] = i;
    }
}`

***
到这里，Markdown 的基本语法在日常的使用中基本就没什么大问题了，只要多加练习，配合好用的工具，写起东西来肯定会行云流水。更多的语法规则，其实 Mou 的 Help 文档栗子很好，当你第一次使用 Mou 时，就会显示该文档。可以用来对用的查找和学习。

