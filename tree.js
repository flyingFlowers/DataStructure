function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}
Node.prototype.show = function () {
    return this.data;
}

function BST() {
    this.root = null;
}
//插入元素
BST.prototype.insert = function (data) {
    var n = new Node(data, null, null);
    if(this.root == null) {
        this.root = n;
    }else {
        var current = this.root,
            parent = current;
        while(true) {
            parent = current;
            if(data < current.data) {
                current = current.left;
                if(current == null) {
                    parent.left = n;
                    break;
                }
            }else {
                current = current.right;
                if(current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
//中序遍历
BST.prototype.inOrder = function (node) { 
    if(node !== null) {
        this.inOrder(node.left);
        console.log(node.show());
        this.inOrder(node.right);
    }
}
//先序遍历
BST.prototype.preOrder = function (node) {
    if(node !== null) {
        console.log(node.show());
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}
//后序遍历
BST.prototype.postOrder = function (node) {
    if(node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.show());
    }
}
//查找最小值
BST.prototype.getMin = function () {
    var current = this.root;
    while(current.left !== null) {
        current = current.left;
    }
    return current.data;
}
//查找最大值
BST.prototype.getMax = function () {
    var current = this.root;
    while(current.right !== null) {
        current = current.right;
    }
    return current.data;
}
//查找给定值
BST.prototype.find = function (data) {
    var current = this.root;
    while(current !== null) {
        if(data < current.data) {
            current = current.left;
        }else if(data > current.data) {
            current = current.right;
        }else {
            return current;
        }
    }
    return null;
}
//删除节点
BST.prototype.remove = function (data) {
    this.root = this.removeNode(this.root, data);
}
BST.prototype.removeNode = function (node, data) {
    if(node == null) {
        return null;
    }
    if(node.data == data) {
        //以下语句第一个判断必须作为第一个判断，否为会出现逻辑判断错误
        if(node.left == null && node.right == null) {//没有子节点
            return null;
        }else if(node.left == null) {//没有左子节点
            return node.right;
        }else if(node.right == null) {//没有右子节点
            return node.left;
        }else {//有两个子节点
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
    }else if(data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    }else {
        node.right = this.removeNode(node.right, data);
        return node;
    }
}


function getSmallest(node) {
    var current = node;
    while(current.left !== null) {
        current = current.left;
    }
    return current;
}

var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    console.log("inOrder traversal:");
    nums.inOrder(nums.root);
    console.log('preOrder traversal:');
    nums.preOrder(nums.root);
    console.log('postOrder traversal:');
    nums.postOrder(nums.root);
    console.log('The minimum value of the BST is: ' + nums.getMin());
    console.log('The maximum value of the BST is: ' + nums.getMax());
    console.log('search for 16 in the BST is: ', nums.find(16));
    console.log('search for 100 in the BST is: ', nums.find(100));
    console.log('remove the data 45, inOrder traversal: ');
    nums.remove(45);
    nums.inOrder(nums.root);
    
