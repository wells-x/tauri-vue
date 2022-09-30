<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ name }}</div>
    <button @click="getData">getExample</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getExample } from '@/api';
import { getName } from '@tauri-apps/api/app';

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      name: '11',
    }
  },
  props: {
    msg: String,
  },
  async created() {
    let name
    try {
      name = await getName()
    } catch (error) {
      console.log(error);
    }

    this.name = name || '';
  },
  methods: {
    getData() {
      getExample().then(res => {
        console.log(res);
      })
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
