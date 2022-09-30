<template>
  <weather-vue />
  <div @click="doInvoke">home</div>
  <div v-on:click="emitName">emit</div>
</template>
<script lang="ts">
// When using the Tauri API npm package:
import WeatherVue from "@/components/Weather.vue";
import { emit, listen } from "@tauri-apps/api/event";
import { invoke } from "@tauri-apps/api/tauri";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
  mounted(): void {
    this.doInvoke();
    listen('event-name1', () => {
      console.log('');

    })
  },
  methods: {
    async doInvoke(): Promise<void> {
      // const startDate = new Date().getTime();
      console.time('s');
      const TIMES = 0;
      for (let i = 0; i < TIMES; i++) {
        await invoke("get_invokes");
      }
      const data = await invoke("test_arguments", { message: "temp" })
        .catch((e) => {
          console.log(`error: ${e}`);
          return "error";
        });
      console.log(
        `times ${TIMES + 1} ${JSON.stringify(data)} use time:`
      );
      console.timeEnd('s');
    },
    emitName() {
      emit('event-name', { message: "1" }).then(res => {
        console.log(res);
      })
    }
  },
  components: {
    WeatherVue,
  },
});
</script>
