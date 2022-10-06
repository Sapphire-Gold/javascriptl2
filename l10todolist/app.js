
var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');


getform.addEventListener('submit',function(e){
  // console.log('i am working');

   addnew();

   e.preventDefault();

});



function addnew(todo){
  var todotext = gettextbox.value;
  // console.log(todotext);

  if(todo){
  	todotext = todo.text;
  }

  
  if(todotext){
  	const li = document.createElement('li');
  // console.log(li);
  
  // console.log(todo.text);
  // console.log(todo.done);


  if(todo && todo.done){
  	li.classList.add('done');
  }
  

  // li.textContent = todotext;
  li.appendChild(document.createTextNode(todotext));
  getul.appendChild(li);
  gettextbox.value = '';

  updatelocalstorage();


      // left click
  li.addEventListener('click',function(){
  	li.classList.toggle('done');
  	updatelocalstorage();
  });

    // right click
  li.addEventListener('contextmenu',function(){
  	li.remove();
  	updatelocalstorage();
  });

  }

}


function updatelocalstorage(){
  var getalllis = document.querySelectorAll('li');
  // console.log(getalllis);

  const todos = [];

  getalllis.forEach(function(getallli){
    todos.push({
    	 text: getallli.textContent,
    	 done: getallli.classList.contains('done')
    });
  });

  // console.log(todos);

  localStorage.setItem('todos',JSON.stringify(todos));
}


var getlstodos = JSON.parse(localStorage.getItem('todos'));
// console.log(getstodos);

if(getlstodos){
	getlstodos.forEach(function(getlstodo){
		// console.log(getlstodos);
		// console.log(getlstodos.text);
		addnew(getlstodo);
	});
}