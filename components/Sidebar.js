import Link from "next/link";
import { FaHome, FaUser, FaTasks, FaSignOutAlt } from "react-icons/fa"; 

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0">
      <div className="p-6 text-2xl font-bold text-center">
        <span>My App</span>
      </div>
      <div className="mt-8">
        <ul className="space-y-6">
          <li>
            <Link href="/dashboard" className="flex items-center space-x-3 p-4 hover:bg-gray-700 rounded-md">
              <FaHome className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center space-x-3 p-4 hover:bg-gray-700 rounded-md">
              <FaUser className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link href="/tasks" className="flex items-center space-x-3 p-4 hover:bg-gray-700 rounded-md">
              <FaTasks className="h-5 w-5" />
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link href="/login" className="flex items-center space-x-3 p-4 hover:bg-gray-700 rounded-md">
              <FaSignOutAlt className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
