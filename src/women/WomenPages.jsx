import React from 'react';
import { WomenShirtProduct,WomenJoggerProduct,WomenJeansProduct,WomenJumpSuitProduct,WomenKurtiProduct,WomenTShirtProduct } from '../ConstentData';
import WomenSubcategory from './WomenSubcategory';

function WomenShirt() {
    return <WomenSubcategory subCategory="shirt" productData={WomenShirtProduct} />;
  }
  
  function WomenJogger() {
    return <WomenSubcategory subCategory="jogger" productData={WomenJoggerProduct} />;
  }
  
  function WomenJeans() {
    return <WomenSubcategory subCategory="jeans" productData={WomenJeansProduct} />;
  }
  function WomenJumpSuit(){
    return <WomenSubcategory subCategory="JumpSuit" productData={WomenJumpSuitProduct} />;
  }
  function WomenKurti(){
    return <WomenSubcategory subCategory="kurti" productData={WomenKurtiProduct} />;
  }
  function WomenTShirt(){
    return <WomenSubcategory subCategory="TShirt" productData={WomenTShirtProduct} />;
  }
  
  export {WomenShirt, WomenJogger, WomenJeans,WomenJumpSuit,WomenKurti,WomenTShirt};