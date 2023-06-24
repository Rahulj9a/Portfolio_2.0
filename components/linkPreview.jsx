 
import { useState, useEffect } from "react";
 

function LinkPreview({ url, width = "250px", height = "150px" }) {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(true);
   

  const handleClick = (e) => {
    window.open(url, '_blank');

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const title = doc.querySelector("title")?.textContent || "";
        const description =
          doc
            .querySelector('meta[name="description"]')
            ?.getAttribute("content") || "";
        const image =
          doc
            .querySelector('meta[property="og:image"]')
            ?.getAttribute("content") || "";

        setPreviewData({ title, description, image });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!previewData) {
    return <p>Failed to fetch link preview.</p>;
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="projectCard md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-2xl hover:shadow-circle-shadowSmall hover:shadow-custom4">
        <div className="h-2/3 w-full bg-custom1 rounded-t-2xl flex items-center justify-center overflow-hidden">
          <img src={previewData.image} className=" w-auto h-auto bg-contain" />
        </div>
        <div className="h-1/3 bg-custom1 border-custom2 border-t-2 w-full flex items-center justify-center  rounded-b-2xl">
          <p className="text-custom4 text-center">{previewData.title}</p>
        </div>
      </div>
    </div>
  );
}

export default LinkPreview;
