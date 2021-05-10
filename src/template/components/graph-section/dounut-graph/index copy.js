import { func } from "prop-types";
import React,{useEffect,useState} from "react";
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

        // { name: "5 Star", y: 5 },
        // { name: "4 Star", y: 31 },
        // { name: "3 Start", y: 40 },
        // { name: "2 Start", y: 17 },
        // { name: "1 Start", y: 7 },
      ],
       
      
    },
  ],
  //businesData:datalayout.businesData.then((res)=>res)
};

export default function GraphSection(props) {

  const[rating,SetRating]  = useState([])
  const [starRating,SetStarRating] = useState([])
  const [OptionsGraph,SetOptionsGraph] = useState(options)

  // const options = {
  //   animationEnabled: true,
  //   title: {
  //     text: "",
  //   },
  //   subtitles: [
  //     {
  //       text: "5% 5 Start",
  //       verticalAlign: "center",
  //       fontSize: 24,
  //       dockInsidePlotArea: true,
  //     },
  //   ],
  //   data: [
  //     {
  //       type: "doughnut",
  //       showInLegend: true,
  //       indexLabel: "{name}: {y}",
  //       yValueFormatString: "#,###'%'",
  //       dataPoints: [
  
  //         { name: "5 Star", y: 5 },
  //         { name: "4 Star", y: 31 },
  //         { name: "3 Start", y: 40 },
  //         { name: "2 Start", y: 17 },
  //         { name: "1 Start", y: 7 },
  //       ],
         
        
  //     },
  //   ],
  //   //businesData:datalayout.businesData.then((res)=>res)
  // };
   
  useEffect(()=>{
    //SetOptionsGraph(options)
    const subscribe =  datalayout.getBussiness().then(
      (res)=>{
        console.log(res.data[0]._id)
        datalayout.getReview({businessId:res.data[0]._id}).then((result)=>{
          SetRating(result.data);
          
          console.log(typeof result)
          console.log(result.data[0].yelp)
         
          
          if(result.data[0].yelp.length > 0){          
            //SetStarRating([{ name: "5 Star", y: 5 }])
              console.log(OptionsGraph)
              
              if(OptionsGraph.animationEnabled === true){
                let opt = OptionsGraph;
                 opt.data[0].dataPoints.push({ name: "1 Star", y: 31 })
                 return subscribe.unsubscribe();
                 // SetOptionsGraph(opt)
                  //console.log(opt)
              }
             // console.log(OptionsGraph.data[0].dataPoints)
              
              //console.log(opt)
             // options = { ...options, ...tt}
           ///console.log(options.data[0].dataPoints)
           // options.data[0].dataPoints.push({ name: "4 Star", y: 31 })
          //options.data[0].dataPoints = [{ name: "5 Star", y: 5 }]
          }
          
        })
        console.log("options.businesData")
      }
    )
    
  },[])

  console.log(OptionsGraph)
  
    
  return (
    <div>
      <CanvasJSChart
        options={OptionsGraph}
        // onRef={ref => this.chart = ref} 
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
