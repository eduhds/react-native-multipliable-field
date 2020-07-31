import React from 'react';

import MultipliableField from '..';

export default function Default() {
    return (
        <MultipliableField
            type='text'
            placeholder='Field'
            fields={[]}
            onChange={arrayFields => {
                console.log('arrayFields', arrayFields);
                this.setState({ ...this.state, arrayFields });
            }}
        />
    );
}
