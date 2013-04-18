Boilerplate
===========
This is a boilerplate customized for me. It's meant to be a good starting point with a clean index.html, built in grid-system and a nice folder structure.
Built with [SASS](http://sass-lang.com/) and a little bit of [love](https://www.google.se/search?q=cute+kittens&sugexp=chrome,mod%3D0&um=1&ie=UTF-8&hl=sv&tbm=isch&source=og&sa=N&tab=wi&ei=g0eaUOGrIeje4QT1wYH4CQ&biw=1539&bih=1056&sei=hUeaUK2aE-jj4QT25ICgBQ)

Grid example
-------------

### The HTML

A simple example of the grid. Notice how you don't have to add any not-so-semantic class names.

```html
<body>
   <section>Main</section>
   <aside>Sidebar</aside>
</body>
```

### The SASS

```css
section {
   @include column(9);
}
aside {
   @include column(3,0);
}
```
Since section and aside will take up the whole width, you want to remove the margin right on the aside element.
This is done by passing the second parameter; 0.

### Credits

Based on [HTML5BP](http://html5boilerplate.com/).