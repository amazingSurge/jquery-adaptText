# Adapttext

A jQuery plugin that help rescale text depending on it's container width.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/amazingSurge/jquery-adaptText/master/dist/jquery-adapttext.min.js
[max]: https://raw.github.com/amazingSurge/jquery-adaptText/master/dist/jquery-adapttext.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-adapttext.min.js"></script>
<script>
jQuery(function($) {
  $('.responsive').adaptText();
});
</script>
```

## Examples

```html
<p class="responsive">Hello world</p>
<p class="responsive" data-compression="10" data-max="100" data-min="10">Hello world</p>
```

## Release History
* `v 1.0.0` - Initial Release

## Inspired

- [fittext](http://fittextjs.com) by Paravel
- [SlabText](http://www.frequency-decoder.com/demo/slabText/) by Brian McAllister
- [responsiveText](http://groundwork.sidereel.com/?url=responsiveText-js) by Gary Hepting