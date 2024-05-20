import { jumpToReleventDiv } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <nav className="flex gap-4">
          <a
            onClick={() => jumpToReleventDiv("home")}
            className="flex cursor-pointer  items-center rounded-md text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50/90"
          >
            Home
          </a>
          <a
            onClick={() => jumpToReleventDiv("skills")}
            className="flex cursor-pointer  items-center rounded-md text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50/90"
          >
            Skills
          </a>
          <a
            onClick={() => jumpToReleventDiv("projects")}
            className="flex  cursor-pointer items-center rounded-md text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50/90"
          >
            Projects
          </a>
          <a
            onClick={() => jumpToReleventDiv("contact")}
            className="flex cursor-pointer  items-center rounded-md text-sm font-medium text-gray-900 transition-colors hover:text-gray-900/90 dark:text-gray-50 dark:hover:text-gray-50/90"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500 dark:text-gray-400">
            © 2024 David Kohalmi
          </span>
        </div>
      </div>
    </footer>
  );
}
