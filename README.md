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
