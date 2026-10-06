# TravelMate CMS — Content Models

This document describes the content models built for the TravelMate CMS in
Sanity Studio: **Article**, **User**, **Country**, **City** and
**Attraction**. It lists each field, its data type and a short description
of what it is used for.

## Article

Schema file: `schemaTypes/article.ts`

| Field (name) | Title | Data type | Description |
|---|---|---|---|
| `title` | Title | `string` | The headline of the article. |
| `slug` | Slug | `slug` | URL-friendly identifier, generated automatically from the title. |
| `teaser` | Teaser | `text` | A short summary shown in lists/cards. |
| `body` | Body | `text` | The full article text. |
| `image` | Image | `image` | Cover image for the article. |
| `publishedAt` | Published at | `datetime` | Date and time the article was/will be published. |
| `author` | Author | `reference` → `user` | Link to the `User` document who wrote the article. |

## User

Schema file: `schemaTypes/user.ts`

| Field (name) | Title | Data type | Description |
|---|---|---|---|
| `name` | Name | `string` | Full name of the person. |
| `email` | Email | `string` | Contact email address. |
| `image` | Profile image | `image` | Profile picture of the person. |
| `bio` | Biography | `text` | A short description of the person. |

## Relationship between Article and User

An **Article** references a **User** through the `author` field
(`type: "reference"`, `to: [{ type: "user" }]`). This means an article does
not store the author's name directly — it points to an existing `User`
document. If the author's name or photo changes later, every article
referencing that user updates automatically.

## Country

Schema file: `schemaTypes/country.ts`

| Field (name) | Title | Data type | Description |
|---|---|---|---|
| `name` | Name | `string` | The name of the country. |
| `code` | Country code | `string` | Short country code, e.g. `FR`, `DK`. |
| `slug` | Slug | `slug` | URL-friendly identifier, generated from the name. |
| `description` | Description | `text` | A short description of the country. |
| `image` | Image | `image` | Cover photo with alt text, author credit, license and source URL. |

## City

Schema file: `schemaTypes/city.ts`

| Field (name) | Title | Data type | Description |
|---|---|---|---|
| `name` | Name | `string` | The name of the city. |
| `slug` | Slug | `slug` | URL-friendly identifier, generated from the name. |
| `description` | Description | `text` | A short description of the city. |
| `image` | Image | `image` | Cover photo with alt text, author credit, license and source URL. |
| `country` | Country | `reference` → `country` | Link to the `Country` document the city belongs to. |

## Attraction

Schema file: `schemaTypes/attraction.ts`

| Field (name) | Title | Data type | Description |
|---|---|---|---|
| `name` | Name | `string` | The name of the attraction. |
| `slug` | Slug | `slug` | URL-friendly identifier, generated from the name. |
| `description` | Description | `text` | A short description of the attraction. |
| `image` | Image | `image` | Cover photo with alt text, author credit, license and source URL. |
| `address` | Address | `string` | The street address of the attraction. |
| `city` | City | `reference` → `city` | Link to the `City` document the attraction is located in. |

## Relationship between Country, City and Attraction

The three models form a chain of references, so the same country or city
name never has to be repeated as plain text:

```
Country → City → Attraction
```

Each **City** references its **Country** through the `country` field, and
each **Attraction** references its **City** through the `city` field.

Example of the chain created as test data:

```
France (country) → Paris (city) → Eiffel Tower (attraction)
                                 → Louvre Museum (attraction)
                  → Lyon (city)  → Basilica of Notre-Dame de Fourvière
                                 → Place Bellecour

Denmark (country) → Copenhagen (city) → Nyhavn
                                       → The Little Mermaid
                   → Aarhus (city)     → ARoS Art Museum
                                       → Den Gamle By
```

## Published TravelMate content

- 2 `Country` documents (France and Denmark) are published.
- 4 `City` documents (Paris, Lyon, Copenhagen and Aarhus) are published and
  each references its country.
- 8 `Attraction` documents (2 per city) are published and each references its
  city.
- All 14 travel documents have a corresponding Sanity image asset with
  alternative text, photographer credit, license and source URL.

The text prompts and editorial/factual review are documented in
[CONTENT-GENERATION.md](./CONTENT-GENERATION.md). Photographer credits, image
sources and licenses are listed in [IMAGE-CREDITS.md](./IMAGE-CREDITS.md).
