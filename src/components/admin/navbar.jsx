import SearchBar from "../ui/searchBar";
import ProfileDropdown from "../ui/profileDropdown";
import {
  Search,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto  px-4 ">
        <div className="flex h-14 items-center justify-between ">
          {/* <Logo /> */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="rounded-md bg-gradient-primary p-2">
                <img src="../../src/assets/icons/open-book.svg" alt="Logo" className="h-8 w-8" />
              </div>
              <span className="text-xl font-semibold text-gray-800 hidden md:inline lg:inline">
                LMS Admin
              </span>
            </div>
          </div>
          {/* <SearchBar /> */}
         

          <div className="flex-1 max-w-md mx-8">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search courses, assignments..."
                className="w-full pl-8 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* right side */}
          <div className="flex items-center space-x-4 ">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
