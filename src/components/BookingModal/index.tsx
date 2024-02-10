import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Fragment, forwardRef, useState } from "react";
import { Alert, Box, CircularProgress, IconButton } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DisplayData from "./DisplayData";
import ConfirmationMessage from "./ConfirmationMessage";
import { scroller } from "react-scroll";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase.config";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BookingModal({ data, setData }: any) {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [isError, setIsError] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState<String | null>(null);

  const onConfirm = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "booking"), data);
      if (docRef.id) {
        const response = await fetch(baseUrl + "/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, referenceNumber: docRef.id }),
        });

        const result = await response.json();
        console.log(result);
      }
      setReferenceNumber(docRef.id);
      setLoading(false);
      setIsError(false);
      setConfirm(true);
    } catch (e) {
      console.log("e", e);
      setIsError(true);
      setLoading(false);
    }
    setLoading(false);
  };

  const handleClose = () => {
    setData(null);
    setConfirm(false);
    setLoading(false);
    setIsError(false);
  };

  const onContactUs = () => {
    handleClose();
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <Fragment>
      <Dialog
        open={data ? true : false}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => (loading ? null : handleClose)}
        aria-describedby="alert-dialog-slide-description"
      >
        {!loading && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                color: "white",
              }}
            >
              <AiOutlineCloseCircle />
            </IconButton>
          </Box>
        )}
        {isError && (
          <Alert severity="error">
            Sorry, Something went wrong, please contact us through phone or
            email.
          </Alert>
        )}
        {confirm && (
          <Box
            display="flex"
            flexDirection="column"
            px={2}
            pb={2}
            pt={loading ? 2 : 0}
            gap={2}
          >
            {loading ? (
              <CircularProgress sx={{ m: 1 }} />
            ) : (
              referenceNumber && (
                <ConfirmationMessage {...{ referenceNumber, onContactUs }} />
              )
            )}
          </Box>
        )}
        {!loading && !confirm && data && (
          <DisplayData {...{ onConfirm, data, onCancel: handleClose }} />
        )}
      </Dialog>
    </Fragment>
  );
}
