import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NotFoundPage from "./pages/notFound";
import { useState } from "react";
import { UserContext } from "./Components/ui/context/context";
import AboutPage from "./pages/about";
import ContentPage from "./pages/content";
import HomePage from "./pages/home";
import "./styles/globalStyle.css";

const globalStyleemotionCache = createCache({ key: "css", prepend: true });

function App() {

  const [user, setUser] = useState({
    id: 101,
    name: "shorif"
  })

  return (
    <CacheProvider value={globalStyleemotionCache}>
      <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/content" element={<ContentPage />} />
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </CacheProvider>
  );
}

export default App;
