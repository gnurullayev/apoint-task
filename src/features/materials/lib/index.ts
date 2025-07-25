import type { FlattenedItem } from "../types";

export function flattenTreeTableData(
  data: FlattenedItem[] = []
): FlattenedItem[] {
  const resultMap = new Map<string, FlattenedItem>();

  for (const item of data) {
    if (!resultMap.has(item.parent)) {
      const parentItem = {
        ...createEmptyItem(item.parent),
        children: [],
      };
      delete (parentItem as any).category;
      delete (parentItem as any).parent;
      resultMap.set(item.parent, parentItem);
    }

    const parent = resultMap.get(item.parent)!;

    if (!parent.children) parent.children = [];

    let category = parent.children.find((c) => c.name === item.category);
    if (!category) {
      const categoryItem = {
        ...createEmptyItem(item.category),
        parent: item.parent,
        category: item.category,
        children: [],
      };
      delete (categoryItem as any).category;
      delete (categoryItem as any).parent;
      parent.children.push(categoryItem);
      category = categoryItem;
    }

    category.children = category.children || [];
    category.children.push(item);

    accumulateFields(parent, item);
    accumulateFields(category, item);
  }

  return Array.from(resultMap.values());
}

function createEmptyItem(name: string): FlattenedItem {
  return {
    name,
    material_id: "",
    color: null,
    code: "",
    last_price: 0,
    min_amount: null,
    category: name,
    parent: name,
    unit: "",
    width: "",
    remind_start_amount: 0,
    remind_start_sum: 0,
    remind_income_amount: 0,
    remind_income_sum: 0,
    remind_outgo_amount: 0,
    remind_outgo_sum: 0,
    remind_end_amount: 0,
    remind_end_sum: 0,
    children: [],
  };
}

function accumulateFields(target: FlattenedItem, source: FlattenedItem): void {
  target.remind_start_amount += source.remind_start_amount;
  target.remind_start_sum += source.remind_start_sum;
  target.remind_income_amount += source.remind_income_amount;
  target.remind_income_sum += source.remind_income_sum;
  target.remind_outgo_amount += source.remind_outgo_amount;
  target.remind_outgo_sum += source.remind_outgo_sum;
  target.remind_end_amount += source.remind_end_amount;
  target.remind_end_sum += source.remind_end_sum;
}
