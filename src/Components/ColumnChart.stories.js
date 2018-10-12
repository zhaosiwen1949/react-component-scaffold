import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ColumnChart from './ColumnChart';

export const data = [{
        "name": "优化前",
        "one": 4,
        "two": 6,
        "three": 8,
    }, {
        "name": "优化后",
        "one": 5,
        "two": 7,
        "three": 9,
    }];

export const config = {
    index: "时间区域",
    value: "次数",
}

storiesOf('ColumnChart', module)
    .add('default', () => <ColumnChart />)
    .add('data', () => <ColumnChart data={data} {...config} />)