import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import FileUpload from "react-mui-fileuploader";
import { useFileContext } from "src/contexts/FileContext";

const FileUploadFeature = ({ isOpen, onClose, onCancel }) => {
	const [filesToUpload, setFilesToUpload] = useState([])
	const fileContext = useFileContext()

	const handleFilesChange = (files) => {
		setFilesToUpload([...files])
	};

	const handleUpload = async () => {

		await fileContext.upload(filesToUpload)
	}
	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			scroll='body'
		>
			<DialogTitle>Upload files</DialogTitle>

			<DialogContent dividers={true}>
				<FileUpload
					multiFile={true}
					onFilesChange={handleFilesChange}
					onContextReady={(context) => { }}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onCancel}>Cancel</Button>
				<Button
					type='submit'
					variant='contained'
					onClick={handleUpload}
				>
					Upload
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default FileUploadFeature;