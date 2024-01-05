import React, { ReactNode } from "react"
// import PropTypes from "prop-types";
import { Card, CardBody, IconButton, Typography } from "@/common"

interface FeatureCardProps {
  color?:
    | "blue-gray"
    | "gray"
    | "brown"
    | "deep-orange"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "light-green"
    | "green"
    | "teal"
    | "cyan"
    | "light-blue"
    | "blue"
    | "indigo"
    | "deep-purple"
    | "purple"
    | "pink"
    | "red"
  icon: ReactNode
  title: string
  description: ReactNode
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  color = "blue",
  icon,
  title,
  description,
}) => {
  return (
    <Card placeholder className="rounded-lg shadow-lg shadow-gray-500/10">
      <CardBody placeholder className="px-8 text-center">
        <IconButton
          placeholder
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Typography placeholder variant="h5" className="mb-2" color="blue-gray">
          {title}
        </Typography>
        <Typography placeholder className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default FeatureCard
