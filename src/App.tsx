import { changeTab, initializeFaqData } from "@modules/faq";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeFaqData())
  }, [dispatch])
  return <div>Home</div>;
}

export default App;
