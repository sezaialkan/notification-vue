import { h } from 'vue';

const CloseButton = h('button', { class: 'close-button' }, [
  h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    height: '30',
    width: '30',
    'stroke-width': '3',
    stroke: '#000A1E',
    fill: 'none',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    viewBox: '0 0 24 24'
  }, [
    h('g', [
      h('path', { d: 'M7 7L17 17' }),
      h('path', { d: 'M7 17L17 7' })
    ])
  ])
]);

export default CloseButton;