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
| `image` | Image | `image` | Cover image for the country. |

## City

Schema file: `schemaTypes/city.ts`

| Field (name) | Title | Data type | Description |
|---|---|---|---|
| `name` | Name | `string` | The name of the city. |
| `slug` | Slug | `slug` | URL-friendly identifier, generated from the name. |
| `description` | Description | `text` | A short description of the city. |
| `image` | Image | `image` | Cover image for the city. |
| `country` | Country | `reference` → `country` | Link to the `Country` document the city belongs to. |

## Attraction

Schema file: `schemaTypes/attraction.ts`

| Field (name) | Title | Data type | Description |
|---|---|---|---|
| `name` | Name | `string` | The name of the attraction. |
| `slug` | Slug | `slug` | URL-friendly identifier, generated from the name. |
| `description` | Description | `text` | A short description of the attraction. |
| `image` | Image | `image` | Cover image for the attraction. |
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

## Test data

- 1 `User` document and 1 `Article` document (referencing that user as the
  author) have been created and published.
- 2 `Country` documents (France, Denmark) have been created and published.
- 4 `City` documents (Paris, Lyon, Copenhagen, Aarhus), each correctly
  referencing its country, have been created and published.
- 8 `Attraction` documents (2 per city), each correctly referencing its
  city, have been created and published.

This confirms that image upload, slug generation and the reference fields
(`author`, `country`, `city`) all work correctly end to end.
