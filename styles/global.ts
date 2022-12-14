import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: #EEF5FF;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
`
