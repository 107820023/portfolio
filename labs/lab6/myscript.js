function start()
{
	var button=document.getElementById("calculateButton");
	button.addEventlistener("click",displayVolume,false);
}

function displayVolume()
{
	document.getElementById('myId').innerHTML='Welcome!';	
}
window.addEventlistener("load",start,false);