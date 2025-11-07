// 개발 환경 설정
if (__DEV__) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    console.log('⚠️ SSL 검증 비활성화됨 (개발 모드)');
}