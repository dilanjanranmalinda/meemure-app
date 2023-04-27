import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm, Controller } from "react-hook-form";

// Define the form inputs as a TypeScript interface
interface FormInputs {
  name: string;
  phone: string;
  email: string;
  address: string;
  passengerCount: number;
  package: string;
  bookingDate: string;
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
        name="passengerCount"
        control={control}
        defaultValue={1}
        rules={{ required: "Passenger count is required" }}
        render={({ field }) => (
          <TextField
            style={{ marginBottom: "2rem" }}
            {...field}
            type="number"
            label="Passenger Count"
            variant="outlined"
            fullWidth
            error={!!errors.passengerCount}
            helperText={errors.passengerCount?.message}
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
