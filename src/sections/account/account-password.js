import { useCallback, useState } from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	Stack,
	TextField
} from '@mui/material';

export const AccountUpdatePassword = () => {
	const [values, setValues] = useState({
		current: '',
		new: '',
		confirm: ''
	});

	const handleChange = useCallback(
		(event) => {
			setValues((prevState) => ({
				...prevState,
				[event.target.name]: event.target.value
			}));
		},
		[]
	);

	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();
		},
		[]
	);

	return (
		<form onSubmit={handleSubmit}>
			<Card>
				<CardHeader
					subheader="Update password"
					title="Password"
				/>
				<Divider />
				<CardContent>
					<Stack
						spacing={3}
						sx={{ maxWidth: 400 }}
					>
						<TextField
							fullWidth
							label="Current password"
							name="current"
							onChange={handleChange}
							type="password"
							value={values.current}
						/>
						<TextField
							fullWidth
							label="New password"
							name="new"
							onChange={handleChange}
							type="password"
							value={values.new}
						/>
						<TextField
							fullWidth
							label="Confirm password"
							name="confirm"
							onChange={handleChange}
							type="password"
							value={values.confirm}
						/>
					</Stack>
				</CardContent>
				<Divider />
				<CardActions sx={{ justifyContent: 'flex-end' }}>
					<Button variant="contained">
						Update
					</Button>
				</CardActions>
			</Card>
		</form>
	);
};
