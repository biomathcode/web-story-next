import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../axios';




export interface ColourOption {
     value: string;
     label: string;
     color: string;
     isFixed?: boolean;
     isDisabled?: boolean;
  }

export const colourOptions:  ColourOption[] = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  

function NavBar() {

  const [user, setUser] = useState( {
    name: "Pratik ", 
    publication: {
        posts: [
            {
                title: 'this is the title'
            }
        ]
    }
  });

  const [loading, setLoading] = useState(false);


  const options = user?.publication?.posts.map((el) => {
    return ({
        value: el.title, 
        label: el.title, 
    })
  })

  console.log(options);

  useEffect(() => {
    async function fetchFunction() {
      const response = await axios(config);

      setUser(response.data.data.user);
    
      console.log(response.data.data.user);
      return response.data;
    }
    
    fetchFunction()
    setLoading(true);

    

  },[])
    return ( 
        loading ?
        <nav 
    
        style={{
            width: '100vw', 
            height: '60px',
            background: '#eee', 
            margin: '0px', 
            padding: '0px 20px', 
            display: 'flex', 
            alignContent: 'center', 
            alignItems: 'center', 
            justifyContent: 'center'
        }}
        className="flex center" >
            <Select
            className='dropdown'
            styles={{
                
            }}
            defaultValue={options[0]}
            options={options}
            />
            <select>
              
            <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            


            </select>
            
            <fieldset>
              <label>
                Username
              </label>
              <input value={user?.name} />
            </fieldset>


        </nav>
        : 
        null
     );
}

export default NavBar;