import React, { useState, useMemo } from 'react';

const ProductFilter = () => {
    const [priceLimit, setPriceLimit] = useState(''); // 가격 제한 상태

    const products = [
        { name: 'Product A', price: 30 },
        { name: 'Product B', price: 50 },
        { name: 'Product C', price: 70 },
    ];

    // useMemo를 사용해 필터링된 상품 목록 계산
    const filteredProducts = useMemo(() => {
        if (!priceLimit) return products; // 가격 제한이 없으면 모든 상품 반환
        return products.filter(
            (product) => product.price <= parseInt(priceLimit, 10)
        );
    }, [priceLimit, products]); // priceLimit이 변경될 때만 재계산

    return (
        <div>
            <h2>Product Filter</h2>
            <input
                type="number"
                onChange={(e) => setPriceLimit(e.target.value)} // 가격 제한 입력값 업데이트
            />
            <ul>
                {filteredProducts.map((product, index) => (
                    <li key={index}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFilter;
