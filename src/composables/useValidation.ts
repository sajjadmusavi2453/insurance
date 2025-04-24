// composables/useValidation.ts
import { ref } from 'vue'
import type { ZodSchema, z } from 'zod'

export function useValidation<T extends ZodSchema<any>>(schema: T) {
  type FormData = z.infer<T>

  const errors = ref<z.ZodFormattedError<FormData> | null>(null)
  const success = ref(false)
  const validData = ref<FormData | null>(null)

  const validate = (values: unknown) => {
    const result = schema.safeParse(values)
    success.value = result.success

    if (!result.success) {
      errors.value = result.error.format()
      validData.value = null
    } else {
      errors.value = null
      validData.value = result.data
    }

    return result
  }

  return {
    errors,
    success,
    validData,
    validate, 
  }
}
