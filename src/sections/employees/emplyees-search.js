import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';

export const EmployeesSearch = () => (
	<Card sx={{ p: 2 }}>
		<OutlinedInput
			defaultValue=""
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
		/>
	</Card>
);
