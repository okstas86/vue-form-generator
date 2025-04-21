<template>
  <div class="app">
    <nav class="nav">
      <RouterLink to="/form1">Форма 1</RouterLink>
      <RouterLink to="/form2">Форма 2</RouterLink>
      <RouterLink to="/form3">Форма 3</RouterLink>
    </nav>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>
