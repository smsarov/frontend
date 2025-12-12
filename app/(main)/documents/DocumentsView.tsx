"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Page {
  id: number;
  title: string;
  content: string;
}

interface Group {
  id: number;
  name: string;
  pages: Page[];
}

interface DocumentsViewProps {
  groups: Group[];
}

export default function DocumentsView({ groups }: DocumentsViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedPageId = searchParams.get("page")
    ? parseInt(searchParams.get("page")!)
    : null;

  // Find the first page from the first group as default
  const defaultPageId =
    groups.length > 0 && groups[0].pages.length > 0
      ? groups[0].pages[0].id
      : null;

  const currentPageId = selectedPageId || defaultPageId;

  // Initialize expanded groups - expand the first group by default
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(
    new Set(groups.length > 0 ? [groups[0].id] : [])
  );

  // Find the currently selected page
  const selectedPage = groups
    .flatMap((group) => group.pages)
    .find((page) => page.id === currentPageId);

  // Find which group contains the selected page
  const selectedGroup = groups.find((group) =>
    group.pages.some((page) => page.id === currentPageId)
  );

  // Expand the group containing the selected page on mount
  useEffect(() => {
    if (selectedGroup) {
      setExpandedGroups((prev) => new Set(prev).add(selectedGroup.id));
    }
  }, [selectedGroup?.id]);

  const toggleGroup = (groupId: number) => {
    setExpandedGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  };

  const selectPage = (pageId: number) => {
    router.push(`/documents?page=${pageId}`);
  };

  // Generate numbered labels for groups and pages
  const getGroupNumber = (index: number) => index + 1;
  const getPageNumber = (groupIndex: number, pageIndex: number) =>
    `${getGroupNumber(groupIndex)}.${pageIndex + 1}`;

  return (
    <div className="flex flex-row min-h-[calc(100vh-200px)] w-full bg-background gap-[20vw]">
      {/* Left Sidebar - Navigation */}
      <div className="bg-background p-8">
        <h2 className="text-3xl font-semibold text-primary mb-8">
          Документы сайта
        </h2>
        <nav className="flex flex-col gap-1">
          {groups.map((group, groupIndex) => {
            const isExpanded = expandedGroups.has(group.id);
            const groupNumber = getGroupNumber(groupIndex);
            const hasSelectedPage = group.pages.some(
              (page) => page.id === currentPageId
            );

            return (
              <div key={group.id} className="flex flex-col">
                <button
                  onClick={() => toggleGroup(group.id)}
                  className="flex items-center justify-between text-left py-3 px-4 rounded transition-colors w-full group"
                >
                  <span
                    className={`text-lg ${
                      hasSelectedPage ? "text-accent font-medium" : "text-primary"
                    } group-hover:text-accent group-hover:underline`}
                  >
                    {group.name}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  )}
                </button>
                {isExpanded && group.pages.length > 0 && (
                  <div className="ml-6 mt-1 flex flex-col gap-0.5">
                    {group.pages.map((page, pageIndex) => {
                      const isSelected = page.id === currentPageId;

                      return (
                        <button
                          key={page.id}
                          onClick={() => selectPage(page.id)}
                          className={`text-left py-2.5 px-4 rounded transition-colors ${
                            isSelected
                              ? "text-accent font-medium underline"
                              : "text-primary hover:text-accent hover:underline"
                          }`}
                        >
                          {page.title}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-8 bg-background">
        {selectedPage ? (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-semibold text-primary mb-8">
              {selectedPage.title}
            </h1>
            <div className="text-primary leading-relaxed space-y-6">
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: selectedPage.content }}
              />
            </div>
          </div>
        ) : (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-semibold text-primary mb-8">
              Документы сайта
            </h1>
            <p className="text-primary text-lg">
              Выберите документ из списка слева для просмотра.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

