import React from "react";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function Productyaemiko(){
    return(
        <div>

    

        <div class="main-product">
         
        <div class = "card-wrapper">
          <div class = "card">

            <div class = "product-imgs">
              <div class = "img-display">
                <div class = "img-showcase">
                  <img src = "assets/product/yaemiko.jpg" alt = "shoe image"/>
                  <img src = "assets/product/yaemiko2.jpg" alt = "shoe image"/>
                  <img src = "assets/product/yaemiko3.jpg" alt = "shoe image"/>
                  <img src = "assets/product/yaemiko4.jpg" alt = "shoe image"/>
                </div>
              </div>
              <div class = "img-select">
                <div class = "img-item">
                  <a href = "#" data-id = "1">
                    <img src = "assets/product/yaemiko.jpg" alt = "shoe image"/>
                  </a>
                </div>
                <div class = "img-item">
                  <a href = "#" data-id = "2">
                    <img src = "assets/product/yaemiko2.jpg" alt = "shoe image"/>
                  </a>
                </div>
                <div class = "img-item">
                  <a href = "#" data-id = "3">
                    <img src = "assets/product/yaemiko3.jpg" alt = "shoe image"/>
                  </a>
                </div>
                <div class = "img-item">
                  <a href = "#" data-id = "4">
                    <img src = "assets/product/yaemiko4.jpg" alt = "shoe image"/>
                  </a>
                </div>
              </div>
            </div>

            <div class = "product-content">
              <h2 class = "product-title">Yae Miko Keycaps</h2>
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
                <p class = "last-price">Giá cũ: <span>12.000.000 đ</span></p>
                <p class = "new-price">Giá mới: <span>600.000 đ(5%)</span></p>
              </div>
    
              <div class = "product-detail">
                <h2>Thông tin chi tiết: </h2>
                <p>👑Chào mừng bạn đến 🔰Skyzy🔰 Keycap House👑
    
                    🛒 Trong kho
                    🚚 Vận chuyển nhanh (2 ngày làm việc) 💯
                    📦【Kiểm Tra mặt hàng trước khi giao hàng và đóng gói đúng cách để đảm bảo bạn nhận được hàng trong tình trạng tốt】
                    💓 Nếu bạn thích cửa hàng của chúng tôi, hãy theo dõi cửa hàng của chúng tôi để nhận được nhiều giảm giá hơn trong tương lai!! 💖
                    💌Mọi thắc mắc vui lòng click "Trò chuyện", chúng tôi sẽ phục vụ tận tình
                    💖 Của bạn ⭐️⭐️⭐️⭐️⭐️ Năm sao là nguồn động viên và ủng hộ lớn nhất của chúng tôi! Cảm ơn bạn đã đến!</p>
                <p>Lưu ý:</p>
                <p>🌈Mô hình: Yae Miko Keycaps
                </p>
                <p>🌈Chất liệu: PBT
                </p>
                <p>🌈Số lượng phím: 133 phím
                </p>
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
                
                <button type = "button" class = "btn" ><Link to='/checkout' style={{color: 'white'}}>Mua ngay</Link></button>
                  
                
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
                <a href="productyaemiko.html"><i class="fal fa-shopping-cart cart"></i></a>
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

export default Productyaemiko;