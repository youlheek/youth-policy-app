/* 설정 화면 */
import {StyleSheet, View, Text, ScrollView} from "react-native";

export default function SettingsScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>👤 내 정보</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>나이:</Text>
                    <Text style={styles.value}>미설정</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>지역:</Text>
                    <Text style={styles.value}>미설정</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🔔 알림 설정</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>푸시 알림:</Text>
                    <Text style={styles.value}>활성화</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>이메일 알림:</Text>
                    <Text style={styles.value}>비활성화</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    section: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#666',
    },
});