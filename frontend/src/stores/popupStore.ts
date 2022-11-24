import { defineStore } from "pinia";
import { ref } from "vue";

export const usePopupStore = defineStore("popup-state", () => {
  const isPopupVisible = ref(false);

  function openPopup() {
    isPopupVisible.value = true;
  }

  function closePopup() {
    isPopupVisible.value = false;
  }

  function createPopupFields(columns: { field: string }[]) {
    const popupFields: Record<string, string> = {};
    columns.forEach(element => {
      popupFields[element.field] = "";
    });
    return popupFields;
  }

  return {
    isPopupVisible,
    openPopup,
    closePopup,
    createPopupFields,
  };
});
