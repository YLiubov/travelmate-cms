// Fil: schemaTypes/index.ts
import { article } from "./article"
import { user } from "./user"
import { country } from "./country"
import { city } from "./city"
import { attraction } from "./attraction"

// Registrerer vores schemas
export const schemaTypes = [article, user, country, city, attraction]