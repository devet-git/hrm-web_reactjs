import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { EmployeesTable } from 'src/sections/employees/employees-table';
import { EmployeesSearch } from 'src/sections/employees/emplyees-search';
import { applyPagination } from 'src/utils/apply-pagination';
import employeeService from 'src/services/employeeService';
import apiConfig from 'src/config/api';
import endpointConst from 'src/constants/endpointConst';
import EmployeesTable2 from 'src/sections/employees/EmployeesTable';

const now = new Date();


const Page = () => {

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [dbEmployee, setDbEmployee] = useState(null)
	// const useEmployeeIds = (employees) => {
	// 	return useMemo(
	// 		() => {
	// 			return employees.map((emp) => emp.id);
	// 		},
	// 		[employees]
	// 	);
	// };
	// const useEmployees = (page, rowsPerPage) => {
	// 	return useMemo(
	// 		() => {
	// 			return applyPagination(dbEmployee, page, rowsPerPage);
	// 		},
	// 		[page, rowsPerPage]
	// 	);
	// };
	// const employees = useEmployees(page, rowsPerPage);
	// const employeesIds = useEmployeeIds(employees);
	// const EmployeesSelection = useSelection(employeesIds);

	const handlePageChange = useCallback(
		(event, value) => {
			setPage(value);
		},
		[]
	);

	const handleRowsPerPageChange = useCallback(
		(event) => {
			setRowsPerPage(event.target.value);
		},
		[]
	);
	useEffect(() => {
		(async () => {
			let res = await employeeService.getAll()
			setDbEmployee(res.data)
		})()
	}, [])
	return (
		<>
			<Head>
				<title>
					Employees | Devet HRM
				</title>
			</Head>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8
				}}
			>
				<Container maxWidth="xl">
					<Stack spacing={3}>
						<Stack
							direction="row"
							justifyContent="space-between"
							spacing={4}
						>
							<Stack spacing={1}>
								<Typography variant="h4">
									Employees
								</Typography>
								<Stack
									alignItems="center"
									direction="row"
									spacing={1}
								>
									<Button
										color="inherit"
										startIcon={(
											<SvgIcon fontSize="small">
												<ArrowUpOnSquareIcon />
											</SvgIcon>
										)}
									>
										Import
									</Button>
									<Button
										color="inherit"
										startIcon={(
											<SvgIcon fontSize="small">
												<ArrowDownOnSquareIcon />
											</SvgIcon>
										)}
									>
										Export
									</Button>
								</Stack>
							</Stack>
							<div>
								<Button
									startIcon={(
										<SvgIcon fontSize="small">
											<PlusIcon />
										</SvgIcon>
									)}
									variant="contained"
								>
									Add
								</Button>
							</div>
						</Stack>
						<EmployeesSearch />
						<EmployeesTable2 data={dbEmployee} />
						{/* <EmployeesTable
							count={dbEmployee?.length}
							items={dbEmployee || []}
						onDeselectAll={EmployeesSelection.handleDeselectAll}
						onDeselectOne={EmployeesSelection.handleDeselectOne}
						onPageChange={handlePageChange}
						onRowsPerPageChange={handleRowsPerPageChange}
						onSelectAll={EmployeesSelection.handleSelectAll}
						onSelectOne={EmployeesSelection.handleSelectOne}
						page={page}
						rowsPerPage={rowsPerPage}
						selected={EmployeesSelection.selected}
						/> */}
					</Stack>
				</Container>
			</Box>
		</>
	);
};

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);
export default Page;

