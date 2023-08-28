import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer(props) {
  const navigate = useNavigate();
  const mobileMatch = useMediaQuery('(max-width:688px)');

  const mobileDrawerData = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About us',
      path: '/aboutus'
    },
    {
      name: 'Explore',
      path: '/explore?page=1'
    },
    {
      name: 'Login',
      path: '/auth?mode=login',
    }
  ];

  const drawerBtnHandler = (path) => {
    navigate(path);
  }


  const list = (anchor) => (
    <Box
      sx={{ width: mobileMatch ? 280 : 400, }}
      role="presentation"
      onClick={() => {
        props.setDrawerOpen(false);
      }}

    >
      <List>
        {mobileDrawerData.map((data, index) => (
          <ListItem key={data.name} disablePadding>
            <ListItemButton sx={{ marginTop: '4rem' }} onClick={() => {
              drawerBtnHandler(data.path);
            }}>
              <ListItemText primary={data.name} sx={{
                '& .MuiTypography-root': {
                  fontSize: '2rem'
                }
              }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box >
  );

  return (
    <div style={{ backgroundColor: '#fffbf2' }}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={props.drawerOpen}
            onClick={() => {
              props.setDrawerOpen(false);
            }}
            PaperProps={{ sx: { backgroundColor: '#fffbf2' } }}

          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
