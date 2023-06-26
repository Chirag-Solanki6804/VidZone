import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.app.isOpen);
  console.log(isOpen);
  if (!isOpen) return null;

  return (
    <div className="w-56 h-full bg-black text-white flex flex-col gap-4 py-7 px-24">
      <ul className="flex flex-col justify-between items-center gap-5 text-lg">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subcription</li>
        <hr />
      </ul>
      <ul className="flex flex-col justify-between items-center gap-5 text-lg">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch later</li>
        <li>Liked Videos</li>
      </ul>
      <ul className="flex flex-col justify-between items-center gap-5 text-lg">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
