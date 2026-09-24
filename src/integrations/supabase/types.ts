export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      analytics_events: {
        Row: {
          course_id: string | null
          device_type: string | null
          event_name: string
          id: string
          occurred_at: string
          owner_id: string
          payload: Json
          quality: string | null
          region: string | null
          video_id: string | null
        }
        Insert: {
          course_id?: string | null
          device_type?: string | null
          event_name: string
          id?: string
          occurred_at?: string
          owner_id: string
          payload?: Json
          quality?: string | null
          region?: string | null
          video_id?: string | null
        }
        Update: {
          course_id?: string | null
          device_type?: string | null
          event_name?: string
          id?: string
          occurred_at?: string
          owner_id?: string
          payload?: Json
          quality?: string | null
          region?: string | null
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_events_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analytics_events_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      api_keys: {
        Row: {
          created_at: string
          id: string
          key_hash: string
          key_prefix: string
          label: string
          last_used_at: string | null
          owner_id: string
          revoked_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          key_hash: string
          key_prefix: string
          label: string
          last_used_at?: string | null
          owner_id: string
          revoked_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          key_hash?: string
          key_prefix?: string
          label?: string
          last_used_at?: string | null
          owner_id?: string
          revoked_at?: string | null
        }
        Relationships: []
      }
      bandwidth_usage: {
        Row: {
          bytes_served: number
          edge_bytes: number
          id: string
          origin_bytes: number
          owner_id: string
          recorded_at: string
          region: string
          video_id: string | null
        }
        Insert: {
          bytes_served?: number
          edge_bytes?: number
          id?: string
          origin_bytes?: number
          owner_id: string
          recorded_at?: string
          region?: string
          video_id?: string | null
        }
        Update: {
          bytes_served?: number
          edge_bytes?: number
          id?: string
          origin_bytes?: number
          owner_id?: string
          recorded_at?: string
          region?: string
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bandwidth_usage_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      cache_metrics: {
        Row: {
          bytes_saved: number
          hit_count: number
          id: string
          miss_count: number
          owner_id: string
          recorded_at: string
          region: string
        }
        Insert: {
          bytes_saved?: number
          hit_count?: number
          id?: string
          miss_count?: number
          owner_id: string
          recorded_at?: string
          region?: string
        }
        Update: {
          bytes_saved?: number
          hit_count?: number
          id?: string
          miss_count?: number
          owner_id?: string
          recorded_at?: string
          region?: string
        }
        Relationships: []
      }
      cost_records: {
        Row: {
          amount_cents: number
          category: string
          created_at: string
          currency: string
          id: string
          owner_id: string
          period_end: string
          period_start: string
        }
        Insert: {
          amount_cents?: number
          category: string
          created_at?: string
          currency?: string
          id?: string
          owner_id: string
          period_end?: string
          period_start?: string
        }
        Update: {
          amount_cents?: number
          category?: string
          created_at?: string
          currency?: string
          id?: string
          owner_id?: string
          period_end?: string
          period_start?: string
        }
        Relationships: []
      }
      courses: {
        Row: {
          category: string
          created_at: string
          description: string
          id: string
          instructor_name: string
          owner_id: string
          price_cents: number
          slug: string
          thumbnail_path: string | null
          title: string
          updated_at: string
          visibility: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string
          id?: string
          instructor_name?: string
          owner_id: string
          price_cents?: number
          slug: string
          thumbnail_path?: string | null
          title: string
          updated_at?: string
          visibility?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          id?: string
          instructor_name?: string
          owner_id?: string
          price_cents?: number
          slug?: string
          thumbnail_path?: string | null
          title?: string
          updated_at?: string
          visibility?: string
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          course_id: string
          enrolled_at: string
          id: string
          status: string
          user_id: string
        }
        Insert: {
          course_id: string
          enrolled_at?: string
          id?: string
          status?: string
          user_id: string
        }
        Update: {
          course_id?: string
          enrolled_at?: string
          id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      infrastructure_nodes: {
        Row: {
          cpu_percent: number
          health: string
          id: string
          latency_ms: number
          memory_percent: number
          name: string
          node_type: string
          owner_id: string
          recorded_at: string
          region: string
          requests_per_second: number
        }
        Insert: {
          cpu_percent?: number
          health?: string
          id?: string
          latency_ms?: number
          memory_percent?: number
          name: string
          node_type?: string
          owner_id: string
          recorded_at?: string
          region: string
          requests_per_second?: number
        }
        Update: {
          cpu_percent?: number
          health?: string
          id?: string
          latency_ms?: number
          memory_percent?: number
          name?: string
          node_type?: string
          owner_id?: string
          recorded_at?: string
          region?: string
          requests_per_second?: number
        }
        Relationships: []
      }
      lessons: {
        Row: {
          created_at: string
          duration_seconds: number
          id: string
          module_id: string
          position: number
          preview_enabled: boolean
          title: string
          video_id: string | null
        }
        Insert: {
          created_at?: string
          duration_seconds?: number
          id?: string
          module_id: string
          position?: number
          preview_enabled?: boolean
          title: string
          video_id?: string | null
        }
        Update: {
          created_at?: string
          duration_seconds?: number
          id?: string
          module_id?: string
          position?: number
          preview_enabled?: boolean
          title?: string
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lessons_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      modules: {
        Row: {
          course_id: string
          created_at: string
          id: string
          position: number
          title: string
        }
        Insert: {
          course_id: string
          created_at?: string
          id?: string
          position?: number
          title: string
        }
        Update: {
          course_id?: string
          created_at?: string
          id?: string
          position?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "modules_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount_cents: number
          created_at: string
          currency: string
          id: string
          provider_reference: string | null
          status: string
          subscription_id: string | null
          user_id: string
        }
        Insert: {
          amount_cents?: number
          created_at?: string
          currency?: string
          id?: string
          provider_reference?: string | null
          status?: string
          subscription_id?: string | null
          user_id: string
        }
        Update: {
          amount_cents?: number
          created_at?: string
          currency?: string
          id?: string
          provider_reference?: string | null
          status?: string
          subscription_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string
          headline: string | null
          id: string
          preferences: Json
          timezone: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string
          headline?: string | null
          id: string
          preferences?: Json
          timezone?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string
          headline?: string | null
          id?: string
          preferences?: Json
          timezone?: string
          updated_at?: string
        }
        Relationships: []
      }
      storage_usage: {
        Row: {
          id: string
          owner_id: string
          recorded_at: string
          storage_class: string
          stored_bytes: number
          video_id: string | null
        }
        Insert: {
          id?: string
          owner_id: string
          recorded_at?: string
          storage_class?: string
          stored_bytes?: number
          video_id?: string | null
        }
        Update: {
          id?: string
          owner_id?: string
          recorded_at?: string
          storage_class?: string
          stored_bytes?: number
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "storage_usage_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          created_at: string
          id: string
          period_end: string | null
          plan: string
          provider_customer_id: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          period_end?: string | null
          plan?: string
          provider_customer_id?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          period_end?: string | null
          plan?: string
          provider_customer_id?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      video_processing_jobs: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          progress_percent: number
          stage: string
          started_at: string | null
          status: string
          video_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          progress_percent?: number
          stage?: string
          started_at?: string | null
          status?: string
          video_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          progress_percent?: number
          stage?: string
          started_at?: string | null
          status?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_processing_jobs_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      video_variants: {
        Row: {
          bitrate_kbps: number
          created_at: string
          height: number
          id: string
          manifest_path: string | null
          quality: string
          size_bytes: number
          video_id: string
          width: number
        }
        Insert: {
          bitrate_kbps?: number
          created_at?: string
          height?: number
          id?: string
          manifest_path?: string | null
          quality: string
          size_bytes?: number
          video_id: string
          width?: number
        }
        Update: {
          bitrate_kbps?: number
          created_at?: string
          height?: number
          id?: string
          manifest_path?: string | null
          quality?: string
          size_bytes?: number
          video_id?: string
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "video_variants_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos: {
        Row: {
          category: string
          course_id: string | null
          created_at: string
          description: string
          duration_seconds: number
          id: string
          original_size_bytes: number
          owner_id: string
          source_path: string | null
          status: string
          thumbnail_path: string | null
          title: string
          updated_at: string
          visibility: string
        }
        Insert: {
          category?: string
          course_id?: string | null
          created_at?: string
          description?: string
          duration_seconds?: number
          id?: string
          original_size_bytes?: number
          owner_id: string
          source_path?: string | null
          status?: string
          thumbnail_path?: string | null
          title: string
          updated_at?: string
          visibility?: string
        }
        Update: {
          category?: string
          course_id?: string | null
          created_at?: string
          description?: string
          duration_seconds?: number
          id?: string
          original_size_bytes?: number
          owner_id?: string
          source_path?: string | null
          status?: string
          thumbnail_path?: string | null
          title?: string
          updated_at?: string
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "videos_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      watch_progress: {
        Row: {
          completed_at: string | null
          completion_percent: number
          id: string
          last_position_seconds: number
          lesson_id: string
          updated_at: string
          user_id: string
          watched_seconds: number
        }
        Insert: {
          completed_at?: string | null
          completion_percent?: number
          id?: string
          last_position_seconds?: number
          lesson_id: string
          updated_at?: string
          user_id: string
          watched_seconds?: number
        }
        Update: {
          completed_at?: string | null
          completion_percent?: number
          id?: string
          last_position_seconds?: number
          lesson_id?: string
          updated_at?: string
          user_id?: string
          watched_seconds?: number
        }
        Relationships: [
          {
            foreignKeyName: "watch_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "instructor" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "instructor", "student"],
    },
  },
} as const
