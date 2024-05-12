import { Box, Typography, Button } from "@mui/material";

const ConfirmationMessage = ({
  referenceNumber,
  onContactUs,
  onOnlinePayment,
}: any) => {
  return (
    <Box textAlign="center" p={3} display="flex" gap={2} flexDirection="column">
      <Typography variant="h3" color="primary">
        Thank You for Choosing Our Services
      </Typography>
      <Typography variant="h5" color="orange">
        Reference Number: {referenceNumber}
      </Typography>
      <Typography variant="body1">
        Your booking has been successfully reserved. Our dedicated team of
        agents will promptly reach out to you for confirmation and finalization
        details.
      </Typography>
      <Typography variant="caption">
        Should you have any additional inquiries or require further assistance,
        please do not hesitate to contact us. We are here to ensure your
        experience with us is seamless and enjoyable.
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={onOnlinePayment}
        style={{ marginTop: "20px" }}
      >
        Online Payment
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onContactUs}
        style={{ marginTop: "20px" }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default ConfirmationMessage;
