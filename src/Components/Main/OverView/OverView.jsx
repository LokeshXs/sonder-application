import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Fade, Tab, TabScrollButton, ThemeProvider, useMediaQuery } from "@mui/material";
import React from "react";
import styles from "./OverView.module.css";
import { theme } from "../../../Theme/theme";

const OverView = () => {

  const [value, setValue] = React.useState('1');
  const mobileMatch = useMediaQuery('(max-width:688px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const placesOverViewData = [
    {
      value: '1',
      place: 'Philadelphia',
      main: {
        image: 'https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1600',

        location: 'Callowhill, Philadelphia',
        name: 'The Heid building',
        description: "Classic industrial meets modern comfort. With its impossibly high ceilings, murals, and soaring window lines, experience Philadelphia like never before at the Heid",
      },

      suggested: [
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'One Bedroom Apartment',
          description: '1 Bedroom | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'Accessible Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--eb_gPsZg--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/455/original/Rrrh1I3t.jpg',
          name: 'Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--dEsJgi5m--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/493/original/ISoBv_Fa.jpg',
          name: 'One-Bedroom Apartment w/ Mural',
          description: '1 Bedroom | 1 Bathroom',
        },

      ]

    },
    {
      value: '2',
      place: 'London',
      main: {
        image: 'https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?auto=compress&cs=tinysrgb&w=1600',

        location: 'London',
        name: 'Chelsea Green',
        description: "English heritage, meet modern style. Welcome to Chelsea Green. Our newest London hotel and your immaculate English retreat. The Chelsea Green is an original Victorian building. But with a few modern twists.",
      },

      suggested: [
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'One Bedroom Apartment',
          description: '1 Bedroom | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'Accessible Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--eb_gPsZg--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/455/original/Rrrh1I3t.jpg',
          name: 'Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--dEsJgi5m--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/493/original/ISoBv_Fa.jpg',
          name: 'One-Bedroom Apartment w/ Mural',
          description: '1 Bedroom | 1 Bathroom',
        },

      ]

    },
    {
      value: '3',
      place: 'Orlando',
      main: {
        image: 'https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=1600',

        location: 'Lake Cherokee, Orlando',
        name: 'Sonder Wellborn',
        description: "A careful balance of modern design and Orlando history, this Sonder is home to the art deco masterpiece: the Wellborn Suites and the Norment Parry House, the oldest home in Orlando.",
      },

      suggested: [
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'One Bedroom Apartment',
          description: '1 Bedroom | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'Accessible Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--eb_gPsZg--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/455/original/Rrrh1I3t.jpg',
          name: 'Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--dEsJgi5m--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/493/original/ISoBv_Fa.jpg',
          name: 'One-Bedroom Apartment w/ Mural',
          description: '1 Bedroom | 1 Bathroom',
        },

      ]

    },
    {
      value: '4',
      place: 'Detroit',
      main: {
        image: 'https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1600',

        location: 'Downtown, Detroit',
        name: 'The Randolph',
        description: "An impeccable example of the Chicago School architectural style, this building has been reimagined into modern, well-designed apartments ideally located in downtown Detroit.",
      },

      suggested: [
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'One Bedroom Apartment',
          description: '1 Bedroom | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'Accessible Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--eb_gPsZg--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/455/original/Rrrh1I3t.jpg',
          name: 'Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--dEsJgi5m--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/493/original/ISoBv_Fa.jpg',
          name: 'One-Bedroom Apartment w/ Mural',
          description: '1 Bedroom | 1 Bathroom',
        },

      ]

    },
    {
      value: '5',
      place: 'Philadelphia',
      main: {
        image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600',

        location: 'Downtown, Houston',
        name: 'Hogg Palace',
        description: "Exposed concrete ceilings complement beautiful views of downtown Houston. Once an automobile showroom and offices, now these light-filled lofts are the perfect HQ to explore the city.",
      },

      suggested: [
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'One Bedroom Apartment',
          description: '1 Bedroom | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--JAQbXzGc--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/515/original/9YEmbC6Z.jpg',
          name: 'Accessible Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--eb_gPsZg--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/455/original/Rrrh1I3t.jpg',
          name: 'Studio Apartment w/ Mural',
          description: 'Studio | 1 Bathroom',
        },
        {
          image: 'https://res.cloudinary.com/sonder/image/private/s--dEsJgi5m--/q_auto,c_fill,f_auto,q_auto:eco,w_768/v1/s3assets/unit_images/images/000/608/493/original/ISoBv_Fa.jpg',
          name: 'One-Bedroom Apartment w/ Mural',
          description: '1 Bedroom | 1 Bathroom',
        },

      ]

    },

  ]

  return (
    <ThemeProvider theme={theme}>
      <section className={styles.overViewSection}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Philadelphia" value="1" sx={{ fontSize:mobileMatch?'1.4rem':'1.6rem' }} />
                <Tab label="London" value="2" sx={{ fontSize:mobileMatch?'1.4rem':'1.6rem' }} />
                <Tab label="Orlando" value="3" sx={{ fontSize:mobileMatch?'1.4rem':'1.6rem' }} />
                <Tab label="Detroit" value="4" sx={{ fontSize:mobileMatch?'1.4rem':'1.6rem' }} />
                <Tab label="Houston" value="5" sx={{ fontSize:mobileMatch?'1.4rem':'1.6rem' }}/>
              </TabList>
            </Box>
            {placesOverViewData.map((item) => {
              return (
                
                <TabPanel value={item.value} key={item.value} >
                 
                 <div className={`${styles.placeOverView} animate__animated animate__fadeIn`}>
                    <img src={item.main.image} alt="" />
                    <div>
                      <p className={styles.placeLocation}>{item.main.location}</p>
                      <h3>{item.main.name}</h3>
                      <p className={styles.placeDescription}>{item.main.description}</p>
                    </div>
                  </div>
                 

                  <p style={{ fontSize: '2rem', margin: '4rem 0 2rem 0' }}>Stay at The Heid building</p>

                  <div className={styles['placeOverView-subsection']}>

                    {item.suggested.map((item) => {
                      return (
                        <div key={item.name}>
                          <img src={item.image} alt="" />

                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </div>
                      )
                    })}

                  </div>
                </TabPanel>
              )
            })}

          </TabContext>
        </Box>
      </section>
    </ThemeProvider>
  )
};

export default OverView;