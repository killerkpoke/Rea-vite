import { jumpToReleventDiv } from "@/lib/utils";
import { HomeIcon } from "./icons/home-icon";
import { InfoIcon } from "./icons/info-icon";
import { MailIcon } from "./icons/mail-icon";
import { PackageIcon } from "./icons/package-icon";
import { ModeToggle } from "./mode-toggle";
import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "./icons/menu-icon";

export function NavBar() {
  return (
    <header className="flex justify-end items-right">
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <a
          onClick={() => jumpToReleventDiv("home")}
          className="text-dark dark:text-white  
          flex space-x-2 items-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer"
        >
          <HomeIcon />
          <span>Home</span>
        </a>
        <a
          onClick={() => jumpToReleventDiv("skills")}
          className="text-dark dark:text-white flex space-x-2 items-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer"
        >
          <InfoIcon />
          <span>Skills</span>
        </a>
        <a
          onClick={() => jumpToReleventDiv("projects")}
          className="text-dark dark:text-white flex space-x-2 items-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer"
        >
          <PackageIcon />
          <span>Projects</span>
        </a>
        <a
          onClick={() => jumpToReleventDiv("contact")}
          className="text-dark dark:text-white flex space-x-2 items-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer"
        >
          <MailIcon />
          <span>Contact</span>
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <a
              onClick={() => jumpToReleventDiv("home")}
              className="text-dark dark:text-white  
          flex space-x-2 items-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer"
            >
              <HomeIcon />
              <span>Home</span>
            </a>
            <a
              onClick={() => jumpToReleventDiv("skills")}
              className="text-dark dark:text-white flex space-x-2 items-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer"
            >
              <InfoIcon />
              <span>Skills</span>
            </a>
            <a
              onClick={() => jumpToReleventDiv("projects")}
              className="text-dark dark:text-white flex space-x-2 items-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer"
            >
              <PackageIcon />
              <span>Projects</span>
            </a>
            <a
              onClick={() => jumpToReleventDiv("contact")}
              className="text-dark dark:text-white flex space-x-2 items-center hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer"
            >
              <MailIcon />
              <span>Contact</span>
            </a>
          </div>
        </SheetContent>
      </Sheet>
      <div className="mx-4">
        <ModeToggle></ModeToggle>
      </div>
    </header>
  );
}
