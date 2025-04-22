<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>

    <h2>/views/HomeView.vue 에서 호출되는 컴포넌트</h2>

    <WelcomeItem>\
        <template #icon>
            <img src="/hoonee-math-파비콘.png" style="width: 30px;"></img>
        </template>
        <template #heading>WelcomeItem 컴포넌트의 #heading 슬롯에 들어갈 내용</template>
        slot 태그를 포함하는 컴포넌트는
        <a href="https://vuejs.org/guide/components/slots.html" target="_blank" rel="noopener">Slots</a>를
        사용합니다. Slots는 Vue.js에서 컴포넌트에 콘텐츠를 삽입하는 방법입니다. Slots는
        컴포넌트의 구조를 정의하고, 동적으로 콘텐츠를 삽입할 수 있는 강력한 기능을 제공합니다.
        <br><br>
        named slot은 슬롯에 이름을 지정하여 여러 개의 슬롯을 정의할 수 있습니다.
        각 슬롯은 #slotName 과 같은 형식으로 이름을 지정합니다.
        <br><br>
        슬롯에 이름을 지정하면 &lt;template #slotName&gt; 과 같은 형식으로 슬롯을 사용할 수 있습니다.
        이렇게하면 컴포넌트에서 여러 개의 슬롯을 정의하고, 각 슬롯에 다른 콘텐츠를 삽입할 수 있습니다.
    </WelcomeItem>

    <WelcomeItem>\
        <template #heading>Default Slot</template>

        기본 슬롯은 컴포넌트에서 가장 일반적으로 사용되는 슬롯입니다.
        기본 슬롯은 컴포넌트의 콘텐츠를 삽입하는 데 사용됩니다. 기본 슬롯은 이름이 없으며,
        &lt;slot&gt; 태그로 정의됩니다.
    </WelcomeItem>

    <WelcomeItem>\
        <template #heading>Named Slot</template>
        이름이 지정된 슬롯은 컴포넌트에서 여러 개의 슬롯을 정의할 수 있는 기능입니다.
        각 슬롯은 #slotName 과 같은 형식으로 이름을 지정합니다.
        이렇게하면 컴포넌트에서 여러 개의 슬롯을 정의하고, 각 슬롯에 다른 콘텐츠를 삽입할 수 있습니다.
    </WelcomeItem>

    <WelcomeItem>\
        <template #heading>Condition Slot</template>
        컨디션 슬롯은 조건에 따라 슬롯을 렌더링하는 기능입니다.
        컨디션 슬롯은 v-if, v-else-if, v-else 디렉티브를 사용하여 정의됩니다.
        이렇게하면 조건에 따라 슬롯을 렌더링할 수 있습니다.
    </WelcomeItem>

    <WelcomeItem>\
        <template #heading>Dynamic Slot</template>
        다이나믹 슬롯은 런타임에 슬롯을 동적으로 변경하는 기능입니다.
        다이나믹 슬롯은 v-bind 디렉티브를 사용하여 정의됩니다.
        이렇게하면 런타임에 슬롯을 동적으로 변경할 수 있습니다.
    </WelcomeItem>

    <WelcomeItem>\
        <template #heading>Scoped Slot</template>
        스코프 슬롯은 부모 컴포넌트에서 데이터를 전달하고, 자식 컴포넌트에서 해당 데이터를 사용할 수 있는 기능입니다.
        스코프 슬롯은 &lt;template v-slot:slotName="slotProps"&gt;와 같은 형식으로 정의됩니다.
        이렇게하면 부모 컴포넌트에서 데이터를 전달하고, 자식 컴포넌트에서 해당 데이터를 사용할 수 있습니다.
    </WelcomeItem>

</template>
