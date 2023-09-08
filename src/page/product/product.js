import React from "react";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function Product(){
    return(
       <div>


    <div className="main-product">
   
    <div className = "card-wrapper">
      <div className = "card">

        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img src = "public/assets/sakura_keycap1.jpg" alt = "shoe image"/>
              <img src = "assets/sakura_keycap2.jpg" alt = "shoe image"/>
              <img src = "assets/sakura_keycap3.jpg" alt = "shoe image"/>
              <img src = "assets/sakura_keycap4.jpg" alt = "shoe image"/>
            </div>
          </div>
          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">
                <img src = "assets/sakura_keycap1.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">
                <img src = "assets/sakura_keycap2.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">
                <img src = "assets/sakura_keycap3.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "4">
                <img src = "assets/sakura_keycap4.jpg" alt = "shoe image"/>
              </a>
            </div>
          </div>
        </div>
      
        <div className = "product-content">
          <h2 className = "product-title">Cherry Blossom Sakura Keycaps</h2>
          <a href = "#" className = "product-link">visit nike store</a>
          <div className = "product-rating">
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div className = "product-price">
            <p className = "last-price">Old Price: <span>$257.00</span></p>
            <p className = "new-price">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div className = "product-detail">
            <h2>about this item: </h2>
            <p>★【Make the Keyboard Unique】 A great choice to DIY your mechanical keyboard</p>
            <p>★【Compatible with Most Mechanical Keyboards】 Coming with a full set of 130keycaps, which works with most 61/87/104 Cherry MX Switches Mechanical Gaming Keyboard and Outemu, Kailh, and Gateron switches and fit most standard ANSI keyboards.</p>
            <p>★【High-quality PBT Material】 keycaps are equipped with high-quality PBT keycaps and anti-grease coating, providing first-className durability and excellent typing feeling. Zero gloss matte surface will last longer than traditional keycaps.</p>
            <p>Features:</p>
            <p>1. This 130-keys keycap set is XDA profile</p>
            <p>2. The keycap is made of durable PBT material</p>
            <p>3. It can be used for most Cherry MX, Gateron, Kailh and all other MX switches keyboards.</p>
            <ul>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
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
      <h2>Sản Phẩm Bán Chạy Năm 2023</h2>
      <p>chọn bàn phím phù hợp với gu của bạn</p>
      <div className="pro-container">
        <div className="pro">
          <img src="assets/sanpham2.jpg" atl=""/>
          <div className="des">
            <span>Keycab</span>
            <h5>Keycap Genshin Impact nhân vật Klee</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>   
              <i className="fas fa-star"></i>
            </div>
            <h4>9,900,000đ</h4>
          </div>
          <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
        </div>
        <div className="pro">
          <img src="assets/kafka.jpg" atl=""/>
          <div className="des">
            <span>Keycab</span>
            <h5>Keycap Genshin Impact nhân vật Kafka</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>   
              <i className="fas fa-star"></i>
            </div>
            <h4>9,900,000đ</h4>
          </div>
          <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
        </div>
        <div className="pro">
          <img src="assets/yaemiko4.jpg" atl=""/>
          <div className="des">
            <span>Keycab</span>
            <h5>Keycap Genshin Impact nhân vật Yeamiko</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>   
              <i className="fas fa-star"></i>
            </div>
            <h4>9,900,000đ</h4>
          </div>
          <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
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
            <h4>9,900,000đ</h4>
          </div>
          <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
        </div>
      </div>
      </section>
    </section>
    
    </div>
    )
}

export default Product;