**_Links_** is a [Linktree](https://linktr.ee) clone powered by [Cecil](https://cecil.app), [Tailwind CSS](https://tailwindcss.com) and [Font Awesome](https://fontawesome.com).

[![Links example](docs/cecil-links.preview.png)](https://cecil-links.netlify.app)

Demo: <https://cecil-links-demo.netlify.app>

## Install

```bash
# download Cecil
curl -LO https://cecil.app/cecil.phar
```

If you need to personalize colors of the theme, you must install `tailwindcss` package with npm:

```bash
npm install
```

If you want to use the utility themes (i.e.: _[serviceworker](https://github.com/Cecilapp/theme-serviceworker#readme)_ and _[netlity](https://github.com/Cecilapp/theme-netlify#readme)_), you must run the following command, then enable them in your config.):

```bash
composer install
```

## Usage

### Manage links

Edit `pages/index.md` to add links in _front matter_ and short presentation in _body_.

```yaml
links:
  - title: Twitter # links title
    url: https://twitter.com/ArnaudLigny/ # URL
    color: '#1DA1F2' # hexadecimal color code
    icon: brands:twitter # Font Awesome icon (https://fontawesome.com/icons): <brands|solid>:icon
```

### Configuration

- Define the site's configuration in `config.yml`
- Customize theme color in `tailwind.config.js`

> Cecil's documentation is available on [cecil.app](https://cecil.app/documentation/configuration/).

### Build and serve

```bash
# build CSS
npx tailwindcss -i ./assets/tailwind.css -o ./assets/styles.css --watch
# build and serve static website
php cecil.phar serve -v --clear-cache
```

### Publish

```bash
# build
php cecil.phar build
```

Then deploy __site_ directory content to your web hosting solution.

## License

_Links_ is a free software distributed under the terms of the MIT license.

© [Arnaud Ligny](https://arnaudligny.fr)
