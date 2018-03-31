function binarySearchTree(){
	this.root = null;
	this.max_height = 0;
	this.min_value = -1;
}

function newNode(val){
	this.value = val;
	this.left  = null;
	this.right = null;
}

binarySearchTree.prototype.insert = function(currentNode,val){
	var node = new newNode(val);

	if(this.root == null){
		this.root = node;
		return;
	}	

	if(val < currentNode.value){
		if(currentNode.left == null){
			currentNode.left = node;
			return;
		}
		else{
			this.insert(currentNode.left,val);
		}
	}
	else{
		if(currentNode.right == null){
			currentNode.right = node;
			return;
		}
		else{
			this.insert(currentNode.right,val);
		}	
	}
}

binarySearchTree.prototype.height = function(node,current_height){
	if(this.root == null){
		this.max_height = 0;
		return;
	}

	if(current_height > this.max_height){
		this.max_height = current_height;
	}

	console.log("\n\n\n node   ",JSON.stringify(node))

	if(node.left!=null){
		console.log("\n\n\n left called  ",JSON.stringify(node.left))
		this.height(node.left,current_height+1);
	}

	if(node.right!=null){
		console.log("\n\n\n right  called ",JSON.stringify(node.right))
		this.height(node.right,current_height+1);
	}
}

/*binarySearchTree.prototype.remove = function(node){
	if(this.root == null)
	{
		return null;
	}

	if(node.value == currentNode.value){
		currentNode.value = null;
		currentNode.left = null;
		currentNode.right = null;

		if(currentNode.left!=null){
			currentNode.left 
		}
		if(currentNode.right!=null){
			currentNode.left 
		}
	}
}*/

binarySearchTree.prototype.dfs = function(currentNode){
	if(this.root == null)
		return;

	if(currentNode.value){
		console.log(currentNode.value);
	}

	if(currentNode.left){
		this.dfs(currentNode.left);
	}
	if(currentNode.right){
		this.dfs(currentNode.right);
	}
}

binarySearchTree.prototype.bfs = function(currentNode){
	if(this.root == null)
		return;

	if(currentNode.value){
		console.log(currentNode.value);
	}

	if(currentNode.left){
		this.dfs(currentNode.left);
	}
	if(currentNode.right){
		this.dfs(currentNode.right);
	}
}

binarySearchTree.prototype.findMinValue = function(currentNode){
	if(this.root == null)
		return;

	if( (currentNode.value < this.min_value) || this.min_value == -1 ){
		this.min_value = currentNode.value;
	}

	if(currentNode.left!=null) {
		this.findMinValue(currentNode.left);
	}
}

binarySearchTree.prototype.searchValue = function(currentNode,val){
	if(!currentNode){
		return -1;
	}

	if(val < currentNode.value){
		return this.searchValue(currentNode.left,val);
	}
	else if(val > currentNode.value){
		return this.searchValue(currentNode.right,val);
	}
	else{
		return 1;
	}
}

binarySearchTree.prototype.commonAncestor = function(currentNode,n1,n2){
	if(!currentNode)
		return -1;

	var current_value = currentNode.value;
	if(n1 < current_value && n2 < current_value){
		return this.commonAncestor(currentNode.left,n1,n2);
	}

	if(n1 > current_value && n2 > current_value){
		return this.commonAncestor(currentNode.right,n1,n2);
	}

	return current_value;


}

var bst = new binarySearchTree();

console.log("\n", JSON.stringify(bst.root));
console.log("\n height of a tree before pushing = ",bst.max_height);

bst.insert(bst.root,100);
console.log("\n", JSON.stringify(bst.root));

bst.insert(bst.root,60);
console.log("\n", JSON.stringify(bst.root));

bst.insert(bst.root,130);
console.log("\n", JSON.stringify(bst.root));

bst.insert(bst.root,70);
console.log("\n", JSON.stringify(bst.root));

bst.insert(bst.root,80);
console.log("\n", JSON.stringify(bst.root));

bst.insert(bst.root,67);
console.log("\n", JSON.stringify(bst.root));


bst.height(bst.root,bst.max_height);
console.log("\n height of a tree after all nodes= ",bst.max_height);

console.log("\n\n dfs = ",bst.dfs(bst.root));

bst.findMinValue(bst.root)
console.log("\n\n minimum value = ",bst.min_value);

console.log("\n\n search value 70 ? ",bst.searchValue(bst.root,70) == 1 ? 'yes':'no');

console.log("\n\n commonAncestor of 80 and 67 is : ",bst.commonAncestor(bst.root,80,67));


