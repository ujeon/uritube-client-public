import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const HeaderFormUser = () => {
  const userId = 10;
  const userName = "Ring";
  return (
    <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item
          key="0"
          style={{
            display: "static",
            alignContent: "space-between"
          }}
        >
          Uritube
        </Menu.Item>
        <Menu.Item
          key="1"
          style={{
            display: "static",
            justifyContent: "space-between",
            alignSelf: "center"
          }}
        >
          title
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            display: "static",
            alignContent: "space-between",
            float: "right"
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderFormUser;

/* <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="0">
          <Link to="/">Uritube</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/community/1/1">Title</Link>
        </Menu.Item>
        <SubMenu key="sub1" title={<span>{userName}</span>}>
          <Menu.Item key="1">
            <Link to={`/community/userinfo/${userId}`}>My Page</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`/community/usercomments/${userId}`}>내가 쓴 댓 글 </Link>
          </Menu.Item>
          <Menu.Item key="3">
            signup을 false 로 구현 해야함 
            <Link to="/">로그아웃</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
<<<<<<< HEAD
    </Header>
  );
};

export default HeaderFormUser;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Layout, Menu } from "antd";
// const { Header } = Layout;
// const { SubMenu } = Menu;

// const HeaderFormUser = () => {
//   return (
//     <Header className="header">
//       <div className="logo" />
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={["2"]}
//         style={{ lineHeight: "64px" }}
//       >
//         <Menu.Item key="0">Uritube</Menu.Item>
//         <Menu.Item key="1">title</Menu.Item>
//         <SubMenu key="sub1" title={<span>이은지 님</span>}>
//           <Menu.Item key="1">
//             <Link to="/">My Page</Link>
//           </Menu.Item>
//           <Menu.Item key="2">내가 쓴 댓 글</Menu.Item>
//           <Menu.Item key="3">
//             {/* signup을 false 로 구현 해야함 */}
//             <Link to="/">로그아웃</Link>
//           </Menu.Item>
//         </SubMenu>
//       </Menu>
//     </Header>
//   );
// };

// export default HeaderFormUser;
=======
    </Header> */
>>>>>>> 4443845647a35ca0b287ab5e2861d314b2892335
