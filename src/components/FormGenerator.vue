<template>
  <form @submit.prevent="onSubmit" class="form-generator">
    <div
      v-for="field in fields"
      :key="field.name"
      class="form-group"
    >
      <label :for="field.name" class="form-label">
        {{ field.label }}
      </label>

     
      <select
        v-if="field.type === 'select'"
        v-model="localModel[field.name]"
        v-bind="field.attrs"
        :id="field.name"
        class="form-control"
      >
        <option
          v-for="opt in field.attrs?.options"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.text || opt.label }}
        </option>
      </select>

     
      <component
        v-else
        :is="getFieldComponent(field.type)"
        v-model="localModel[field.name]"
        v-bind="field.attrs"
        :id="field.name"
        class="form-control"
      >
        
        <template v-if="field.slot" #default>
          <slot :name="field.slot" />
        </template>
      </component>
    </div>

    <div class="form-actions">
      <button type="submit" class="btn-save">Сохранить</button>
      <button type="button" class="btn-cancel" @click="onCancel">Отмена</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive, watch } from 'vue'
const router = useRouter()

interface Field {
  name: string
  label: string
  type: 'input' | 'textarea' | 'select' | 'checkbox'
  attrs?: Record<string, any>
  options?: { label: string; value: string }[]
  slot?: string
}

const props = defineProps<{
  fields: Field[]
  modelValue: Record<string, any>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, any>): void
  (e: 'submit', value: Record<string, any>): void
  (e: 'cancel'): void
}>()

const localModel = reactive({ ...props.modelValue })

watch(
  () => localModel,
  (val) => {
    emit('update:modelValue', val)
  },
  { deep: true }
)

const onSubmit = () => {
  emit('submit', localModel)
  router.push('/form-success') 
}

const onCancel = () => {
  emit('cancel')
}

const getFieldComponent = (type: string) => {
  switch (type) {
    case 'textarea':
      return 'textarea'
    case 'select':
      return 'select'
    case 'checkbox':
      return 'input'
    default:
      return 'input'
  }
}
</script>


