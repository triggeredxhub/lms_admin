import React, { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown";

import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export function Navbar({
  userRole,
  userName,
  notifications = 0,
  onLogoutClick,
  onProfileClick,
  onSettingsClick,
  onSearch,
}) {
  const [searchValue, setSearchValue] = useState("");
  const getRoleIcon = () => {
    switch (userRole) {
      case "instructor":
        return <GraduationCap className="h-5 w-5" />;
      case "admin":
        return <Settings className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getRoleBadge = () => {
    const variants = {
      student: "bg-primary text-primary-foreground",
      instructor: "bg-secondary text-secondary-foreground",
      admin: "bg-warning text-warning-foreground",
    };

    return (
      <Badge className={variants[userRole]}>
        {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
      </Badge>
    );
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="rounded-md bg-gradient-primary p-2">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-gray-800 hidden md:inline lg:inline">
                LMS
              </span>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder="Search courses, assignments..."
                className="w-full pl-8 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-destructive text-destructive-foreground">
                  {notifications > 9 ? "9+" : notifications}
                </Badge>
              )}
            </Button>

            {/* Role Badge */}
            {getRoleBadge()}

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className=" rounded-full p-0 overflow-hidden focus:outline-none focus-visible:ring-white"
                >
                  <Avatar className="  w-10 h-10 rounded-full">
                    <AvatarImage
                      className="h-full w-full"
                      src=""
                      alt={userName}
                    />
                    <AvatarFallback className="h-full w-full flex items-center justify-center rounded-full bg-primary  text-white">
                      {userName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-background rounded-md border border-border shadow-lg"
                align="end"
                forceMount
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      {getRoleIcon()}
                      <p className="text-sm font-medium leading-none">
                        {userName}
                      </p>
                    </div>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userRole.charAt(0).toUpperCase() + userRole.slice(1)}{" "}
                      Account
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={onProfileClick}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={onSettingsClick}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:text-destructive"
                  onSelect={onLogoutClick}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
