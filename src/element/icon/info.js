import { h } from "vue";

const infoIcon = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "25",
    width: "25",
    "stroke-width": "1.5",
    stroke: "#0000ff",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24",
  },
  [
    h("g", [
      h("path", {
        d: "M6 19V10C6 6.68629 8.68629 4 12 4V4C15.3137 4 18 6.68629 18 10V19M6 19H18M6 19H4M18 19H20",
      }),
      h("path", { d: "M11 22L13 22" }),
      h("circle", { cx: "12", cy: "3", r: "1" }),
    ]),
  ]
);

export default infoIcon