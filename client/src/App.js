import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminProfile from "./components/AdminProfile/AdminProfile";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AvatarUpload from "./components/Profile/AvatarUpload";
import Profile from "./components/Profile/Profile";
import ProfileUpdate from "./components/ProfileUpdate/ProfileUpdate";
import CreateQuidproquo from "./components/Quidproquos/CreateQuidproquo";
import QuidproquosList from "./components/Quidproquos/QuidproquosList";
import UpdateQuidproquo from "./components/Quidproquos/UpdateQuidproquo";
import NewRegister from "./components/Register/NewRegister";
import Register from "./components/Register/Register";
import { getCurrent } from "./redux/Actions/userActions";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              {user && user.isAdmin === true ? (
                <AdminProfile />
              ) : (
                <Profile></Profile>
              )}
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={<ProfileUpdate></ProfileUpdate>}
        ></Route>
        <Route
          path="/addquidproquo"
          element={<CreateQuidproquo></CreateQuidproquo>}
        ></Route>
        <Route
          path="/changer-avatar"
          element={<AvatarUpload></AvatarUpload>}
        ></Route>
        <Route
          path="/tous-les-quidproquos"
          element={
            <div>
              <Navbar></Navbar>
              <QuidproquosList></QuidproquosList>
            </div>
          }
        ></Route>
        {/* <Route
          path="/updatequidproquo"
          element={<UpdateQuidproquo></UpdateQuidproquo>}
        ></Route> */}

        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
