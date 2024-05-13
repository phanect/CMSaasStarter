import type { MergeDeep } from "type-fest"
import type { Database as DatabaseOriginal } from "../supabase/types"

export type Database = MergeDeep<
  DatabaseOriginal,
  {
    public: {
      Tables: {
        contact_requests: {
          Row: {
            updated_at: Date | null
          }
          Insert: {
            updated_at?: Date | null
          }
          Update: {
            updated_at?: Date | null
          }
        }
        profiles: {
          Row: {
            updated_at: Date | null
          }
          Insert: {
            updated_at?: Date | null
          }
          Update: {
            updated_at?: Date | null
          }
        }
        stripe_customers: {
          Row: {
            updated_at: Date | null
          }
          Insert: {
            updated_at?: Date | null
          }
          Update: {
            updated_at?: Date | null
          }
        }
      }
    }
    storage: {
      Tables: {
        buckets: {
          Row: {
            created_at: Date | null
            updated_at: Date | null
          }
          Insert: {
            created_at?: Date | null
            updated_at?: Date | null
          }
          Update: {
            created_at?: Date | null
            updated_at?: Date | null
          }
        }
        migrations: {
          Row: {
            executed_at: Date | null
          }
          Insert: {
            executed_at?: Date | null
          }
          Update: {
            executed_at?: Date | null
          }
        }
        objects: {
          Row: {
            created_at: Date | null
            last_accessed_at: Date | null
            updated_at: Date | null
          }
          Insert: {
            created_at?: Date | null
            last_accessed_at?: Date | null
            updated_at?: Date | null
          }
          Update: {
            created_at?: Date | null
            last_accessed_at?: Date | null
            updated_at?: Date | null
          }
        }
        s3_multipart_uploads: {
          Row: {
            created_at: Date
          }
          Insert: {
            created_at?: Date
          }
          Update: {
            created_at?: Date
          }
        }
        s3_multipart_uploads_parts: {
          Row: {
            created_at: Date
          }
          Insert: {
            created_at?: Date
          }
          Update: {
            created_at?: Date
          }
        }
      }
      Functions: {
        list_multipart_uploads_with_delimiter: {
          Returns: {
            created_at: Date
          }[]
        }
        list_objects_with_delimiter: {
          Returns: {
            updated_at: Date
          }[]
        }
        search: {
          Returns: {
            created_at: Date
            updated_at: Date
            last_accessed_at: Date
          }[]
        }
      }
    }
  }
>

export type {
  Json,
  Tables,
  TablesInsert,
  TablesUpdate,
  Enums,
} from "../supabase/types"
