# PWA component theme

The _PWA_ component theme for [Cecil](https://cecil.app) provides helpers to implement a [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#what_is_a_service_worker) to turn a website into a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/).

## Features

- Generated and configurable Web manifest
- No dependencies, vanilla JavaScript
- Automatic caching of visited resources
- Pre-caching of all published pages
- Pre-caching of a list of assets
- Generic offline SVG image

## Prerequisites

- A [Cecil](https://cecil.app) website
- A [supported browser](https://developer.mozilla.org/docs/Web/API/Service_Worker_API/Using_Service_Workers#Compatibilit%C3%A9_des_navigateurs)
- HTTPS

## Installation

```bash
composer require cecil/theme-pwa
```

> Or [download the latest archive](https://github.com/Cecilapp/theme-pwa/releases/latest/) and uncompress its content in `themes/pwa`.

## Usage

Add `pwa` in the `theme` section of the `config.yml`:

```yaml
theme:
  - pwa
```

### Web manifest

Add the [web manifest](https://developer.mozilla.org/fr/docs/Web/Manifest) in the HTML `<header>` of the main template:

```twig
<link rel="manifest" href="{{ url('manifest') }}">
```

Configure it:

```yaml
manifest:
  background_color: '#FFFFFF'
  theme_color: '#202020'
  icons:
    - icon-192x192.png
    - icon-512x512.png
    - src: icon-192x192-maskable.png
      purpose: maskable
    - src: icon-512x512-maskable.png
      purpose: maskable
```

#### Web manifest Optional

Add [shortcuts](https://developer.mozilla.org/docs/Web/Manifest/shortcuts):

```yaml
manifest:
  shortcuts: true
```

Add [installer screenshots](https://developer.mozilla.org/docs/Web/Manifest/screenshots):

```yaml
manifest:
  screenshots:
    - screenshots/screenshot-desktop.png
    - screenshots/screenshot-mobile.png
```

### Service worker

[Register the service worker](https://developers.google.com/web/fundamentals/primers/service-workers/registration#common_registration_boilerplate) before the end of the HTML `</body>` of the main template:

```twig
{% include 'partials/regsw.js.twig' with {'site': site} only %}
```

Enable the service worker:

```yaml
serviceworker:
  enabled: true
```

#### Service worker Optional

Define pre-cached files:

```yaml
serviceworker:
  precache:
    - icon-192x192.png
    - icon-512x512.png
    - styles.css
```

Define ignored paths:

```yaml
serviceworker:
  ignore:
    - name: 'cms'
      path: '/admin'
```

Do not pre-cache a specific page (through its front matter):

```yaml
---
serviceworker:
  precache: false
---
```
