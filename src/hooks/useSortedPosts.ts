import { useState, useMemo, useCallback } from "react";

export type Post = {
  frontmatter: {
    title: string;
    date: string;
  };
  excerpt: string;
  fields: { slug: string };
};

/**
 * Хук: хранит состояние порядка сортировки,
 * возвращает отсортированный по дате массив и функцию-переключатель.
 */
export function useSortedPosts(initialPosts: Post[]) {
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
