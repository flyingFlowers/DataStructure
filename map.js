function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.eages = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = [];
    for(var i = 0; i < this.vertices; i ++) {
        this.adj[i] = [];
    }
    for(var j = 0; j < this.vertices; j ++) {
        this.marked[j] = false;
    }
}
Graph.prototype.addEdge = function (v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.eages ++;
}

//用于显示名字而非数字的新函数
Graph.prototype.showGraph = function () {
    if(!this.vertexList.length) {
         for(var i = 0; i < this.vertices; i ++) {
            console.log(i + '->');
            for(var j = 0; j < this.vertices; j ++) {
                if(this.adj[i][j] != undefined) {
                    console.log(this.adj[i][j]);
                }
            }
        }
    }else {
        var visited = [];
        for(var i = 0; i < this.vertices; i ++) {
            console.log(this.vertexList[i] + '->');
            visited.push(this.vertexList[i]);
            for(var j = 0; j < this.vertices; j ++) {
                var adj = this.adj[i][j];
                if(adj != undefined) {
                    if(visited.indexOf(this.vertexList[adj]) < 0) {
                        console.log(this.vertexList[adj]);
                    }
                }
            }
            visited.pop();
        }
    }
}
//深度优先搜索
Graph.prototype.dfs = function (v) {
    var self = this;
    this.marked[v] = true;
    if(this.adj[v] && this.adj[v].length) {
        console.log('Visited vertex: ' + v);   
    }
    this.adj[v].forEach(function (item) {
        if(!self.marked[item]) {
            self.dfs(item);
        }
    });
}
//广度优先搜索
Graph.prototype.bfs = function (s) {
    var self = this;
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0) {
        var v = queue.shift();
        if(v != undefined) {
            console.log('Visited vertex: ' + v);
        }
        this.adj[v].forEach(function (item) {
            if(!self.marked[item]) {
                self.edgeTo[item] = v;
                self.marked[item] = true;
                queue.push(item);
            }
        })
    }
}

Graph.prototype.hasPathTo = function (v) {
    return this.marked[v];
}

Graph.prototype.pathTo = function (v) {
    if(!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    var source = 0;
    for(var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

Graph.prototype.topSort = function () {
    var stack = [];
    var visited = [];
    for(var i = 0; i < this.vertices; i ++) {
        visited[i] = false;
    }
    for(var j = 0; j < this.vertices; j ++) {
        if(visited[j] ==  false) {
            this.topSortHelper(j, visited, stack);
        }
    }
    for(var k = 0; k < stack.length; k ++) {
        if(stack[k] != undefined && stack[k] != false) {
            console.log(this.vertexList[stack[k]]); 
        }
    }
}

Graph.prototype.topSortHelper = function(v, visited, stack) {
    visited[v] = true;
    var self = this;
    this.adj[v].forEach(function (item) {
        if(!visited[item]) {
            self.topSortHelper(item, visited, stack);
        }
    });
    stack.push(v);
}


// var g = new Graph(5);
// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 3);
// g.addEdge(2, 4);
// g.showGraph();
// g.dfs(0);
// g.bfs(0);


// var vertex = 4;
// var paths = g.pathTo(vertex);
// while(paths.length > 0) {
//     console.log(paths.pop());
// }

//拓扑排序测试
var g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ['CS1', 'CS2', 'Data Structures', 'Assembly Language', 'Operating System', 'Algorithms'];
g.showGraph();  
g.topSort();