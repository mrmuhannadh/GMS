export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]


export type Database = {
  public: {
    Tables: {
      registered_user: {
        Row: {
          id:string;
          created_at:string;
          user_role: string;
          email: string;
          status: string;
          user_id: string;
        };
        Insert: {
          id?:string;
          created_at?:string;
          user_role?: string;
          email?: string;
          status?: string;
          user_id?: string;
        };
        Update: {
          id?:string;
          created_at?:string;
          user_role?: string;
          email?: string;
          status?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "registered_user_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      player_user_profile: {
        Row: {
          id:string;
          created_at:string;
          user_id: string;
          first_name: string;
          last_name: string;
          dob: string;
          contact_no: number;
          address: string;
          country: string;
          gender: string;
          reg_date: string;
          reg_status: string;
        };
        Insert: {
          id?:string;
          created_at?:string;
          user_id?: string;
          first_name?: string;
          last_name?: string;
          dob?: string;
          contact_no?: number;
          address?: string;
          country?: string;
          gender?: string;
          reg_date?: string;
          reg_status?: string;
        };
        Update: {
          id?:string;
          created_at?:string;
          user_id?: string;
          first_name?: string;
          last_name?: string;
          dob?: string;
          contact_no?: number;
          address?: string;
          country?: string;
          gender?: string;
          reg_date?: string;
          reg_status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "player_user_profile_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      admin_user_profile: {
        Row: {
          id:string;
          created_at:string;
          user_id: string;
          first_name: string;
          last_name: string;
          title: string;
          dob: string;
          contact_no: number;
          address: string;
          country: string;
          gender: string;
          status: string;
          joined_date: string;
        };
        Insert: {
          id?:string;
          created_at?:string;
          user_id?: string;
          first_name?: string;
          last_name?: string;
          title?: string;
          dob?: string;
          contact_no?: number;
          address?: string;
          country?: string;
          gender?: string;
          status?: string;
          joined_date?: string;
        };
        Update: {
          id?:string;
          created_at?:string;
          user_id?: string;
          first_name?: string;
          last_name?: string;
          title?: string;
          dob?: string;
          contact_no?: number;
          address?: string;
          country?: string;
          gender?: string;
          status?: string;
          joined_date?: string;
        };
        Relationships: [
          {
            foreignKeyName: "admin_user_profile_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      notifications: {
        Row: {
          id:string;
          created_at:string;
          to: string;
          title: string;
          description: string;
          seen: boolean;
        };
        Insert: {
          id?:string;
          created_at?:string;
          to?: string;
          title?: string;
          description?: string;
          seen?: boolean;
        };
        Update: {
          id?:string;
          created_at?:string;
          to?: string;
          title?: string;
          description?: string;
          seen?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "registered_user_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
 
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };

};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
