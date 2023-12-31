import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvaider from "./providers/AuthProvaider.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto overflow-x-hidden max-w-7xl">
    <QueryClientProvider client={queryClient}>
      <AuthProvaider>
        <React.StrictMode>
          <RouterProvider router={router} />
          <ToastContainer />
        </React.StrictMode>
      </AuthProvaider>
    </QueryClientProvider>
  </div>
);
