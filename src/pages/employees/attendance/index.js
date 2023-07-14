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
import EmployeesDataTable from 'src/sections/employees/EmployeesDataTable';
import EmployeeAddNewFormDialog from 'src/sections/employees/EmployeeAddNew';
import { useEmployeeContext } from 'src/contexts/EmployeeContext';
import { useEmployee } from 'src/hooks/use-employee';


const Page = () => {
	// const [employees, setEmployees] = useState(null)
	const [isOpenAddNewDialog, setIsOpenAddNewDialog] = useState(false)
	const { employeeList } = useEmployee();
	const employeeContext = useEmployeeContext();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			position => {
				console.log("Latitude:", position.coords.latitude);
				console.log("Longitude:", position.coords.longitude);
			},
			error => {
				console.error(error);
			}
		);
	}, [])



	return (
		<>
			Attendance
		</>
	);
};

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);
export default Page;

