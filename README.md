**_Links_** is a [Linktree](https://linktr.ee) clone powered by [Cecil](https://cecil.app), [Tailwind CSS](https://tailwindcss.com) and [Font Awesome](https://fontawesome.com).

## Install

```bash
# install Tailwind CSS
npm install
# download Cecil
curl -LO https://cecil.app/cecil.phar
```

## Usage

Edit `content/index.md` to add links in front matter and short presentation in body.

Build and serve:

```bash
# build CSS
npx tailwindcss -i ./assets/tailwind.css -o ./assets/styles.css --watch
# build and serve static website
php cecil.phar serve -v --clear-cache
```
