(function(){
	var notice_defaults = {

	};

	var notice = function(text, options){}
	notice.prototype.updateText = function(first_argument) {
		// body...
	};
})();

(function(){
	"use strict";
	var notice = Stapes.subclass({
		dom_node: null,
		defaults: {
			id: null,
			type: 'alert',
			timeout: 5000,
			confirmation: false,
			on_click: null,
			on_confirm: null,
			on_cancel: null,
			safe: true
		},
		constructor: function(text, options){
			var root = this;

			options = options===undefined ? {} : options;
			options = this.defaults = _.defaults(options, this.defaults);

			if( ! _.contains(['alert', 'success', 'error', 'warn', 'info', 'confirm'], options.type)){
				options.type = 'alert';
			}

			var notice_base;

			if($.find('.notice-base').length === 0){
				notice_base = $('<ul class="notice-base"></ul>');
				$(document.body).append(notice_base);
			}else{
				notice_base = $('ul.notice-base');
			}

			var notice_item = $('<li class="notice-item"></li>');
			if(options.id)
				notice_item.attr('id', options.id);

			notice_item.addClass(options.type);

			var notice_text;
			if(options.safe){
				notice_text = $('<div class="notice-text"></div>').text(text);
			}else{
				notice_text = $('<div class="notice-text"></div>').html(text);
			}

			notice_item.append(notice_text);
			notice_base.append(notice_item);


			notice_item.on('click', function(event){
				if(typeof options.on_click == "function")
					options.on_click.apply(root, [event]);

				$(this).off();
				$(this).remove();
			});

			if(options.timeout > 0){
				setTimeout(_.bind(function(){
					notice_item.off();
					notice_item.remove();
				}, this), options.timeout);
			}

			this.dom_node = notice_item;
		},
		updateText: function(text){
			if(this.defaults.safe){
				this.dom_node.text(text);
			}else{
				this.dom_node.html(text);
			}
		},
		dismiss: function(){
			this.dom_node.off();
			this.dom_node.remove();
		}
	}, true);	
})();
	