import React, {useState, useEffect} from 'react';
import useAddForm from '../hooks/customHooks';
import Job from "./Job";

export const Jobs = () => {
const { handleSubmit ,handleInputChange} = useAddForm()
  const [state, setState] = useState({offers:[]});

  useEffect(() => {
    const url = "/offers";
    fetch(url)
      .then(res => {
        return res.json();
      }).then(offers => {
        setState({ offers })
      });
  },[])

    return (
      <div>
        {state.offers.map((e, i) => <Job key={i} offer={e} />)}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>

        <div>
          <label htmlFor="company">company</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>

        <div>
          <label htmlFor="salary">salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>
        <div>
          <label htmlFor="city">city</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleInputChange}
            autoComplete="password"
          />
        </div>
        <button type="submit">Add</button>
      </form>

      </div>
      
    );
}
export default Jobs;