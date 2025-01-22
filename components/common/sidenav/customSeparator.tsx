"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";

export function BreadcrumbWithCustomSeparator() {
  const pathName = usePathname();

  const currentPath = pathName.split("/");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {currentPath.map((item, index) => {
          const isLastItem = index === currentPath.length - 1;

          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink className={isLastItem ? "bold" : ""}>
                {/* <Link href="/components">Components</Link> */}
                {item}
              </BreadcrumbLink>
              {!isLastItem && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
