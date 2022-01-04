import { initializeFaqData } from "@modules/faq";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FAQPage } from '@pages/index';
import Header from "@components/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeFaqData())
  }, [dispatch])
  return (
    <>
      <Header />
      <FAQPage />
    </>
  );
}

export default App;
