$(document).ready(function(){
	$('.menu-wrapper').ItemSelector({ 
		activeClassName: 'active',
		itemClass: 'menu-item',
		items: ['<i class="fa fa-pinterest-p"></i>', '<i class="fa fa-facebook-official"></i>', '<i class="fa fa-buysellads"></i>','<i class="fa fa-connectdevelop"></i>'],
	 	onClick: function(item,index){
				console.log(item)
				console.log(index)
		}
	});
});