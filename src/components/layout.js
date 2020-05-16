import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Profile from './profile';
import './layout.css';

const Layout = styled.div`
  display: flex;
`;

const Container = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <Profile profileName='Eric Madureira' />
      <main>{children}</main>
    </Layout>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
