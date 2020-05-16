import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Profile = styled.div`
  display: flex;
  height: 100%;
`;

const Container = ({ profileName }) => (
  <Profile>
    {profileName}
  </Profile>
);

Container.propTypes = {
  profileName: PropTypes.string,
};

Container.defaultProps = {
  profileName: '',
};

export default Container;
