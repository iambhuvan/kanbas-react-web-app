import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./Lab1";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        </Routes>
    </div>
  );
}

