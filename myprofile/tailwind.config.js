/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: '#FB8B20',
      },
      fontFamily: {
        'noto': ['NotoSerifCondensedMedium', 'sans-serif'],
        'noto-regu':['NotoSerifCondensedRegular','sans-serif'],
        'noto-bold': ['NotoSerifCondensedBold', 'sans-serif'],
        'notose-light': ['NotoSerifLight', 'sans-serif'],
        'notose-regu': ['NotoSerifRegular', 'sans-serif'],

      },
      screens: {
        pv: "280px",
        pvmax: "360px",
        ph: "480px",
        laptop: "1300px",
        dv: "1440px",
        dh_max: "1920px", // Có thể giữ nguyên hoặc thay đổi tùy theo yêu cầu của bạn
        dh: "5000px", // Có thể thay đổi tùy theo yêu cầu
      },
    },
  },
  plugins: [],
};

