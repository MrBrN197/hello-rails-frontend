import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../redux/message/message';

const Greeting = () => {
  const message = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMessage());
  }, []);

  return <div>{`Greeting: ${message}`}</div>;
};

export default Greeting;
