import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Track from './tracklist/track'
import TrackList from './tracklist/tracklist'
import Filter from './filter-by/filter'
import Search from './search/search'
import CenterBlock from './centerBlock/centerblock'
import Burger from './nav/burger'
import NavMenu from './nav/navMenu'
import Sidebar from './sidebar/sidebar'
import MainTree from './mainTree/mainTree'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MainTree />

  </React.StrictMode>
)
