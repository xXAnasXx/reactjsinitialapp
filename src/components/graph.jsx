import { Chart } from "react-google-charts";
import React from "react";


function pieChartDataPreparator(covidData){
    // browse each row and pass y ((cases / (totalCases))*100 ) and label (region)
    var dataPoints = [];
    dataPoints.push(["Region", "Cases"])
    var totalCases = 0;

    covidData.map((covidDataElem) => {
        totalCases = totalCases + covidDataElem.cases;
    });

    covidData.map( (covidDataElem) => {
        const percent = Math.floor((covidDataElem.cases / totalCases) * 100);
        const region = covidDataElem.region;
        const newObj = [region, percent];
        dataPoints.push(newObj);
    });
    console.log(dataPoints)
    return dataPoints;
}
const options = {
    title: "Covid Spread Rate in Canada",
};
const Graph = ({covidData}) => {
    // total 17/jan/2023 : 4,522,023 cases
    return (
        <Chart 
        chartType="PieChart"
        data={pieChartDataPreparator(covidData)}
        options={options}
        width={"50%"}
        height={"300px"}
        />
    )
}

export default Graph;