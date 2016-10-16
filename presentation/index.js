// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const theme = createTheme({
  primary: "#ff4081",
  tertiary: "#A6E22E",
  secondary: "#66D9EF",
  quart: "#FD971F",
  pent: "#AE81FF",
  bgColor: "black"

});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck controls="false" progress="pacman" transition={["spin", "fade"]} transitionDuration={500}>
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="primary">
              Terminal or:
            </Heading>
            <Heading size={1} fit textColor="secondary">
            how I learned to stop worrying and love the command line
            </Heading>
            <Text textColor="tertiary">
              Alexander C Booth
            </Text>
          </Slide>

          <Slide>
          </Slide>

          <Slide>
            <Text textColor="tertiary"></Text>
            <iframe src="http://greasy-flag.surge.sh/" frameborder="0" height="480" width="750"/>
          </Slide>

          <Slide>
            <Text textColor="tertiary"></Text>
            <iframe src="http://greasy-flag.surge.sh/02" frameborder="0" height="480" width="750"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
