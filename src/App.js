import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/global-styles";
import { Col } from "./components/Col";
import { Container } from "./components/Container";
import { Row } from "./components/Row";
import { defaultTheme } from "./site-settings/site-theme/defaults";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Container full>
          <Row>
            <Col xs={2} sm={4} md={8} lg={10}>
              <h3>Col</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}
