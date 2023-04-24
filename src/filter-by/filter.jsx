// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'
// import { _onSelect } from 'react-dropdown'

// import React, { useState } from 'react'
// import Select from 'react-select'

import * as React from 'react'
import Downshift from 'downshift'
import { useSelect } from 'downshift'
import { useState } from 'react'

// const options = [
//   { value: 'Michael Jackson' },
//   { value: 'Frank Sinatra' },
//   { value: 'Calvin Harris' },
//   { value: 'Zhu' },
//   { value: 'Arctic Monkeys' }
// ]

export default function Filter({ options, optName }) {
  // const options = [
  //   'Michael Jackson',
  //   'Frank Sinatra',
  //   'Calvin Harris',
  //   'Zhu',
  //   'Arctic Monkeys',
  // ]

  // const singers = [
  //   { value: 'Michael Jackson' },
  //   { value: 'Frank Sinatra' },
  //   { value: 'Calvin Harris' },
  //   { value: 'Calvin Harris' },
  //   { value: 'Calvin Harris' },
  //   { value: 'Calvin Harris' },
  //   { value: 'Calvin Harris' },
  //   { value: 'Calvin Harris' }
  // ]
  // const genres = [
  //   { value: 'rock' },
  //   { value: 'pop' },
  //   { value: 'jazz' }
  // ]
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items: options })

  // const [activeState, setActiveState] = useState(false)

  // const [selectedOption, setSelectedOption] = useState(null)
  // const defaultOption = options[0]

  return (
    <div className="option">
      {/* <label className="filter__title" {...getLabelProps()}>
        Искать по:
      </label> */}

      <div
        className={`filter__button button-author _btn-text ${
          isOpen ? 'dropdwn-active' : ''
        }`}
        {...getToggleButtonProps()}
      >
        {selectedItem ?? optName}
      </div>
      <div className="scrollabale-menu-padding">
        <ul
          className={`filter__dropdown-content ${
            isOpen ? 'srcollabale-menu' : ''
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            options.map((item, index) => (
              <li
                className="filter__dropdown-item"
                key={`${item}${index}`}
                {...getItemProps({
                  item,
                  index,
                })}
              >
                {item.value}
              </li>
            ))}
        </ul>
      </div>

      {/* <ul
        className={`filter__dropdown-content ${
          isOpen ? 'srcollabale-menu' : ''
        }`}
        {...getMenuProps()}
      >
        {isOpen &&
          options.map((item, index) => (
            <li
              className="filter__dropdown-item"
              key={`${item}${index}`}
              {...getItemProps({
                item,
                index,
              })}
            >
              {item.value}
            </li>
          ))}
      </ul> */}
      {/* <div className="filter__button button-author _btn-text">исполнителю</div>
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div> */}
    </div>
  )
}
