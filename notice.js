(function(root, factory){
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], function () {
			return (root.notice = factory());
		});
	} else {
		// Browser globals
		root.notice = factory();
	}
}(this, function(){
	return function notice(){
		//CODE HERE
	}
}));