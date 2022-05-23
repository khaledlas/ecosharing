import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./Register.css";
import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../../redux/Actions/userActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../Home/Sharing-Economy.jpg";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    pictureProfile: null,
  });

  const handleFormChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const data = new FormData();

    // if (formData.profilePicture !== "") {
    // }
    // data.append("profilePicture", formData.profilePicture);

    data.append("lastname", formData.lastname);
    data.append("firstname", formData.firstname);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("gender", formData.gender);
    data.append("birthdate", formData.birthdate);

    dispatch(register(data, navigate));
  };

  return (
    <div className="register">
      <div className="logo">
        <img src={logo} alt="Logo" width={200}></img>
        <span>
          Bienvenue dans Quid Pro Quo,
          <br></br>votre espace collaboratif.
        </span>
      </div>

      <div className="formulaire">
        <Box
          component="form"
          // sx={{
          //   "& .MuiTextField-root": { m: 1, width: 300 },
          // }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              autoComplete="fname"
              name="firstname"
              variant="outlined"
              required
              fullWidth
              id="firstname"
              label="Prénom"
              autoFocus
              sx={{ width: 400, marginTop: 5 }}
              onChange={handleFormChange}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Nom de famille"
              name="lastname"
              autoComplete="lname"
              sx={{ width: 400, marginTop: 5 }}
              onChange={handleFormChange}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
              sx={{ width: 400, marginTop: 5 }}
              onChange={handleFormChange}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ width: 400, marginTop: 5 }}
              onChange={handleFormChange}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="date"
              label="Date de naissance"
              type="date"
              defaultValue="2000-01-01"
              sx={{ width: 400, marginTop: 5 }}
              InputLabelProps={{
                shrink: true,
              }}
              name="birthdate"
              onChange={handleFormChange}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
              sx={{ width: 300, marginTop: 2 }}
            >
              <FormControlLabel
                value="femme"
                control={<Radio />}
                label="Femme"
                checked={formData.gender === "femme"}
                onChange={handleFormChange}
              />
              <FormControlLabel
                value="homme"
                control={<Radio />}
                label="Homme"
                checked={formData.gender === "homme"}
                onChange={handleFormChange}
              />
              <FormControlLabel
                value="X"
                control={<Radio />}
                label="X"
                checked={formData.gender === "X"}
                onChange={handleFormChange}
              />
            </RadioGroup>
          </Box>
          <Grid>
            <Grid item>
              <Link to="/" variant="body2">
                Vous avez un compte ? Identifiez-vous
              </Link>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: 5,
              marginLeft: 20,
            }}
          >
            <Button
              className="registerButton"
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleConfirm}
            >
              S'inscrire
            </Button>
          </Box>
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box> */}
        </Box>
      </div>
    </div>
  );
}
