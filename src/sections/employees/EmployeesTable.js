import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { Button, IconButton } from '@mui/material';
import { BiBullseye } from "react-icons/bi"
import { useRouter } from 'next/router';
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
		field: 'detail',
		headerName: 'Detail',
		type: 'actions',
		renderCell: (params) => (<SeeEmployeeDetail empId={params.row.id} />),
	},
];
const SeeEmployeeDetail = ({ empId }) => {
	const router = useRouter()
	const handleClick = () => {
		router.push(`employees/${empId}`)
	}
	return (
		<IconButton onClick={handleClick}>
			<BiBullseye />
		</IconButton>
	)
}
export default function EmployeesTable2({ data }) {
	return (
		<div style={{ height: 350, width: '100%' }}>
			<DataGrid
				rows={data || []}
				columns={columns}
				// pageSize={5}
				// rowsPerPageOptions={[5, 10, 20]}
				checkboxSelection
			/>
			<Button variant='outlined'>Save change</Button>
		</div>
	);
}