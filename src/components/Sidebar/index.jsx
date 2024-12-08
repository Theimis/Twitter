import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookmark,
  faEllipsisH,
  faEnvelope,
  faFeatherAlt,
  faHashtag,
  faHome,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

// eslint-disable-next-line react/prop-types
const NaviItem = ({ icon, text }) => {
  return (
    <div className="flex-items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200">
      <FontAwesomeIcon icon={icon} className="text-2xl mr-4" />
      <span className="text-xl hidden xl:inline">{text}</span>
    </div>
  );
};

export function Sidebar() {
  return (
    <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-blue-400 text-3xl m-4"
      />
      <nav>
        <NaviItem icon={faHome} text="Home" />
        <NaviItem icon={faHashtag} text="Explore" />
        <NaviItem icon={faBell} text="Notifications" />
        <NaviItem icon={faEnvelope} text="Messagens" />
        <NaviItem icon={faBookmark} text="Bookmarks" />
        <NaviItem icon={faUserFriends} text="Communities" />
        <NaviItem icon={faTwitter} text="Premium" />
        <NaviItem icon={faUser} text="Profile" />
        <NaviItem icon={faEllipsisH} text="More" />
      </nav>
      <button className="bg-blue-400 text-white rounded-full font-bold px-4 py-3 mt-4 w-full cursor-pointer">
        <FontAwesomeIcon
          icon={faFeatherAlt}
          className="text-white-400 inline xl:hidden"
        />
        <span className="hidden xl:inline">Twitter</span>
      </button>
    </div>
  );
}
