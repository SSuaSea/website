import React, { useState } from 'react';
import data from '../data.js';
import CustomButton from '../CustomButton.jsx';
import Footer from '../layout/Footer';
import {useNavigate } from 'react-router-dom';


function New() {

  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState(null); // 클릭된 상품의 id를 관리할 상태

  const handleBuyButtonClick = (id) => {
    // buy 버튼을 클릭하면 해당 상품의 Detail 페이지로 이동
    setSelectedProductId(id); // 클릭된 상품의 id를 상태에 설정
    navigate(`/detail/${id}`); // 해당 상품의 id를 URL 파라미터로 전달하여 Detail 페이지로 이동
  };

  const libs = data; // 데이터 가져오기

  // 배열을 chunk로 나누는 함수
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center my-3">New</h1>
        <div className="row text-dark">
          {chunkArray(libs.slice(9, 17), 4).map((group, index) => (
            <div key={index} className="row">
              {group.map((lib, idx) => (
                <Card key={idx} lib={lib} image={lib.image}  handleBuyButtonClick={handleBuyButtonClick}/>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: '50px' }} />
      <Footer />
    </div>
  );
}

function Card(props) {
  const { lib, handleBuyButtonClick } = props;
  return (
    <div className="col-md-3 text-center"> {/* 한 줄에 4개씩 배치하기 위해 col-md-3 사용 */}
      <img src={props.image} width="50%" alt="lib" />
      <h5>{props.lib.title}</h5>
      <h6>{props.lib.price}</h6>
      <CustomButton text="Buy" onClick={() => handleBuyButtonClick(lib.id)}  />
    </div>
  );
}

export default New;
