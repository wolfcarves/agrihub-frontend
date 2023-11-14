import React from 'react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const renderButtons = () => {
    const buttons = []
    const numButtonToShow = 5 // Adjust this value based on your preference

    // Display ellipsis and adjacent buttons around the current page
    let startPage = Math.max(1, currentPage - Math.floor(numButtonToShow / 2))
    let endPage = Math.min(totalPages, startPage + numButtonToShow - 1)

    if (endPage - startPage + 1 < numButtonToShow) {
      startPage = Math.max(1, endPage - numButtonToShow + 1)
    }

    if (startPage > 1) {
      buttons.push(
        <button
          className='py-1 px-2 text-gray-2 border border-gray-2 rounded'
          key={1}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      )
      if (startPage > 2) {
        buttons.push(<span key='ellipsis-start'>...</span>)
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          className={`py-1 px-2 text-gray-2 border border-gray-2 rounded  ${
            currentPage === i ? 'bg-primary-2 border-0 text-white' : null
          }`}
          key={i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key='ellipsis-end'>...</span>)
      }
      buttons.push(
        <button key={totalPages} onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </button>
      )
    }

    return buttons
  }

  return (
    <div className='flex gap-1'>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='py-1 px-2 text-gray-2 border border-gray-2 rounded'
      >
        Previous
      </button>
      {renderButtons()}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className='py-1 px-2 text-gray-2 border border-gray-2 rounded'
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
