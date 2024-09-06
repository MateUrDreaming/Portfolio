/* eslint-disable prettier/prettier */

import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, PKLogoV2, LinkedinIcon } from "@/components/icons";

const footer = () => {
  return (
    
<footer>
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <NextLink className="flex items-center justify-start gap-2" href="/">
            <PKLogoV2 />
            <p className="font-bold text-inherit">Portfolio</p>
          </NextLink>
          <Link
            isExternal
            aria-label="Twitter"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> 
            © 2024{' '} <a className="hover:underline" href="https://flowbite.com/">Parin Kasabia™. </a> All Rights Reserved.
          </span>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        
      </div>
    </footer>
    

  )
}

export default footer