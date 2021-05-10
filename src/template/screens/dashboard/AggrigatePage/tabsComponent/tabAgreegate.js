import React, { Component } from 'react';
import CovidCompaliance from '../../../../components/covid-compaliance';
import DataSection from '../../../../components/data-section';
import GraphDataSection from '../../../../components/graph-section';

const TabAgreegation =() =>
{
    return(
        <>
            <CovidCompaliance /> 
            <DataSection></DataSection>
            <GraphDataSection></GraphDataSection>
        </>
    )
}
export default TabAgreegation;