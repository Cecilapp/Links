# _Links_ theme

Theme for [Cecil](https://cecil.app), powered by [Tailwind CSS](https://tailwindcss.com) and [Font Awesome](https://fontawesome.com).

![Screenshot](./docs/screenshot.png)

## Features

- _to complete_

## Installation

```bash
composer require cecil/theme-links
```

> Or [download the latest archive](https://github.com/Cecilapp/theme-links/releases/latest/) and uncompress its content in `themes/links`.

## Usage

Add `links` in the `theme` section of the configuration:

```yaml
theme:
  - links
```

### Configuration

```yaml
# to complete
```

### Customize styles

Create the [Tailwind configuration](https://tailwindcss.com/docs/configuration) file `tailwind.config.js`:

```javascript
/* to complete */
```

Run the following command:

```bash
npm install -D tailwindcss
npx tailwindcss -i ./themes/links/tailwind.css -o ./assets/styles.css
```

## Development

### Install deps

```bash
npm install
```

### Rebuild CSS

```bash
npx tailwindcss -c ./tailwind.preset.js -i ./tailwind.css -o ./assets/styles.css
```

## License

 _Links_ theme is a free software distributed under the terms of the MIT license.

© [Arnaud Ligny](https://arnaudligny.fr)
