<template>
	<div class="layout-pd">
		<el-card shadow="hover" header="纪念日记时">
			<el-alert title="感谢温柔帅气的凹凹的长久陪伴。--阿武" type="success" :closable="false" class="mb15"></el-alert>
			<el-row :gutter="20">
				<el-col :sm="6" class="mb15" v-for="(v, k) in state.topCardItemList" :key="k">
					<div class="countup-card-item countup-card-item-box" :style="{ background: `var(${v.color})` }">
						<div class="countup-card-item-flex" ref="topCardItemRefs">
							<div class="countup-card-item-title pb3">{{ v.title }}</div>
							<div class="countup-card-item-num-container">
								<div class="countup-card-item-title-num pb6"></div>
								<span>{{ v.unit }}</span>
							</div>
							<div v-if="v.tips" class="countup-card-item-tip pb3">{{ v.tips }}</div>
						</div>
						<i :class="v.icon" :style="{ color: v.iconColor }"></i>
					</div>
				</el-col>
			</el-row>
			<div class="flex-warp">
				<div class="flex-warp-item">
					<div class="flex-warp-item-box">
						<el-button type="primary" size="default" @click="refreshCurrent">
							<el-icon>
								<ele-RefreshRight />
							</el-icon>
							重置/刷新数值
						</el-button>
					</div>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script setup lang="ts" name="funCountup">
import { reactive, onMounted, nextTick, ref } from 'vue';
import { CountUp } from 'countup.js';
import { dayjs } from 'element-plus';
import service from '/@/utils/request';

// 定义变量内容
const topCardItemRefs = ref<RefType[]>([]);
const state = reactive({
	topCardItemList: [] as {
		title: string;
		date: string;
		tips: string;
		titleNum: number;
		unit: string;
		color: string;
		iconColor: string;
		icon: string;
	}[],
	interval: 0,
});
// 初始化数字滚动
const initNumCountUp = () => {
	nextTick(() => {
		topCardItemRefs.value.forEach((v: HTMLDivElement, i: number) => {
			new CountUp(v.querySelector('.countup-card-item-title-num') as HTMLDivElement, state.topCardItemList[i].titleNum, {
				duration: 3,
			}).start();
		});
	});
};
// 重置/刷新数值
const refreshCurrent = () => {
	initNumCountUp();
};

// 页面加载时
onMounted(async () => {
	// state.topCardItemList = await  service.get('/json/count.json');
	state.topCardItemList = await service.get('http://su-testb.oss-cn-shanghai.aliyuncs.com/json/count.json');
	state.topCardItemList[0].titleNum = dayjs().diff(dayjs(state.topCardItemList[0].date), 'day');
	state.topCardItemList[1].titleNum = dayjs().diff(dayjs(state.topCardItemList[1].date), 'week');
	state.topCardItemList[2].titleNum = dayjs().diff(dayjs(state.topCardItemList[0].date), 'second') * 1.5;
	state.topCardItemList[3].titleNum = Math.pow(1.1, state.topCardItemList[0].titleNum);
	initNumCountUp();
});
</script>

<style scoped lang="scss">
.countup-card-item {
	width: 100%;
	height: 103px;
	background: var(--el-text-color-secondary);
	border-radius: 4px;
	transition: all ease 0.3s;

	&:hover {
		box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
		transition: all ease 0.3s;
	}
}

.countup-card-item-box {
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;

	&:hover {
		i {
			right: 0px !important;
			bottom: 0px !important;
			transition: all ease 0.3s;
		}
	}

	i {
		position: absolute;
		right: -10px;
		bottom: -10px;
		font-size: 70px;
		transform: rotate(-30deg);
		transition: all ease 0.3s;
	}

	.countup-card-item-flex {
		padding: 10px 20px;
		color: var(--el-color-white);
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;

		.countup-card-item-title {
			font-size: 15px;
		}

		.countup-card-item-tip {
			font-size: 12px;
			opacity: 0.7;
			z-index: 2;
			display: flex;
			align-items: flex-end;
			justify-content: flex-end;
		}

		.countup-card-item-num-container {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.countup-card-item-title-num {
			font-size: 30px;
		}

		.countup-card-item-tip-num {
			font-size: 13px;
		}
	}
}
</style>
