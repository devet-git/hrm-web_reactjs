import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useEmployee } from 'src/hooks/use-employee';
import FileDataTable from 'src/sections/files/FileDataTable';
import { useFileContext } from 'src/contexts/FileContext';
import EmployeeAddNewFormDialog from 'src/sections/employees/EmployeeAddNew';
import FileUploadFeature from 'src/sections/files/FileUploadFeature';


const Page = () => {
	// const [employees, setEmployees] = useState(null)
	const [isOpenUploadDialog, setIsOpenUploadDialog] = useState(false)
	const { fileList } = useFileContext();

	return (
		<>
			<FileUploadFeature
				isOpen={isOpenUploadDialog}
				onClose={() => setIsOpenUploadDialog(false)}
				onCancel={() => setIsOpenUploadDialog(false)}
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
									Files
								</Typography>
								<Stack
									alignItems="center"
									direction="row"
									spacing={1}
								>
									{/* <Button
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
									</Button> */}
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
									onClick={() => setIsOpenUploadDialog(true)}
								>
									Add
								</Button>
							</div>
						</Stack>
						{/* <EmployeesSearch /> */}
						<FileDataTable data={fileList} />
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

