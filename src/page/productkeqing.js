  import React from "react";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";


function Productkeqing(){
    return(
  <div>



    <div className="main-product">
      
    <div className = "card-wrapper">
      <div className = "card">

        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img src = "public/assets/product/keqing1.jpg" alt = "shoe image"/>
              <img src = "assets/product/keqing2.jpg" alt = "shoe image"/>
              <img src = "assets/product/keqing3.jpg" alt = "shoe image"/>
              <img src = "assets/product/keqing4.jpg" alt = "shoe image"/>
            </div>
          </div>
          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">
                <img src = "assets/product/keqing1.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">
                <img src = "assets/product/keqing2.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">
                <img src = "assets/product/keqing3.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "4">
                <img src = "assets/product/keqing4.jpg" alt = "shoe image"/>
              </a>
            </div>
          </div>
        </div>

        <div className = "product-content">
          <h2 className = "product-title">Keycap nhân vật Keqing</h2>
          <a href = "#" className = "product-link">visit store</a>
          <div className = "product-rating">
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <span>5(21)</span>
          </div>

          <div className = "product-price">
            <p className = "last-price">Giá cũ: <span>1.000.000 đ</span></p>
            <p className = "new-price">Giá mới: <span>600.000 đ(5%)</span></p>
          </div>

          <div className = "product-detail">
            <h2>Thông tin chi tiết: </h2>
            <p>Xin chào, Chào mừng Mathew Shop (^ ※) Chúng tôi là người bán thiết bị ngoại vi máy tính chuyên nghiệp 

                100% đảm bảo sản phẩm gốc! 
                
                Giá bán buôn trực tiếp tại nhà máy
                
                Chúng tôi chỉ bán Sản phẩm chất lượng tốt
                
                Kiểm tra chất lượng trước khi xuất xưởng
                
                Dropshipper / Đại lý / Người bán lại được hoan nghênh
                
                Sự hài lòng của khách hàng luôn là mối quan tâm của chúng tôi và ưu tiên hàng đầu. Thêm vào đó, chúng tôi đảm bảo khách hàng của chúng tôi sẽ nhận được bưu kiện khá sớm nhất có thể.  </p>
            <p>Lưu ý:</p>
            <p>1. Đây là keycap, không phải bàn phím!!!!</p>
            <p>2. Chất liệu: PBT</p>
            <p>3. Số phím: 139 phím</p>
            <ul>
              <li>Khu vưc giao hàng: <span>Toàn Việt Nam</span></li>
              <li>Phí vận chuyển: <span>Free</span></li>
            </ul>
          </div>
          <form action="/action_page.php">
            <label for="favcolor">Chọn loại switch bạn muốn đặt:</label>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000"/>
          </form>

          <div className = "purchase-info">
            
            <input type = "number" min = "0" value = "1"/>
             
            <button id="myBtn"  type = "button" className = "btn">
          
              Thêm vào giỏ hàng <i className = "fas fa-shopping-cart"></i>
            </button>
            <div id="myModal" className="modal">


              <div className="modal-content">
                <span className="close">&times;</span>
                <p>Đơn hàng đã được thêm vào giỏ hàng</p>
              </div>
            
            </div>
            
            <button type = "button" className = "btn" ><Link to='/checkout' style={{color: 'white'}}>Mua ngay</Link></button>
              
            
          </div>

          <div className = "social-links">
            <p>Share At: </p>
            <a href = "#">
              <i className = "fab fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i className = "fab fa-twitter"></i>
            </a>
            <a href = "#">
              <i className = "fab fa-instagram"></i>
            </a>
            <a href = "#">
              <i className = "fab fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i className = "fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <section className="space">
      <section id="product1" className="section-p1">
      <h2>Sản Phẩm có liên quan</h2>
      <p>chọn bàn phím phù hợp với gu của bạn</p>
      <div className="pro-container">
        <div className="pro">
            <img src="assets/Mt. Fuji Cherry Blossom.png" atl=""/>
            <div className="des">
              <span>Keycab</span>
              <h5>Keycap Mt. Fuji Cherry Blossom</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>   
                <i className="fas fa-star"></i>
              </div>
              <h4>25,900,000đ</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="assets/nahida.png" atl=""/>
            <div className="des">
              <span>Keycab</span>
              <h5>Keycap Genshin Impact nhân vật Nahida</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>   
                <i className="fas fa-star"></i>
              </div>
              <h4>15.900,000đ</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="assets/sakura ink.jpg" atl=""/>
            <div className="des">
              <span>Keycab</span>
              <h5>Keycap Japan Sakura Ink</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>   
                <i className="fas fa-star"></i>
              </div>
              <h4>24,900,000đ</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="assets/Blue Cats Theme Keycap Set.jpg" atl=""/>
            <div className="des">
              <span>Keycab</span>
              <h5>Keycap Blue Cats Theme</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>   
                <i className="fas fa-star"></i>
              </div>
              <h4>28,900,000đ</h4>
            </div>
            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
      </div>
      </section>
    </section>
    
    </div>
    )
}

export default Productkeqing;