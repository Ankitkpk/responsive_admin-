import React from 'react'
import './home.scss'
import TopBox from '../../components/topbox/TopBox'
import ChartBox from '../../components/charbox/chartBox'
import PieChartBox from '../../components/piechartbox/PieChartBox'
import BarChartBox from '../../components/barChart/BarChartBox'
import BigChartBox from  '../../components/bigchart/BigChartBox'
import { chartBoxConversion, chartBoxUser } from '../../data' 
import { chartBoxRevenue } from '../../data'
import { chartBoxProduct } from '../../data'
import { barChartBoxVisit } from '../../data'
import { barChartBoxRevenue } from '../../data'
const Home = () => {
  return (
    <div className='home'>
     <div className='box box1'><TopBox/></div>
     <div className='box box2'><ChartBox {...chartBoxUser}/></div>
     <div className='box box3'><ChartBox {...chartBoxRevenue }/></div>
     <div className='box box4'><PieChartBox/></div>
     <div className='box box5'><ChartBox {...chartBoxProduct}/></div>
     <div className='box box6'><ChartBox {...chartBoxConversion}/></div>
     <div className='box box7'><BigChartBox/></div>
     <div className='box box8'><BarChartBox {...barChartBoxVisit}/></div>
     <div className='box box9'><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home