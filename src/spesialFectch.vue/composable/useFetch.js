import { ref } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  async function execute() {
    loading.value = true;
    error.value = null;

    try {
      data.value = await url();
      
      console.log(data)
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  return {data, loading, error, execute}
}
