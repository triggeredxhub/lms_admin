import { useState } from "react";

function Profile() {
  return (
    <div className="flex items-center space-x-4">
      
      <span className="text-white rounded-full">J</span>
    </div>
  );
}

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          id="menu-button"
          type="button"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
          aria-haspopup="true"
          className="inline-flex w-10 h-10 justify-center gap-x-1.5 rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs "
        >
          <Profile />
          
        </button>
      </div>

      { isOpen && (
        <div
        role="menu"
        tabindex={-1}
        aria-labelledby="menu-button"
        aria-orientation="vertical"
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
      >
        <div role="none" className="py-1">
          <a
            id="menu-item-0"
            role="menuitem"
            href="#"
            tabindex={-1}
            className="block px-4 py-2 text-sm text-gray-700"
          >
            Account settings
          </a>
          <a
            id="menu-item-1"
            role="menuitem"
            href="#"
            tabindex={-1}
            className="block px-4 py-2 text-sm text-gray-700"
          >
            Support
          </a>
          <a
            id="menu-item-2"
            role="menuitem"
            href="#"
            tabindex={-1}
            className="block px-4 py-2 text-sm text-gray-700"
          >
            License
          </a>
          <form role="none" action="#" method="POST">
            <button
              id="menu-item-3"
              type="submit"
              role="menuitem"
              tabindex={-1}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
      )

      }
    </div>
  );
}

export default ProfileDropdown;
