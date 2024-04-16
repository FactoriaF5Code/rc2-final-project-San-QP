import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "../../pages/Index/Index";
import { Login } from "../../pages/Login/Login";
import { Panel } from "../../pages/Panel/Panel";
import { MiHuerto } from "../../pages/MiHuerto/MiHuerto";
import { MisSemillas } from "../../pages/MisSemillas/MisSemillas";
import { SeedsProvider } from "../context/SeedsContext";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login/>} />
        <Route path="panel" element={<Panel />} />
        <Route path="mi-huerto" element={<MiHuerto />} />
        <Route
          path="mi-huerto/mis-semillas"
          element={
            <SeedsProvider>
              <MisSemillas />
            </SeedsProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
