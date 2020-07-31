import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import MultipliableField from '..';

export default function Custom() {
    return (
        <MultipliableField
            type='custom'
            fields={arrayFields}
            customFormatValue={{ value: '', key: '' }}
            onPlus={() => {
                let a = arrayFields;
                a.push({ value: '', key: '' });
                this.setState({ ...this.state, arrayFields: a });
            }}
            onMinus={() => {
                let a = arrayFields;
                a.pop();
                if (a.length === 0) a[0] = { value: '', key: '' };
                this.setState({ ...this.state, arrayFields: a });
            }}
            customField={({ item, index }) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        let a = arrayFields;
                        a[index] = {
                            value: Date.now(),
                            key: 'novo'
                        };
                        this.setState({
                            ...this.state,
                            arrayFields: a
                        });
                    }}>
                    <Text>
                        {item.value} - {item.key}
                    </Text>
                </TouchableOpacity>
            )}
        />
    );
}
