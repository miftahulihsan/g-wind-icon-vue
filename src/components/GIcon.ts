import { defineComponent, h, ref, watch } from "vue";
import "../style.css"

const GIcon = defineComponent({
  name: "GIcon",
  props: {
    icon: {
      type: Array,
      default: [],
      required: true,
    },
    color: {
      type : String,
      default: undefined,
      required: false
    },
    weight: {
        type : String,
        default: "outline",
        validator: (value:string) => {
            return [
                "outline",
                "fill"
            ].includes(value);
        },
    },
    size: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return [
          "sm",
          "lg",
          "md",
        ].includes(value);
      },
    },
  },
  setup(props, { attrs }) {

    const _icon = ref(props.icon)

    watch(
        () => props.icon,
        () => {
          _icon.value = props.icon
        },
      )

    const getIconFinal = (() =>{
       return props.weight === "fill" ? _icon.value[1] : _icon.value[2]
    })()

    const getViewBox = (() => {
        return _icon.value[0]
    })()


    const getClassName = (() => {
      return [attrs.class, props.size && `g-icon-${props.size}`, props.color && props.color]
    })()

    return () =>
      h("svg", {
        ...attrs,
        xmlns: "http://www.w3.org/2000/svg",  
        fill: "currentColor",
        class: getClassName,
        viewBox: `${attrs.viewBox? attrs.viewBox : `0 0 ${getViewBox}`}`,
        innerHTML: getIconFinal, // Menggunakan innerHTML untuk memasukkan konten SVG
        role: "img",
      });
  },
});

export { GIcon };
