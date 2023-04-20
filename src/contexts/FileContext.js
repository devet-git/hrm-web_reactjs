import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useApp } from "src/hooks/use-app";
import fileService from "src/services/fileService";

export const FileContext = createContext(null)

export const FileProvider = (props) => {
	const { children } = props;
	const [isLoading, setIsLoading] = useState(false)


	const [fileList, setFileList] = useState([]);
	const { refresh, refreshApp } = useApp()

	useEffect(() => {
		(async () => {
			const res = await fileService.getAll()
			setFileList(res?.data || [])
		})()
	}, [children, refreshApp])


	const getAllFiles = async () => {
		setIsLoading(true)
		let res = await fileService.getAll();
		console.log(res);
		refresh()
		setIsLoading(false)
	}
	const download = async (url, fileName) => {
		setIsLoading(true)
		await fileService.download(url, fileName);
		refresh()
		setIsLoading(false)
	}
	const upload = async (files) => {
		setIsLoading(true)
		let res = await fileService.upload(files);
		if (res && res.statusCode === 200) {
			toast("Upload successfully", { type: "success" })
			refresh();
		} else toast("Upload failed", { type: "error" })
		setIsLoading(false)
	}
	return (
		<FileContext.Provider value={{ isLoading, fileList, download, upload }}>
			{children}
		</FileContext.Provider>
	)
}

export const FileConsumer = () => FileContext.Consumer;
export const useFileContext = () => useContext(FileContext);