import { defineStore } from "pinia";
import { ref } from "vue";

export const usePopupStore = defineStore("popup-state", () => {
  const isPopupVisible = ref(false);
  const conditionProps = ref({});

  function openPopup() {
    isPopupVisible.value = true;
  }

  function closePopup() {
    isPopupVisible.value = false;
  }

  function createPopupFields(columns) {
    const popupFields = {};
    columns.forEach(element => {
      popupFields[element.field] = "";
    });
    return popupFields;
  }

  function openPopupWithProps(props) {
    conditionProps.value = { ...props };
    openPopup();
  }

  return {
    isPopupVisible,
    conditionProps,
    openPopup,
    closePopup,
    createPopupFields,
    openPopupWithProps,
  };
});
