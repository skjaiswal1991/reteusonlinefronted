import React, { Component } from 'react';
import TabMap from './tabMap';
import TabShortContent from './tabShortContent';
import TabFullContent from './tabFullContent';
import TabAgreegation from './tabAgreegate'
import TabReviewReplay from './tabReviewReplay'
import TabFeature from './tabFeature';
import TabCovid from './tabCovidCompliance';


const TabData = (props)=> {

    const { action }  = props;
        console.log(props);
    switch(action){
        
        case 'map':
            return <TabMap {...props.data} />
        
        case 'review':
            return <TabReviewReplay {...props.data}  />

        case 'covidcompliance':
            return <TabCovid {...props.data}  />

        case 'feature':
            return <TabFeature {...props.data}  />

        case 'aggrigatation':
            return <TabAgreegation {...props.data}  />
        
        case 'fulldetails':
            return <TabFullContent {...props.data}  />
            
        default:
            return (<>
                        {/* <TabShortContent {...props.data} /> */}
                        {/* <TabFeature  {...props.data}  /> */}
                        {/* <TabCovid {...props.data}  /> */}
                        <TabAgreegation {...props.data}  />
                        {/* <TabReviewReplay {...props.data}  /> */}
                </>)
   
    }
}

export default TabData;
