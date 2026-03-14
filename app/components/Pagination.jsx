import React from 'react'
import { getPagination } from "@/app/utils/constant";

export default function Pagination({ totalPages, page, setPage }) {
  return (
     <div className="flex justify-center mt-12 px-2">

        <div
          className="
          flex items-center gap-2
          overflow-x-auto
          scrollbar-hide
          py-2
        "
        >
          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="
            px-4 py-2 text-sm md:text-base
            rounded-lg border
            bg-white hover:bg-gray-100
            disabled:opacity-40
            transition whitespace-nowrap cursor-pointer
            "
          >
            ← Prev
          </button>

          {/* Page numbers */}
          {getPagination(totalPages, page).map((p, index) =>
            p === "..." ? (
              <span
                key={`${p}-${index}`}
                className="px-3 text-gray-400 select-none"
              >
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`
                min-w-[38px]
                px-3 py-2
                text-sm md:text-base
                rounded-lg border
                transition
                cursor-pointer
                ${
                  p === page
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white hover:bg-gray-100"
                }
                `}
              >
                {p}
              </button>
            )
          )}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="
            px-4 py-2 text-sm md:text-base
            rounded-lg border
            bg-white hover:bg-gray-100
            disabled:opacity-40
            transition whitespace-nowrap
            cursor-pointer
            "
          >
            Next →
          </button>
        </div>
      </div>
  )
}
