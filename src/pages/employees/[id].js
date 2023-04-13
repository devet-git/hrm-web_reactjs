
import { useRouter } from 'next/router';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<>
			<h1>{id}</h1>
		</>
	);
};

Page.getLayout = (page) => (
	<DashboardLayout>
		{page}
	</DashboardLayout>
);
export default Page;

