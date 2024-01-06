import Link from "next/link"
import { routes } from "@/data"
import { socials } from "@/data/socials"
import { usePathname } from "next/navigation"
import { Button, IconButton, Typography } from "@/common"

const year = new Date().getFullYear()

const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className="container mx-auto">
      <hr className="my-2 border-blue-gray-50" />
      <div data-aos="zoom-out-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-8 pb-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
          <Link href="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
        </div>
        <ul className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <li className="block-title">Navigation</li>
          {routes?.map(({ name, path }) => (
            <Typography
              placeholder
              as="li"
              key={path}
              variant="small"
              className={`links-desc p-1 font-normal text-!bold ${
                pathname == path ? "text-brown" : ""
              }`}
            >
              <Link href={path} className="flex items-center">
                {name}
              </Link>
            </Typography>
          ))}
        </ul>
        <ul className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 grid gap-2">
          <li className="block-title">Contact us</li>
          <Typography placeholder variant="paragraph">
            For all inquiries, contact @womenfashiontrend. Net or head over to
            our Contact page and send us a message.
          </Typography>
          <div className="flex gap-2">
            {socials.map(({ icon, path }) => (
              <Link
                key={path}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="links-desc"
              >
                <IconButton
                  placeholder
                  className="rounded-full shadow-none bg-primary"
                >
                  <Typography placeholder className="text-[white]">
                    {icon}
                  </Typography>
                </IconButton>
              </Link>
            ))}
          </div>
        </ul>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 grid gap-9 md:gap-6">
          <Typography
            placeholder
            variant="small"
            color="blue-gray"
            className="block-title"
          >
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <div className="flex items-center gap-6">
            <Button
              placeholder
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3 text-primary"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-6 w-6"
              />
              <div>
                <p className="font-normal text-xs">Get it on</p>
                <h6 className="font-medium text-sm text-dark">Google Play</h6>
              </div>
            </Button>
            <Button
              placeholder
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-6 w-6"
              />
              <div>
                <p className="font-normal text-xs">Download on the</p>
                <h6 className="font-medium text-sm text-dark">App Store</h6>
              </div>
            </Button>
          </div>
          <div className="grid gap-2">
            <Typography
              placeholder
              variant="small"
              color="blue-gray"
              className="mb-2 block font-medium uppercase"
            >
              Lorem ipsum dolor sit amet consectetur
            </Typography>
            <div className="flex items-center justify-between">
              <img src="/images/visa.png" alt="visa" />
              <img src="/images/payment.png" alt="visa" />
              <img src="/images/paypal.png" alt="paypal" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div data-aos="fade-up" className="flex items-center justify-center md:justify-between">
        <div className="mx-auto w-full md:w-4/5 xl:w-3/5 px-4 text-center">
          <Typography
            placeholder
            variant="small"
            className="font-normal text-blue-gray-500"
          >
            Copyright © {year} Komiljononv Ixtiyor
            <a
              href="https://t.me/Frontend_developer0919"
              target="_blank"
              className="text-blue-gray-500 transition-colors hover:text-blue-500"
            >
              Frontend developer
            </a>
            .
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default Footer
