import { defineStore } from 'pinia';
import OSS from 'ali-oss';

/**
 * 用户信息
 * @methods setOssInfos 设置oss信息
 */
export const ossInfo = defineStore('ossInfo', {
	state: (): { ossInfos: any } => ({
		ossInfos: new OSS(),
	}),
	actions: {
		setOssInfo() {
			this.ossInfos = new OSS({
				region: 'oss-cn-shanghai',
				accessKeyId: 'LTAI5tPWYE2iHP6aVcLSkJtQ',
				accessKeySecret: 'WieTrlobDXatPxPPUYb45EuDmicWmF',
				stsToken: '',
				bucket: 'su-testb',
			});
		},
	},
});
