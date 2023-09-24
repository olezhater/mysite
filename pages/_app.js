import "../styles/globals.css";
import "../styles/VideoCompare.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
