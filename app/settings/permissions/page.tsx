import ExsistingPermissions from "@/components/settings/permissions/exsistingPermissions";
import { PermissionsForm } from "@/components/settings/permissions/permissionsForm";
import { createClient } from "@/utils/supabase/server";
import { NextPage } from "next";
import { toast } from "sonner";

const Permissions: NextPage = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("permissions").select();

  if (error) {
    // toast("Error with fetching permissions");
    console.log(error);
  }
  return (
    <div className="w-full">
      <span className="text-lg">Manage Permissions</span>

      <div className="grid md:grid-cols-2 mt-4 gap-8">
        <div className="flex-1">
          <ExsistingPermissions permissions={data ?? null} />
        </div>
        <div className="flex-1 border rounded-lg p-8">
          <PermissionsForm />
        </div>
      </div>
    </div>
  );
};

export default Permissions;
