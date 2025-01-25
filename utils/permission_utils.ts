import { string } from "zod";

export enum PermissionType {
  View = "View",
  Edit = "Edit",
  Delete = "Delete",
}


export interface Permission{
  id:string;
  name: string;
  actions: PermissionType[]
}

export const permissions: Permission[] = [
  {
    id: "p1",
    name: "Permission 1",
    actions: [PermissionType.View, PermissionType.Edit, PermissionType.Delete],
  },
  {
    id: "p2",
    name: "Permission 2",
    actions: [PermissionType.View, PermissionType.Edit, PermissionType.Delete],
  },
];