import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import store from "./store";
import { Provider } from "react-redux";
export default function Labs() {
  return (
    <Provider store={store}>
    <div>
      <h1>BHUVAN NALLAMOTHU</h1>
      <h4>Web Development | Section: 03 | CRN: 20596 | Online</h4>
      <h4>Github repository for Kanbas-react-web-app  :<a href="https://github.com/iambhuvan/kanbas-react-web-app">LINK</a></h4>
      <h4>Github repository for Kanbas-node-server-app  :<a href="https://github.com/iambhuvan/kanbas-node-server-app">LINK</a></h4>
      <h4>Labs:</h4>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4/>} />
        <Route path="Lab5" element={<Lab5/>} />
      </Routes>
    </div>
    </Provider>
  );
}

