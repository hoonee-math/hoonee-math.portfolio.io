<template>
    <div class="modal" v-if="isVisible">
        <div class="modal-content">
            <h3 class="modal-title">{{ title }}</h3>
            <div class="spinner" v-if="isChecking"></div>
            <p class="modal-message">{{ message }}</p>
            <div class="modal-buttons" v-if="!isChecking">
                <!-- 서버 온라인 상태일 때 -->
                <template v-if="isServerOnline">
                    <button class="btn btn-primary" @click="goToServer">서버로 이동</button>
                    <button class="btn btn-secondary" @click="stayHere">여기 머물기</button>
                </template>
                <!-- 서버 오프라인 상태일 때 -->
                <template v-else>
                    <button class="btn btn-success" @click="confirm">확인</button>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, type PropType } from 'vue';
import { type ServerStatus } from '@/types/'; // 서버 상태 타입 정의 파일 경로

export default defineComponent({
    name: 'StatusModal',
    props: {
        serverUrl: {
            type: String,
            required: true
        },
        redirectUrl: {
            type: String,
            required: true
        },
        checkTimeout: {
            type: Number,
            default: 5000
        }
    },
    emits: ['closeModal'],
    setup(props, { emit }) {
        const isVisible = ref(true);
        const isChecking = ref(true);
        const isServerOnline = ref(false);
        const title = ref('서버 상태 확인 중');
        const message = ref('메인 서버의 상태를 확인하고 있습니다...');
        const status = ref<ServerStatus>('checking');

        // 서버 상태 확인
        const checkServerStatus = async () => {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), props.checkTimeout);

                await fetch(props.serverUrl, {
                    mode: 'no-cors',
                    signal: controller.signal
                });

                clearTimeout(timeoutId);
                serverOnline();
            } catch (error) {
                serverOffline();
            }
        };

        // 서버가 온라인 상태일 때
        const serverOnline = () => {
            isChecking.value = false;
            isServerOnline.value = true;
            status.value = 'online';
            title.value = '서버 연결 확인';
            message.value = '메인 서버가 온라인 상태입니다. 서버로 이동하시겠습니까?';
        };

        // 서버가 오프라인 상태일 때
        const serverOffline = () => {
            isChecking.value = false;
            isServerOnline.value = false;
            status.value = 'offline';
            title.value = '서버 연결 실패';
            message.value = '현재 서버 응답이 없어 GitHub Pages로 접속합니다.';
        };

        // 서버로 이동
        const goToServer = () => {
            window.location.href = props.redirectUrl;
        };

        // 현재 페이지에 머물기
        const stayHere = () => {
            closeModal();
        };

        // 확인 버튼 (서버 오프라인일 때)
        const confirm = () => {
            closeModal();
        };

        // 모달 닫기
        const closeModal = () => {
            isVisible.value = false;
            emit('closeModal');
        };

        // 컴포넌트 마운트 시 서버 상태 확인
        onMounted(() => {
            checkServerStatus();
        });

        return {
            isVisible,
            isChecking,
            isServerOnline,
            title,
            message,
            status,
            goToServer,
            stayHere,
            confirm
        };
    }
});
</script>

<style scoped>
.modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 90%;
    text-align: center;
}

.modal-title {
    margin-top: 0;
    color: #2c3e50;
    font-size: 22px;
}

.modal-message {
    margin: 20px 0;
    font-size: 16px;
}

/* 스피너 스타일 */
.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #3498db;
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* 버튼 스타일 */
.btn {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px 8px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
}

.btn-secondary {
    background-color: #95a5a6;
    color: white;
}

.btn-secondary:hover {
    background-color: #7f8c8d;
}

.btn-success {
    background-color: #2ecc71;
    color: white;
}

.btn-success:hover {
    background-color: #27ae60;
}
</style>