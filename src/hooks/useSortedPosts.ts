import { useState, useMemo, useCallback } from "react";
import type { Post } from "../types";

/**
 * Кастомный хук для сортировки постов по дате
 * @param initialPosts - массив постов который надо отсортировать
 * @returns {{ sortedPosts: Post[]; asc: boolean; toggleOrder: () => void }}
 *   - sortedPosts: массив постов, отсортированный по дате в соответствии с флагом `asc`
 *   - asc: флаг сортировки
 *       • true  — сортировка по возрастанию даты (сначала самые старые)
 *       • false — сортировка по убыванию даты (сначала самые новые)
 *   - toggleOrder: функция для переключения порядка сортировки
 */
export function useSortedPosts(initialPosts: Post[]): {
  sortedPosts: Post[];
  asc: boolean;
  toggleOrder: () => void;
} {
  const [asc, setAsc] = useState(false);

  const sortedPosts = useMemo(() => {
    return [...initialPosts].sort((a, b) => {
      const tA = new Date(a.frontmatter.date).getTime();
      const tB = new Date(b.frontmatter.date).getTime();
      return asc ? tA - tB : tB - tA;
    });
  }, [initialPosts, asc]);

  const toggleOrder = useCallback(() => {
    setAsc((prev) => !prev);
  }, []);

  return { sortedPosts, asc, toggleOrder };
}
