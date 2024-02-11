var input = document.getElementsByClassName('inputfield')[0];
var btn = document.getElementsByTagName('button')[0];
var tasklist=document.getElementsByClassName('list-container')[0];

btn.addEventListener('click', () => {
  if(input.value ==='')
  {
    alert("please enter your task");
  }
  else
  {
    var li=document.createElement('li');
    li.innerText= input.value;
    tasklist.appendChild(li);  
    let span = document.createElement('span');
    span.innerHTML='\u00d7';
    li.appendChild(span);
    li.c
  }
  input.value=''
});
tasklist.addEventListener('click',(e)=>
{
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
    
    }
},false);