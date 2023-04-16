import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { AccountProfile } from 'src/sections/account/account-profile';
import { AccountProfileDetails } from 'src/sections/account/account-profile-details';
import { AccountUpdatePassword } from 'src/sections/account/account-password';

const Page = () => (
	<>
		<Head>
			<title>
				Account | Devet HRM
			</title>
		</Head>
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				py: 1
			}}
		>
			<Container maxWidth="lg">
				<Stack spacing={3}>
					<div>
						<Typography variant="h4">
							Account
						</Typography>
					</div>
					<div>
						<Grid
							container
							spacing={3}
						>
							<Grid
								xs={12}
								md={6}
								lg={4}
							>
								<AccountProfile />
							</Grid>
							<Grid
								xs={12}
								md={6}
								lg={8}
							>
								{/* <AccountProfileDetails /> */}
								<AccountUpdatePassword />
							</Grid>
						</Grid>
					</div>
				</Stack>
			</Container>
		</Box>
	</>
);

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);

export default Page;
