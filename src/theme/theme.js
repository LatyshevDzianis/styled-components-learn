import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#fff",
  dark: "#34495e",
});

const textColor = theme("mode", {
  light: "#34495e",
  dark: "#fff",
});

export { backgroundColor, textColor };
