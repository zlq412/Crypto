function Block(letter, rate, used, father, code) {
this. letter = letter; this. rate = rate; this. used = used; this. father = father; this. code = code;
8
function FindCode(block) {
10 11 12
if (tree[block.father].code !=
block.code = tree[block.father].code +
13 14 15 16 17 18 19 20 21
else { if (block.letter == tree[minIndex]. letter) { {
block.code = '0';
else if (block.letter == tree[preminIndex].letter) {
block.code = '1';
else {
23 24 25 26
FindCode(tree[block.father]); block.code = tree[block.father].code + '0';
