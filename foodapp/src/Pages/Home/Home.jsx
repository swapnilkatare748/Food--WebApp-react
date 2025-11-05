import React, { useState } from 'react';
import Styles from './Home.module.css';
import Header from '../../Components/HomePageComponents/Header/Header';
import ExplorMenu from '../../Components/ExploreMenu/ExplorMenu';
import Fooddisplay from '../../Components/Fooddisplay/fooddisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';

function Home() {


  const [Category,setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExplorMenu Category= {Category} setCategory={setCategory} />
      <Fooddisplay category = {Category} />

      <AppDownload/>
    </div>
  );
}

export default Home
