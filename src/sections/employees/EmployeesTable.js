import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip } from '@mui/material';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
const columns = [
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{
		field: 'gender', headerName: 'Gender', width: 100,
		valueGetter: (params) => {
			let gender = ["Female", "Male", "Other"]
			return gender[params.row.gender]
		}
	},
	{ field: 'address', headerName: 'Address', width: 250 },
	{
		field: 'dob', headerName: 'Day of Birth', width: 130,
		valueGetter: (params) => format(new Date(params.row.dob), 'dd/MM/yyyy') || ""
	},
	{
		field: 'createdDate',
		headerName: 'Date create',
		description: 'This column has a value getter and is not sortable.',
		width: 130,
		valueGetter: (params) => format(new Date(params.row.createDate), 'dd/MM/yyyy')
	},
	{
		field: 'updatedDate',
		headerName: 'Date update',
		description: 'This column has a value getter and is not sortable.',
		width: 130,
		valueGetter: (params) => params.row.updateDate && format(new Date(params.row.updateDate), 'dd/MM/yyyy')
	},
	{
		field: 'action',
		headerName: 'Action',
		type: 'actions',
		renderCell: (params) => (<Actions empId={params.row.id} />),
	},
];
const Actions = ({ empId }) => {
	const router = useRouter()
	const [isOpenDialog, setIsOpenDialog] = React.useState(false)

	const handleUpdate = () => {
		router.push(`employees/${empId}`)
	}
	const handleDelete = () => {
		setIsOpenDialog(true)
	}
	const handleCloseDialog = () => setIsOpenDialog(false)

	return (
		<>
			<Tooltip title="Update">
				<IconButton onClick={handleUpdate}>
					<AiOutlineEdit color='blue' />
				</IconButton>
			</Tooltip>
			<IconButton onClick={() => setIsOpenDialog(true)}>
				<AiOutlineDelete color='red' />
			</IconButton>
			<Dialog
				open={isOpenDialog}
				onClose={handleCloseDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Are you sure delete this employee?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						You should consider carefully before deleting your employee
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button onClick={handleDelete}
						autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default function EmployeesDataTable({ data }) {
	return (
		<div style={{ height: 350, width: '100%' }}>
			<DataGrid

				rows={data || []}
				columns={columns}
				// pageSize={5}
				// rowsPerPageOptions={[5, 10, 20]}
				checkboxSelection
				onRowSelectionModelChange={ids => {
					const selectedRowsData = ids.map((id) => data.find((row) => row.id === id));
					console.log(selectedRowsData)
				}}
			/>
			<Button
				variant='outlined'
				onClick={() => {
					return toast("Saved", { type: 'success' })
				}}>Save change</Button>
		</div>
	);
}