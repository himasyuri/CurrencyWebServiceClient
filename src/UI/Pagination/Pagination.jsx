import React from 'react'
import {getPagesArray} from '../../Utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
  return (
    <div style={{marginLeft: '730px'}} className="page--wrapper">
        {pagesArray.map(p => 
            <span className={page === p ? 'page page--current' : 'page'}
                onClick={() => changePage(p)}
                key = {p}
            >
              {p}
            </span>
        )}
      </div>
  )
}

export default Pagination