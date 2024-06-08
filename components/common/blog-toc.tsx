// https://github.com/markmead/hyperui/blob/main/app/blog/%5Bslug%5D/page.jsx
// 参考hyperui 的blog结构
"use client";
interface HeadingItem {
  itemText: string | null;
  itemId: string;
}

type NestedHeadingItem = [HeadingItem, NestedHeadingItem[]];

import { useEffect, useState } from "react";

export default function BlogTableContent() {
  const [contentHeadings, setContentHeadings] = useState<NestedHeadingItem[]>(
    []
  );

  useEffect(() => {
    const headingItems = document.querySelectorAll("h2, h3, h4");
    const headingItemsArray = Array.from(headingItems);

    const contentHeadings = headingItemsArray.reduce<NestedHeadingItem[]>(
      (headingItems, headingItem) => {
        const itemLevel = headingItem.tagName.slice(1);
        console.log(headingItem);

        const newItem = {
          itemText: headingItem.textContent,
          itemId: headingItem.id,
        };

        if (itemLevel === "2") {
          headingItems.push([newItem, []]);
        }

        if (itemLevel === "3") {
          const lastHeadingItem = headingItems[headingItems.length - 1];

          lastHeadingItem[1].push([newItem, []]);
        }

        if (itemLevel === "4") {
          const lastHeadingItem = headingItems[headingItems.length - 1];
          const lastChildHeadingItem =
            lastHeadingItem[1][lastHeadingItem[1].length - 1];

          lastChildHeadingItem[1].push([newItem, []]);
        }

        return headingItems;
      },
      []
    );

    setContentHeadings(contentHeadings);
  }, []);

  const hasHeadings = contentHeadings.length > 0;

  console.log(contentHeadings);

  return hasHeadings ? (
    <details className="mt-4">
      <summary className="cursor-pointer text-sm font-medium text-gray-900">
        Table of Contents
      </summary>

      <div className="mt-1.5 rounded-md border border-gray-100 bg-gray-50 p-1.5">
        <HeadingsGroup groupItem={contentHeadings} />
      </div>
    </details>
  ) : null;
}

function HeadingsGroup({ groupItem }: { groupItem: NestedHeadingItem[] }) {
  return (
    <ul>
      {groupItem.map((itemData) => {
        const [firstItem, childItems] = itemData;

        const { itemText, itemId } = firstItem;

        const itemHasChildren = childItems.length > 0;

        return (
          <li key={itemId}>
            <a href={`#${itemId}`}>{itemText}</a>

            {itemHasChildren && <HeadingsGroup groupItem={[...childItems]} />}
          </li>
        );
      })}
    </ul>
  );
}
