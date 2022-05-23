import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrent, update_user } from "../../redux/Actions/userActions";
import Navbar from "../Navbar/Navbar";
import dateFormat, { masks } from "dateformat";

import {
  Button,
  capitalize,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import AvatarUpload from "../Profile/AvatarUpload";

const ProfileUpdate = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCurrent(id));
  }, []);

  const user = useSelector((state) => state.userReducer.user);

  const [firstname, setFirstname] = useState(user && user.firstname);
  const [lastname, setLastname] = useState(user && user.lastname);
  const [email, setEmail] = useState(user && user.email);
  const [birthdate, setBirthdate] = useState(user && user.birthdate);
  const [gender, setGender] = useState(user && user.gender);
  const [password, setPassword] = useState("");

  useEffect(() => {
    setFirstname(user && user.firstname);
    setLastname(user && user.lastname);
    setEmail(user && user.email);
    setBirthdate(user && user.birthdate);
    setGender(user && user.gender);
    setPassword(user && user.password);
  }, [user]);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Prénom</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user && user.firstname != null
                ? user && capitalize(user.firstname)
                : "Non renseigné"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="firstname"
              label="Cliquez pour changer !"
              variant="outlined"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Nom</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user && user.lastname != null
                ? user && capitalize(user.lastname)
                : "Non renseigné"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="lastname"
              label="Cliquez pour changer !"
              variant="outlined"
              onChange={(e) => setLastname(e.target.value)}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Date de naissance
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user && user.birthdate != null
                ? dateFormat(user && user.birthdate, "dd/mm/yyyy")
                : "Non renseignée"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="date"
              label="Date de naissance"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 400, marginTop: 5 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Email</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user && user.email}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="email"
              label="Cliquez pour changer !"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10bh-content"
            id="panel10bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Mot de passe
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="password"
              label="Cliquez pour changer !"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5>bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Sexe</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user && user.gender != null ? user.gender : "Non renseigné"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
              sx={{ width: 300, marginTop: 2 }}
            >
              <FormControlLabel
                value="femme"
                control={<Radio />}
                label="femme"
                checked={gender === "femme"}
                onChange={() => setGender("femme")}
              />
              <FormControlLabel
                value="homme"
                control={<Radio />}
                label="Homme"
                checked={gender === "homme"}
                onChange={() => setGender("homme")}
              />
              <FormControlLabel
                value="X"
                control={<Radio />}
                label="X"
                checked={gender === "X"}
                onChange={() => setGender("X")}
              />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* <div>
        <AvatarUpload></AvatarUpload>
      </div> */}
      <div>
        <Link to={"/profile"}>
          <Button variant="outlined">Retourner à la page d'accueil</Button>
        </Link>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(
              update_user(id, {
                firstname,
                lastname,
                email,
                birthdate,
                gender,
                password,
              })
            );
          }}
        >
          Sauvegarder
        </Button>
      </div>
    </div>
  );
};

export default ProfileUpdate;
