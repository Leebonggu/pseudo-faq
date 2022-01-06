import { Helmet, HelmetProvider } from "react-helmet-async";
import { FAQPage } from '@pages/index';
import Header from "@components/Header";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MOIN PSEUDO FAQ</title>
      </Helmet>
      <Header />
      <FAQPage />
    </HelmetProvider>
  );
}

export default App;
