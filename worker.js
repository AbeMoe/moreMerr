
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log('initalizing worker');  
var node = document.createElement("h1");
var textNode = document.createTextNode("Merr");
node.appendChild(textNode);
node.style.display= "block";
node.style.position = "absolute";
node.style.left = '0vw';
var height = node.clientHeight;
var width = node.clientWidth;
var total = window.innerHeight;
trueWidth = (width/total * 100);
trueHeight = (height/total * 100);
offsetPos=0;
randomStartHeight = getRandomArbitrary(trueHeight, 100-trueHeight);
console.log(node.clientWidth);
node.style.top =  randomStartHeight + 'vh';
document.body.appendChild(node);
var timer = new Timer(()=>
{
offsetPos+=.1
node.style.left = offsetPos + 'vw';
console.log(offsetPos > (100-trueWidth));
if(offsetPos > (100 - trueWidth))
{
  node.style.left = '0vw';
  offsetPos = 0 - trueWidth/2;
}
}, 500,-1);
var timer = setInterval(()=>
{
offsetPos+=.1
node.style.left = offsetPos + 'vw';
console.log(offsetPos > (100-trueWidth));
if(offsetPos > (100 - trueWidth))
{
  node.style.left = '0vw';
  offsetPos = 0 - trueWidth/2;
} 
},5)
