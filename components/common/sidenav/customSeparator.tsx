"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function BreadcrumbWithCustomSeparator() {
  const pathName = usePathname();

  // Split the path and filter out any empty strings (e.g., leading slash)
  const currentPath = pathName.split("/").filter((path) => path !== "");

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        {currentPath.map((item, index) => {
          const isLastItem = index === currentPath.length - 1;

          return (
            <BreadcrumbItem key={index}>
              {!isLastItem ? (
                <BreadcrumbLink
                  href={`/${currentPath.slice(0, index + 1).join("/")}`}
                >
                  {decodeURIComponent(item)}
                </BreadcrumbLink>
              ) : (
                <span className="font-bold">{decodeURIComponent(item)}</span>
              )}
              {!isLastItem && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
