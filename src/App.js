import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import DetailsPage from "./pages/DetailsPage";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2";
import Signin from "./pages/Signin";
import WritePage from "./pages/WritePage";
import FindPasswordPage from "./pages/FindPasswordPage";
import "./styles/reset.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detailspage" element={<DetailsPage />}/>
        <Route path="/signup1" element={<Signup1 />}/>
        <Route path="/signup2" element={<Signup2 />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/writepage" element={<WritePage />}/>
        <Route path="/findpassword" element={<FindPasswordPage />}/>
      </Routes>
    </Router>
  );
}

export default App;