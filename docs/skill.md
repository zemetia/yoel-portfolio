# Skills API Reference

> Quick-access reference for AI agents. All data lives in PostgreSQL via Prisma. No Firebase.

---

## Prisma Model

```prisma
model Skill {
  id          String   @id @default(cuid())
  profileId   String
  profile     Profile  @relation(fields: [profileId], references: [id], onDelete: Cascade)

  name        String
  list        String?  // comma-separated names, e.g. "React, Vue, Angular"
  category    String?  // "Frontend" | "Backend" | "DevOps" | "Language" | etc.
  proficiency Int?     // 1–5 scale (1 = beginner, 5 = expert)
  iconSlug    String?  // devicon / simple-icons slug
  isVisible   Boolean  @default(true)
  order       Int      @default(0)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([profileId])
}
```

---

## Endpoints

### `GET /api/v1/skills`

List skills. Supports filtering, search, and pagination.

**Query params**

| Param | Type | Default | Description |
|---|---|---|---|
| `profileId` | string | — | Filter by owner profile ID (exact match) |
| `category` | string | — | Filter by category (exact match) |
| `search` | string | — | Fuzzy search on `name` field |
| `page` | number | `1` | Page number |
| `limit` | number | `20` | Results per page (max 100) |
| `sort` | string | `createdAt` | Field to sort by |
| `order` | `asc\|desc` | `desc` | Sort direction |
| `ids` | string | — | Comma-separated IDs for batch fetch |

**Response 200**
```json
{
  "success": true,
  "data": [
    {
      "id": "clxxxxx",
      "profileId": "clyyyyy",
      "name": "TypeScript",
      "list": "TypeScript, JavaScript",
      "category": "Language",
      "proficiency": 5,
      "iconSlug": "typescript",
      "isVisible": true,
      "order": 0,
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-01T00:00:00.000Z"
    }
  ],
  "meta": {
    "total": 42,
    "page": 1,
    "limit": 20
  }
}
```

---

### `POST /api/v1/skills`

Create a new skill.

**Request body**

| Field | Type | Required | Notes |
|---|---|---|---|
| `profileId` | string | ✅ | Must be an existing Profile ID |
| `name` | string | ✅ | Skill display name |
| `list` | string \| null | — | Comma-separated sub-skills |
| `category` | string \| null | — | Grouping label |
| `proficiency` | integer 1–5 \| null | — | Self-assessed level |
| `iconSlug` | string \| null | — | Icon identifier for devicon/simple-icons |
| `isVisible` | boolean | — | Show/hide without deleting (default `true`) |
| `order` | integer | — | Display order (default `0`) |

**To hide a skill:** `PATCH /api/v1/skills/[id]` with `{ "isVisible": false }` — data is preserved, just hidden from the public view.

**Response 201**
```json
{ "success": true, "data": { /* created Skill object */ } }
```

---

### `GET /api/v1/skills/[id]`

Fetch a single skill by ID.

**Response 200** — same shape as one item from the list response.
**Response 404** — `{ "success": false, "error": "Skill not found" }`

---

### `PATCH /api/v1/skills/[id]`

Partial update. All fields are optional.

**Request body** — same fields as POST, all optional.

**Response 200** — updated Skill object.

---

### `DELETE /api/v1/skills/[id]`

Delete a skill.

**Response 200** — `{ "success": true, "data": { "id": "clxxxxx" } }`
**Response 404** — resource not found.

---

## Response Envelope

All responses share this shape (from `src/lib/api-helpers.ts`):

```ts
// Success (list)
{ success: true; data: Skill[];  meta: { total: number; page: number; limit: number } }

// Success (single / mutation)
{ success: true; data: Skill }

// Error
{ success: false; error: string }
```

HTTP status codes: `200` OK · `201` Created · `400` Bad request · `404` Not found · `500` Server error.

---

## Source Files

| File | Role |
|---|---|
| [`src/app/api/v1/skills/route.ts`](../src/app/api/v1/skills/route.ts) | GET list + POST |
| [`src/app/api/v1/skills/[id]/route.ts`](../src/app/api/v1/skills/%5Bid%5D/route.ts) | GET one + PATCH + DELETE |
| [`prisma/schema.prisma`](../prisma/schema.prisma) | `model Skill` definition |
| [`src/lib/api-helpers.ts`](../src/lib/api-helpers.ts) | `ok`, `created`, `bad`, `notFound`, `parseFilters`, `parseBody` |
| [`src/lib/prisma.ts`](../src/lib/prisma.ts) | Prisma client singleton |
