import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50  text-center md:justify-between mx-auto px-4 py-2 lg:px-8 lg:py-4">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Made by Havish
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#about"
            color="blue-gray"
            className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
          >
            About Me
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#contactme"
            color="blue-gray"
            className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
          >
            Contact Me
          </Typography>
        </li>
      </ul>
    </footer>
  );
}