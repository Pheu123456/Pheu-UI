import React from "react";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "styled-components";


const product = styled("div")`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}
body{
    line-height: 1.5;
}
.card-wrapper{
    max-width: 1100px;
    margin: 0 auto;
}
img{
    width: 100%;
    display: block;
}
.img-display{
    overflow:auto;
}
.img-showcase{
    display: flex;
    width: 100%;
    transition: all 0.5s ease;
}
.img-showcase img{
    min-width: 100%;
}
.img-select{
    display: flex;
}
.img-item{
    margin: 0.3rem;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3){
    margin-right: 0;
}
.img-item:hover{
    opacity: 0.8;
}
#rectangle {
    height: 50px;
    width: 100px;
    background-color: gray;
}
.product-content{
    margin-top: 0px;
    padding: 2rem 1rem;
}
.product-title{
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 1rem 0;
}
.product-title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 80px;
    background: #12263a;
}
.product-link{
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #256eff;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
}
.product-link:hover{
    opacity: 0.9;
}
.product-rating{
    color: #ffc107;
}
.product-rating span{
    font-weight: 600;
    color: #252525;
}
.product-price{
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
}
.product-price span{
    font-weight: 400;
}
.last-price span{
    color: #f64749;
    text-decoration: line-through;
}
.new-price span{
    color: #256eff;
}
.product-detail h2{
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
}
.product-detail p{
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
}
.product-detail ul{
    margin: 1rem 0;
    font-size: 0.9rem;
}
.product-detail ul li{
    margin: 0;
    list-style: none;
    background: url(https://cdn.discordapp.com/attachments/1149593699857207326/1149602554834075678/shopeelogo.png) left center no-repeat;
    background-size: 18px;
    padding-left: 1.7rem;
    margin: 0.4rem 0;
    font-weight: 600;
    opacity: 0.9;
}
.product-detail ul li span{
    font-weight: 400;
}
.purchase-info{
    margin: 1.5rem 0;
}
.purchase-info input,
.purchase-info .btn{
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
    
}
.purchase-info input{
    width: 60px;
}
.purchase-info .btn{
    cursor: pointer;
    color: #fff;
}
.purchase-info .btn:first-of-type{
    background: #256eff;
}
.purchase-info .btn:last-of-type{
    background: #f64749;
}
.purchase-info .btn:hover{
    opacity: 0.9;
}
.social-links{
    display: flex;
    align-items: center;
}
.social-links a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #000;
    border: 1px solid #000;
    margin: 0 0.2rem;
    border-radius: 50%;
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.5s ease;
}
.social-links a:hover{
    background: #000;
    border-color: transparent;
    color: #fff;
}


@media screen and (min-width: 992px){
    .space
    {
        margin-top: 200px;

    }
    .product-imgs{
      margin-top: 150px;

    }
    .product-content{
        margin-top: 250px;
    }
    .card{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }
    .card-wrapper{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-imgs{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .product-content{
        padding-top: 0;
    }
}
/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  #rating {
    font-family: Arial;
    margin: 0 auto; /* Center website */
    max-width: 800px; /* Max width */
    padding: 20px;
  }
  
  .heading {
    font-size: 25px;
    margin-right: 25px;
  }
  
  .fa {
    font-size: 25px;
  }
  
  .checked {
    color: orange;
  }
  
  /* Three column layout */
  .side {
    float: left;
    width: 15%;
    margin-top:10px;
  }
  
  .middle {
    margin-top:10px;
    float: left;
    width: 70%;
  }
  
  /* Place text to the right */
  .right {
    text-align: right;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* The bar container */
  .bar-container {
    width: 100%;
    background-color: #f1f1f1;
    text-align: center;
    color: white;
  }
  
  /* Individual bars */
  .bar-5 {width: 60%; height: 18px; background-color: #04AA6D;}
  .bar-4 {width: 30%; height: 18px; background-color: #2196F3;}
  .bar-3 {width: 10%; height: 18px; background-color: #00bcd4;}
  .bar-2 {width: 4%; height: 18px; background-color: #ff9800;}
  .bar-1 {width: 15%; height: 18px; background-color: #f44336;}
  
  /* Responsive layout - make the columns stack on top of each other instead of next to each other */
  @media (max-width: 400px) {
    .side, .middle {
      width: 100%;
    }
    .right {
      display: none;
    }
  }
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap%27');
  .center{
    position: relative;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .center .stars{
    height: 150px;
    width: 500px;
    text-align: center;
  }
  .stars input{
    display: none;
  }
  .stars label{
    float: right;
    font-size: 100px;
    color: lightgrey;
    margin: 0 5px;
    text-shadow: 1px 1px #bbb;
  }
  .stars label:before{
    content: '★';
  }
  .stars input:checked ~ label{
    color: gold;
    text-shadow: 1px 1px #c60;
  }
  .stars:not(:checked) > label:hover,
  .stars:not(:checked) > label:hover ~ label{
    color: gold;
  }
  .stars input:checked > label:hover,
  .stars input:checked > label:hover ~ label{
    color: gold;
    text-shadow: 1px 1px goldenrod;
  }
  .stars .result:before{
    position: absolute;
    content: "";
    width: 100%;
    left: 50%;
    transform: translateX(-47%);
    bottom: -30px;
    font-size: 30px;
    font-weight: 500;
    color: gold;
    font-family: 'Poppins', sans-serif;
    display: none;
  }
  .stars input:checked ~ .result:before{
    display: block;
  }
`;

function Productganyu(){
    return(
        <product>
        <div>

    

        <div class="main-product">
          
        <div class = "card-wrapper">
          <div class = "card">

            <div class = "product-imgs">
              <div class = "img-display">
                <div class = "img-showcase">
                  <img src = "assets/ganyu.jpg" alt = "shoe image"/>
                  <img src = "assets/ganyu2.jpg" alt = "shoe image"/>
                  <img src = "assets/ganyu3.jpg" alt = "shoe image"/>
                  <img src = "assets/ganyu4.jpg" alt = "shoe image"/>
                </div>
              </div>
              <div class = "img-select">
                <div class = "img-item">
                  <a href = "#" data-id = "1">
                    <img src = "assets/ganyu.jpg" alt = "shoe image"/>
                  </a>
                </div>
                <div class = "img-item">
                  <a href = "#" data-id = "2">
                    <img src = "assets/ganyu2.jpg" alt = "shoe image"/>
                  </a>
                </div>
                <div class = "img-item">
                  <a href = "#" data-id = "3">
                    <img src = "assets/ganyu3.jpg" alt = "shoe image"/>
                  </a>
                </div>
                <div class = "img-item">
                  <a href = "#" data-id = "4">
                    <img src = "assets/ganyu4.jpg" alt = "shoe image"/>
                  </a>
                </div>
              </div>
            </div>

            <div class = "product-content">
              <h2 class = "product-title">Keycap Ganyu</h2>
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
                <p class = "last-price">Giá cũ: <span>100.000.000 đ</span></p>
                <p class = "new-price">Giá mới: <span>50.000.000 đ(50%)</span></p>
              </div>
    
              <div class = "product-detail">
                <h2>Thông tin chi tiết: </h2>
                <p>🛒 Spot
                    🚚 Giao hàng nhanh chóng (2 ngày làm việc) 💯
                    📦 【Kiểm tra các mặt hàng trước khi giao hàng và đóng gói chúng đúng cách để đảm bảo rằng hàng hóa bạn nhận được còn nguyên vẹn】
                    💓Nếu bạn thích shop của chúng tôi, hãy chú ý đến shop của chúng tôi để được giảm giá nhiều hơn trong tương lai! ! 💖
                    💌Nếu có thắc mắc vui lòng bấm "chat" chúng tôi sẽ sẵn lòng trợ giúp bạn
                    💖Của bạn ⭐️⭐️⭐️⭐️⭐️ năm sao là nguồn động viên và hỗ trợ lớn nhất của chúng tôi! cảm ơn bạn đã đến!</p>
                <p>Lưu ý:</p>
                <p>🌈Model: Keycap chủ đề Genshin Impact Ganyu            </p>
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
      </product>
    )
}

export default Productganyu;