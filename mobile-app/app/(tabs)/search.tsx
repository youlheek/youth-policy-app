/* 검색 화면 */
import { StyleSheet, View, Text, TextInput } from "react-native";
import { useState } from "react";

export default function SearchScreen() {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="정책 검색..."
                value={searchText}
                onChangeText={setSearchText}
            />

            <View style={styles.filterSection}>
                <Text style={styles.sectionTitle}>🔍 필터</Text>
                <Text style={styles.filterText}>나이, 지역, 분야 등으로 필터링</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    searchInput: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    filterSection: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    filterText: {
        fontSize: 14,
        color: '#666',
    },
});