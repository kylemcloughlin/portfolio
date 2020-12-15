import { useEffect } from "react";
import PropTypes, { elementType } from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location }) => {
  useEffect(() => {
    const element = document.getElementById(location.hash);
  const newEl = element.innerHTML;
    console.log('el', element.clientHeight);
    setTimeout(() => {
       window.scrollTo({
       behavior: element ? "smooth" : "auto",
       top: element.clientHeight > 850 ? 2300 : 1000,
      });
    }, 100);
  }, [location]);

  return null;
};

ScrollHandler.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string
  }).isRequired
};

export default withRouter(ScrollHandler);