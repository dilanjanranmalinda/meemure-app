import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Fragment, forwardRef, useEffect, useState } from "react";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DisplayData from "./DisplayData";
import ConfirmationMessage from "./ConfirmationMessage";
import { scroller } from "react-scroll";

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
  const [referenceNumber, setReferenceNumber] = useState<String | null>(null);

  const onConfirm = async () => {
    setLoading(true);
    try {
      setConfirm(true);
      setReferenceNumber("Tsdsd-sdsd-sdsd-2323");
    } catch (e) {
      console.log("e", e);
    }
    setLoading(false);
  };

  const handleClose = () => {
    setData(null);
    setConfirm(false);
    setLoading(false);
  };

  const onContactUs = () => {
    handleClose();
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
    });
  };

  console.log("data", data);

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
        {!confirm && data && (
          <DisplayData {...{ onConfirm, data, onCancel: handleClose }} />
        )}
      </Dialog>
    </Fragment>
  );
}
