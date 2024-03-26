import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "../../pages/Index";
import { Panel } from "../../pages/Panel";
import { MiHuerto } from '../../pages/MiHuerto';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/mi-huerto" element={<MiHuerto />} />
      </Routes>
    </BrowserRouter>
  );
};
