import React from 'react';
import * as classes from './Preloader.module.css';

const Preloader = () => {
  return (
<div className={classes.loader}>
<div className={classes.l_main}>
  <div className={classes.l_square}><span></span><span></span><span></span></div>
  <div className={classes.l_square}><span></span><span></span><span></span></div>
  <div className={classes.l_square}><span></span><span></span><span></span></div>
</div>
</div>
  );
}

export default Preloader;