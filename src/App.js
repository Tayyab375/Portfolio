import React, { lazy, Suspense } from "react";

import "./App.css";
import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("./Pages/Home"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="absolute top-0 left-0 h-[100vh] w-[100vw] text-white flex items-center justify-center">
            <CircularProgress size={80} />
          </div>
        }
      >
        <Home />
      </Suspense>
    </>
  );
};

export default App;
