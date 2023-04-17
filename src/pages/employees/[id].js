import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEmployee } from "src/hooks/use-employee";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { EmployeeProfile } from "src/sections/employees/EmployeeProfile";
import { EmployeeProfileDetails } from "src/sections/employees/EmployeeProfileDetails";
import { AddInsurance } from "src/sections/employees/addInsurance";
import { useEffect, useState } from "react";
import { useInsuranceContext } from "src/contexts/InsuranceContext";
import employeeService from "src/services/employeeService";
import { UpdateInsurance } from "src/sections/employees/updateInsurance";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const insuranceContext = useInsuranceContext();
  const [insurancee, setInsurancee] = useState();
  useEffect(() => {
    (async () => {
      const insurances = await insuranceContext.getAllInsurance();
      console.log(insurances);
      const insuranceId = insurances.find((res) => res.employeeId === id);
      console.log(insuranceId);
      setInsurancee(insuranceId);
      if (insurancee === undefined) {
        return;
      }
    })();
  }, []);
  return (
    <>
      <Head>
        <title>Employee | Devet HRM</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            {/* <div>
							<Typography variant="h5">
								Employee Info
							</Typography>
						</div> */}
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4} item>
                  <EmployeeProfile employeeId={id} />
                </Grid>
                <Grid xs={12} md={6} lg={8} item>
                  <EmployeeProfileDetails employeeId={id} />
                </Grid>
                <Grid xs={12} md={6} lg={8} item>
                  {insurancee ? (
                    <UpdateInsurance info={insurancee} />
                  ) : (
                    <AddInsurance employeeId={id} />
                  )}
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
