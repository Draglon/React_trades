import React from 'react';
import { connect } from 'react-redux';

import Home from '../Home/index.jsx';
import News from '../News/index.jsx';
import NotFound from '../NotFound/index.jsx';

const components = { Home, News, NotFound }

const Switcher = ({ page }) => {
  const Component = components[page]
  return <Component />
}

const mapStateToProps = ({ page }) => ({ page })
 
export default connect(mapStateToProps)(Switcher)