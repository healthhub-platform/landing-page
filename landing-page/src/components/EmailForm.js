// EmailForm.js
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './EmailForm.css';


const firebaseConfig = {
  apiKey: "AIzaSyCYpmhjLbR2U0FuDbKgAC8y02zPS3OVgyg",
  authDomain: "healthhub-bu.firebaseapp.com",
  projectId: "healthhub-bu",
  storageBucket: "healthhub-bu.appspot.com",
  messagingSenderId: "426978765176",
  appId: "1:426978765176:web:77b1de9b87bafdac57408d",
  measurementId: "G-BPD7M2E7Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the email to a 'subscribers' collection in Firestore
      //await firestore.collection('subscribers').add({ name, email });
      const docRef = await addDoc(collection(firestore, "subscribers"), {
        name,
        email
      });
      console.log("Document written with ID: ", docRef.id);
      setSubmitted(true);
    } catch (e) {
      console.error('Error submitting email:', e);
    }
  };

  return (
    <div className="email-form-container">
      <div className='form-box'> 
      {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>Thank you for subscribing!</p>
        )}
      </div>
    </div>
  );
};

export default EmailForm;