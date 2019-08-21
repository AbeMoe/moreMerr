//Elizabeth Wilson, one day in the far of future you'll see this page again,
//When you do

//Will you be my bride?

function randInt(max)
{
  return Math.floor(Math.random() * Math.floor(max));
}

const movements = ['staticMerp','staticMerp','LeftToRight','RightToLeft','BottomToTop','TopToBottom'];
const colors = ['rainbow','random'];
const animations = ['NoOperation','NoOperation','NoOperation','NoOperation','shake','spinLeft','spinRight','spin3dRight','spin3dLeft'];
const merps = ['Merp!',"Merp",'Merrrrp','Merrrrr',"MERP",'Merrrr','Merrr!','Murrrr!','Mer','smol mir','mer!!!','Merr!!!']
window.onload = ()=>
{
  console.log('Go away, if you keep looking in the code you\'ll ruin the surprise')
  document.getElementById('addMerr').onclick = addMerr;

  setTimeout(()=> {
    document.getElementById('splash').remove();
  },10000)

};


addMerr = function ()
  {
    var audio = new Audio(randInt(6) + '.m4a');
    audio.play();
    animArray = [] //keeps track of what animations we're doing
    text = merps[randInt(merps.length)]
    var node = document.createElement("h1");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById('Merr!').appendChild(node);
    node.classList.add("Merp");
    newClass = movements[randInt(movements.length)];
    //node.classList.add(newClass); // Keep track of class to add multiple animations

    //Adding colors

    if(text == 'smol mir')
    {
      node.style.fontSize = '1em';
    }
    colorType = colors[randInt(colors.length)]
    if(colorType == 'random')
    {
      console.log("Hot here");
      node.style.color = 'rgb(' + randInt(255) + ',' + randInt(255) + ',' + randInt(255) +')';
    }
    else
    {
      animArray.push('rainbow 5s linear infinite');
      console.log(animArray);
    }


    if(newClass == 'staticMerp')
    {
      node.style.left = randInt(window.innerWidth - node.clientWidth) + 'px';
      node.style.top = randInt(window.innerHeight - node.clientHeight) + 'px';
    }
    else if
    (newClass == 'LeftToRight')
    {
      node.style.top = randInt(window.innerHeight - node.clientHeight) + 'px';
      animArray.push(newClass +  ' 5s linear infinite');
    }
    else if(newClass == 'RightToLeft')
    {
      node.style.top = randInt(window.innerHeight - node.clientHeight) + 'px';
      animArray.push(newClass +  ' 5s linear infinite reverse')
    }
    else if(newClass == 'TopToBottom')
    {
      node.style.left = randInt(window.innerWidth - node.clientWidth) + 'px';
      animArray.push(newClass +  ' 5s linear infinite reverse');

    }
    textAnimType = animations[randInt(animations.length)]
    if(textAnimType == 'shake')
    {
      animArray.push('shake .2s infinite');

    }
    if(textAnimType == 'spin3dLeft')
    {
      animArray.push('spin3d 2s linear infinite');

    }
    else if(textAnimType == 'spin3dRight')
    {
      animArray.push('spin3d 2s linear infinite reverse');
    }
    if(textAnimType == 'spinLeft')
    {
      animArray.push('spin 2s linear infinite');

    }
    if(textAnimType == 'spinRight')
    {
      animArray.push('spin 2s linear infinite reverse');

    }
    console.log(animArray);
    node.style.animation = animArray.join();
  }
