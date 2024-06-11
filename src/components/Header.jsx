import { Link, NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="header__menu">
          <ul>
            <li title="Hello">
              <NavLink to="/">Trang Chủ</NavLink>
            </li>
            <li>
              <NavLink to="/about">Giới Thiệu</NavLink>
              <ul>
                <li>
                  <NavLink to="/about/aboutUs">Về Chúng Tôi</NavLink>
                </li>
                <li>
                  <NavLink to="/about/aboutHistory">Lịch Sử Hình Thành</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/product">Sản Phẩm</NavLink>
            </li>
            <li>
              <NavLink to="/articles">Bài Viết</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__account">
          <Link to="/login" className="button">
            Đăng Nhập
          </Link>
          <Link to="/register" className="button button--outline">
            Đăng Ký
          </Link>
        </div>
      </header>
    </>
  )
}