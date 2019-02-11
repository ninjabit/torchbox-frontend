import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './services-block.module.scss'
import Avatar from '../avatar/avatar'

const ServicesBlock = ({
  services,
  className,
  sectionTitle,
  greetingImage,
}) => {
  return (
    <div className={[styles.block, className].join(' ')}>
      <img className={styles.blockImage} src={greetingImage} />

      <div className={styles.blockContent}>
        <span className={styles.pageSectionTitle}>{sectionTitle}</span>
        <div className={styles.blockServiceList}>
          {services.slice(1).map(blog => (
            <div className={styles.blockService} to={blog.href}>
              <h3 className={styles.blockServiceTitle}>{blog.title}</h3>
              <p className={styles.blockServiceDesc}>{blog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ServicesBlock.propTypes = {
  services: PropTypes.array,
  className: PropTypes.string,
  listingUrl: PropTypes.string.isRequired,
}

ServicesBlock.defaultProps = {
  className: '',
  services: [],
  sectionTitle: 'Wagtail design, build + support',
  greetingImage: require('../../images/toolkit.svg'),
}

export default ServicesBlock