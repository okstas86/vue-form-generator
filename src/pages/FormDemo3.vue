<template>
  <div class="page">
    <h1 class="page-title">Форма №3</h1>
    <FormGenerator :fields="fields" v-model="formData">
      <template #customSlot>
        <p class="custom-slot">Это кастомный</p>
      </template>
    </FormGenerator>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormGenerator from '@/components/FormGenerator.vue'

const formData = ref({
  email: '',
  password: '',
  custom: ''
})

const fields = [
  {
    label: 'Email',
    name: 'email',
    type: 'input',
    attrs: {
      id: 'email',
      class: 'form-control',
      type: 'email',
      placeholder: 'Введите email'
    }
  },
  {
    label: 'Пароль',
    name: 'password',
    type: 'input',
    attrs: {
      id: 'password',
      class: 'form-control',
      type: 'password',
      placeholder: 'Введите пароль'
    }
  },
  {
    label: 'Повторите пароль',
    name: 'custom',
    type: 'input',
    attrs: {
      id: 'custom',
      class: 'form-control',
      placeholder: 'Повторите пароль'
    },
    slot: 'customSlot'
  }
]
</script>

<style scoped>
.custom-slot {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #aaa;
}
</style>
