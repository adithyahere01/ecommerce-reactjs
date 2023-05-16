import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
/* .App{
  height: 200vh;
  border: 2px solid red;
} */
body{
  scroll-behavior: smooth;
  font-family: var(--font);
  overflow-x: hidden;
}

:root{
  --head-color: #151D3B;
  /* --head-color: #002B5B; */
  --font:  'PT Serif', serif;
  --slider-bg: #A0E4CB;
  /* F6F54D */
  /* FF7272 */
}

li{
  list-style: none;
}
a{
  text-decoration: none;
  color: #222;
}
.hide{
  display: none;
}

button{
  border: none;
  outline: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
}
`


export default GlobalStyles;
