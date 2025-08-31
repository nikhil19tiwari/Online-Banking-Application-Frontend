import {   FaFileAlt, FaComments, FaUser } from "react-icons/fa";
import Card from "./Card";
import { MdDashboard } from "react-icons/md";

function VerticalSlideBar() {
  return (
    <div className="flex gap-32 w-64 p-6 ml-24 mt-2 rounded-md">
      {/* Menu List */}
      <ul className="flex flex-col gap-6">
        <li className="flex items-center gap-4 p-2 rounded hover:bg-gray-100 cursor-pointer">
  <MdDashboard className="text-blue-500 text-xl" />
  <span className="text-gray-800 font-medium">Dashboard</span>
</li>
        <li className="flex items-center gap-4 p-2 rounded hover:bg-gray-100 cursor-pointer">
          <FaFileAlt className="text-gray-700" />
          <span className="text-gray-800 font-medium">Post</span>
        </li>
        <li className="flex items-center gap-4 p-2 rounded hover:bg-gray-100 cursor-pointer">
          <FaComments className="text-gray-700" />
          <span className="text-gray-800 font-medium">Comments</span>
        </li>
        <li className="flex items-center gap-4 p-2 rounded hover:bg-gray-100 cursor-pointer">
          <FaUser className="text-gray-700" />
          <span className="text-gray-800 font-medium">User</span>
        </li>
      </ul>

      {/* Dashboard text thoda niche */}
      <div >
       <div className="w-20 text-3xl text-gray-800 font-medium text-center  pt-4">
        Dashboard
       </div>
        
        <div className="flex mt-8 gap-12">
       <Card name="Post" count="153" icon={<FaFileAlt />} />
       <Card name="Comments" count="87" icon={<FaComments />} />
        </div>
             
      </div>

    </div>
  );
}

export default VerticalSlideBar;
