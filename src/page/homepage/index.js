import { styled } from "styled-components";
import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom"
const Container = styled("div")`   



  img {
    width: 100%;
    height: 100%;
  }

`;

const HomePage = () => {
  return (
    <div>

    <br/>

    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <div className="slideshow-container">
      
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src="assets/hutaokeyboard.jpg" style={{ width: '100%' }} />

        <div className="text">Hutao keyboard</div>
      </div>
      
      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="assets/keyboard2.jpg" style={{ width:'100%'}}/>
        <div className="text">Kit</div>
      </div>
      
      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="assets/keyboard4.jpg" style={{ width:'100%' }}/>
        <div className="text">Switch</div>
      </div>
      
      </div>
      <br/>
      
      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
      </div>
  </div>

  <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="assets/feature1.png" art=""/>
          <h6>Giao hàng miễn phí</h6>
        </div>
        <div className="fe-box">
          <img src="assets/feature2.jpg" art=""/>
          <h6>Đặt hàng trực tuyến</h6>
        </div>
        <div className="fe-box">
          <img src="assets/feature3.jpg" art=""/>
          <h6>Tiết kiệm</h6>
        </div>
        <div className="fe-box">
          <img src="assets/feature4.jpg" art=""/>
          <h6>Giảm giá</h6>
        </div>
        <div className="fe-box">
          <img src="assets/feature5.jpg" art=""/>
          <h6>Hỗ trợ 24/7</h6>
        </div>
      <div className="fe-box">
        <img src="assets/feature6.jpg" art=""/>
        <h6>Trao đổi</h6>
      </div>
  </section>

  <section id="product1" className="section-p1">
    <h2>Sản Phẩm Bán Chạy Năm 2023</h2>
    <p>chọn bàn phím phù hợp với gu của bạn</p>
    <div className="pro-container">
      <div className="pro">
        <img src="assets/sanpham1.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Genshin Impact nhân vật Keqing</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>9,900,000đ</h4>
        </div>
        <Link to='/productkeqing'><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/ganyukeyboard.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Genshin Impact nhân vật Ganyu</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
          </div>
          <h4>1,670,000đ</h4>
        </div>
        <Link to='/productganyu'><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/sanpham2.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Tổng hợp Keycap Custom giá rẻ, bán chạy tháng</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>12,900,000đ</h4>
        </div>
        <Link to='/productcustom'><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/sakura.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>JSJT Custom Keycap Keycaps 60 Percent</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>3,900,000đ</h4>
        </div>
        <Link to="/productcustom"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/hutao.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Genshin Impact nhân vật Hutao</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>14,900,000đ</h4>
        </div>
        <Link to="/producthutao"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/keycap_blossom.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Cherry Blossom Sakura  </h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>29,000,000đ</h4>
        </div>
        <Link to="/product"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/shenhe.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Shenhe Genshin Impact</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>59,000,000đ</h4>
        </div>
        <Link to="/productshenhe"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/yaemiko.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Genshin Impact Yae Miko</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>15,000,000đ</h4>
        </div>
        <Link to="/productyaemiko"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/klee.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Genshin Impact nhân vật Klee </h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>69,000,000đ</h4>
        </div>
        <Link to="/productklee"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/Kafka.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Star Rail Kafka</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>19,000,000đ</h4>
        </div>
        <Link to="/productkafka"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/HOS.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Honkai Impact Herrscher of Sentienc</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>96,000,000đ</h4>
        </div>
        <Link to="/productfuhua"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/yaemiko2.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Yae Sakura Kasumi</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>49,000,000đ</h4>
        </div>
        <Link to="/productyaemiko"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
    </div>
  </section>

  <section id="pagination">
    <div className="pagination">
      <a href="#">&laquo;</a>
      <a href="#"className="active">1</a>
      <a href="#" >2</a>
      <a href="#">&raquo;</a>
      </div>

  </section>

  <section id="banner" className="section-m1">
    <h4>Đại hạ giá</h4>
    <h2>Giảm tới<span> 70%</span> - cho các user mới tạo</h2>
    <button className="normal">Khám Phá</button>
  </section>

  <section id="product1" className="section-p1">
    <h2>Sản Phẩm</h2>
    <p>chọn bàn phím phù hợp với gu của bạn</p>
    <div className="pro-container">
      <div className="pro">
        <img src="assets/genga.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Gengar</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>500,900,000đ</h4>
        </div>
        <Link to="/productgengar"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/ganyukeyboard.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Genshin Impact nhân vật Ganyu</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
          </div>
          <h4>1,670,000đ</h4>
        </div>
        <Link to="/productganyu"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/sanpham2.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Tổng hợp Keycap Custom giá rẻ, bán chạy tháng</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>12,900,000đ</h4>
        </div>
        <Link to="/productcustom"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/sakura.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>JSJT Custom Keycap Keycaps 60 Percent</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>3,900,000đ</h4>
        </div>
        <Link to="/product"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/hutao.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Genshin Impact nhân vật Hutao</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>14,900,000đ</h4>
        </div>
        <Link to="/producthutao"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
      <div className="pro">
        <img src="assets/sanpham1.jpg" atl=""/>
        <div className="des">
          <span>Keycab</span>
          <h5>Keycap Genshin Impact nhân vật Keqing</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>   
            <i className="fas fa-star"></i>
          </div>
          <h4>900,000đ</h4>
        </div>
        <Link to="/product"><i className="fal fa-shopping-cart cart"></i></Link>
      </div>
    </div>
  </section>
  <section id="pagination">
    <div className="pagination">
      <a href="#">&laquo;</a>
      <a href="#"className="active">1</a>
      <a href="#" >2</a>
      <a href="#">&raquo;</a>
      </div>

  </section>

  <section id="sm-banner" className="section-p1">
    <div className="banner-box">
      <h4>Giảm giá cực sốc</h4>
      <h2>Mua 1 tặng 1</h2>
      <span>Keycap được đánh giá đẹp nhất năm 2023</span>
      <Link to="/productkafka">
      <button className="white">Tìm Hiểu</button>
    </Link>
    </div>
    <div className="banner-box banner-box2">
      <h4>Bộ Switch được tự do lựa chọn</h4>
      <h2>Tất cả các loại</h2>
      <span>Khi mua một bộ keycap bất kỳ</span>
      <button className="white">Tìm Hiểu</button>
    </div>
  </section> 
  <section id="banner3">
    <div className="banner-box">
      <h2>Mùa Hè Vui Vẻ</h2>
      <h3>Tặng các mã giảm giá giảm 20%</h3>
    </div>
    <div className="banner-box bannerbanner2">
      <h2>Có cơ hội nhận các mã giảm giá cực hot</h2>
      <h3>Tặng các mã giảm giá giảm 20%</h3>
    </div>
    <div className="banner-box bannerbanner3">
      <h2>Giao hàng toàn quốc</h2>
      <h3>Giao hàng không tính phí</h3>
    </div>
  </section>

      <section id="newsletter" className="section-p1 banner-box"> 
  <div className="newstext">
      <h4>Đăng nhập ngay nếu bạn là người mới</h4>
      <p>Để nhận những thông tin mới về các <span>mặc hàng giảm giá.</span>
      </p>
  </div>
  <div className="form">
    <input type="text" placeholder="Your email address"/>
    <button className="normal">Sign up</button>
  </div>
</section> 
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
    </div>
  );
};

export default HomePage;
