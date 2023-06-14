import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";

const Header = () => {
  return (
    <header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/inversiones">Inversiones</Link>
        </Menu.Item>
        {/* Agrega aquí más elementos <Menu.Item> para otros links en el header */}
      </Menu>
    </header>
  );
};

const Footer = () => {
  return <footer>{/* Agrega aquí el contenido del footer */}</footer>;
};

export { Header, Footer };
