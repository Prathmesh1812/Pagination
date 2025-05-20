import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <button className="btn-2" onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>
          Prev
        </button>
      )}

      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}

      { 
      currentPage !== pages.length &&
        <button className="btn-2" onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
        Next
      </button>
      }

    </div>
  );
};

export default Pagination;
