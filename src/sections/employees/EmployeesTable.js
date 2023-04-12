import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';

const columns = [
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{ field: 'address', headerName: 'Address', width: 200 },
	{
		field: 'dob', headerName: 'Day of Birth', width: 130, valueGetter: (params) => format(new Date(params.row.dob), 'dd/MM/yyyy') || ""
	},
	// {
	// 	field: 'fullName',
	// 	headerName: 'Full name',
	// 	description: 'This column has a value getter and is not sortable.',
	// 	sortable: false,
	// 	width: 160,
	// 	valueGetter: (params) =>
	// 		`${params.row.lastName || ''} ${params.row.firstName || ''}`,
	// },
	{
		field: 'createdDate',
		headerName: 'Date create',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 130,
		valueGetter: (params) => format(new Date(params.row.createDate), 'dd/MM/yyyy')
	},
];

export default function EmployeesTable2({ data }) {
	return (
		<div style={{ height: 350, width: '100%' }}>
			<DataGrid
				rows={data || []}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
}