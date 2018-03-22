function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(currentNode,val){
	var newNode = new Node(val);

	if(!currentNode){
		this.root = newNode;
		return;
	}

	if(val < currentNode.value){
		if(!currentNode.left) {
			currentNode.left=newNode;
			//console.log(currentNode)
			return;
		}
		else{
			this.push(currentNode.left,val);
		}
	}
	else{
		if(!currentNode.right) {
			currentNode.right=newNode;
			//console.log(currentNode)
			return;
		}
		else{
			this.push(currentNode.right,val);
		}
	}
}

var bst = new BinarySearchTree();

console.log(bst.root)
console.log('======')
bst.push(bst.root,100);

console.log(bst.root)
console.log('======')
bst.push(bst.root,70);

console.log(bst.root)
console.log('======')
bst.push(bst.root,104);

console.log(bst.root)
console.log('======')
bst.push(bst.root,107);

console.log(bst.root)
console.log('======')
bst.push(bst.root,109);

console.log(JSON.stringify(bst.root))

