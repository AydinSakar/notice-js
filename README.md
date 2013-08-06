notice.js
=========

A bare-bones notification tool.
```javascript
new notice('Howdy, Folks!');
```

Getting Started
===============
notice.js supports AMD (RequireJS) if that is your style.
```javascript
define(['notice'], function(){
	new notice('I love RequireJS');
});
```

Or if you want to just throw it right into the DOM like a savage, you are welcome to do that too.
```html
<script src="notice.js"></script>
<script>
	new notice('Guten Tag!');
</script>
```

Usage
=====
To create a notice simply write: 
```javascript
var mynotice = new notice('My cool notice');
```

To set more options, pass an object into the second parameter:
```javascript
var mynotice = new notice('My even cooler notice', {
	animate: false,
	safe: false,
	type: 'alert',
	timeout: 5000,
	onclick: function(){},
	ontimeout: null
});
```

### Options
* **animate** `Boolean`
    Indicates whether the notice should fade out or just disappear immediately. Will default to **true** if jQuery is present or **false** if jQuery is not present.
* **safe** `Boolean`
    Indicates if notice.js should escape any HTML being put into a notice. Useful if you want to prevent XSS attacks.
* **type** `String`
    The type of alert that the notice will be. Accepted types are *alert*, *success*, *error*, *warn*, and *info*.
* **timeout** `Number`
    The number of milliseconds to wait before automatically removing the notice. Set to **false** to keep up forever.
* **onclick** `Function`
    A function that will be run when the notice is clicked. When a notice is clicked it will automatically hide it, if this function returns **false**, the notice will not be removed.
* **onclick** `Function`
    A function that will be run when the notice automatically hides itself.


This is the recommended CSS to go with it:
```css
ul.notice-base {
	position: fixed;
	top: 0;
	width: 100%;
	padding: 20px;
	list-style: none;
}
```
