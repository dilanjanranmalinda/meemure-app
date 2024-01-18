import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import countries from "country-list";
import { FormHelperText, Typography } from "@mui/material";

// Define the form inputs as a TypeScript interface
interface FormInputs {
  name: string;
  from: string;
  phone: string;
  email: string;
  address: string;
  pax: number;
  package: string;
  place: string;
  checkIn: Date;
  transportation: boolean;
}

// Define the BookingForm component
const BookingForm = ({ date }: any) => {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>();

  useEffect(() => {
    if (!date) {
      setError("checkIn", {
        message: "Please select a Date from the Calender!",
      });
    } else {
      setValue("checkIn", date);
      clearErrors("checkIn");
    }
  }, [date]);

  const [selectedPackage, setSelectedPackage] = useState(false);

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
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
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

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="package"
            control={control}
            defaultValue=""
            rules={{ required: "Package is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                style={{ marginBottom: "2rem" }}
                onChange={(e) => {
                  setValue("package", e.target.value);
                  setSelectedPackage(true);
                }}
                select
                label="Package"
                variant="outlined"
                fullWidth
                error={!!errors.package}
                helperText={errors.package?.message}
              >
                <MenuItem value="oneday">One Day</MenuItem>
                <MenuItem value="twodays">Two Days</MenuItem>
                <MenuItem value="threedays">Three Days</MenuItem>
              </TextField>
            )}
          />
        </Grid>
        {selectedPackage && (
          <Grid item xs={12} sm={6}>
            <Controller
              name="place"
              control={control}
              defaultValue=""
              rules={{ required: "Place is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  style={{ marginBottom: "2rem" }}
                  select
                  label="Place"
                  variant="filled"
                  fullWidth
                  error={!!errors.place}
                  helperText={errors.place?.message}
                >
                  <MenuItem value="7fall">7Fall</MenuItem>
                  <MenuItem value="meemure">Meemure Village</MenuItem>
                </TextField>
              )}
            />
          </Grid>
        )}
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="from"
            control={control}
            defaultValue=""
            rules={{ required: "Country is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                style={{ marginBottom: "2rem" }}
                select
                label="From"
                variant="outlined"
                fullWidth
                error={!!errors.from}
                helperText={errors.from?.message}
              >
                {countries.getData().map((country, index) => (
                  <MenuItem key={index} value={country.code}>
                    {country.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="pax"
            control={control}
            defaultValue={1}
            rules={{ required: "Pax count is required" }}
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
        </Grid>
      </Grid>
      {errors.checkIn && (
        <FormHelperText error={!!errors.checkIn}>
          {errors.checkIn?.message}
        </FormHelperText>
      )}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8}>
          <FormControlLabel
            control={
              <Controller
                name="transportation"
                control={control}
                defaultValue={false}
                render={({ field }) => <Checkbox {...field} color="primary" />}
              />
            }
            label={
              <Typography
                variant="body2"
                display="flex"
                gap={1}
                justifyItems="center"
              >
                Transportaion
                <Typography variant="caption" color="yellow">
                  (Additional Charges may apply)
                </Typography>
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} justifyContent="right" display="flex">
          <Button type="submit" variant="contained" color="primary">
            Book Now
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BookingForm;
