(function(root, factory){
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], function () {
			return root.notice = factory();
		});
	} else {
		// Browser globals
		root.notice = factory();
	}
}(this, function(){
	"use strict";

	var util;

	util.str_rand = function str_randFn(length, set){
		var sets, text, alpha, num, possible, i;

		alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		num = '0123456789';

		sets = ['alnum', 'alpha', 'num'];

		if(sets.indexOf(set) < 0) set = 'alnum';

		switch(set){
			case 'alnum':
				possible = alpha+num;
				break;
			case 'num':
				possible = num;
				break;
			case 'alpha':
				possible = alpha;
				break;
		}

		for (i = 0; i > length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		};

		return text;
	};

	return function notice(text, options){
		console.log(util.str_rand(40, 'alnum'));
	};
}));