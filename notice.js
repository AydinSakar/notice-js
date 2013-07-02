var notice = function(text, options){
	var root = this;

	options = options===undefined ? {} : options;
	options = _.defaults(options, {
		id: null,
		type: 'alert',
		timeout: 5000,
		confirmation: false,
		on_click: null,
		on_confirm: null,
		on_cancel: null,
	});

	if( ! _.contains(['alert', 'success', 'error', 'warn', 'info', 'confirm'], options.type)){
		options.type = 'alert';
	}

	if($.find('.notice-base').length == 0){
		var notice_base = $('<ul class="notice-base"></ul>');
		$(document.body).append(notice_base);
	}else{
		var notice_base = $('ul.notice-base');
	}
	
	var notice_item = $('<li class="notice-item"></li>');
	if(options.id)
		notice_item.attr('id', options.id);

	notice_item.addClass(options.type);

	var notice_text = $('<div class="notice-text"></div>').text(text);

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

	return notice_item;
};