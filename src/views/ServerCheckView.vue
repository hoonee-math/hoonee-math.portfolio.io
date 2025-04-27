<!-- views/ServerCheckView.vue -->
<template>
    <div class="content">
        <h1>환영합니다</h1>
        <p>이 페이지는 메인 서버의 상태를 확인하고 적절한 안내를 제공합니다.</p>

        <MainContent />
        <StatusModal :serverUrl="serverUrl" :checkTimeout="checkTimeout" @closeModal="isModalVisible = false" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, type PropType } from 'vue';
import MainContent from '@/components/MainContent.vue';
import StatusModal from '@/components/modal/StatusModal.vue';

export default defineComponent({
    name: 'ServerCheckView',
    components: {
        MainContent,
        StatusModal
    },
    setup() {
        const serverUrl = ref('http://175.204.198.166/portfolio/'); // 여기에 메인 서버 URL 입력
        const checkTimeout = ref(5000); // 5초 타임아웃
        const isModalVisible = ref(true);

        return {
            serverUrl,
            checkTimeout,
            isModalVisible
        };
    }
});
</script>

<style scoped>
.content {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    color: #2c3e50;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    margin-bottom: 15px;
}
</style>