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

### Methods
Each instance gets its own methods, so don't go running these on the global `notice` object.

#### mynotice.updateText( text )
Update the text on an existing notice
* text `String` The new text. The input will obey the original `safe` setting.

#### mynotice.cancelTimeout()
If a notice is set to dissapear automatically, this method will keep it from doing that.

#### mynotice.remove()
Removes the notice from the DOM


CSS Quickstart
==============
This is the recommended CSS to start with:
```css
ul#notice-base {
	z-index: -2147483647;
	position: fixed;
	top: 0;
	width: 100%;
	padding: 20px;
	list-style: none;
}
ul#notice-base li.notice-item {
	line-height: 1em;
	cursor: pointer;
	display: table;
	margin-bottom: 10px;
	min-width: 220px;
	max-width: 320px;
	padding: 10px;
	border-radius: 3px;
	color: white;
	border-left-width: 5px;
	border-left-style: solid;
}
ul#notice-base li.notice-item h1,
ul#notice-base li.notice-item h2,
ul#notice-base li.notice-item h3,
ul#notice-base li.notice-item h4,
ul#notice-base li.notice-item h5,
ul#notice-base li.notice-item h6 {
	color: white;
	margin: 0px;
	margin-bottom: 3px;
}
ul#notice-base li.notice-item p:last-child,
ul#notice-base li.notice-item p:only-child {
	margin-bottom: 0px;
}
ul#notice-base li.notice-item.alert {
	border-left-color: #7f8c8d;
	background-color: #95a5a6;
}
ul#notice-base li.notice-item.success {
	background-color: #2ecc71;
	border-left-color: #27ae60;
}
ul#notice-base li.notice-item.error {
	border-left-color: #c0392b;
	background-color: #e74c3c;
}
ul#notice-base li.notice-item.warn {
	background-color: #f1c40f;
	border-left-color: #f39c12;
}
ul#notice-base li.notice-item.info {
	background-color: #3498db;
	border-left-color: #2980b9;
}
```
