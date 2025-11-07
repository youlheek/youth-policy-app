/* 탭 설정 */
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#007AFF', // 선택된 탭 색상
                tabBarInactiveTintColor: '#8E8E93', // 선택 안 된 탭 색상
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#f5f5f5',
                },
            }}
        >
            <Tabs.Screen
                name="index"           // ← index.tsx 파일 연결
                options={{
                    title: '홈',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"          // ← search.tsx 파일 연결
                options={{
                    title: '검색',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"        // ← settings.tsx 파일 연결
                options={{
                    title: '설정',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

/*
**해석:**
```
name 속성 = 파일명

**특별한 파일명:**
- **`index.tsx`**: 기본 페이지 (폴더의 홈)
- **`_layout.tsx`**: 폴더의 레이아웃 설정
- **`[id].tsx`**: 동적 라우팅 (나중에 설명)

1. <Tabs> = 하단 탭바 생성
2. <Tabs.Screen name="index" />
   → 같은 폴더의 index.tsx를 첫 번째 탭으로 보여줘!
3. name="search"
   → search.tsx를 두 번째 탭으로!
4. name="settings"
   → settings.tsx를 세 번째 탭으로!
```

**비유:** 건물의 층별 안내판
```
1층(index) → 홈 화면
2층(search) → 검색 화면
3층(settings) → 설정 화면

* */