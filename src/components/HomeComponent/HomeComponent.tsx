import React from 'react';
import { Link } from "react-router-dom";
import { ErrorBlock } from "../../elements";
import { MainHomeBlock, HomeParagraph } from "./elements";
import { ResponsiveContainer, BarChart, Bar, XAxis, CartesianGrid } from 'recharts';
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const HomeComponent = () => {
  let userLoggedIN : any = sessionStorage.getItem('userLoggedIN');
  const barData = [
    {
      name: '2015',
      uv: 900
    },
    {
      name: '2016',
      uv: 1100
    },
    {
      name: '2017',
      uv: 1500
    },
    {
      name: '2018',
      uv: 2000
    },
    {
      name: '2019',
      uv: 2700
    },
    {
      name: '2020',
      uv: 3300
    }
  ];


  //Home Code Part (START)
  const homeBlockContent = () => {
    return(
      <>
        <HomeParagraph>Users Statistic</HomeParagraph>
        <ResponsiveContainer height={600} width={700}>
          <BarChart data={barData}>
            <XAxis dataKey="name" stroke={'#B2FEFA'} />
            <CartesianGrid horizontal={true} vertical={false} stroke="#B2FEFA" />
            <Bar dataKey="uv" barSize={50} fill="#B2FEFA"/>
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  };
  //Home Code Part (END)

  const mainHomeBlock = () => {
    return(
      <MainHomeBlock>
        <HeaderComponent />
        { homeBlockContent() }
      </MainHomeBlock>
    )
  };

  const loginAccount = () => {
    return(
      <ErrorBlock>
        <Link to={'/'}>Please login to your account.</Link>
      </ErrorBlock>
    );
  };

  return(
    <>
      { userLoggedIN === 0 ? loginAccount() : mainHomeBlock() }
    </>
  );
};

export default HomeComponent;