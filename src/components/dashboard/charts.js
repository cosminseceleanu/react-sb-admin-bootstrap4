import React from 'react';
import {Line, Bar} from 'react-chartjs';

import CardBox from '../ui/card-box';
import {LineChart, BarChart} from '../../data/charts';

const Charts = () => {
    return (
        <div>
            <CardBox title="Area Chart Example" icon="fa fa-area-chart" footer="Updated yesterday at 11:59 PM">
                <Line data={LineChart.data} options={LineChart.options} width="700" height="250"/>
            </CardBox>
            <CardBox title="Bar Chart Example" icon="fa fa-bar-chart" footer="Updated yesterday at 11:59 PM">
                <Line data={BarChart.data} options={BarChart.options} width="700" height="250"/>
            </CardBox>
        </div>
    )
};

export default Charts;