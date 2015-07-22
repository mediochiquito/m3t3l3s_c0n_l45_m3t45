function ItemFoto($nodo)
{

	var self = this
	this.main = document.createElement('div')
	this.main.className = 'contour-selector-itemFoto'

	var img = new Image()
		img.src = $nodo.images.thumbnail.url
		$(this.main).append(img)


	new BotonImg(this.main, function(){ });

	$(this.main).bind('click', function (){
		contour_app.secciones._SeccionEditor.setFotoEnItemBotella($nodo)
	})


}
