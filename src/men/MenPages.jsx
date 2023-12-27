import React from 'react';
import { MenHoodieProduct, MenJeansProduct, MenJoggerProduct,MenKurtaProduct,MenPyjamaProduct,MenShirtProduct,MenShortsProduct,MenTracksuitProduct,MenTShirtProduct } from '../ConstentData';
import MenSubcategory from './MenSubcategory';

function MenHoodie() {
    return <MenSubcategory subCategory="hoodie" productData={MenHoodieProduct} />;
  }
  
  function MenJeans() {
    return <MenSubcategory subCategory="jeans" productData={MenJeansProduct} />;
  }
  
  function MenJogger() {
    return <MenSubcategory subCategory="jogger" productData={MenJoggerProduct} />;
  }
  function MenKurta(){
    return <MenSubcategory subCategory="kurta" productData={MenKurtaProduct} />;
  }
  function MenPyjama(){
    return <MenSubcategory subCategory="pyjama" productData={MenPyjamaProduct} />;
  }
  function MenShirt(){
    return <MenSubcategory subCategory="shirt" productData={MenShirtProduct} />;
  }
  function MenShorts(){
    return <MenSubcategory subCategory="shorts" productData={MenShortsProduct} />;
  }
  
  function MenTracksuit(){
    return <MenSubcategory subCategory="tracksuit" productData={MenTracksuitProduct} />;
  }

  function MenTrouser(){
    return <MenSubcategory subCategory="trouser" productData={MenTrouserProduct} />;
  }

  function MenTShirt(){
    return <MenSubcategory subCategory="tshirt" productData={MenTShirtProduct} />;
  }
  export { MenHoodie, MenJeans, MenJogger,MenKurta,MenPyjama,MenShirt,MenShorts,MenTracksuit,MenTrouser,MenTShirt };