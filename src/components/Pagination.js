// import React from "react";

// function Pagination({ maxLastLength, array, setPageNumber, pageNumber }) {
//   return (
//     <>
//       <nav aria-label="Page navigation example ">
//         <ul className="pagination d-flex flex-row">
//           {pageNumber > 1 && (
//             <li
//               className="page-item"
//               onClick={() => {
//                 setPageNumber((prev) => prev - 1);
//               }}
//             >
//               <button className="btn" className="pagination-button mr-3">
//                 Previous
//               </button>
//             </li>
//           )}

//           {/* {maxLastLength === array?.length && ( */}
//             <li
//               className="page-item align-self-end"
//               onClick={() => {
//                 setPageNumber((prev) => prev + 1);
//               }}
//             >
//               <button className="btn" className="pagination-button">
//                 Next
//               </button>
//             </li>
//           {/* )} */}
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Pagination;

import React from "react";

function Pagination({ maxLastLength, array, HandlepageChange, pageNumber }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          onClick={() => {
            pageNumber > 1 && HandlepageChange(-1);
          }}
          className={`previous ${pageNumber == 1 && "disabled"}`}
        >
          <button
            className={`btn pagination-button ${
              pageNumber == 1 && "disabled-btn"
            }`}
          >
            &laquo; Previous
          </button>
        </li>

        <li className="middle">{pageNumber}</li>
        <li
          className={`next ${maxLastLength > array?.length && "disabled"}`}
          onClick={() => {
            maxLastLength == array?.length && HandlepageChange(1);
          }}
        >
          <button
            className={`btn pagination-button ${
              maxLastLength > array?.length && "disabled-btn"
            }`}
          >
            Next &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
