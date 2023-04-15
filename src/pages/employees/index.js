import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { EmployeesSearch } from 'src/sections/employees/emplyees-search';
import { applyPagination } from 'src/utils/apply-pagination';
import employeeService from 'src/services/employeeService';
import EmployeesDataTable from 'src/sections/employees/EmployeesTable';
import EmployeeAddNewFormDialog from 'src/sections/employees/employees-add-new';
import { useEmployeeContext } from 'src/contexts/EmployeeContext';
import { useEmployee } from 'src/hooks/use-employee';

const now = new Date();


const Page = () => {
	// const [employees, setEmployees] = useState(null)
	const [isOpenAddNewDialog, setIsOpenAddNewDialog] = useState(false)
	const { employeeList } = useEmployee();
	// useEffect(() => {
	// 	(async () => {
	// 		let res = await employeeService.getAll()
	// 		console.log(res.data);
	// 		res && res.statusCode === 200 && setEmployees(res.data)
	// 	})()
	// }, [])

	return (
		<>
			<EmployeeAddNewFormDialog
				isOpen={isOpenAddNewDialog}
				// onClose={() => setIsOpenAddNewDialog(false)}
				onCancel={() => setIsOpenAddNewDialog(false)}
			/>
			<Head>
				<title>
					Employees | Devet HRM
				</title>
			</Head>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					pb: 7, pt: 2.5
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
									onClick={() => setIsOpenAddNewDialog(true)}
								>
									Add
								</Button>
							</div>
						</Stack>
						{/* <EmployeesSearch /> */}
						<EmployeesDataTable data={employeeList} />
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

