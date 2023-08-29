import { Box, ImageList, ImageListItem, Pagination, PaginationItem, useMediaQuery } from "@mui/material";
import styles from "./Explore.module.css";
import { useSearchParams } from "react-router-dom";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";


const Explore = ({ imagesData, pageNumber }) => {

  const imgRef = useRef();
  const imgContainerRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [imageLoaded, setImageLoaded] = useState(false);
  const match = useMediaQuery('(max-width:48em)');
  console.log(imagesData);

  useEffect(() => {
    console.log(pageNumber);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // const loaded = () => {
    //   setImageLoaded(true);
    //   console.log('loaded');
    // };
    // imgRef.current.addEventListener('load', loaded);


  }, []);



  const handlePageChange = (event) => {
    console.log(event.target.textContent);
    const pageValue = event.target.textContent;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setSearchParams({ ...Object.entries(searchParams), page: pageValue });
  };

  return <main>
    <Box sx={{ width: match ? '90vw' : '80vw', overflowY: 'scroll', margin: '0 auto' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imagesData.map((item) => (
          <ImageListItem key={item.id}>
            <div ref={imgContainerRef} className={styles['blur-loader']} style={{ backgroundImage: `url(${item.urls.raw}&w=2)`, paddingBottom: `${(item.height / item.width) * 100}%` }}>
              <img
                src={item.urls.small}
                alt={item.title}
                loading="lazy"
                ref={imgRef}
              // style={{opacity: imageLoaded ? 1 : 0,transition: 'opacity 0.5s ease-in-out'}}
              />
            </div>

            {/* <Skeleton variant="rectangular" animation="pulse" sx={{width:'100%',height:'400px'}} /> */}
          </ImageListItem>
        ))}
      </ImageList>

      <div className={styles.paginationContainer}>

        <Pagination

          count={5}
          onChange={handlePageChange}
          page={pageNumber}
          renderItem={(item) => (
            <PaginationItem
              color="primary"
              page={pageNumber}
              size="large"
              slots={{ previous: ArrowBack, next: ArrowForward }}
              {...item}
            />
          )}
        />
      </div>
    </Box>
  </main>
};

export default Explore;