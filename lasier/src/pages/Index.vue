<template>
  <q-page class="flex flex-center">
    <img
      @click="playSound"
      alt="Quasar logo"
      src="~assets/electric.svg"
      style="width: 60%"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

const sound = new Audio();
sound.src = '~assets/lasier.mp3';

export default defineComponent({
  name: 'PageIndex',
  setup () {
    return {
      sound: new Audio()

    }
  },
  mounted () {
    this.sound = new Audio()
    this.sound.src = require('../assets/lasier.mp3')
  },
  methods: {
    playSound () {
      this.sound.play()
    }
  }
})
</script>
