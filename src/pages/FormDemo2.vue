<!-- src/pages/FormDemo2.vue -->
<template>
  <div class="page">
    <h1 class="page-title">Форма №2</h1>
    <FormGenerator :fields="fields" v-model="formData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormGenerator from '@/components/FormGenerator.vue'

const formData = ref({
  gender: '',
  bio: '',
  agree: false
})

const fields = [
  {
    label: 'Пол',
    name: 'gender',
    type: 'select',
    attrs: {
      id: 'gender',
      class: 'form-control',
      options: [
        { value: '', text: 'Выберите пол' },
        { value: 'male', text: 'Мужской' },
        { value: 'female', text: 'Женский' },
      ]
    }
  },
  {
    label: 'О себе',
    name: 'bio',
    type: 'textarea',
    attrs: {
      id: 'bio',
      class: 'form-control',
      placeholder: 'Расскажите немного о себе'
    }
  },
  {
    label: 'Согласен с условиями',
    name: 'agree',
    type: 'input',
    attrs: {
      id: 'agree',
      type: 'checkbox',
    }
  }
]
</script>
