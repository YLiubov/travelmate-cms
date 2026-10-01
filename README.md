# TravelMate CMS

Sanity Studio project used to plan and manage content for the TravelMate
travel app. It is the first step in building a CMS so articles and authors
can be managed outside of the React application.

## Content models

See [CONTENT-MODELS.md](./CONTENT-MODELS.md) for the full documentation of
the **Article** and **User** models, including fields and data types.

## Run locally

```bash
npm install
npm run dev
```

Studio runs at [http://localhost:3333](http://localhost:3333).

## Project structure

```
schemaTypes/
  article.ts   Article content model
  user.ts      User content model
  index.ts     Registers the schemas with Sanity Studio
sanity.config.ts
sanity.cli.ts
```
