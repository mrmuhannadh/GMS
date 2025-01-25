// import { IPermissions } from "@/utils/models";
import { NextComponentType, NextPage } from "next";
import React from "react";

interface Props {
  permissions: any[] | null;
}
const ExsistingPermissions: NextPage<Props> = ({ permissions }) => {
  return (
    <div>
      <h4 className="text-md">Permissions List</h4>
      {(!permissions || permissions.length === 0) && (
        <div className="mt-8 text-xs flex items-center justify-center">
          No any permissions exsits
        </div>
      )}
    </div>
  );
};

export default ExsistingPermissions;
