<template>
  <div class="page">
    <h1 class="page-title">Форма №1</h1>
  <FormGenerator
    :fields="fields"
    v-model="formData"
    @submit="handleSubmit"
    @cancel="handleCancel"
  />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormGenerator from '@/components/FormGenerator.vue'

const formData = ref({
  username: '',
  age: '',
  terms: false,
  description: '',
})

const fields = [
  { name: 'username', label: 'Имя пользователя', type: 'input', attrs: { type: 'text', placeholder: 'Введите имя' } },
  { name: 'age', label: 'Возраст', type: 'input', attrs: { type: 'number' } },
  { name: 'terms', label: 'Принять условия', type: 'checkbox' },
  { name: 'description', label: 'Описание', type: 'textarea', attrs: { rows: 4 } },
]

const handleSubmit = (data: any) => {
  console.log('Submitted', data)
}

const handleCancel = () => {
  console.log('Отмена')
}
</script>
