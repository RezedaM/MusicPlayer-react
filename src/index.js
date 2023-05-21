import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import Track from '../src/components/tracklist/track'
// import TrackList from '../src/components/tracklist/tracklist'
// import Filter from '../src/components/filter-by/filter'
// import Search from '../src/components/search/search'
// import CenterBlock from '../src/components/centerBlock/centerblock'
// import Burger from '../src/components/nav/burger'
// import NavMenu from '../src/components/nav/navMenu'
// import Sidebar from '../src/components/sidebar/sidebar'
// import MainTree from '../src/components/mainTree/mainTree'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { ThemeContext, themes } from './contexts/theme'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
