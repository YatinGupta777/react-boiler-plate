import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CustomAlert from '../components/common/CustomAlert';
import { showAlert } from '../reducers/alert';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAlert({ alertSeverity: 'success', message: 'Hello' }));
  }, []);

  return (
    <div>
      Hello
      <CustomAlert />
    </div>
  );
}

export default Home;
