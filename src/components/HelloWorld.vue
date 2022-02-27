<script setup>
import { ref, onMounted } from 'vue';
let imagesURL = []
let url = ref('');
let count = ref(0)

const queryImages = (pn = '1', rn = '10') => {
  const commonP = 'tn=resultjson_com' + '&ipn=rj&ct=201326592&fp=result' + '&word=%E7%99%BD%E6%95%AC%E4%BA%AD%E5%9B%BE%E7%89%87' + '&queryWord=%E7%99%BD%E6%95%AC%E4%BA%AD%E5%9B%BE%E7%89%87' + '&cl=2&lm=-1&ie=utf-8&oe=utf-8' + '&gsm=1e'
  const params = commonP + `&pn=${pn}&rn=${rn}`
  fetch(`/search?${params}`, {
    method: 'GET',
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: undefined,
  }).then(res => res.json()).then(res => {
    imagesURL = res.data;
    url.value = res.data[0].hoverURL
  })
}

onMounted(() => {
  queryImages()
})

const refreshPics = () => {
  if (count.value % 10 === 0) {
    queryImages(count.value)
  } else {
    url.value = imagesURL[count.value % 10].hoverURL
  }
  count.value += 1
}
</script>

<template>
  <h1 class="title">HELLO!</h1>
  <h1 class="title">COOL GIRL!</h1>
  <button class="test" @click="refreshPics">switch honey moment</button>
  <img ref="img" :src="url">
</template>

<style scoped>
.title {
  display: block;
  margin: 0 auto;
}
.test {
  display: block;
  margin: 20px auto;
  color: red;
  font-size: 24px;
}
img {
  max-width: 100%;
}
</style>
