import React, { useState } from 'react';
import axios from 'axios';


function Priyanga() {
  const [guideno, setguideno] = useState();
  const [guidename, setguidename] = useState('');
  const [locality, setlocality] = useState('');
  const [language, setlanguage] = useState('');
  const [driver, setdriver] = useState('');

  const handleguidenoChange = (e) => {
    setguideno(e.target.value);
  };

  const handleguidenameChange = (e) => {
    setguidename(e.target.value);
  };

  const handlelocalityChange = (e) => {
    setlocality(e.target.value);
  };

  const handlelanguageChange = (e) => {
    setlanguage(e.target.value);
  };
  const handledriverChange = (e) => {
    setdriver(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const chuma = { "guideno" : guideno , "guidename" : guidename , "locality" : locality , "language" : language ,"driver":driver };
    axios.post("http://localhost:8080/post",chuma);

    console.log('Form submitted');

  };

  return (
    <div className="container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Enter guide details</h2>
        <div className="form-group">
          <label htmlFor="name">guideno:</label>
          <input
            type="text"
            id="guideno"
            name="guideno"
            value={guideno}
            onChange={handleguidenoChange}
          />
        </div><div className="form-group">
          <label htmlFor="guidename">guidename:</label>
          <input
            type="text"
            id="guidename"
            name="guidename"
            value={guidename}
            onChange={handleguidenameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="locality">locality</label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={locality}
            onChange={handlelocalityChange}
          />
        </div >
        <div className="form-group">
          <label htmlFor="language">language:</label>
          <input
            type="language"
            id="language"
            name="language"
            value={language}
            onChange={handlelanguageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="driver">driver</label>
          <input
            type="driver"
            id="driver"
            name="driver"
            value={driver}
            onChange={handledriverChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Priyanga;