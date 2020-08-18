export const section = () => ({
  props: {
    name: {
      type: String,
      required: false,
    },
    background: {
      type: String,
      required: false,
      default: 'light'
    },
  },
});
