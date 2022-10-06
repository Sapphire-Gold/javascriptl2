

var gettablinks = document.getElementsByClassName('tablinks');  // HTML Collection
var gettabpanes = document.getElementsByClassName('tab-pane');
// console.log(gettablinks,gettabpanes);
var getbtncloses = document.querySelectorAll('.btn-close');  // Nodelist


var tabpanes = Array.from(gettabpanes);

function gettab(evn,linkid){
     
     // console.log(evn);
     // console.log(linkid);


	// for(var i = 0 ; i < gettabpanes.length ; i++){
	// 	gettabpanes[i].style.display = "none";
	// }


	tabpanes.forEach(function(tabpane){
       tabpane.style.display = "none";
	});


	for(var x = 0 ; x < gettablinks.length ; x++){
		gettablinks[x].className = gettablinks[x].className.replace(" active","");


		getbtncloses[x].addEventListener('click',function(){
			this.parentElement.style.display = "none";
		});
	}


	document.getElementById(linkid).style.display = "block";


	// evn.target.className += " active";
	// evn.target.className = evn.target.className.replace("tablinks","tablinks active");
	// evn.target.classList.add('active');


	// console.log(evn);
	// console.log(evn.target);
	// console.log(evn.currentTarget);
	evn.currentTarget.className += " active";

	
}


document.getElementById('autoclick').click();
