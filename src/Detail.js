import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton.jsx';
import Footer from './layout/Footer.jsx';

function Detail({ libs }) {
    const { id } = useParams(); // useParams()를 사용하여 URL의 파라미터 중 id 값을 가져옵니다.
    const navigate = useNavigate();

    const handleBuyButtonClick = () => {
        // Buy 버튼을 클릭하면 해당 상품의 Detail 페이지로 이동
        navigate(`/detail/${id}`);
    };

    return (
        <div>
            <div className="container my-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    {/* id에 해당하는 데이터를 libs에서 찾아 사용 */}
                    <img src={libs[id].image} width="50%" alt="lib" />
                </div>
                <div className="col-md-6">
                    <h5 className="my-3">상품명: [{libs[id].title}]</h5>
                    <h5 className="my-3">가격 : [{libs[id].price}원]</h5>
                    <CustomButton text="Buy" onClick={handleBuyButtonClick} />
                </div>
            </div>
        </div>
        <div style={{ marginTop: '150px' }} />
        <Footer />
        </div>
    );
}

export default Detail;
