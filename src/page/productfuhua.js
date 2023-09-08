import React from "react";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import './productall.css';

function Productfuhua(){
    return(
    <div>



    <div class="main-product">
      
    <div class = "card-wrapper">
      <div class = "card">

        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <img src = "assets/fuhua.jpg" alt = "shoe image"/>
              <img src = "assets/fuhua2.jpg" alt = "shoe image"/>
              <img src = "assets/fuhua3.jpg" alt = "shoe image"/>
              <img src = "assets/fuhua4.jpg" alt = "shoe image"/>
            </div>
          </div>
          <div class = "img-select">
            <div class = "img-item">
              <a href = "#" data-id = "1">
                <img src = "assets/fuhua.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "2">
                <img src = "assets/fuhua2.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "3">
                <img src = "assets/fuhua3.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "4">
                <img src = "assets/fuhua4.jpg" alt = "shoe image"/>
              </a>
            </div>
          </div>
        </div>

        <div class = "product-content">
          <h2 class = "product-title">Genshin Impact Fuhua Keycap</h2>
          <a href = "#" class = "product-link">visit store</a>
          <div class = "product-rating">
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <span>5(21)</span>
          </div>

          <div class = "product-price">
            <p class = "last-price">Giá cũ: <span>120.000.000 đ</span></p>
            <p class = "new-price">Giá mới: <span>96.600.000 đ(5%)</span></p>
          </div>

          <div class = "product-detail">
            <h2>Thông tin chi tiết: </h2>
            <p>👑Chào mừng bạn đến 🔰Skyzy🔰 Keycap House👑
 
                🛒 Hàng có sẵn
                🚚 Giao hàng nhanh 💯
                📦【Kiểm Tra các mặt hàng trước khi giao hàng và đóng gói đúng cách để đảm bảo rằng hàng hóa bạn nhận được còn nguyên vẹn】
                💓Nếu bạn thích cửa hàng của chúng tôi, hãy chú ý đến cửa hàng của chúng tôi!! 💖
                💌Nếu bạn có bất kỳ câu hỏi nào, vui lòng nhấp vào "trò chuyện" và chúng tôi sẽ sẵn lòng giúp bạn
                💖⭐️⭐️⭐️⭐️⭐️ Năm sao của bạn là nguồn động viên và hỗ trợ lớn nhất của chúng tôi! Cảm ơn bạn đã đến!</p>
            <p>Lưu ý:</p>
            <p>🌈Model: Nắp phím chủ đề Keli</p>
            <p>🌈Chất liệu: PBT</p>
            <p>🌈Số phím: 108 phím</p>
            <ul>
              <li>Khu vưc giao hàng: <span>Toàn Việt Nam</span></li>
              <li>Phí vận chuyển: <span>Free</span></li>
            </ul>
          </div>
          <form action="/action_page.php">
            <label for="favcolor">Chọn loại switch bạn muốn đặt:</label>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000"/>
          </form>

          <div class = "purchase-info">
            
            <input type = "number" min = "0" value = "1"/>
             
            <button id="myBtn"  type = "button" class = "btn">
          
              Thêm vào giỏ hàng <i class = "fas fa-shopping-cart"></i>
            </button>
            <div id="myModal" class="modal">


              <div class="modal-content">
                <span class="close">&times;</span>
                <p>Đơn hàng đã được thêm vào giỏ hàng</p>
              </div>
            
            </div>
            
            <button type = "button" class = "btn" > Mua ngay</button>
              
            
          </div>

          <div class = "social-links">
            <p>Share At: </p>
            <a href = "#">
              <i class = "fab fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-twitter"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <section class="space">
      <section id="product1" class="section-p1">
      <h2>Sản Phẩm có liên quan</h2>
      <p>chọn bàn phím phù hợp với gu của bạn</p>
      <div class="pro-container">
        <div class="pro">
            <img src="assets/Mt. Fuji Cherry Blossom.png" atl=""/>
            <div class="des">
              <span>Keycab</span>
              <h5>Keycap Mt. Fuji Cherry Blossom</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>   
                <i class="fas fa-star"></i>
              </div>
              <h4>25,900,000đ</h4>
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
          </div>
          <div class="pro">
            <img src="assets/nahida.png" atl=""/>
            <div class="des">
              <span>Keycab</span>
              <h5>Keycap Genshin Impact nhân vật Nahida</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>   
                <i class="fas fa-star"></i>
              </div>
              <h4>15.900,000đ</h4>
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
          </div>
          <div class="pro">
            <img src="assets/sakura ink.jpg" atl=""/>
            <div class="des">
              <span>Keycab</span>
              <h5>Keycap Japan Sakura Ink</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>   
                <i class="fas fa-star"></i>
              </div>
              <h4>24,900,000đ</h4>
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
          </div>
          <div class="pro">
            <img src="assets/Blue Cats Theme Keycap Set.jpg" atl=""/>
            <div class="des">
              <span>Keycab</span>
              <h5>Keycap Blue Cats Theme</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>   
                <i class="fas fa-star"></i>
              </div>
              <h4>28,900,000đ</h4>
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
          </div>
      </div>
      </section>
    </section>
    
    </div>
    )
}

export default Productfuhua;