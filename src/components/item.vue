<template>
  <Transition name="outs">
  <div class="item" :class="single.type" v-if="choice">
    <div class="item-header">
      <h2 class="item-header-title">{{ single.title }}</h2>
      <button class="close-button" @click="itemClose">
        <close></close>
      </button>
    </div>
    <div class="item-body">
      <div class="item-body-icon" v-if="single.icon != false">
        <danger v-if="single.type == 'danger'"></danger>
        <info v-if="single.type == 'info'"></info>
        <success v-if="single.type == 'success'"></success>
        <warning v-if="single.type == 'warning'"></warning>
      </div>
      <div class="item-body-main">
        <p>
          {{ single.text }}
        </p>
        <p class="time">{{ updateTime }}</p>
      </div>
    </div>
    <span class="timer" ref="timerRef"></span>
  </div>
</Transition>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import close from "./icon/close.vue";
import timer from "../public/timer";
import diffDate from '../public/diffDate'

import danger from "./icon/danger.vue";
import info from "./icon/info.vue";
import success from "./icon/success.vue";
import warning from "./icon/warning.vue";
export default {
  components: { close, warning, success, info, danger },
  props: {
    single: { type: Array, required: true },
    index: { type: Number, required: true },
  },
  setup(props) {
    const timerRef = ref(null),
          choice = ref(true),
          updateTime = ref(''),
          time = ref(''),
          currentDate = new Date(),
          options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' },
          getTime = currentDate.toLocaleString('en-US', options)

    time.value = props.single.time != undefined ? props.single.time : getTime
    updateTime.value = diffDate(time.value)
    onMounted(() => {
      
      timer(timerRef.value, props.single.duration != undefined ? props.single.duration : 5000)
      console.log(getTime)
      setTimeout(() => {
        choice.value = false
      }, props.single.duration != undefined ? props.single.duration : 5000)

      setInterval(()=>{
          updateTime.value = diffDate(time.value)
      },1000)
    })

    let itemClose = () => {
      choice.value = false
    }

    return {
      timerRef,
      itemClose,
      choice,
      updateTime
    };
  },
};
</script>

