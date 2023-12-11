import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, User, Staff, Customer} from "@/layouts";
import { SignIn, SignUp } from "@/pages/auth"


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/users/*" element={<User />} />
      <Route path="/staff/*" element={<Staff />} />
      <Route path="/customers/*" element={<Customer />} />
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes>
  );
}

export default App;
