<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="w-[100px] h-[100px] bg-[red] text-[blue]">哈哈哈</div>
</template>

<style scoped>

</style>
