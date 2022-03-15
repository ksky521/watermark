
import {
  App,
  shallowRef,
  defineComponent,
  isVue3,
  onUnmounted,
  h,
  PropType
} from 'vue-demi';
import { Watermark as BaseWatermark, WatermarkOptions } from '@pansy/watermark';

export interface WatermarkProps extends WatermarkOptions {
  className?: string;
  style?: Record<string, any>;
  visible?: boolean;
  isBody?: boolean;
}

export const Watermark = defineComponent<WatermarkProps>({
  name: 'Watermark',
  mounted() {

  },
  methods: {

  },
  setup: (props, { attrs }) => {
    const root = shallowRef<HTMLElement>();
    const watermark = shallowRef<BaseWatermark>();

    console.log(root);

    return {
      watermark,
    }
  },
  render: () => {
    return h(
      'div',
      {
        ref: 'root',
      }
    );
  }
})

Watermark.install = (app: App) => {
  app.component(Watermark.name, Watermark)
}
