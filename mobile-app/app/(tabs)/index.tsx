// 1️⃣ 필요한 도구들 가져오기 (import)
import { StyleSheet, View, Text, ScrollView } from 'react-native';

// 2️⃣ 화면을 만드는 함수 (컴포넌트)
export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.welcomeSection}>
                <Text style={styles.welcomeText}>안녕하세요! 👋</Text>
                <Text style={styles.subtitle}>오늘의 청년정책을 확인해보세요</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>📌 최근 정책</Text>

                <View style={styles.policyCard}>
                    <Text style={styles.policyTitle}>서울시 청년수당</Text>
                    <Text style={styles.policyDescription}>만 19~34세 청년 대상 월 50만원 지원</Text>
                    <Text style={styles.policyDeadline}>마감: 2025년 11월 30일</Text>
                </View>

                <View style={styles.policyCard}>
                    <Text style={styles.policyTitle}>청년 취업 지원금</Text>
                    <Text style={styles.policyDescription}>취업 준비 청년 대상 교육비 지원</Text>
                    <Text style={styles.policyDeadline}>마감: 2025년 12월 15일</Text>
                </View>
            </View>
        </ScrollView>
    );
}

/*
**해석:**
```
1. 사용자가 "홈" 탭 클릭
2. TabLayout이 name="index" 확인
3. index.tsx의 HomeScreen 함수 실행
4. return 안의 JSX를 화면에 표시

* */

// 4️⃣ 스타일 정의 (CSS 같은 것)
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    welcomeSection: {
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    policyCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    policyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    policyDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    policyDeadline: {
        fontSize: 12,
        color: '#007AFF',
        fontWeight: '600',
    },
});