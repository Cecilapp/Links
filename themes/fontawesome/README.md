# Font Awesome component theme

The _Font Awesome_ component theme for [Cecil](https://cecil.app) provides helpers to use [Font Awesome icons](https://fontawesome.com/search?o=r&m=free&s=solid%2Cregular&f=brands%2Cclassic).

## Installation

```bash
composer require cecil/theme-fontawesome
```

> Or [download the latest archive](https://github.com/Cecilapp/theme-fontawesome/releases/latest/) and uncompress its content in `themes/fontawesome`.

## Usage

Add `fontawesome` in the `theme` section of the `config.yml`:

```yaml
theme:
  - fontawesome
```

Import macro in your template:

```twig
{% import 'macros/fontawesome.twig' as fontawesome %}
```

Include styles and webfonts from the `<head>` of your template:

```twig
{% include 'partials/fontawesome.twig' %}
```

Display the desired icon:

```twig
{{ fontawesome.icon('<name>', '<font>') ~}}
```

- `<name>`: name of the [font](https://fontawesome.com/search?o=r&m=free&s=solid%2Cregular&f=brands%2Cclassic), e.g. "star"
- `<font>`: font style, e.g. "regular" ("regular", "solid" or "brands". "regular" by default)
