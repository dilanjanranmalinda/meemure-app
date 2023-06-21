import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

// Define the form inputs as a TypeScript interface
interface FormInputs {
  name: string;
  phone: string;
  email: string;
  address: string;
  pax: number;
  package: string;
  checkIn: Date;
  checkOut: Date;
  additionalFeatures: boolean;
}

// Define the BookingForm component
const BookingForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  // Define the function to handle form submission
  const onSubmit = (data: FormInputs) => {
    console.log(data); // or submit the data to an API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "20px" }}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            style={{ marginBottom: "2rem" }}
            label="Name"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        defaultValue=""
        rules={{ required: "Address is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Address"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "2rem" }}
            multiline
            minRows={4}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            style={{ marginBottom: "2rem" }}
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        rules={{
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]*$/,
            message: "Invalid phone number",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            style={{ marginBottom: "2rem" }}
            label="Phone"
            variant="outlined"
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        )}
      />

      <Controller
        name="pax"
        control={control}
        defaultValue={1}
        rules={{ required: "Passenger count is required" }}
        render={({ field }) => (
          <TextField
            style={{ marginBottom: "2rem" }}
            {...field}
            type="number"
            label="Pax"
            variant="outlined"
            fullWidth
            error={!!errors.pax}
            helperText={errors.pax?.message}
          />
        )}
      />
      <FormControl sx={{ minWidth: "20vh" }}>
        <InputLabel>Package</InputLabel>
        <Controller
          name="package"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              sx={{ marginBottom: "2rem" }}
              label="Selected Package"
              error={!!errors.package}
            >
              <MenuItem value="oneday">One Day</MenuItem>
              <MenuItem value="twodays">Two Days</MenuItem>
              <MenuItem value="threedays">Three Days</MenuItem>
            </Select>
          )}
        />
        {errors.package && <div>This field is required</div>}
      </FormControl>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="checkIn"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                sx={{ marginBottom: "2rem" }}
                {...field}
                label="Check-in Date"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="checkOut"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                sx={{ marginBottom: "2rem" }}
                {...field}
                label="Check-out Date"
              />
            )}
          />
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Controller
            name="additionalFeatures"
            control={control}
            defaultValue={false}
            render={({ field }) => <Checkbox {...field} color="primary" />}
          />
        }
        label="Additional Features"
      />
      <Button type="submit" variant="contained" color="primary">
        Book Now
      </Button>
    </form>
  );
};

export default BookingForm;
