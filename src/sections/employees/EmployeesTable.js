import * as React from 'react';
import { DataGrid, GridLogicOperator, GridToolbar } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputAdornment, OutlinedInput, SvgIcon, Tooltip } from '@mui/material';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { useEmployeeContext } from 'src/contexts/EmployeeContext';

const columns = [

	{ field: 'firstName', headerName: 'First name', width: 130, filterable: true },
	{ field: 'lastName', headerName: 'Last name', width: 130, filterable: true },
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
	const { deleteEmployee } = useEmployeeContext();

	const handleUpdate = () => {
		router.push(`employees/${empId}`)
	}
	const handleDelete = async () => {
		await deleteEmployee(empId);
		setIsOpenDialog(true)
	}
	const handleCloseDialog = () => setIsOpenDialog(false)

	return (
		<>
			<Tooltip title="Update">
				<IconButton onClick={handleUpdate}>
					<AiOutlineEdit />
				</IconButton>
			</Tooltip>
			<IconButton onClick={() => setIsOpenDialog(true)}>
				<AiOutlineDelete />
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
	const [searchValue, setSearchValue] = React.useState("")

	const EmployeeSearch = () => {
		return (
			<Card sx={{ p: 2 }}>
				<OutlinedInput
					autoFocus
					type='text'
					fullWidth
					placeholder="Search employee"
					startAdornment={(
						<InputAdornment position="start">
							<SvgIcon
								color="action"
								fontSize="small"
							>
								<MagnifyingGlassIcon />
							</SvgIcon>
						</InputAdornment>
					)}
					sx={{ maxWidth: 500 }}
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</Card>
		)
	}

	return (
		<>
			<EmployeeSearch />
			<div style={{ height: 350, width: '100%' }}>
				<DataGrid
					// checkboxSelection
					rows={data || []}
					columns={columns}
					disableRowSelectionOnClick
					// pageSize={5}
					// rowsPerPageOptions={[5, 10, 20]}
					// onRowSelectionModelChange={ids => {
					// 	const selectedRowsData = ids.map((id) => data.find((row) => row.id === id));
					// 	console.log(selectedRowsData)
					// }}
					// slots={{ toolbar: GridToolbar }}
					filterModel={{
						items: [],
						quickFilterValues: [searchValue],
						logicOperator: GridLogicOperator.Or,
					}}
					disableColumnFilter
				/>
				{/* <Button variant='outlined'>Save change</Button> */}
			</div>
		</>
	);
}
