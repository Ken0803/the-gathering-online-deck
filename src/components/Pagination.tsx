import React from "react";

interface PaginationProps {
  page: number,
  pageSize: number,
  goToPage: (index: number) => void,
}

export const Pagination = (props: PaginationProps) => {
  return (
    <div className="mt-5 flex flex-row justify-center gap-3 items-center">
      <button
        onClick={() => props.goToPage(props.page > 1 ? props.page - 1 : props.page)}
        disabled={props.page < 2}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-opacity-45 disabled:hover:bg-blue-500"
      >
        Prev
      </button>
      <p>
        { props.page }
      </p>
      <button
        onClick={() => props.goToPage(props.page + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-opacity-45 disabled:hover:bg-blue-500"
      >
        Next
      </button>
    </div>
  )
}