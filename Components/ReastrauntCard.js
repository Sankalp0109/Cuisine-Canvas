import { IMAGE_URL } from "../utils/constant";
export const RestrauntCard = (props) => {
  console.log(props);
  const { resData } = props;
  console.log(resData.info.isOpen);
  //const cloudinaryImageId = resData.info.cloudinaryImageId;

  //console.log(name);
  //console.log(cloudinaryImageId);
  const {
    name,
    cuisines,
    cloudinaryImageId,
    locality, avgRating,

  } = resData?.info;
  return (
    <div className="card-container h-100 self-stretch">
      <div className="card m-4 p-4 w-[220px]  bg-gray-100 rounded-lg hover:bg-gray-200 ">
        <img 
          src={
            IMAGE_URL +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="text-clip overflow-hidden ...">{cuisines.join(", ")}</h3>
        <h4>{locality}</h4>
        <h4><b>{avgRating}</b> Rating</h4>
      </div>
    </div>


  );
};
export const WithLabel = (ReastrauntCard) => {
  return (props) => {
    return (
      <div >
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
        <RestrauntCard {...props} />
      </div>
    );

  };
};