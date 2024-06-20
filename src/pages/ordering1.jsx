import React from 'react';
import './ordering1.css';

const ordering1 = () => {
  return (
    <div className="container">
      <h1>
        <span className="color1">Become a Customer</span>
      </h1>
      <p className="h2">
        Mari kita bekerja sama. Bertemu dengan tim kami untuk melayani kebutuhan digital dan mengembangkan bisnis Anda.
        </p>
      <div className="App">
        <div className="box-container">
          <div className="box-services">
            <div className="detail">
              <div className="box-content">
                <div className="line"></div>
                <h2>Contact details</h2>
                <p>Please fill your information so we can get in touch with you.</p>
              </div>
            </div> {/* Detail */}

            <div className="detail"> {/* Kotak kecil dimulai di sini */}
              <div className="detail">
                <h3 className="h3">Name</h3>
                <div className="box-mini">
                  <span>John Carter</span>
                </div>
              </div>
              <div className="detail">
                <h3 className="h3">Email</h3>
                <div className="box-mini">
                  <span>Email address</span>
                </div>
              </div>
              <div className="detail">
                <h3 className="h3">Phone Number</h3>
                <div className="box-mini">
                  <span>(+62)</span>
                </div>
              </div>
              <div className="detail">
                <h3 className="h3">Company</h3>
                <div className="box-mini">
                  <span>Company Name</span>
                </div>
              </div>
            </div> {/* Detail */}

            <div className="next-step">
              <h2>Next step</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ordering1;
