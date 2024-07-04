import { MdSearch, MdChat, MdGroup, MdCall } from 'react-icons/md';
import './sidebar.css';

function LeftSidebar() {
  return (
    <section className="custom-scrollbar leftsidebar w-[300px] relative min-h-screen bg-[#1e1e1e] flex flex-col justify-start items-center pt-8">
      <div className="relative w-[250px] rounded-full border-2 border-[#2e2e2e] mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-8 px-4 outline-none bg-transparent placeholder:text-white placeholder-opacity-70"
        />
        <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center">
          <MdSearch color="#b58eff" size={20} />
        </button>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-between w-full px-8 pt-2 pb-2">
          <button className="rounded-lg button-hover-effect">
            <div className="button-content">
              <MdChat size={20} className="button-icon" />
              <span className="button-text">Chats</span>
            </div>
          </button>
          <button className="rounded-lg button-hover-effect">
            <div className="button-content">
              <MdGroup size={20} className="button-icon" />
              <span className="button-text">Groups</span>
            </div>
          </button>
          <button className="rounded-lg button-hover-effect">
            <div className="button-content">
              <MdCall size={20} className="button-icon" />
              <span className="button-text">Calls</span>
            </div>
          </button>
        </div>
        <div className="w-4/5 border-t border-[#2e2e2e] mt-4"></div>
      </div>
    </section>
  );
}

export default LeftSidebar;
