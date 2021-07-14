module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        houseSm: "url('img/house-sm.jpg')",
        houseLg: "url('img/house-lg.jpg')",
        sampleReport: "url('img/sample-report.jpg')",
        experience: "url('img/experience.jpg')",
        oneFifty: "url('img/150-point.jpg')",
        certified: "url('img/certified.jpg')",
        residential: "url('img/residential.jpg')",
        commercial: "url('img/commercial.jpg')",
        drone: "url('img/drone.jpg')",
      }),
      colors: {
        ciBrown: {
          light: "#E6E6E6",
          dark: "#4B4132",
        },
        ciGreen: "#668138",
      },
      fontFamily: {
        "": "",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
