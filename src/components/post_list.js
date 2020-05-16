import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const PostList = styled.div`
  display: flex;
  height: 100%;
`;

const Container = ({ postList }) => (
  <PostList>
    {postList}
  </PostList>
);

Container.propTypes = {
  postList: PropTypes.array,
};

Container.defaultProps = {
  postList: [],
};

export default Container;
