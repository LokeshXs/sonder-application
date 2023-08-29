import { Suspense } from "react";
import Explore from "../Components/Explore/Explore";
import { Await, defer, useLoaderData } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
const ExplorePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(typeof searchParams.get('page'));

  const { pictures: imagesData } = useLoaderData();




  return <Suspense fallback={<Skeleton variant="rectangular" animation="pulse" sx={{ width: '100%', height: '400px' }} />}>
    <Await resolve={imagesData}>
      {(loadedImagesData) => <Explore imagesData={loadedImagesData} />}
    </Await>
  </Suspense>
};

async function loadImagesData({ request, params }) {
  const searchParams = new URL(request.url).searchParams;

  const page = searchParams.get('page');

  const response = await fetch(`https://api.unsplash.com/collections/4977823/photos/?per_page=30&page=${page}&client_id=tOi4sBt2CUc4GhVjzbZ_8aaS6hjWcT-R5_z4PjCp-Cs`);

  const data = await response.json();

  if (!response.ok) {


    throw new Response(JSON.stringify({ message: 'Could not fetch the pictures' }), { status: 500 });
  }


  return data;

}

export function loader({ request, params }) {
  return defer({
    pictures: loadImagesData({ request: request, params: params }),
  });
}

export default ExplorePage;