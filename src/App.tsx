import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { initializeFaqData } from "@modules/faq";
import { FAQPage } from '@pages/index';
import Header from "@components/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeFaqData())
  }, [dispatch])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MOIN PSEUDO FAQ</title>
      </Helmet>
      <Header />
      <FAQPage />
    </>
  );
}

export default App;
