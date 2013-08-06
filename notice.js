(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], function() {
			return root.notice = factory();
		});
	} else {
		// Browser globals
		root.notice = factory();
	}
}(this, function() {
	var util = {}, notice;

	/**
	 * util.str_rand - generate random strings
	 * @param  {Number} length - The length of the random string needed
	 * @param  {String} set    - (optional) [alnum, alpha, num] the character set to use, alphanumeric,
	 *                           letters only, or numbers only.
	 * @return {String}        - The random string
	 */
	util.str_rand = function str_randFn(length, set) {
		var sets, text = "",
			alpha, num, possible, i;
		alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		num = '0123456789';
		sets = ['alnum', 'alpha', 'num'];
		if (sets.indexOf(set) < 0) set = 'alnum';
		switch (set) {
			case 'alnum':
				possible = alpha + num;
				break;
			case 'num':
				possible = num;
				break;
			case 'alpha':
				possible = alpha;
				break;
		}
		for (i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};

	/**
	 * util.extend - extend objects
	 * @param  {Object} dest     - An object that will be merged with sources. Properties in destination will be overwritten
	 *                             by source objects.
	 * @param  {Object} sources* - (optional) Objects to be merged with destination, sources will overwrite properties in
	 *                             destination.
	 *
	 * @return {Object}          - The finalized and merged object
	 */
	util.extend = function extendFn(dest) {
		var args = Array.prototype.slice.call(arguments);
		args.slice(1).forEach(function(val, index, source) {
			if (val) {
				for (var prop in val) {
					dest[prop] = val[prop];
				}
			}
		});
		return dest;
	};

	window.util = util;

	notice = function notice_constructor(text, options) {

	};

	notice.defaults = "hello";


	return notice;
}));