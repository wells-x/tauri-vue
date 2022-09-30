<template>
  <picture :class="{ 'night': isNight }">
    <i :class="['iconfont', weatherClass]"></i>
    <span> {{ props.weather }}</span>
  </picture>
</template>
<script lang="ts" setup>
import { WeatherType } from "@/model/api/amap";
import { getWeatherClass } from "@/utils/weather";
import { withDefaults, defineProps } from 'vue';

const props = withDefaults(defineProps<{ weather: WeatherType, isNight?: boolean }>(), { isNight: false })

const weatherClass = getWeatherClass(props.weather);

</script>

<style scoped lang="scss">
picture {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;

  &.night {
    .iconfont {
      color: #fff;
      border-radius: 40%;
      background: rgb(32, 98, 197);
    }
  }

  >span {
    padding: 10px;
    font-size: 10px;
    text-align: center;
  }
}

.iconfont {
  font-size: 60px;
  // font-weight: 100;
}
</style>
