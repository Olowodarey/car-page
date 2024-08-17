import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
};

const AuthModal = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  };

  const handleOpenRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };

  const handleClose = () => {
    setOpenLogin(false);
    setOpenRegister(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpenLogin}>
        <AccountCircleIcon fontSize="medium" />
      </IconButton>

      {/* Login Modal */}
      <Modal
        open={openLogin}
        onClose={handleClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box sx={style}>
          <Typography id="login-modal-title" variant="h6" component="h2" className="flex justify-center">
          <div className="font-bold">
          Login Page
          </div>
          </Typography>
          <Typography id="login-modal-description" sx={{ mt: 2 }}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </Typography>

          <Typography className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </Typography>

          <div className="flex items-center justify-between mt-5">
            <div className="border border-black w-[140px] h-0"></div>
            <div>
              <p className="">or</p>
            </div>
            <div className="border border-black w-[140px] h-0"></div>
          </div>

          <div className="mt-5 grid gap-5 justify-center">
            <button
              type="button"
              className="flex gap-8 bg-blue-300 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              <FacebookIcon /> <p>Login with Facebook</p>
            </button>
            <button
              type="button"
              className="flex gap-8 bg-blue-300 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              <GoogleIcon /> <p>Login with Google</p>
            </button>
          </div>

          <div className="mt-10 flex justify-center text-xs">
            New Customer? 
            <button onClick={handleOpenRegister} className="text-blue-500 ml-1">
              Register
            </button>
          </div>
        </Box>
      </Modal>

      {/* Register Modal */}
      <Modal
        open={openRegister}
        onClose={handleClose}
        aria-labelledby="register-modal-title"
        aria-describedby="register-modal-description"
      >
        <Box sx={style}>
          <Typography id="register-modal-title" variant="h6" component="h2" className="flex justify-center">
          <div className="font-bold">
          Register Page
          </div>
          </Typography>
          <Typography id="register-modal-description" sx={{ mt: 2 }}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password :
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-gray-300 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </Typography>

          <Typography className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </Typography>

          <div className="flex items-center justify-between mt-5">
            <div className="border border-black w-[140px] h-0"></div>
            <div>
              <p className="">or</p>
            </div>
            <div className="border border-black w-[140px] h-0"></div>
          </div>

          <div className="mt-5 grid gap-5 justify-center">
            <button
              type="button"
              className="flex gap-8 bg-blue-300 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              <FacebookIcon /> <p>Register with Facebook</p>
            </button>
            <button
              type="button"
              className="flex gap-8 bg-blue-300 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              <GoogleIcon /> <p>Register with Google</p>
            </button>
          </div>

          <div className="mt-10 flex justify-center text-xs">
            Already have an account? 
            <button onClick={handleOpenLogin} className="text-blue-500 ml-1">
              Login
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
