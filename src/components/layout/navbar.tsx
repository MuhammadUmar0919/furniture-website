import React from "react"
import { MTNavbar, Collapse, Typography, IconButton } from "@/common"
import Link from "next/link"
import { routes } from "@/data"
import CartIcon from "@/assets/svg"
import { usePathname } from "next/navigation"
import useScrollVisibility from "@/utils/visibility"

function Navbar() {
  const pathname = usePathname()
  const { isVisible } = useScrollVisibility()
  const [openNav, setOpenNav] = React.useState(false)

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path }) => (
        <Typography
          placeholder=''
          as="li"
          key={path}
          variant="small"
          className={`p-1 font-normal text-!bold md:text-primary ${
            pathname == path ? "text-brown" : ""
          }`}
        >
          <Link href={path} className="flex items-center">
            {name}
          </Link>
        </Typography>
      ))}
      <li>
        <Link
          href="/cart"
          className={`block ${
            pathname === "/cart"
              ? "bg-brown p-1 shadow-md rounded-[10px]"
              : "p-1 bg-transparent"
          } block  `}
        >
          <CartIcon color={pathname === "/cart" ? "white" : "#114683"} />
        </Link>
      </li>
    </ul>
  )

  return (
    <MTNavbar
    placeholder="true"
      className={`!container border-none sticky top-0 z-10 h-max ${
        isVisible
          ? "bg-white transition-all duration-300"
          : "bg-transparent backdrop-filter-none transition-all duration-300"
      } rounded-none py-2 ${isVisible ? "shadow-md" : "shadow-none"}`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            placeholder="true"
            variant="text"
            ripple={false}
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </MTNavbar>
  )
}

export default Navbar
