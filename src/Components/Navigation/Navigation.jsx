import { useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import 'animate.css';
import { IconButton, InputAdornment, TextField, ThemeProvider, useMediaQuery } from "@mui/material";
import { AccountCircle, Padding, Search, Menu } from "@mui/icons-material";
import { theme } from "../../Theme/theme";
import logo from "../../assets/logo.png";
import TemporaryDrawer from "../Main/MobileDrawer/MobileDrawer";
import { AnimatePresence, motion } from "framer-motion";


const NavigationComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [attachForm, setAttachForm] = useState(false);
  const navRef = useRef();
  const headerRef = useRef();
  const searchFormRef = useRef();
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width:1072px)');
  const mobileMatch = useMediaQuery('(max-width:688px)');
  useEffect(() => {


    const headerHeight = headerRef.current.getBoundingClientRect();

    window.addEventListener('scroll', function (e) {
      // console.log(this.window.scrollY);
      if (this.window.scrollY > headerHeight.height) {
        navRef.current.classList.add(styles.navContainerSticky);
        headerRef.current.style.marginTop = headerHeight + 'px';
        navRef.current.style.animation = "fadeInDown";
        navRef.current.style.animationDuration = '0.5s';
        setAttachForm(true);


      } else {
        navRef.current.classList.remove(styles.navContainerSticky);
        headerRef.current.style.marginTop = '0px';
        navRef.current.style.animation = "fadeInUp";
        navRef.current.style.animationDuration = '0.5s';
        setAttachForm(false);

      }
    })
  }, []);


  return <header className={styles.headerContainer} ref={headerRef}>
    <motion.nav className={`${styles.navContainer}`} ref={navRef} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{type:'spring',duration:0.5,stiffness:300}} >
      <div className={styles.searchContainer}>
        <img src={logo} alt="" className={styles.logo} onClick={() => { navigate('/') }} />
        <ThemeProvider theme={theme}>

          {attachForm && <motion.form initial={{ opacity: 0, x: 30 }} animate={{ opacity: attachForm ? 1 : 0, x: 0 }} ref={searchFormRef} className={styles.searchForm}>
            <TextField
              id="input-with-icon-textfield"
              label="Search"
              type="text"
              placeholder="Search"
              inputProps={{ sx: { padding: mobileMatch ? 1 : 2 } }}
              sx={{
                '& .MuiInputBase-root': {
                  borderRadius: '2rem',
                  fontSize: '1.4rem',


                }, marginRight: '2rem'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <motion.button whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 500 }} className={styles.searchButton}>Submit</motion.button>
          </motion.form>
          }

        </ThemeProvider>
      </div>
      {matches ? <IconButton aria-label="delete" color="#000" onClick={() => { setDrawerOpen(true) }}>
        <Menu fontSize="large" />
      </IconButton> : <motion.ul className={styles.navLinksList}>

        <motion.li   className={styles.navlink}><NavLink className={({ isActive }) => isActive ? styles.linkIsActive : styles.linkIsNotActive} to="/">Home</NavLink></motion.li>

        <motion.li   className={styles.navlink}><NavLink className={({ isActive }) => isActive ? styles.linkIsActive : styles.linkIsNotActive} to="/aboutus">About Us</NavLink></motion.li>


        <motion.li   className={styles.navlink}><NavLink className={({ isActive }) => isActive ? styles.linkIsActive : styles.linkIsNotActive} to="/explore?page=1">Explore</NavLink></motion.li>


        <motion.li  className={styles.navlink}><NavLink className={({ isActive }) => isActive ? styles.linkIsActive : styles.linkIsNotActive} to="/auth?mode=login">Login</NavLink></motion.li>
      </motion.ul>}
    </motion.nav>
    <TemporaryDrawer drawerOpen={drawerOpen} setDrawerOpen={() => { setDrawerOpen(false) }} />
  </header>
};


export default NavigationComponent;