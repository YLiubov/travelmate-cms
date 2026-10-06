# TravelMate CMS

Sanity Studio project used to manage content for the TravelMate travel app.

## Content models

The Studio includes **Article**, **User**, **Country**, **City** and
**Attraction** models. See [CONTENT-MODELS.md](./CONTENT-MODELS.md) for their
fields and relationships.

The production dataset contains a connected set of French and Danish travel
content. See [CONTENT-GENERATION.md](./CONTENT-GENERATION.md) for the text
prompts and editorial review, and [IMAGE-CREDITS.md](./IMAGE-CREDITS.md) for
photo sources and reuse licenses.

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
