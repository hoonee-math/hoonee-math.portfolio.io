<!-- components/MainContent.vue -->
<template>
    <div class="main-content">
        <h2>GitHub Pages에 오신 것을 환영합니다</h2>
        <p>이 페이지는 메인 서버의 상태에 따라 적절한 안내를 제공하기 위해 제작되었습니다.</p>
        <p>서버 상태를 확인하는 동안 잠시만 기다려 주세요.</p>

        <!-- 프로젝트나 서비스에 대한 추가 정보 -->
        <div class="additional-content">
            <h3>프로젝트 정보</h3>
            <p>이 공간에 프로젝트나 서비스에 대한 정보를 추가할 수 있습니다.</p>
            <p>서버가 오프라인일 때 방문자에게 유용한 정보나 대체 컨텐츠를 제공하세요.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainContent'
});
</script>

<style scoped>
.main-content {
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
}

h2 {
    color: #2c3e50;
    margin-bottom: 15px;
}

h3 {
    color: #34495e;
    margin-top: 25px;
}

.additional-content {
    margin-top: 25px;
    padding-top: 15px;
    border-top: 1px solid #eee;
}
</style>