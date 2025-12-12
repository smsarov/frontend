import { Suspense } from "react";
import { db } from "@db/index";
import { groups, pages } from "@db/schema";
import { eq } from "drizzle-orm";
import DocumentsView from "./DocumentsView";

export default async function DocumentsPage() {
  const rows = await db
    .select({
      groupId: groups.id,
      groupName: groups.name,
      pageId: pages.id,
      pageTitle: pages.title,
      pageContent: pages.content,
    })
    .from(groups)
    .leftJoin(pages, eq(groups.id, pages.groupId));

  const map = new Map();

  for (const row of rows) {
    if (!map.has(row.groupId)) {
      map.set(row.groupId, {
        id: row.groupId,
        name: row.groupName,
        pages: [],
      });
    }

    if (row.pageId !== null) {
      map.get(row.groupId).pages.push({
        id: row.pageId,
        title: row.pageTitle,
        content: row.pageContent,
      });
    }
  }

  const data = Array.from(map.values());

  return (
    <Suspense fallback={<div className="p-8">Загрузка...</div>}>
      <DocumentsView groups={data} />
    </Suspense>
  );
}
