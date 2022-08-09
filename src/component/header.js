import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>Pelocal</Text>
            </View>

        </View>
    )


}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#D3D3D3',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        marginVertical: 50
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
        letterSpacing: 1,
        paddingVertical: 10

    }

})