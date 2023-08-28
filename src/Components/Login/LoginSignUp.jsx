import { Box, IconButton, Modal, Typography, useMediaQuery } from "@mui/material";
import styles from "./LoginSignUp.module.css";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import video2 from "../../assets/video2.mp4";
import { Cancel, Delete } from "@mui/icons-material";
import NavigationComponent from "../Navigation/Navigation";
import { motion } from "framer-motion";
import { useAnimate, stagger } from "framer-motion";




const LoginSignUp = (props) => {


  const [actionModalState, setActionModalState] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const match = useMediaQuery('(max-width:50em)');
  const mobileMatch = useMediaQuery('(max-width:688px)');
  console.log(searchParams.get('mode'));
  const modeIsLogin = searchParams.get('mode') === 'login';

  const loginEmail = useRef();
  const loginPassword = useRef();

  const signupEmail = useRef();
  const signupPassword = useRef();
  const signupFirstName = useRef();
  const signupLastName = useRef();

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!searchParams.get('mode')) {
      setSearchParams({ ...Object.fromEntries(searchParams), mode: 'login' });
    }
  }, [searchParams, setSearchParams]);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: mobileMatch ? '95%' : match ? 400 : 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: match ? 1 : 4,
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#fffbf2',
    borderRadius: '2rem',

  };

  function handleClose() {
    setActionModalState(false);
    navigate('/');
  }

  function userLoginHandler(event) {

    event.preventDefault();
    if (!loginEmail.current.value.trim() || !loginPassword.current.password.trim()) {
      animate('input,textarea', { x: [-10, 0, 10, 0, 10, 0] }, { type: 'spring', duration: 0.5, delay: stagger(0.05) });
      return;
    }

  }

  function userSignupHandler(event) {
    event.preventDefault();
    if (!signupFirstName.current.value.trim() || !signupLastName.current.value.trim() || !signupEmail.current.value.trim() || !signupPassword.current.value.trim()) {
      animate('input,textarea', { x: [-10, 0, 10, 0, 10, 0] }, { type: 'spring', duration: 0.5, delay: stagger(0.05) });
      return;
    }
  }

  return <> <NavigationComponent />
    <main>
      <section className={styles.videoSection}>
        <video src={video2} muted autoPlay loop />
      </section>
      <Modal
        open={actionModalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton aria-label="delete" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={handleClose}>
            <Cancel sx={{ fontSize: '4rem' }} />
          </IconButton>
          <h1 className={styles.loginFormHeading}>{modeIsLogin ? 'LOGIN' : 'SIGN UP'}</h1>

          {modeIsLogin && <form action="" onSubmit={userLoginHandler} className={styles.loginForm} ref={scope}>
            <input type="text" name="mail" placeholder="Email" ref={loginEmail} />
            <input type="password" name="password" placeholder="Password" ref={loginPassword} />

            <motion.button whileHover={{
              scale: 1.05
            }} transition={{ type: 'spring', stiffness: 500 }}>Login</motion.button>
          </form>}
          {!modeIsLogin && <form action="" onSubmit={userSignupHandler} className={styles.loginForm} ref={scope}>
            <input type="text" name="firstname" placeholder="First Name" ref={signupFirstName} />
            <input type="text" name="lastname" placeholder="Last Name" ref={signupLastName} />
            <input type="text" name="mail" placeholder="Mail id" ref={signupEmail} />
            <input type="password" name="password" placeholder="Password" ref={signupPassword} />

            <motion.button whileHover={{
              scale: 1.05
            }} transition={{ type: 'spring', stiffness: 500 }}>Sign up</motion.button>
          </form>}
          {modeIsLogin && <p className={styles.forgotPassword}>forgot password click here <Link>forgot password</Link></p>}
          <p>OR</p>
          <Link className={styles.signupLink} to={`/auth?mode=${modeIsLogin ? 'signup' : 'login'}`}>{modeIsLogin ? 'Sign up' : 'Login'}</Link>
        </Box>
      </Modal>
    </main>
  </>
};

export default LoginSignUp;