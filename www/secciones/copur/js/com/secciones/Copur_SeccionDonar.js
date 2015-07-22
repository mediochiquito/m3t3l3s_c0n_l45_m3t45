function Copur_SeccionDonar()
{
	
	//his.main.id = 'SeccionForm0';
	this.main = document.getElementById('copur-SeccionDonar');

	new BotonImgVerdeOver($('#SeccionDonar-btn'), function(){
		
			window.open('http://www.antrocket.com/en/copur');
	});

		

}

Copur_SeccionDonar.prototype = new Copur_Base_Seccion();