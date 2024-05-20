import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const [name, setId] = useState('');
    const navigate = useNavigate();
    return (
        <>
            <h1>Menu Page</h1>
            <input type="text" placeholder="브랜드명을 입력하세요" onChange={(e) => setId(e.target.value)} />
            <button onClick={() => navigate(`/product/${name}`)}>브랜드 페이지로 이동</button>
        </>
    );
};

export default Menu;
