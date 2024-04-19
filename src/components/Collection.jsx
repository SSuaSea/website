import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 import
import CustomButton from '../CustomButton.jsx';
import Footer from '../layout/Footer';
import data from '../data.js'; // 필요한 데이터 가져오기

function Collection() {
    // 필요한 데이터만 필터링
    const filteredData = data.filter(item => item.id === 18 || item.id === 19);

    return (
        <div>
            {filteredData.map(item => (
                <div key={item.id} className="container text-center my-3">
                    <h1>{item.title}</h1>
                    <div>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '400px' }} />
                        <h2>Collection</h2>
                        <p>{item.title}</p>
                        {/* "Buy" 버튼을 클릭하면 해당 상품의 디테일 페이지로 이동 */}
                        <Link to={`/detail/${item.id}`}>
                            <CustomButton text="Buy" />
                        </Link>
                    </div>
                </div>
            ))}
            <div style={{ marginTop: '50px' }} />
            <Footer />
        </div>
    );
}

export default Collection;
