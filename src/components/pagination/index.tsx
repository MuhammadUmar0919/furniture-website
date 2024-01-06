'use client'

import React from "react";
import { Button, IconButton } from "@material-tailwind/react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

interface UpdatedIconButtonProps {
  onClick: () => void;
  variant: "filled" | "text";
}

function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const next = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const getItemProps = (index: number) => ({
    variant: currentPage === index ? "filled" : "text",
    onClick: () => onPageChange(index),
  });

  return (
    <div className="flex items-center gap-4 mx-auto">
      <Button
        placeholder
        variant="text"
        onClick={prev}
        disabled={currentPage === 1}
        className="flex items-center gap-2 text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"
          />
        </svg>
        Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
         <IconButton color='cyan' className="bg-lightCyan text-primary font-bold" placeholder key={index} {...(getItemProps(index + 1) as UpdatedIconButtonProps)}>
         {index + 1}
       </IconButton>
       
        ))}
      </div>
      <Button
        placeholder
        variant="text"
        onClick={next}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 text-primary"
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
          />
        </svg>
      </Button>
    </div>
  );
}

export default Pagination;
