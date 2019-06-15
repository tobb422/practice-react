import React from "react"
import Link from "next/link"

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const headerStyle = {
  marginRight: 20
}

const Header = _ => (
  <div>
    <Link href="/">
      <a style={headerStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={headerStyle}>About</a>
    </Link>
  </div>
);

const Layout = props => (
  <div style={layoutStyle}>
    <Header/>
    {props.content}
  </div>
);


export default Layout;
