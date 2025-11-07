/* 전체 레이아웃 */
import './config';

import {Stack} from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    );
}

/*

**해석:**
```
1. 앱이 시작되면 여기가 제일 먼저 실행됨
2. <Stack> = 화면을 쌓는 구조 (뒤로가기 가능)
3. <Stack.Screen name="(tabs)" />
   → "(tabs)" 폴더를 찾아서 실행해!

*/
