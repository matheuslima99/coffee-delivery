import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { CompleteOrder } from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CompleteOrder />} />
      </Route>
    </Routes>
  );
}
