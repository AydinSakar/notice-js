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