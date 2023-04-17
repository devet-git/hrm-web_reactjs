import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import { useEmployee } from "src/hooks/use-employee";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import * as Yup from "yup";

export const AddInsurance = ({ employeeId }) => {
  const employee = useEmployee();
  const { employeeList } = useEmployee();
  const employeeData = employeeList.find((emp) => emp.id === employeeId);

  const formik = useFormik({
    initialValues: {
      firstName: employeeData?.firstName,
      lastName: employeeData?.lastName,
      address: employeeData?.address,
      dob: dayjs(new Date(employeeData?.dob)),
      gender: employeeData?.gender,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      address: Yup.string().max(255).required("Address is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await employee.updateEmployee(employeeId, {
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.address,
          dob: values.dob.format("DD/MM/YYYY"),
          gender: values.gender,
        });
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  return (
    <form
      // autoComplete="off"
      noValidate
      onSubmit={formik.handleSubmit}
    >
      <Card>
        <CardHeader subheader="The information can be edited" title="Info" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  // helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  error={!!(formik.touched.firstName && formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  label="Last name"
                  name="lastName"
                  error={!!(formik.touched.lastName && formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <DatePicker
                  label="Date of birth"
                  sx={{ width: "100%" }}
                  value={formik.values.dob}
                  onChange={(value) => {
                    formik.setFieldValue("dob", value);
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  label="Address"
                  name="address"
                  error={!!(formik.touched.address && formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl sx={{ mb: 1, mt: 1 }} fullWidth>
                  <Select
                    margin="dense"
                    // labelId="gender"
                    // id="gender"
                    // label="Gender"
                    name="gender"
                    value={formik.values.gender}
                    onChange={(e) => {
                      formik.setFieldValue("gender", e.target.value);
                    }}
                  >
                    <MenuItem value={0}>Female</MenuItem>
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" type="submit">
            Update
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
