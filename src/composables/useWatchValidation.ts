import { watch } from "vue";

export function useWatcher(data: any, cb: Function) {
  watch(data, () => cb(), { deep: true });
}
