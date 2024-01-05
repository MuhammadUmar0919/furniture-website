import {
  Typography,
} from "@/common"

export function PageTitle({ section, heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography placeholder variant="lead" className="font-semibold">{section}</Typography>
      <Typography placeholder variant="h2" color="blue-gray" className="my-3">
        {heading}
      </Typography>
      <Typography placeholder variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
}

export default PageTitle;