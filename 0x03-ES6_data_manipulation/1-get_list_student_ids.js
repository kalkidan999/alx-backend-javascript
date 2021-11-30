export default function getListStudentIds(item) {
  if (!item.isArray(item)) return [];
  return item.map((i) => i.id);
}
