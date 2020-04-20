<template>
  <div class="page">
    <div v-for="page in pages" :key="page">
      <a :href="`/${page}`">{{ page }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const requireContext = require.context('../', true, /main\.ts/)
const pages = requireContext
  .keys()
  .map(mainPath => mainPath.split('/')[1])

@Component({})
export default class IndexPage extends Vue {
  pages = pages
}
</script>

<style lang="less">
html {
  height: 100vh;
  background: linear-gradient(45deg, #ccc, transparent);
}

.page {
  font-family: monospace;
  text-align: center;
  margin-top: 40px;

  a {
    display: block;
    margin: 10px 0;
    padding: 10px 0;
    font-size: 20px;
  }
}
</style>
