import PropTypes from 'prop-types';

function Footer({ children }) {
  return <footer style={{marginTop:"auto"}}>{children}</footer>;
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;