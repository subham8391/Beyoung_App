import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailsData } from '../ConstentData';
import ProductImgCarousel from './ProductImgCarousel';
import ProductBasicDetails from './ProductBasicDetails';
import './productdetails.css';


function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { apiEndpoint } = ProductDetailsData[0];
                const response = await fetch(`${apiEndpoint}${id}`, {
                    method: 'get',
                    headers: new Headers({
                        projectId: 'mmvz5wuhf8k7',
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                let getProduct = data.data;
                setProduct(getProduct);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <div className="select-product-section">
            <div className="select-product-container">
                <div className="select-product-top">
                    <div className="select-carousel">
                        <ProductImgCarousel product={product} />
                    </div>
                    <div className="select-B-details">
                        <ProductBasicDetails product={product} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductDetails;
