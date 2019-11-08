var hover = document.querySelector("#one");
var click = document.querySelector("#two");
var double_click = document.querySelector("#three");

hover.addEventListener('mouseover', function(){
  hover.textContent = "Mouse Over";
  hover.style.color = 'red';
})

hover.addEventListener('mouseout', function(){
  hover.textContent = "hover";
  hover.style.color = "black";
})

click.addEventListener('click', function(){
  click.textContent = 'Clicked On';
  click.style.color = 'blue';
})

double_click.addEventListener('dblclick', function(){
  double_click.textContent = 'I was double clicked';
  double_click.style.color = 'red';
})