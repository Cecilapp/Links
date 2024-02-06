_Links_ is a Linktree alternative powered by [Cecil](https://cecil.app), [Tailwind CSS](https://tailwindcss.com) and [Font Awesome](https://fontawesome.com).

[![Links example](docs/screenshot.png)](links.cecil.app)

Demo: <https://cecil-links-demo.netlify.app>

## Install

The easiest way to create a new Links project is using [Composer](https://getcomposer.org):

```bash
composer create-project cecil/links my-project
```

If you want to personalize the theme color ([see below](#customize)), you must install `tailwindcss` too:

```bash
npm install
```

### Update

If you want to update _component themes_ (i.e.: _[fontawesome](https://github.com/Cecilapp/theme-fontawesome#readme)_, _[pwa](https://github.com/Cecilapp/theme-pwa#readme)_ and _[netlity](https://github.com/Cecilapp/theme-netlify#readme)_) you must run the following command:

```bash
composer update
```

## Usage

### Preview

```bash
php cecil.phar serve
```

### Manage links

Edit file `pages/index.md` to:

1. add links in _front matter_
2. free content in _body_ (optional)

```yaml
---
links:
  - title: Twitter                        # links title
    url: https://twitter.com/ArnaudLigny/ # URL
    color: '#1DA1F2'                      # hexadecimal color code (optional)
    icon: brands:twitter                  # icon: <style>:<name> (optional, https://fontawesome.com/icons)
---
Content here.
```

### Configuration

Define the site configuration in [`cecil.yml`](cecil.yml).

> [!TIP]
> Full documentation is available at [cecil.app](https://cecil.app/documentation/configuration/).

### Customize

You can change the theme color through the file `tailwind.config.js`, then rebuild CSS:

```bash
npx tailwindcss -i ./assets/tailwind.css -o ./assets/styles.css
```

### Publish

```bash
php cecil.phar build
```

Then deploy __site_ directory content to your web hosting solution.

## License

_Links_ is a free software distributed under the terms of the MIT license.

© [Arnaud Ligny](https://arnaudligny.fr)
