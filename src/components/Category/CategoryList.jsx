import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem, { threadItemShape } from './CategoryItem';

function CategoryList({ threads }) {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      {threads.length > 0 ? (
        threads.map((thread) => (
          <CategoryItem key={thread.id} {...thread} />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
}

CategoryList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default CategoryList;
