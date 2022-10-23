import Message from '../components/message';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase';
import { toast } from 'react-toastify';

const Details = () => {
  const router = useRouter();
  const routeData = router.query;
  const [message, setMessage] = useState('');
  const [allMessage, setAllMessages] = useState([]);

  return (
    <div>
      <Message {...routeData}></Message>
    </div>
  );
};

export default Details;
