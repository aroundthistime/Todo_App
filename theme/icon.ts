export interface IconTheme {
  size: Record<string, number>;
}

const icon: IconTheme = {
  size: {
    default: 30,
    get container() {
      return this.default + 10;
    },
  },
};

export default icon;
