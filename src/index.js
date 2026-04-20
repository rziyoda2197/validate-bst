class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

function isValidBST(root) {
    return helper(root, -Infinity, Infinity);
}

function helper(node, min, max) {
    if (node === null) {
        return true;
    }

    if (node.val <= min || node.val >= max) {
        return false;
    }

    return helper(node.left, min, node.val) && helper(node.right, node.val, max);
}

// Test
let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

console.log(isValidBST(root)); // true

root.left.right = new Node(4);

console.log(isValidBST(root)); // false
