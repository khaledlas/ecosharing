import React, { useEffect } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getCurrent } from "../../redux/Actions/userActions";
import {
  delete_qpq,
  update_qpq,
  user_qpqs,
} from "../../redux/Actions/qpqActions";
import { Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UpdateQuidproquo from "./UpdateQuidproquo";

const QuidproquoCard = ({ quidproquos }) => {
  // const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent(), delete_qpq(), getAllUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.userReducer.user);
  const allUsers = useSelector((state) => state.userReducer.allUsers);
  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Max height menu

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dateParser = (num) => {
    let options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    let timestamp = Date.parse(num);

    let date = new Date(timestamp).toLocaleDateString("fr-FR", options);

    return date.toString();
  };

  return (
    <div className="cards">
      <Card
        sx={{
          maxWidth: 400,
          marginBottom: 5,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              src={allUsers.map((user) => {
                if (quidproquos && quidproquos.userId === user && user._id)
                  return `/uploads/${user && user.profilePicture}`;
              })}
              aria-label="recipe"
            ></Avatar>
          }
          action={
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {/* <Link></Link> */}
                {(user && user.isAdmin === false) ||
                (user && user._id === quidproquos && quidproquos.userId) ? (
                  <MenuItem>Mettre à jour</MenuItem>
                ) : (
                  ""
                )}

                {/* <div>
                  <MenuItem onClick={() => handleShow()}>
                    Mettre à jour
                  </MenuItem>
                  {setShow === true ? <UpdateQuidproquo /> : null}
                </div> */}
                <MenuItem
                  onClick={() => {
                    if (
                      window.confirm("Voulez-vous supprimer ce quidproquo ?")
                    ) {
                      dispatch(delete_qpq(quidproquos._id));
                    }
                  }}
                >
                  Supprimer
                </MenuItem>
              </Menu>
            </div>
          }
          title={quidproquos.name}
          subheader={dateParser(quidproquos.createdAt)}
        />
        <CardMedia
          component="img"
          height="194"
          image={
            quidproquos.picture
              ? `/uploads/${quidproquos.picture}`
              : process.env.PUBLIC_URL + "/uploads/noimage.jpg"
          }
          alt="image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {quidproquos && quidproquos.description}
          </Typography>
        </CardContent>
        {/* <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions> */}
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    </div>
  );
};

export default QuidproquoCard;
