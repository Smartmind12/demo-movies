<p align="center">
  <img src="public/images/logo-light-mode.svg" alt="MeiliSearch logo" width="200" height="200" />
</p>

<h1 align="center">Where to Watch</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/MeiliSearch">MeiliSearch</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://slack.meilisearch.com">Slack</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://docs.meilisearch.com/faq">FAQ</a>
</h4>

<p align="center">
  <a href="https://github.com/meilisearch/demo-movies/blob/main/LICENCE"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License"></a>
</p>
<br/>

<p align="center" style="font-weight:bold;" >Where to Watch</p>

**Table of Contents**:

- [Setup](#setup)
  - [Install dependencies](#install-dependencies)
  - [Run Meilisearch](#run-meilisearch)
  - [Import movies](#import-movies)
- [Run](#run)
- [Build](#build)
  - [Generate build](#generate-build)
  - [Run your build](#run-your-build)
- [Environment variables](#environment-variables)
- [Compatibility with Meilisearch](#compatibility-with-meilisearch)
- [Storybook](#storybook)

<br/>

## Setup

### Install dependencies

```bash
yarn
```

or

```bash
npm install
```

### Run Meilisearch

You can run a Meilisearch instance locally with the following command:

```
docker run -it --rm \
    -p 7700:7700 \
    getmeili/meilisearch:v0.28.0 \
    meilisearch --env="development"
```

### Import movies

Run the following script in order to create the different indexes and upload the movies documents:

`yarn setup`

## Run

```bash
yarn dev
```

or

```bash
npm run dev
```

Go to `http://localhost:3000/` and enjoy ! 🎉

## Build

### Generate build

You can generate a build of this project with the following command:

```bash
yarn build
```

or

```bash
npm run build
```

### Run your build

The above commands will generate an optimized version of the app, inside the `.next` folder.

You can then serve it with:

```bash
yarn start
```

or

```bash
npm run start
```

Or serve it with any web server of your choice.

Example:

```bash
serve .next
```

## Environment variables

To connect to your own Meilisearch instance, two environment variables should be provided:

- `HOST`: the URL of your Meilisearch instance
- `API_KEY`: an API key with at least search rights

You can use an `.env` file to provide the environement variables. An example can be found inside the `.env.example` file.

## Compatibility with Meilisearch

This package only guarantees the compatibility with the [version v0.28.0 of Meilisearch](https://github.com/meilisearch/meilisearch/releases/tag/v0.28.0).

## Storybook

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively test components.

```bash
yarn storybook
```

or

```bash
npm run storybook
```
