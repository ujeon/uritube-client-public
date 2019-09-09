import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/foo">About Foo</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;

{
  /* <Route exact path="/community/login" component={LoginForm} />
<Route exact path="/community/signup" component={SignUp} />
<Route exact path="/community/userinfo" component={UserInfo} />
<Route path="/community/:cate" component={ContentForm} /> */
}
