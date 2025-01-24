import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage"
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Signup from "./pages/Signup"
import WritePage from "./pages/WritePage"
import "./styles/reset.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="detailspage" element={<DetailsPage />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="writepage" element={<WritePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
