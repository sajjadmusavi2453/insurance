import { ref } from "vue";

export const useButtonLoader = () => {
  const isLoading = ref<boolean>(false);
  const setLoading = () => {
    isLoading.value = true;
  };
  const unsetLoading = () => {
    isLoading.value = false;
  };

  return {
    isLoading,
    setLoading,
    unsetLoading,
  };
};
