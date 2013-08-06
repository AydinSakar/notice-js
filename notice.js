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
	var util = {}, notice, notice_base;

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

	/**
	 * util.contains - check for existence of array element
	 * @param  {Mixed} needle    - The data being searched for.
	 * @param  {Array} haystack  - The array being searched.
	 * @return {Boolean}         - A boolean indicating if the needle is present or not
	 */
	util.contains = function containsFn(needle, haystack) {
		return (haystack.indexOf(needle) >= 0);
	};

	//Set up notice DOM container
	notice_base = document.createElement("ul");
	notice_base.id = "notice-base";
	document.body.appendChild(notice_base);


	notice = function notice_instance(text, options) {
		var root = this;
		root.options = options === undefined ? notice.defaults : util.extend(notice.defaults, options);

		root.options.type = (util.contains(root.options.type, ['alert', 'success', 'error', 'warn', 'info', 'confirm'])) ? root.options.type : 'alert';

		root.ele = document.createElement("li");
		root.ele.className = "notice-item " + root.options.type;
		root.ele.id = root.options.id === undefined ? util.str_rand(5) : root.options.id;
		root.ele.onclick = function noticeItemClickFn() {
			var defined_click = root.options.onclick();
			if (defined_click !== false) {
				root.remove();
			}
		}


		if (root.options.safe) {
			root.ele.textContent = text;
		} else {
			root.ele.innerHTML = text;
		}

		if (root.options.timeout > 0) {
			root.timerID = setTimeout(function() {
				root.remove();
				if (root.options.ontimeout !== null) {
					root.options.ontimeout();
				}
			}, root.options.timeout);
		}

		notice_base.appendChild(root.ele);

		return this;
	};
	notice.prototype.updateText = function updateTextFn(text) {
		var root = this;

		if (root.options.safe) {
			root.ele.textContent = text;
		} else {
			root.ele.innerHTML = text;
		}

		return this;
	};
	notice.prototype.cancelTimeout = function cancelTimeoutFn() {
		var root = this;
		if (root.timerID) {
			window.clearTimeout(root.timerID);
		}
		return this;
	};
	notice.prototype.remove = function removeFn() {
		var root = this;

		if (root.options.animate) {
			jQuery(root.ele).fadeOut(400, function() {
				root.ele.remove();
			});
		} else {
			root.ele.remove();
		}

		return this;
	};

	notice.defaults = {
		animate: (window.jQuery) ? true : false,
		autoshow: true,
		safe: false,
		type: 'alert',
		timeout: 5000,
		onclick: function() {},
		ontimeout: null
	};

	notice.VERSION = '0.0.1';

	return notice;
}));