import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout, { PageProvider } from "./Layout.tsx";
import { AuthProvider } from "./AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <AuthProvider>
        <Layout>
          <App />
        </Layout>
      </AuthProvider>
    </PageProvider>
  </StrictMode>
);
