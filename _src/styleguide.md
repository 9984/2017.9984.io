---
layout: page
sitemap: false

title: Style Guide
subtitle: Look sharp and stay consistent

css: page-styleguide
---

# Colors

<div class="colors">
{% for color in site.data.colors %}
<div class="color color--{{ color.name }}">
    <span class="color__meta color-name">${{ color.name }}</span>
    <span class="color__meta color-hex">#{{ color.hex }}</span>
</div>
{% endfor %}
</div>

# Typography

The main branding typeface is [Silkscreen](http://kottke.org/plus/type/silkscreen/), used for our logo and headlines:

<p class="silkscreen">Silkscreen</p>

Never write headings in all caps, the font includes caps only so this will happen automatically.

For body copy and all the rest, [Inconsolata](http://levien.com/type/myfonts/inconsolata.html) is in use:

<div class="inconsolata">Inconsolata</div>
<div class="typeface">Inconsolata Regular (400)</div>
<p class="typeface bold"><strong>Inconsolata Bold (700)</strong></p>

Please consult a designer to assist you in using these fonts in your documents & presentations.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

* Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
* Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
* Maecenas sed diam eget risus varius blandit sit amet non magna.

1. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
2. Est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
3. Maecenas sed diam eget risus varius blandit sit amet non magna.

# Logo

Logo can be used with a base class and modifier classes for size & color:

- `logo`: default logo
- `logo--sm`: small version
- `logo--white`: white version for dark backgrounds
- `logo--gray`: dimmed gray version

<svg class="logo" aria-labelledby="title"><title>Logo 9984 >> SUMMIT</title><use xlink:href="/assets/img/sprite.svg#logo"></use></svg>

<svg class="logo logo--sm" aria-labelledby="title"><title>Logo 9984 >> SUMMIT</title><use xlink:href="/assets/img/sprite.svg#logo"></use></svg>

<svg class="logo logo--white" aria-labelledby="title"><title>Logo 9984 >> SUMMIT</title><use xlink:href="/assets/img/sprite.svg#logo"></use></svg>

<svg class="logo logo--sm logo--white" aria-labelledby="title"><title>Logo 9984 >> SUMMIT</title><use xlink:href="/assets/img/sprite.svg#logo"></use></svg>

<svg class="logo logo--gray" aria-labelledby="title"><title>Logo 9984 >> SUMMIT</title><use xlink:href="/assets/img/sprite.svg#logo"></use></svg>

<svg class="logo logo--sm logo--gray" aria-labelledby="title"><title>Logo 9984 >> SUMMIT</title><use xlink:href="/assets/img/sprite.svg#logo"></use></svg>


# Components

## Buttons

<a class="button" href="#">Button</a> <a class="button button--small" href="#">Button</a> <a class="button button--large" href="#">Button</a>

<a class="button button--primary" href="#">Button</a> <a class="button button--primary button--small" href="#">Button</a> <a class="button button--primary button--large" href="#">Button</a>

<a class="button button--dark" href="#">Button</a> <a class="button button--dark button--small" href="#">Button</a> <a class="button button--dark button--large" href="#">Button</a>

## Forms

<form class="form js-parsley" action="#">
    <div class="form-group">
        <input class="form-control" type="text" id="name" name="name" required>
        <label class="form-label" for="name">Your Name</label>
    </div>
    <div class="form-group">
        <input class="form-control" type="email" id="email" name="email">
        <label class="form-label" for="email">Your Email</label>
    </div>
    <div class="form-group">
        <input class="form-control" type="tel" id="phone" name="phone">
        <label class="form-label" for="phone">Your Phone</label>
    </div>
    <div class="form-group">
        <select class="form-control" id="select" name="select" required data-required="true">
            <option value="">&nbsp;</option>
            <option value="Automotive">Automotive</option>
            <option value="Banking">Banking</option>
            <option value="Consulting">Consulting</option>
            <option value="Data">Data</option>
            <option value="Automotive">Automotive</option>
            <option value="Banking">Banking</option>
            <option value="Consulting">Consulting</option>
            <option value="Data">Data</option>
            <option value="Automotive">Automotive</option>
            <option value="Banking">Banking</option>
            <option value="Consulting">Consulting</option>
            <option value="Data">Data</option>
        </select>
        <label class="form-label" for="industry">Industry</label>
    </div>
    <div class="form-group">
        <textarea class="form-control" id="comment" name="comment" rows="1"></textarea>
        <label class="form-label" for="comment">Autogrowing textarea</label>
    </div>
    <p class="form-group text-dimmed mini">
        Fields marked with an <span class="required">*</span> are required.
    </p>
    <div class="form-group">
        <input class="btn btn-primary" type="submit" value="Submit">
    </div>
</form>
