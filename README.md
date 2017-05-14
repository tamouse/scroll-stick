# Scroll-Stick

A JavaScript Module to get a header to stick to the top of the screen
when the user scrolls or navigates past it.

## Demo

<https://tamouse.github.io/scroll-stick/>

## Installation

Download from Github and put whereever you want in your project.

```bash
$ cd <PROJECT ROOT>
$ mkdir -p js/vendor/
$ cd js/vendor
$ curl -o scroll-stick.zip https://github.com/tamouse/scroll-stick/archive/master.zip
$ unzip scroll-stick.zip
$ mv scroll-stick-master scroll-stick
```

## Usage

Create a header to stick:

```html
<header id="sticky">
  <!-- header content -->
</header
```

Load the script and initialize it with the sticky header:

```html
<script src="js/vendor/scroll-stick/index.js"></script>
<script>ScrollStick.init('#sticky');</script>
```
## Discussion

I like the way sticky headers work on various web sites I've
seen. There are some really interesting implementations where the
header changes when it gets to the top of the page, which is fun.

This is a very simple implementation. The other examples I've looked
at tend to all use jQuery, which is great, but I wanted one in plain
old JavaScript. It's not really any harder, but there's a lot of stuff
that jQuery makes simpler by having the methods defined.

### Things I had to figure out.

#### cloning the header

This was just a little harder than I thought it would be, and required
a lot of playing around to figure out what to do. The result is in the
`StickyScroll.cloneTarget` function. Cloning the header was pretty
easy, but then I needed to ensure the clone didn't have the same `id`
attribute, and needed to acquire some style properties that might not
be on the original. To make to actually stick to the top, the top has
to be set to zero, positioning needed to be fixed.

The cute part, when you set a block element's position to fixed, it no
longer takes up the same width (the width gets calculated to the
content box). So I _also_ had to set the width property.

Figuring out the actual width took some digging and I found the
`offsetWidth` property, but to make it actually work for the style, I
needed to specify the measurement, "px".

#### Adding the cloned element to the document

I wanted the cloned element to come right after the header
element. After a tour through stackoverflow, I found the answer
at
<http://stackoverflow.com/questions/7258185/javascript-append-child-after-element#7258301>
which gave me the nice one-liner:

```javascript
target.parentNode.insertBefore(clone, target.nextSibling);
```

I made
a [jsfiddle to try it out](https://jsfiddle.net/tamouse/m74nx2e5/).

#### determining the header's offset in the document

In jQuery, there's a nice `.offset` function that gives this, but in
POJS, you have to do a bit more. The
MDN
[explains how to do this](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect),
but doesn't offer code. The resulting code ended up easier than I
thought it would be. (Answers from SO were varying.)

#### performing the action during scrolling

I had to play around a lot with this to get it right. I'm not sure all
the different things I tried, but eventually figured it out.

One thing I did not figure out, the jQuery versions used the
`visibility` CSS property for the sticky header, but what I found
happening was the the "roll-under" fix I put it the CSS was not
working as I'd want. The invisible sticky header clone would push the
anchored element down too far. I ended up switching to use the
`display` property instead.


## Contributing

Contributions welcome! Please abide by
the [Contributor Covenant](ContributorCovenant.txt).

* Please leave issues at <https://github.com/tamouse/scroll-stick/issues>.
* Pull requests accepted! Submit at <https://github.com/tamouse/scroll-stick/pulls>. Please include tests.
* Add to the project [wiki](https://github.com/tamouse/scroll-stick/wiki) if you'd like to.

## License

This work is licensed with the MIT license. See [LICENSE.txt](LICENSE.txt)

## Inspriation:

* [Chris Coylier's Persistent Headers](https://css-tricks.com/persistent-headers/)
* [Kuzedo's StickyHeaders](https://github.com/kuzeko/StickyHeaders)
