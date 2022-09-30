<template>
  <div>
    <dialog id="dialog">
      <form method="dialog">
        <p>Hi, I'm a dialog.</p>
        <button>OK</button>
      </form>
    </dialog>
    <button onclick="dialog.showModal()">Open Dialog</button>
    <section v-for="cityWeather in cityWeatherList" :key="cityWeather.adcode">
      <h3>{{ cityWeather.city }}</h3>
      <ul>
        <li class="cast-item" v-for="cast in cityWeather.casts" :key="(cast.date)">
          <h4>{{ cast.date }}</h4>
          <div class="cast-weather">
            <weather-item :weather="cast.dayweather"></weather-item>
            <weather-item :weather="cast.nightweather" :is-night="true"></weather-item>

          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getWeatherInfo } from "@/api/amap";
import { Extensions, WeatherApiData } from "@/model/api/amap";
import { Forecast } from "@/model/frontend/weather";
import WeatherItem from "./WeatherItem.vue";
import { emit, listen } from '@tauri-apps/api/event'

export default defineComponent({
  data(): {
    cityWeatherList: Forecast[];
  } {
    return {
      cityWeatherList: []
    };
  },
  created(): void {
    this.getWeather();
  },
  async mounted() {

    // listen to the `click` event and get a function to remove the event listener
    // there's also a `once` function that subscribes to an event and automatically unsubscribes the listener on the first event
    const unlisten = await listen('click', (event) => {
      // event.event is the event name (useful if you want to use a single callback fn for multiple event types)
      // event.payload is the payload object
      console.log(event);

    })
    console.log(unlisten);

    // listen('event-name', () => {
    //   console.log('event');
    // })


    // emits the `click` event with the object payload
    emit('click', {
      theMessage: 'Tauri is awesome!',
    })
    // this.getWeather();
  },
  methods: {
    getWeather({ extensions }: {
      extensions: Extensions | "";
    } = { extensions: "" }): void {
      const params: {
        extensions?: Extensions;
      } | undefined = {};
      if (extensions) {
        params.extensions = extensions as Extensions;
      }
      getWeatherInfo(params).then((res: WeatherApiData) => {
        this.cityWeatherList = res.forecasts || [];
      });
    },
  },
  components: { WeatherItem }
});
</script>

<style scoped>
.cast-weather {
  display: flex;
  align-items: center;
}
</style>
