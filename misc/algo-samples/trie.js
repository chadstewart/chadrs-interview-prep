class TrieNode {
    constructor(value) {
        this.value = value;
        this.children = {};
        this.isCompleteWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('*');
    }

    insert(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            if(!currentNode.children[word[i]]) {
                currentNode.children[word[i]] = new TrieNode(word[i]);
            }

            currentNode = currentNode.children[word[i]];
        }

        currentNode.children[word[i]].isCompleteWord = true;
    }

    search(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            if(!currentNode.children[word[i]]) {
                return `${word} is not in the trie!`;
            }

            currentNode = currentNode.children[word[i]];
        }

        if(!currentNode.isCompleteWord) {
            return `${word} is not in the trie!`;
        }

        return `${word} is in this trie!`;
    }
}