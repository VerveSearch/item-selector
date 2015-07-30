(function(W,$){
	W.vs = window.vs || {};

	W.vs.ItemSelector = function(el,opts){
		this.element= el || {}; 
		this.items = opts.items || []; 
		this.itemClass = opts.itemClass || 'menu-item';
		this.activeClassName = opts.activeClassName ||''; 
		this.userOnClick = opts.onClick ||$.proxy(this.onActiveChanged,this);
	};

	W.vs.ItemSelector.boot = function(){
		$('.item-selector[data-item-selector]').each(function(k,o){
			if(!$(this).data('__ITEM_SELECTROR__')){
				$(this).data('__ITEM_SELECTROR__', new W.vs.ItemSelector(this));
			}
		});
	};

	W.vs.ItemSelector.prototype = {
		render: function(){ 
				var i=0, itemLength = this.items.length;
			if(this.element.children().length === 0){
				for(;i<itemLength;i++){
				 	this.element.append('<div class="'+this.itemClass +'">'+this.items[i]+'</div>');
				}
			}
			this.element.children().on('click', $.proxy(this.onClick, this));
		},
		onClick: function(event){ 
			var index=$(event.currentTarget).index();
			this.userOnClick(index,event);
		},
		onActiveChanged: function(idx,e){ 
			var targetEl = $(e.currentTarget);
			targetEl.siblings().removeClass(this.activeClassName);
			targetEl.toggleClass(this.activeClassName);
		}
	};

	$.fn.ItemSelector = function(options){
		return this.each(function(){ 
			$(this).data('__ITEM_SELECTROR__', (e = new W.vs.ItemSelector($(this), options)).render() );
		});
	};


	$(document).ready(function(){
		W.vs.ItemSelector.boot();
	});

})(window,jQuery);