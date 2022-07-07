import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/navbar";
import Safe from "./pages/safes/index";
import Service from "./pages/serviceAccounts/service";
import AppRoles from "./pages/vaultappRoles/AppRoles";
import IamService from "./pages/IamServiceAccounts/IamService";
import Azure from "./pages/AzureActiveDirectory/Azure";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Safe />} />
          <Route path="/vault" element={<AppRoles />} />
          <Route path="/service" element={<Service />} />
          <Route path="/iam" element={<IamService />} />
          <Route path="/azure" element={<Azure />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//need to import all pages in the App.js finally
