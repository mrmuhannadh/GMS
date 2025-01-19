import { Database } from "./database";

export type IRegistedUsers = Database["public"]["Tables"]["resigtered_users"]["Row"];
export type IPlayerUserProfile = Database["public"]["Tables"]["player_user_profile"]["Row"];
export type IAdminUserProfile = Database["public"]["Tables"]["admin_user_profile"]["Row"];
