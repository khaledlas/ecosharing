// import { FormControl, FormLabel, TextField } from "@mui/material";
// import { Box } from "@mui/system";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { add_qpq, delete_qpq, get_qpqs } from "../../redux/Actions/qpqActions";
// import { getCurrent } from "../../redux/Actions/userActions";

// const CreateQuidproquo = () => {
//   // const quidproquo = useSelector((state) => state.qpqReducer.quidproquo);
//   // const quidproquos = useSelector((state) => state.qpqReducer.quidproquos);
//   // const user = useSelector((state) => state.userReducer.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // const handleQPQ = () => {
//   //   if (name || picture || description) {
//   //     const data = new FormData();
//   //     // data.append("userId", user._id);
//   //     data.append("description", description);
//   //     data.append("name", name);
//   //     if (file) data.append("file", file);
//   //     if (picture !== "") {
//   //       data.append("picture", picture);
//   //     }
//   //     dispatch(add_qpq(data));
//   //
//   //     //cancelPost();
//   //   } else {
//   //     alert("Veuillez entrer un message");
//   //   }
//   // };

//   const [name, setName] = useState("");
//   const [picture, setPicture] = useState("");
//   const [description, setDescription] = useState("");

//   const onSubmit = () => {
//     dispatch(
//       add_qpq({
//         name,
//         description,
//         picture,
//       })
//     );
//   };
//   //const [file, setFile] = useState();

//   // const { name, description } = formData;
//   // const [pictureName, setPictureName] = useState("Choose file");

//   // const onFileChange = (e) => {
//   //   setPicture(e.target.files[0]);
//   //   setPictureName(e.target.files[0].name);
//   // };

//   // const onSubmit = (e) => {
//   //   e.preventDefault();

//   //   const payload = new FormData();
//   //   payload.append("picture", picture);
//   //   payload.append("name", formData.name);
//   //   payload.append("description", formData.description);
//   //   // createQuidproquo(payload, history);
//   //   dispatch(add_qpq(payload));
//   // };

//   // const handlePicture = (e) => {
//   //   e.preventDefault();
//   //   const data = new FormData();
//   //   data.append("name", formData.name);
//   //   data.append("description", formData.description);
//   //   data.append("picture", formData.picture);

//   //   dispatch(add_qpq(data, formData._id));
//   // };

//   // const handlePicture = (e) => {
//   //   setPicture(e.target.files[0]);
//   //   setFile(e.target.files[0]);
//   // };

//   // useEffect(() => {
//   //   dispatch(add_qpq());
//   // }, [dispatch]);

//   return (
//     <div>
//       <Box
//       // component="form"
//       // sx={{
//       //   "& .MuiTextField-root": { m: 1, width: "25ch" },
//       // }}
//       // noValidate
//       // autoComplete="off"
//       // EncType="multipart/form-data"
//       //     method="post"

//       // onSubmit={(e) => {
//       //   e.preventDefault();
//       //   dispatch(
//       //     add_qpq({
//       //       name,
//       //       description,
//       //       picture,
//       //     })
//       //   );
//       // }}
//       >
//         <div>
//           <TextField
//             required
//             name="name"
//             id="outlined-required"
//             label="Veuillez nommer votre quidproquo"
//             // value={formData.name}
//             onChange={(e) => setName(e.target.value)}
//             // value={name}
//           />

//           <TextField
//             id="outlined-multiline-static"
//             label="Veuillez décrire votre quidproquo"
//             multiline
//             rows={4}
//             name="description"
//             // onChange={(e) =>
//             //   setFormData({
//             //     ...formData,
//             //     [e.target.description]: e.target.value,
//             //   })
//             // }
//             // value={formData.description}
//             onChange={(e) => setDescription(e.target.value)}
//             // value={description}
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="file"
//             className="form-control-file"
//             name="picture"
//             accept=".jpg, .jpeg, .png"
//             // onChange={(e) =>
//             //   setFormData({
//             //     ...formData,
//             //     [e.target.picture]: e.target.files[0],
//             //   })
//             // }
//             onChange={(e) => setPicture(e.target.files[0])}
//           />
//         </div>
//         <div>
//           <button className="btn btn-primary" onClick={() => onSubmit()}>
//             Create post
//           </button>
//         </div>
//       </Box>
//     </div>
//     // <div>
//     //   <FormControl
//     //     // action="/quidproquo"
//     //     encType="multipart/form-data"
//     //     method="post"
//     //     onSubmit={(e) => onSubmit(e)}
//     //   >
//     //     <div>
//     //       <FormLabel htmlFor="pass1">
//     //         Name
//     //         <div>
//     //           <input
//     //             id="pass1"
//     //             type="text"
//     //             // onChange={(e) => setName(e.target.value)}
//     //             placeholder="Veuillez nommer votre quidproquo"
//     //             name="name"
//     //             onChange={(e) =>
//     //               setFormData({ ...formData, [e.target.name]: e.target.value })
//     //             }
//     //             value={formData.name}
//     //           ></input>
//     //         </div>
//     //       </FormLabel>
//     //     </div>

//     //     <div>
//     //       <FormLabel htmlFor="pass2">
//     //         Description
//     //         <div>
//     //           <textarea
//     //             // onChange={(e) => setDescription(e.target.value)}
//     //             id="pass2"
//     //             // onChange={(e) => setName(e.target.value)}
//     //             type="text"
//     //             placeholder="Veuillez décrire votre quidproquo"
//     //             name="description"
//     //             onChange={(e) =>
//     //               setFormData({
//     //                 ...formData,
//     //                 [e.target.description]: e.target.value,
//     //               })
//     //             }
//     //             value={formData.description}
//     //           ></textarea>
//     //         </div>
//     //       </FormLabel>
//     //     </div>
//     //     <div className="container">
//     //       <div className="row">
//     //         <div className="form-group">
//     //           <input
//     //             type="file"
//     //             className="form-control-file"
//     //             name="picture"
//     //             accept=".jpg, .jpeg, .png"
//     //             // onChange={(e) =>
//     //             //   setFormData({
//     //             //     ...formData,
//     //             //     [e.target.picture]: e.target.files[0],
//     //             //   })
//     //             // }
//     //             onChange={(e) => onFileChange(e)}
//     //           />
//     //         </div>
//     //       </div>
//     //     </div>

//     //     <div>
//     //       <button className="btn btn-primary" type="submit">
//     //         Create post
//     //       </button>
//     //     </div>
//     //   </FormControl>
//     // </div>
//   );
// };
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_qpq } from "../../redux/Actions/qpqActions";
import "./CreateQuidproquo.css";

export default function CreateQuidproquo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { load } = useSelector((state) => state.userReducer.qpq);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    picture: null,
  });
  // const [name, setName] = useState("");
  // const [description, setdescription] = useState("");
  // const [picture, setpicture] = useState("");

  const handleFormChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("picture", formData.picture);
    data.append("description", formData.description);
    data.append("name", formData.name);

    dispatch(add_qpq(data), navigate("/profile"));
  };

  return (
    <div className="qpq-post">
      <input
        name="name"
        placeholder="Intitulé du quidproquo"
        onChange={handleFormChange}
      />
      <textarea
        name="description"
        placeholder="Description  du quidproquo"
        onChange={handleFormChange}
      />
      <input
        type="file"
        onChange={(e) =>
          setFormData({ ...formData, picture: e.target.files[0] })
        }
      />
      <Button variant="contained" color="success" onClick={handleConfirm}>
        Créer
      </Button>
    </div>
  );
}
