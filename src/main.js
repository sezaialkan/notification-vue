import { defineComponent, h, ref } from "vue";

import "@/assets/css/main.css";

import notification from './components/notification.vue'

export default defineComponent({
  name: "notification",
  props: {
    items: { type: Array, required: true },
  },
  setup(props) {
    const items = ref(props.items);

    return {
      items,
    };
  },
  render() {
    return h(notification, {item : this.items})
  },
});
