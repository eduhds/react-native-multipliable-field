import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export default function MultipliableField({
    type,
    fields,
    customField,
    placeholder,
    onChange,
    onPlus,
    onMinus,
    customFormatValue,
    containerStyle,
    textInputStyle,
    textButtonStyle,
    buttonMinusStyle,
    buttonPlusStyle,
    customButtonMinus,
    customButtonPlus,
    textInputProps
}) {
    if (fields.length === 0) {
        fields[0] = customFormatValue || '';
    }

    const updateFields = (index, value) => {
        fields[index] = value;
        onChange(fields);
    };

    const addField = () => {
        fields.push('');
        onChange(fields);
    };

    const removeField = () => {
        fields.pop();
        onChange(fields);
    };

    const showMinus = () => {
        return (
            (fields[0] !== null &&
                fields[0] !== undefined &&
                fields[0] !== '' &&
                fields[0] !== customFormatValue) ||
            fields.length > 1
        );
    };

    return (
        <View style={[Styles.container, containerStyle]}>
            {fields.map((item, index) => {
                switch (type) {
                    case 'custom':
                        return <>{customField({ item, index })}</>;
                    default:
                        return (
                            <TextInput
                                {...textInputProps}
                                placeholder={`${placeholder} ${
                                    fields.length > 1 ? `(${index + 1})` : ''
                                }`}
                                value={item}
                                onChangeText={text => updateFields(index, text)}
                                style={[Styles.textInput, textInputStyle]}
                            />
                        );
                }
            })}

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginVertical: 5
                }}>
                {showMinus() && (
                    <TouchableOpacity
                        onPress={onMinus || removeField}
                        style={[Styles.touchButtonPlusMinus]}>
                        {customButtonMinus || (
                            <View
                                style={[
                                    Styles.buttonPlusMinus,
                                    buttonMinusStyle
                                ]}>
                                <Text
                                    style={[
                                        Styles.textButtonPlusMinu,
                                        textButtonStyle
                                    ]}>
                                    -
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    onPress={onPlus || addField}
                    style={[Styles.touchButtonPlusMinus]}>
                    {customButtonPlus || (
                        <View style={[Styles.buttonPlusMinus, buttonPlusStyle]}>
                            <Text
                                style={[
                                    Styles.textButtonPlusMinu,
                                    textButtonStyle
                                ]}>
                                +
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5
    },
    touchButtonPlusMinus: {
        marginRight: 10
    },
    buttonPlusMinus: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    },
    textButtonPlusMinu: { fontSize: 20, fontWeight: 'bold', color: 'black' }
});
