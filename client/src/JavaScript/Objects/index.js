import React from 'react'
import Intro from './intro'
import Access from './access'
import Everything from './everything'
import PendingItems from './pending'

const Objects = () => (
  <div>
    <div className="content-placeholder">
      <Intro />
      <Access />
      <Everything />
      <PendingItems />
    </div>
  </div>
)

export default Objects