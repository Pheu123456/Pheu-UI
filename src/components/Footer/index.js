import { styled } from "styled-components";

const FooterContainer = styled("div")`

  .section-p1{
    padding: 40px 80px;
}
`;

const Footer = () => {
  return (
    <footer class="section-p1">
    <div class="col">
      <img src="assets/pheugearlogo.png" alt=""/>
      <h4>Liên hệ</h4>
      <p><strong>Địa chỉ:</strong> Trường đại học Công Nghệ Thông Tin </p>
      <p><strong>Phone:</strong> 0932048656 </p>
      <p><strong>Giờ làm việc:</strong> 7:30am - 4:15pm </p>
      <div class="follow">
        <h4>Theo dõi chúng tôi</h4>
        <div class="icon">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
    </div>
    <div class="col">
      <h4>About</h4>
      <a href="#">Thông tin trang web</a>
      <a href="#">Phương tiện vận chuyển</a>
      <a href="#">Quyển riêng tư</a>
      <a href="#">Các điều khoản</a>
      <a href="#">Số điện thoại</a>
    </div>

    <div class="col">
      <h4>Tài khoản của tôi</h4>
      <a href="#">Đăng nhập</a>
      <a href="#">Thông tin ngân hàng</a>
      <a href="#">Danh sách đơn hàng</a>
      <a href="#">Lịch sử giao dịch</a>
      <a href="#">Hỗ trợ</a>
    </div>

    <div class="col install">
      <h4>Ứng dụng</h4>
      <p>Tải từ App Store hay Google Play</p>
      <div class="row">
        <img src="assets/app.jpg" alt=""/>
        <img src="assets/play.jpg" alt=""/> 
      </div>
      <p>Các đơn vị giao dịch</p>
      <img src="assets/pay.png" alt=""/>
    </div>
  </footer>
  );
};

export default Footer;
