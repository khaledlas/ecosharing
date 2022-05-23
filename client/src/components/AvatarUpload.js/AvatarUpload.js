// import { Avatar, Button as MuiButton, Typography } from "@material-ui/core";
// import { grey } from "@material-ui/core/colors";
// import {
//   CloudUpload as MuiCloudUpload,
//   Delete as MuiDelete,
// } from "@material-ui/icons";
// import { spacing } from "@material-ui/system";
// import React, { createRef, useState } from "react";
// import styled from "styled-components";

// const Button = styled(MuiButton)(spacing);
// const UploadIcon = styled(MuiCloudUpload)(spacing);
// const DeleteIcon = styled(MuiDelete)(spacing);

// const CenteredContent = styled.div`
//   text-align: center;
// `;

// const BigAvatar = styled(Avatar)`
//   width: 120px;
//   height: 120px;
//   margin: 0 auto ${(props) => props.theme.spacing(2)}px;
//   ${({ $withBorder }) =>
//     $withBorder &&
//     `border: 1px solid ${grey[500]};
//      box-shadow: 0 0 1px 0 ${grey[500]} inset, 0 0 1px 0 ${grey[500]};`}
// `;

// const AvatarUpload = () => {
//   const [profilePicture, _setProfilePicture] = useState(null);
//   const inputFileRef = createRef(null);

//   const cleanup = () => {
//     URL.revokeObjectURL(profilePicture);
//     inputFileRef.current.value = null;
//   };

//   const setProfilePicture = (newProfilePicture) => {
//     if (profilePicture) {
//       cleanup();
//     }
//     _setProfilePicture(newProfilePicture);
//   };

//   const handleOnChange = (event) => {
//     const newProfilePicture = event.target?.files?.[0];

//     if (newProfilePicture) {
//       setProfilePicture(URL.createObjectURL(newProfilePicture));
//     }
//   };

//   /**
//    *
//    * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
//    */
//   const handleClick = (event) => {
//     if (profilePicture) {
//       event.preventDefault();
//       setProfilePicture(null);
//     }
//   };

//   return (
//     <CenteredContent>
//       <BigAvatar
//         $withBorder
//         alt="Avatar"
//         src={profilePicture || "/static/img/avatars/default-profile.svg"}
//         imgProps={{
//           style: {
//             maxHeight: "100%",
//             maxWidth: "100%",
//             objectFit: "cover",
//           },
//         }}
//       />
//       <input
//         ref={inputFileRef}
//         accept="image/*"
//         hidden
//         id="avatar-image-upload"
//         type="file"
//         onChange={handleOnChange}
//       />
//       <label htmlFor="avatar-image-upload">
//         <Button
//           variant="contained"
//           color="primary"
//           component="span"
//           mb={2}
//           onClick={handleClick}
//         >
//           {profilePicture ? <DeleteIcon mr={2} /> : <UploadIcon mr={2} />}
//           {profilePicture ? "Limpar" : "Upload"}
//         </Button>
//       </label>
//       <Typography variant="caption" display="block" gutterBottom>
//         Para obter os melhores resultados, use uma imagem de pelo menos 128 x
//         128 pixels no formato .jpg
//       </Typography>
//     </CenteredContent>
//   );
// };

// export default AvatarUpload;
