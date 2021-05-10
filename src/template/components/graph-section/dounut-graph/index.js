import { func } from "prop-types";
import React from "react";
import CanvasJSReact from "../../../../canvasjs-3.2.7/canvasjs.react.js";
import datalayout from '../../../../data-laye'
import "./index.css";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
      animationEnabled: true,
      title: {
        text: "",
      },
      subtitles: [
        {
          text: "5% 5 Start",
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true,
        },
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            
          ],
        },
      ],
    };
class GraphSection extends React.Component{

    constructor(props){
      super(props)
      this.state = {option:{},active:false}
      this.getRatingData()
    }

    getRatingData = () =>{

      datalayout.getBussiness().then(
        (res)=>{
          console.log(res.data[0]._id)
          datalayout.getReview({businessId:res.data[0]._id}).then((result)=>{
            console.log(result)
           let reviewData = result.data[0]
            let review= []
             if(reviewData.yelp.length > 0)
             {
              review.push(
                { name: "Yelp", y: reviewData.yelp[0].user_review ,z:reviewData.yelp[0].user_rating },
                { name: "RateusOnline", y: 10 ,z:10 }

                )
             } 
             if(reviewData.zomato.length){
              review.push(
                { name: "Zomato", y: reviewData.zomato[0].user_review,z:reviewData.zomato[0].user_rating  },)
             }
             if(reviewData.hotels.length){
                review.push(
                  { name: "Hotels", y: reviewData.hotels[0].user_review,z:reviewData.hotels[0].user_rating*2  })
              }  
              if(reviewData.googlemap.length){
                review.push(
                  { name: "GoogleMap", y: reviewData.googlemap[0].user_review,z:reviewData.googlemap[0].user_rating  })
              }
              if(reviewData.amazon.length){
                review.push(
                  { name: "Amazon", y: reviewData.amazon[0].user_review,z:reviewData.amazon[0].user_rating  })
              } 

            let options = {
              animationEnabled: true,
              title: {
                text: "",
              },
              subtitles: [
                {
                  text: "Source Of Reviews",
                  verticalAlign: "center",
                  fontSize: 24,
                  dockInsidePlotArea: true,
                },
              ],
              data: [
                {
                  type: "doughnut",
                  showInLegend: true,
                  indexLabel: "{name}: {y} :{z}",
                  yValueFormatString: "#,### Review Rating",
                  dataPoints: review
                  // [
                  //   { name: "Yelp", y: 200 ,z:3.2 }
                  //   // { name: "4 Star", y: 31 },
                  //   // { name: "3 Start", y: 40 },
                  //   // { name: "2 Start", y: 17 },
                  //   // { name: "1 Start", y: 7 }
                  // ],
                },
              ],
            };
            
            // let data = this.state.option.data[0].dataPoints.push(
             // { name: "5 Star", y: 5 },
            // { name: "4 Star", y: 31 },
            // { name: "3 Start", y: 40 },
            // { name: "2 Start", y: 17 },
            // { name: "1 Start", y: 7 },)
            // this.setState((state)=>{
            //       let data = 
            // })

            this.setState({option:options,active:true})
          })
        }
      )
    }
   
    render(){
      return(
        <div>
          <CanvasJSChart
            options={this.state.active ? this.state.option : options}
            /* onRef={ref => this.chart = ref} */
          />
          {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
      )
    }

}

export default GraphSection;
// export default function GraphSection(props) {
//   const options = {
//     animationEnabled: true,
//     title: {
//       text: "",
//     },
//     subtitles: [
//       {
//         text: "5% 5 Start",
//         verticalAlign: "center",
//         fontSize: 24,
//         dockInsidePlotArea: true,
//       },
//     ],
//     data: [
//       {
//         type: "doughnut",
//         showInLegend: true,
//         indexLabel: "{name}: {y}",
//         yValueFormatString: "#,###'%'",
//         dataPoints: [
//           { name: "5 Star", y: 5 },
//           { name: "4 Star", y: 31 },
//           { name: "3 Start", y: 40 },
//           { name: "2 Start", y: 17 },
//           { name: "1 Start", y: 7 },
//         ],
//       },
//     ],
//   };

//   return (
//     <div>
//       <CanvasJSChart
//         options={options}
//         /* onRef={ref => this.chart = ref} */
//       />
//       {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//     </div>
//   );
// }
