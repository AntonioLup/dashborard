import {
  Box,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";
function ButtonLogin({ usuario, arraylog, setUsuario }) {
  const ctx = useContext(UserContext);
  const { user, setUser } = ctx;
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    margin: "0 auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { register, handleSubmit } = useForm({
    defaultValue: {
      Nombre: "",
      Email: "",
      Contraseña: "",
    },
  });

  return (
    <Stack direction="row" spacing={1}>
      {/* true */}
      {!arraylog && (
        <Button
          className="buttonlogin"
          variant="contained"
          onClick={handleOpen}
        >
          Register
        </Button>
      )}

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              localStorage.setItem("user", JSON.stringify(data));
              user.loggedIn && setUser({ loggedIn: true });
            })}
          >
            <FormGroup>
              <FormLabel>User:</FormLabel>
              <TextField
                type="text"
                {...register("Nombre", {
                  max: 16,
                  min: 5,
                  onChange: (e) => console.log(e.target.value),
                })}
                required
                label="Nombre"
              />
              <TextField
                margin="normal"
                type="email"
                {...register("Email", {
                  required: true,
                  onChange: (e) => console.log(e.target.value),
                })}
                placeholder="Email Adress"
                autoFocus
                autoComplete="email"
                label="Email"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Password:</FormLabel>
              <TextField
                fullWidth
                {...register("Contraseña", {
                  max: 16,
                  min: 5,
                  onChange: (e) => console.log(e.target.value),
                })}
                type="password"
                required
                label="Password"
                autoComplete="current-password"
              />
            </FormGroup>

            <Button
              onClose={handleClose}
              variant="outlined"
              margin="normal"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      {/* false */}
      <Button
        className="buttonlogin"
        variant="contained"
        onClick={() => {
          !user.loggedIn && setUser({ loggedIn: false });
          localStorage.removeItem("user");

          console.log("true", user);
        }}
      >
        Log out
      </Button>
    </Stack>
  );
}

export default ButtonLogin;
// if (location.state?.from) {
//   navigate(location.state.from);
// }
