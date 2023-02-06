export function createPopupFields(columns: { field: string }[]) {
  const popupFields: Record<string, string> = {};
  columns.forEach(element => {
    popupFields[element.field] = "";
  });
  return popupFields;
}
