# item-selector

This plugin creates an item selector widget with a onClick event listener for every item.

## Dependencies and Libraries 

1. jquery.min.js

## Usage

To instantiate the plugin, call a function ItemSelector() and pass parameters:

	itemStyle - css for each element,
	actvieItemStyle - css to apply on an active item,
	items - if you want to create elements from JS, then pass the element data in an array, and
			the plugin will generate the elements with the data inside, which can be text, or FontAwesome icon, or an <img>



```javascript
 
	$('.menu-wrapper').ItemSelector({ 
		activeClassName : 'active',
		itemClass : 'menu-item',
		items: ['<i class="fa fa-pinterest-p"></i>', '<i class="fa fa-facebook-official"></i>', '<i class="fa fa-buysellads"></i>','<i class="fa fa-connectdevelop"></i>'],
		onClick: function(item,index){
				console.log(item)
				console.log(index)
		}
	});
 

```
