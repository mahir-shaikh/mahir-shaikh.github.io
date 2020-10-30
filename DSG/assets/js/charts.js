
function GetChartData(){
    return ChartData;
}


var ChartData = {
    splineChartOptions: {
        "chartOptions": {
            "chart": {
                "type": "spline"
            },
            "title": {
                "text": "Price Forecast"
            },
            "legend": {
                "enabled": false
            },
            "plotOptions": {
                "series": {
                    "label": {
                        "connectorAllowed": false
                    },
                    "pointStart": 0,
                    "colorByPoint": false,
                    "lineColor": "red"
                }
            },
            "tooltip": {
                "enabled": true,
                "pointFormat": "{categories}<br />{series.name}: {point.y:$0,0a}",
            }
        },
        "rangeRef": [
            [
                "tlOutputProd1Price_R0",
                "tlOutputProd1Price_R1",
                "tlOutputProd1Price_R2",
                "tlOutputProd1Price_R3"
            ]
        ],
        "seriesOptions": [
            {
                "lineColor": "green",
                "lineWidth": 1,
                "color": "red",
                "pointWidth": 9,
                "fill": "red"
            }
        ],
        "yAxis": {
            "allowDecimals": false,
            "labels": {
                "format": "${value}.00",
                "tickInterval": 5
            },
            "title": {
                "text": null
            }
        },
        "xAxis": {
            "categories": [
                "Y0",
                "Y1",
                "Y2",
                "Y3"
            ]
        }
    }
}


