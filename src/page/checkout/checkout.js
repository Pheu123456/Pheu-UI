import * as React from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../container/store";
import { checkoutAPI } from "../../api/Auth";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import './checkout.css';

function Checkout(){
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const history = useHistory();

  const [authData, setAuthData] = React.useState({
    full_name: {
      value: "",
      isError: false,
      errMessage: "Phải điền đầy đủ họ tên",
    },
    email: {
      value: "",
      isError: false,
      errMessage: "Phải điền đầy đủ email",
    },
    address: {
        value: "",
        isError: false,
        errMessage: "Phải điền địa chỉ",
    },
    city: {
      value: "",
      isError: false,
      errMessage: "Phải điền thành phố",
  },
  phone: {
    value: "",
    isError: false,
    errMessage: "Phải điền số điện thoại",
},
  zip: {
    value: "",
    isError: false,
    errMessage: "Phải điền zip",
},
  name_on_card: {
    value: "",
    isError: false,
    errMessage: "Phải điền đầy đủ họ tên",
},
  credit_card_number: {
    value: "",
    isError: false,
    errMessage: "Phải điền đầy đủ số tài khoản",
},

    exp_month: {
      value: "",
      isError: false,
      errMessage: "Phải điền tháng",
},
ccv: {
  value: "",
  isError: false,
  errMessage: "Phải điền đầy đủ ccv",
},
exp_year: {
  value: "",
  isError: false,
  errMessage: "Phải điền đầy đủ năm",
},
  });

  React.useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth, history]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const full_name = data.get("full_name");
    const email = data.get("email");
    const address = data.get("address");
    const city = data.get("city");
    const phone = data.get("phone");
    const zip = data.get("zip");
    const name_on_card = data.get("name_on_card");
    const credit_card_number = data.get("credit_card_number");
    const exp_month = data.get("exp_month");
    const ccv = data.get("ccv");
    const exp_year = data.get("exp_year");

    if (full_name !== "" && email !== "" && address !== "" && city !== "" && phone !== "" && zip !== "" && name_on_card !== "" && credit_card_number !== "" && exp_month !== "" && ccv !== "" && exp_year !== "") {
        try{
            const response = await checkoutAPI({full_name, email,address,city,phone,zip,name_on_card,credit_card_number,exp_month,ccv,exp_year})
            if(response.result === "ok"){
                alert("Success!")
                setAuthData({
                  full_name: {
                    value: "",
                    isError: false,
                    errMessage: "Phải điền đầy đủ họ tên",
                  },
                  email: {
                    value: "",
                    isError: false,
                    errMessage: "Phải điền đầy đủ email",
                  },
                  address: {
                      value: "",
                      isError: false,
                      errMessage: "Phải điền địa chỉ",
                  },
                  city: {
                    value: "",
                    isError: false,
                    errMessage: "Phải điền thành phố",
                },
                phone: {
                  value: "",
                  isError: false,
                  errMessage: "Phải điền số điện thoại",
              },
                zip: {
                  value: "",
                  isError: false,
                  errMessage: "Phải điền zip",
              },
                name_on_card: {
                  value: "",
                  isError: false,
                  errMessage: "Phải điền đầy đủ họ tên",
              },
                credit_card_number: {
                  value: "",
                  isError: false,
                  errMessage: "Phải điền đầy đủ số tài khoản",
              },
              
                  exp_month: {
                    value: "",
                    isError: false,
                    errMessage: "Phải điền tháng",
              },
              ccv: {
                value: "",
                isError: false,
                errMessage: "Phải điền đầy đủ ccv",
              },
              exp_year: {
                value: "",
                isError: false,
                errMessage: "Phải điền đầy đủ năm",
              }
                  })
                return;
            }
        }catch(error){
            if(error.response.data){
                alert(error.response.data.error)
                console.log(error)
                return;
            }
        }
    }
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    const newAuthData = {
      ...authData,
      [name]: {
        ...authData[name],
        value: value,
      },
    };
    setAuthData(newAuthData);
  };

  const checkAuthDataValid = (event) => {
    const { name, value } = event.target;
    if (value === "") {
      const newAuthData = {
        ...authData,
        [name]: {
          ...authData[name],
          isError: true,
        },
      };
      setAuthData(newAuthData);
    }
  };

  const onFocusHandler = (event) => {
    const { name } = event.target;
    const newAuthData = {
      ...authData,
      [name]: {
        ...authData[name],
        isError: false,
      },
    };
    setAuthData(newAuthData);
  };
    return(
        <div>
        
            <h2>Form liên kết tài khoản ngân hàng</h2>
<p>vui lòng điền đầy đủ thông tin bên dưới</p>
<div className="row">
  <div className="col-75">
    <div className="container">
    <form
        className="modal-content animate"
        method="post"
        onSubmit={handleSubmit}
      >
      
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="full_name"><i className="fa fa-user"></i> Full Name</label>
            <input 
              type="text" 
              id="full_name" 
              name="full_name" 
              placeholder="Tên đầy đủ"
              required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.username.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
            />
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              placeholder="phu@example.com"
              required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.username.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
            />
            <label for="adress"><i className="fa fa-address-card-o"></i> Address</label>
            <input 
              type="text" 
              id="adress" 
              name="address" 
              placeholder="542 W. 15th Street"
              required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.username.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
            />
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              placeholder="New York"
              required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.username.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
            />

            <div className="row">
              <div className="col-50">
                <label for="zip">Zip</label>
                <input 
                  type="text" 
                  id="zip" 
                  name="zip" 
                  placeholder="10001"
                  required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.username.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
            />
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{ color:'navy' }}></i>
              <i className="fa fa-cc-amex" style={{color:'blue'}}></i>
              <i className="fa fa-cc-mastercard" style={{color:'red'}}></i>
              <i className="fa fa-cc-discover" style={{color:'orange'}}></i>
            </div>
            <label for="name_on_card">Name on Card</label>
            <input 
              type="text" 
              id="name_on_card" 
              name="name_on_card" 
              placeholder="John More Doe"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(authData.username.errMessage)
              }
              onInput={(F) => F.target.setCustomValidity("")}/>
            <label for="credit_card_number">Credit card number</label>
            <input 
              type="text" 
              id="credit_card_number" 
              name="cardnumber" 
              placeholder="1111-2222-3333-4444"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(authData.username.errMessage)
              }
              onInput={(F) => F.target.setCustomValidity("")}
              />
            <label for="exp_month">Exp Month</label>
            <input 
              type="text" 
              id="exp_month" 
              name="exp_month" 
              placeholder="September"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity(authData.username.errMessage)
              }
              onInput={(F) => F.target.setCustomValidity("")}
              />
            <div className="row">
              <div className="col-50">
                <label for="exp_year">Exp Year</label>
                <input 
                  type="text" 
                  id="exp_year" 
                  name="exp_year" 
                  placeholder="2018"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(authData.username.errMessage)
                  }
                  onInput={(F) => F.target.setCustomValidity("")}
                  />
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input 
                  type="text"   
                  id="cvv" 
                  name="cvv" 
                  placeholder="352"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(authData.username.errMessage)
                  }
                  onInput={(F) => F.target.setCustomValidity("")}
                  />
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <button type="submit">Submit</button> 
      </form>
    </div>
  </div>
  <div className="col-25">
    <div className="container">
      <h4>Cart <span className="price" style={{color:'black'}}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
      <p><a href="#">Product 1</a> <span className="price">$15</span></p>
      <p><a href="#">Product 2</a> <span className="price">$5</span></p>
      <p><a href="#">Product 3</a> <span className="price">$8</span></p>
      <p><a href="#">Product 4</a> <span className="price">$2</span></p>
      <hr/>
      <p>Total <span className="price" style={{color:'black'}}><b>$30</b></span></p>
    </div>
  </div>
</div>
</div>
    )
}

export default Checkout;