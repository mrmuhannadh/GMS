"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { permissionFormSchema } from "./permFormSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/utils/supabase/client";
import { permissions, PermissionType } from "@/utils/permission_utils";

export function PermissionsForm() {
  const supabase = createClient();
  const form = useForm<z.infer<typeof permissionFormSchema>>({
    resolver: zodResolver(permissionFormSchema),
    defaultValues: {
      permissionName: "",
      permissions: {},
    },
  });

  const { control, setValue, watch } = form;
  const watchedPermissions = watch("permissions");

  function onSubmit(values: z.infer<typeof permissionFormSchema>) {
    console.log(values);
  }

  const handleParentCheckboxChange = (
    permissionId: string,
    checked: boolean
  ) => {
    const selectedActions = checked
      ? [PermissionType.View, PermissionType.Edit, PermissionType.Delete]
      : [];
    setValue(`permissions.${permissionId}`, selectedActions);
  };

  const handleChildCheckboxChange = (
    permissionId: string,
    action: PermissionType,
    checked: boolean
  ) => {
    const currentActions = watchedPermissions?.[permissionId] || [];
    if (checked) {
      setValue(`permissions.${permissionId}`, [...currentActions, action]);
    } else {
      setValue(
        `permissions.${permissionId}`,
        currentActions.filter((item: any) => item !== action)
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="permissionName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permission Name</FormLabel>
              <FormControl>
                <Input placeholder="Admin pirivilages..." {...field} />
              </FormControl>
              <FormDescription>
                This name will be displayed when assign permissions
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Permissions Section */}
        <div>
          <div className="mb-4">
            <FormLabel className="text-base">Permissions</FormLabel>
            <FormDescription>
              Select the permissions and their actions.
            </FormDescription>
          </div>

          {permissions.map((permission) => (
            <div key={permission.id} className="mb-6">
              <div className="flex gap-2 items-center mb-2">
                <Checkbox
                  checked={
                    watchedPermissions?.[permission.id]?.length ===
                    [
                      PermissionType.View,
                      PermissionType.Edit,
                      PermissionType.Delete,
                    ].length
                  }
                  onCheckedChange={(checked) =>
                    handleParentCheckboxChange(permission.id, Boolean(checked))
                  }
                />
                <FormLabel className="font-semibold">
                  {permission.name}
                </FormLabel>
              </div>

              <div className="ml-6 space-y-2">
                {[
                  PermissionType.View,
                  PermissionType.Edit,
                  PermissionType.Delete,
                ].map((action) => (
                  <div key={action} className="flex    gap-2 items-center">
                    <Checkbox
                      checked={watchedPermissions?.[permission.id]?.includes(
                        action
                      )}
                      onCheckedChange={(checked) =>
                        handleChildCheckboxChange(
                          permission.id,
                          action,
                          Boolean(checked)
                        )
                      }
                    />
                    <FormLabel>{action}</FormLabel>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end w-full">
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>
  );
}
