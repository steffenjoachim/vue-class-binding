Vue.createApp({
    data() {
      return {
        activeLetter: "A",
      };
    },
    watch: {
      activeLetter(newValue) {
        console.log("Active letter changed to:", newValue);
      }
    }
  }).mount("#app");
  