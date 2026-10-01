# TravelMate CMS — Content Models

This document describes the two content models built for the TravelMate CMS
in Sanity Studio: **Article** and **User**. It lists each field, its data
type and a short description of what it is used for.

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

## Relationship between the models

An **Article** references a **User** through the `author` field
(`type: "reference"`, `to: [{ type: "user" }]`). This means an article does
not store the author's name directly — it points to an existing `User`
document. If the author's name or photo changes later, every article
referencing that user updates automatically.

## Test data

At least one `User` document and one `Article` document (referencing that
user as the author) have been created and published in Sanity Studio to
verify that both models work correctly, including image upload, slug
generation and the author reference.
