import React, { useState } from 'react';
import './Booking.css';
import Navbar from '../components/Navbar';

const Booking = ({ tour, onUpdateQuantity, onDeleteTour }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const handleSave = () => {
    onUpdateQuantity(tour.id, quantity);
  };

  const handleDeleteTour = () => {
    onDeleteTour(tour.id);
  };

  return (
    <div>
      <Navbar />
      <div className="cart">
        <div className="grid">
          <div className="container-cart">
            <div className="cart-body">
              <div className="cart-body-left">
                <table>
                  <thead>
                    <tr>
                      <th>Thông tin tour</th>
                      <th>Mô tả</th>
                      <th>Đơn giá</th>
                      <th>Số người tham gia:</th>
                      <th>Thao tác</th>
                      <th>Số tiền</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={tour.image_url} alt={tour.name} />
                      </td>
                      <td>{tour.name}</td>
                      <td>
                        <p>{tour.price.toLocaleString()} <sub>đ</sub></p>
                      </td>
                      <td>
                        <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
                      </td>
                      <td>
                        <span onClick={handleSave}>Lưu</span>
                      </td>
                      <td>
                        <p>{(tour.price * quantity).toLocaleString()} <sub>đ</sub></p>
                      </td>
                      <td>
                        <span onClick={handleDeleteTour}>Xóa</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cart-body-right">
                <table>
                  <tbody>
                    <tr>
                      <th colSpan="2">THÀNH TIỀN</th>
                    </tr>
                    <tr>
                      <td>SỐ TOUR THAM DỰ</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>TỔNG SỐ TIỀN</td>
                      <td>6190000 <sub>đ</sub></td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-body-right-button">
                  <button>LIÊN HỆ TƯ VẤN</button>
                  <button>YÊU CẦU ĐẶT</button>
                </div>
                <div className="cart-body-right-login">
                  <p>TÀI KHOẢN</p>
                  <p><a href="">Đăng nhập</a> tài khoản để hưởng ưu đãi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
