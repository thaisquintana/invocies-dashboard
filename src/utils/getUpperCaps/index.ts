export const getCaps = (head: string, label: string) => {
  if (head) return head.toUpperCase();
  return label.toUpperCase();
};
