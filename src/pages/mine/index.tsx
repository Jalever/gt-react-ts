import React, { memo } from "react";
import { NavLink, Redirect } from 'react-router-dom';

const Button = () => {
  return (
    <NavLink
      to="/mine/ranking"
    >
      to ranking page
    </NavLink>
  );
}

const MinePage = () => {
  return (
    <>
      <p>Mine Page loading.</p>
      <Button />
    </>
  );
}

export default MinePage;