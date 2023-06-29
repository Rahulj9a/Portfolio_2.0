 
import { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
 

function LinkPreview({data}) {
   
  
   

  const handleClick = (e) => {
    window.open(data.url, '_blank');

  };

  
    const fetchPreviewData = async () => {
      try {
        const response = await axios.get(data.url);
         
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, "text/html");
        const title = doc.querySelector("title")?.textContent || "";
        const description =
          doc
            .querySelector('meta[name="description"]')
            ?.getAttribute("content") || "";
        const image =
          doc
            .querySelector('meta[property="og:image"]')
            ?.getAttribute("content") || "";

            return { title, description, image };
         
      } catch (error) {
        throw new Error(error.message)
         
      }
    };

     
  
  const { data: previewData, isLoading, isError } = useQuery(['preview', data.url], fetchPreviewData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Failed to fetch link preview.</p>;
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="projectCard md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-2xl  shadow-circle-shadowSmall hover:shadow-custom4">
        <div className="h-2/3 w-full   rounded-t-2xl flex items-center justify-center overflow-hidden">
          <img src={previewData.image} className=" w-auto h-auto bg-contain" />
        </div>
        <div className="h-1/3   border-custom2 border-t-2 w-full flex items-center justify-center  rounded-b-2xl">
          <p className="text-custom4 text-center">{data.title}</p>
        </div>
      </div>
    </div>
  );
}

export default LinkPreview;
