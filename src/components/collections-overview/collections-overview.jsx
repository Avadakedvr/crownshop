import React from 'react'
import { connect } from 'react-redux'
import { selectCollectionsForPreview }from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview'
import './collections-overview.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {
    collections.map(({id, ...collectionProps}) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)