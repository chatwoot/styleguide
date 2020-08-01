<template>
  <div>
    <div class="color--group" v-for="colorGroup in colors" :key="colorGroup.title">
      <div class="color-group--title">{{colorGroup.title}}</div>
      <div class="color--palette">
        <div
          v-for="(color, key) in colorGroup.data"
          class="color--tile"
          :style="{ background: color, color: getColor(key)  }"
        >{{key}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        wootColors: {
          title: "Woot",
          data: {
            "w-50": " #E3F2FF",
            "w-100": "#BBDDFF",
            "w-200": "#8FC9FF",
            "w-300": "#61B3FF",
            "w-400": "#3FA3FF",
            "w-500": "#1F93FF",
            "w-600": "#2284F0",
            "w-700": "#2272DC",
            "w-800": "#2161CA",
            "w-900": "#1F41AB",
          },
        },
        greenColors: {
          title: "Green",
          data: {
            "g-50": " #E6F8E6",
            "g-100": "#C4EEC2",
            "g-200": "#9DE29A",
            "g-300": "#6FD86F",
            "g-400": "#44CE4B",
            "g-500": "#00C41D",
            "g-600": "#00B412",
            "g-700": "#00A200",
            "g-800": "#009000",
            "g-900": "#007000",
          },
        },

        yellow: {
          title: "Yellow",
          data: {
            "y-50": " #FFFEE8",
            "y-100": "#FFFAC5",
            "y-200": "#FFF69E",
            "y-300": "#FEF176",
            "y-400": "#FCEC56",
            "y-500": "#F9E736",
            "y-600": "#FFDD3A",
            "y-700": "#FFC532",
            "y-800": "#FDAD2A",
            "y-900": "#F9841B",
          },
        },
        red: {
          title: "red",
          data: {
            "r-50": " #FFEBEE",
            "r-100": "#FFCCD1",
            "r-200": "#F69898",
            "r-300": "#EF6F6F",
            "r-400": "#F94B4A",
            "r-500": "#FF382D",
            "r-600": "#F02B2D",
            "r-700": "#DE1E27",
            "r-800": "#D11320",
            "r-900": "#C30011",
          },
        },

        slate: {
          title: "Slate",
          data: {
            "s-50": " #E7EEFB",
            "s-100": "#C8D6E6",
            "s-200": "#ABBACE",
            "s-300": "#8C9EB6",
            "s-400": "#7489A4",
            "s-500": "#5D7592",
            "s-600": "#506781",
            "s-700": "#40546B",
            "s-800": "#314155",
            "s-900": "#1F2D3D",
          },
        },
        black: {
          title: "Black",
          data: {
            "b-50": "#F8F9FE",
            "b-100": "#F2F3F7",
            "b-200": "#E9EAEF",
            "b-300": "#DADBDF",
            "b-400": "#B6B7BB",
            "b-500": "#96979C",
            "b-600": "#6E6F73",
            "b-700": "#5A5B5F",
            "b-800": "#3C3D40",
            "b-900": "#1B1C1F",
          },
        },
      },
    };
  },
  methods: {
    getColor(colorCode) {
      const [, variant] = colorCode.split("-");
      return parseInt(variant) > 400 ? "#FFF" : "#000";
    },
  },
};
</script>

<style scoped>
.color--tile {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: var(--space-large);
  padding: var(--space-small) 0;
  flex: 1;
  font-size: var(--font-size-nano);
  font-weight: 500;
}

.color--palette {
  display: flex;
}

.color-group--title {
  text-transform: uppercase;
  font-size: var(--font-size-micro);
  font-weight: 500;
  margin-bottom: var(--space-smaller);
}

.color--group {
  margin-bottom: var(--space-two);
}
</style>
