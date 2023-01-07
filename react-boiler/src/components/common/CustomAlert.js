import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { closeAlert } from '../../reducers/alert';

function CustomAlert() {
  const dispatch = useDispatch();
  const openAlert = useSelector((state) => state.alert.alertStatus);
  const alertSeverity = useSelector((state) => state.alert.alertSeverity);
  const alertMessage = useSelector((state) => state.alert.message);
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeAlert());
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      dispatch(closeAlert());
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <Snackbar
      open={openAlert}
      onClose={handleAlertClose}
      id="alert-box"
    >
      <Alert onClose={handleAlertClose} severity={alertSeverity} sx={{ width: '100%' }}>
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}

export default CustomAlert;
