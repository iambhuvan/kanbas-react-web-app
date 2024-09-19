import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>NALLAMOTHU BHUVAN</h1>
      <h4>Web Development | Section: 03 | CRN: 20596 | Online</h4>
      <h4>Github (Links to all relevant source code repositories) :<a href="https://github.com/iambhuvan/kanbas-react-web-app">LINK</a></h4>
      <h4>Labs:</h4>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}

