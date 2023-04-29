import apiConfig from "src/config/api";
import endpointConst from "src/constants/endpointConst";

const fileService = {
	async getAll() {
		try {
			const res = await apiConfig.get(endpointConst.FILE.GET_ALL)
			return res.data
		} catch (error) {
			return error.response?.data || null
		}
	},
	async upload(filesToUpload) {
		try {
			let formData = new FormData()
			filesToUpload.forEach((file) => formData.append("files", file))
			const res = await apiConfig.post(endpointConst.FILE.UPLOAD, formData,
				{
					headers: { "Content-Type": "multipart/form-data", }
				}
			)
			return res.data
		} catch (error) {
			return error.response?.data || null
		}
	},
	async download(url, fileName) {
		try {
			const res = await apiConfig.get(url, { responseType: "blob" })
			const url2 = window.URL.createObjectURL(new Blob([res.data]));
			const link = document.createElement('a');
			link.href = url2;
			link.setAttribute('download', fileName);
			document.body.appendChild(link);
			link.click();
			return true
		} catch (error) {
			return false
		}
	},
	async delete(id) {
		try {
			const res = await apiConfig.delete(endpointConst.FILE.DELETE(id))
			return res.data
		} catch (error) {
			return error.response?.data || null
		}
	},

}

export default fileService;
