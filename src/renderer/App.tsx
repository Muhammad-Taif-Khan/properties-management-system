
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import HomeDashboard from "./routes/HomeDashboard";
import Properties from "./routes/Properties";
import Tenants from "./routes/Tenants";
import Settings from "./routes/Settings";
import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { getLocalStorageItem } from "./utils/localStorage";
import { setThemeConfig } from "./utils/themeConfig";


const App = () => {

  const [appTheme, setAppTheme] = useState<string | null>(getLocalStorageItem("appTheme") || "light");

  return (
    <ConfigProvider
            theme={setThemeConfig(appTheme)}
            >
    <Routes>
      <Route element={<Home />}>
        <Route index path="/" element={<HomeDashboard />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/settings" element={<Settings setAppTheme={setAppTheme}/>} />

      </Route>
    </Routes>
  </ConfigProvider>
  );
};

export default App;
