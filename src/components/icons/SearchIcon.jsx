import React from 'react'
import PropTypes from 'prop-types'
import {darkFill} from './Icons.module.scss'

const SearchIcon = ({dimensions, dataId}) => {
  return (
    <svg
      className={darkFill}
      data-id={dataId}
      width={dimensions ? dimensions : 18}
      height={dimensions ? dimensions : 18}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z' />
    </svg>
  )
}

SearchIcon.propTypes = {
  dimensions: PropTypes.number,
  dataId: PropTypes.string,
}

export default SearchIcon