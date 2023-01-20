import { Chart } from "react-google-charts";
import React from "react";
import { Spinner } from "react-bootstrap";

function pieChartDataPreparator(covidData){
    // browse each row and pass y ((cases / (totalCases))*100 ) and label (region)
    var dataPoints = [];
    dataPoints.push(["Region", "Cases"])
    //var totalCases = 0;

/*     covidData.map((covidDataElem) => {
        totalCases = totalCases + covidDataElem.cases;
    }); */

    covidData.map( (covidDataElem) => {
        const percent = covidDataElem.cases;
        const region = covidDataElem.region;
        const newObj = [region, percent];
        dataPoints.push(newObj);
    });
    console.log(dataPoints)
    return dataPoints;
}
const options = {
    title: "Covid Spread Rate in Canada",
    //backgroundColor: 'red',
    //colors: ['#FF5733','#FFAC33','#DDFF33','#339DFF']
};
const Graph = ({covidData}) => {

    if(covidData.length > 0) {
        return(
            <Chart 
                chartType="PieChart"
                data={pieChartDataPreparator(covidData)}
                options={options}
                width={"70%"}
                height={"300px"}
             />
        )
    }
    else {
        return (
            /*         <Chart 
                    chartType="PieChart"
                    data={pieChartDataPreparator(covidData)}
                    options={options}
                    width={"70%"}
                    height={"300px"}
                    /> */
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
    }
}

export default Graph;