import React from "react";
import { useForm, Controller } from "react-hook-form";
// import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";

// Define the form inputs as a TypeScript interface
interface FormInputs {
  name: string;
  phone: string;
  email: string;
  passengerCount: number;
  package: string;
  bookingDate: string;
  additionalFeatures: boolean;
}

// Define the packages data as an array of objects
const packages = [
  {
    value: "package1",
    label: "Package 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    value: "package2",
    label: "Package 2",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    value: "package3",
    label: "Package 3",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

// Define the styles for the form
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
  })
);

// Define the BookingForm component
const BookingForm: React.FC = () => {
  const classes = useStyles();
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <TextField
            {...field}
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

      {/* <Controller
        name="bookingDate"
        control={control}
        defaultValue={String(new Date())}
        rules={{ required: "Booking date is required" }}
        render={({ field }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              {...field}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Booking Date"
              value={field.value}
              onChange={(date) => field.onChange(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              error={!!errors.bookingDate}
              helperText={errors.bookingDate?.message}
            />
          </MuiPickersUtilsProvider>
        )}
      /> */}

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
