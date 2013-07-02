notice.js
=========

A very bare-bones notification tool that lets completely leaves the styleing up to the developer. After looking for a few hours for the perfect notification library, all of them are really hard to implement custom styles. So this is my notification tool that focuses on easy implmentation as far as integrating it into any UI.

This is the foundation of `notice.js`. It uses a `ul` so multiple notifications can appear at once, this is the element that will always remain attached to the `body` element.
```html
<ul class="notice-base"></ul>
```