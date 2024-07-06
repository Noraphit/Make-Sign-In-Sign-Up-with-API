import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import User from "./User";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userprofile" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
