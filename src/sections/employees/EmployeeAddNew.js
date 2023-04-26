import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, MenuItem, NativeSelect, Select } from '@mui/material';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEmployee } from 'src/hooks/use-employee';
import { useDepartmentContext } from 'src/contexts/DepartmentContext';



export default function EmployeeAddNewFormDialog({ isOpen, onClose, onCancel, onSubmit }) {
	const employee = useEmployee()
	const firstNameRef = React.useRef(null);
	const { departmentList } = useDepartmentContext();

	const handleClearForm = () => {
		formik.resetForm();
		firstNameRef.current.focus();
	}
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			address: "",
			email: "",
			gender: 1,
			departmentId: departmentList[0]?.id || '',
			dob: dayjs().add(-20, 'year'),
		},
		validationSchema: Yup.object({
			firstName: Yup
				.string()
				.max(255)
				.required('First name is required'),
			lastName: Yup
				.string()
				.max(255)
				.required('Last name is required'),
			address: Yup
				.string()
				.max(255)
				.required('Address is required'),
			email: Yup
				.string()
				.email("Must be a valid email")
				.max(255)
				.required('Email is required'),
		}),
		// enableReinitialize: true,
		onSubmit: async (values, helpers) => {
			try {
				await employee.createEmployee({
					firstName: values.firstName,
					lastName: values.lastName,
					address: values.address,
					email: values.email,
					gender: values.gender,
					dob: values.dob.format("DD/MM/YYYY"),
					departmentId: values.departmentId
				})
			} catch (err) {
				helpers.setStatus({ success: false });
				helpers.setErrors({ submit: err.message });
				helpers.setSubmitting(false);
			}
		}
	});

	return (
		<div>
			<Dialog
				open={isOpen}
				onClose={onClose}
				scroll='body'
			>
				<DialogTitle>Add employee</DialogTitle>
				<form
					noValidate
					onSubmit={formik.handleSubmit}
				>
					<DialogContent dividers={true}>
						{/* <DialogContentText>
						Please enter all field
					</DialogContentText> */}

						<TextField
							required
							autoFocus
							margin="dense"
							label="First name"
							name='firstName'
							type="text"
							inputRef={firstNameRef}
							error={!!(formik.touched.firstName && formik.errors.firstName)}
							helperText={formik.touched.firstName && formik.errors.firstName}
							value={formik.values.firstName}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							fullWidth
						/>
						<TextField
							required
							margin="dense"
							label="Last name"
							name='lastName'
							error={!!(formik.touched.lastName && formik.errors.lastName)}
							helperText={formik.touched.lastName && formik.errors.lastName}
							value={formik.values.lastName}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="text"
							fullWidth
						/>
						<TextField
							required
							margin="dense"
							label="Address"
							name='address'
							error={!!(formik.touched.address && formik.errors.address)}
							helperText={formik.touched.address && formik.errors.address}
							value={formik.values.address}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="text"
							fullWidth
						/>
						<TextField
							required
							margin="dense"
							label="Email"
							name='email'
							error={!!(formik.touched.email && formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
							value={formik.values.email}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							type="email"
							fullWidth
						/>

						<InputLabel sx={{ pt: 1, pl: 1 }}>Gender*</InputLabel>
						<FormControl
							sx={{ mb: 1, mt: 1 }}
							fullWidth
						>
							{/* <InputLabel id="demo-select-small"
							variant='outlined' >Gender</InputLabel> */}
							<Select
								margin='dense'
								// labelId="gender"
								// id="gender"
								// label="Gender"
								name='gender'
								value={formik.values.gender}
								onChange={(e) => { formik.setFieldValue("gender", e.target.value) }}
							>
								<MenuItem value={0}>Female</MenuItem>
								<MenuItem value={1}>Male</MenuItem>
								<MenuItem value={2}>Other</MenuItem>
							</Select>
						</FormControl>

						<InputLabel sx={{ pt: 1, pl: 1 }}>Department*</InputLabel>
						<FormControl
							sx={{ mb: 1, mt: 1 }}
							fullWidth
						>
							<Select
								margin='dense'
								name='department'
								value={formik.values.departmentId}
								onChange={(e) => { formik.setFieldValue("departmentId", e.target.value) }}
							>
								{departmentList?.map((de, index) => (
									<MenuItem
										key={index}
										value={de.id}
									>
										{de.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<DatePicker
							label="Date of birth"
							sx={{ width: "100%" }}
							value={formik.values.dob}
							onChange={(value) => {
								formik.setFieldValue("dob", value)
							}}
						/>

					</DialogContent>
					<DialogActions>
						<Button onClick={onCancel}>Cancel</Button>
						<Button onClick={handleClearForm}>Clear</Button>
						<Button
							type='submit'
							variant='contained'
						>
							Create
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
}