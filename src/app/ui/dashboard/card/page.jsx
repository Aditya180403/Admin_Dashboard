import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-gray-700">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="text-lg font-medium">{item.name}</span>
        <span className="text-xl font-semibold">{item.number}</span>
        <span className="text-sm font-light">
          <span className={item.percentageChange > 0 ? "text-lime-500" : "text-red-500"}>
            {item.percentageChange}%
          </span>

          {item.percentageChange > 0 ? " more" : " less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
