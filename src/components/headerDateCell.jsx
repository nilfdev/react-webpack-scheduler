import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as dateService from '../dateServices'

export const HeaderDateCell = ({ val }) => {
    let date = dateService.toDate(val);
    
    if (!date) {
        //TODO: handle exceptions
        return '';
    }
    
    let className = dateService.isWeekend(date)
        ? "data_table__header-weekend"
        : "data-table__header-active";

    return <th className={className}>{dateService.format(date)}</th>
}