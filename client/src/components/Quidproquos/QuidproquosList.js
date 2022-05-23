import { Button } from "@mui/material";
import "./QuidproquoList.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add_qpq, get_qpqs, user_qpqs } from "../../redux/Actions/qpqActions";
import { getAllUsers, getCurrent } from "../../redux/Actions/userActions";
import QuidproquoCard from "./QuidproquoCard";

const QuidproquosList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_qpqs(), getAllUsers());
  }, [dispatch]);

  const quidproquos = useSelector((state) => state.qpqReducer.quidproquos);
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <div>
        {user && user.isAdmin === true ? (
          <Link to={"/profile"}>
            <Button variant="outlined">Retourner à la page d'accueil</Button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="cards_list">
        {quidproquos.map((quidproquos) => (
          <QuidproquoCard
            key={quidproquos && quidproquos._id}
            quidproquos={quidproquos}
          />
        ))}
      </div>
    </div>
  );
};

export default QuidproquosList;
