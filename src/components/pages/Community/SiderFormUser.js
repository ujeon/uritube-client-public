import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import SiderContents from './SiderContents';
import { getData } from '../../../util/getData';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderFormUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: 'main',
      userId: window.sessionStorage.user_id,
      userDatas: []
    };
  }

  async componentDidMount() {
    getData('titles', result => {
      this.setState({ data: result });
    });
    getData(`users/${this.state.userId}/favorite`, userDatas => {
      this.setState({ userDatas });
    });
  }
  render() {
    const { data, userDatas } = this.state;
    const userFav = userDatas.Favorites;
    console.log(userFav);
    return (
      <div>
        <Sider width={200} style={{ background: '#fff' }}>
          {data.map(el => (
            <SiderContents
              key={el.id}
              title={el.name}
              contentsList={el.categories.map(category => (
                <p>
                  <Link to={`${category.id}`}>{category.name}</Link>
                </p>
              ))}
            />
          ))}
          <Menu
            mode="inline"
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {userFav === undefined || userFav.length === 0 ? (
              <SubMenu title={<span>즐겨찾기</span>}>
                <Menu.Item>즐겨찾기를 추가해 보세요</Menu.Item>
              </SubMenu>
            ) : (
              <SubMenu title={<span>즐겨찾기</span>}>
                {userFav.map((el, idx) => (
                  <Menu.Item key={idx}>{el}</Menu.Item>
                ))}
              </SubMenu>
            )}
          </Menu>
        </Sider>
      </div>
    );
  }
}
export default SiderFormUser;
