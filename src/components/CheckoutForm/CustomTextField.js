import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

// must included spreaded out {field} in order to fill out form correctly! 

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            name={name}
            label={label}
            required={required}
            fullWidth
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;


// DOES NOT fill out address form correctly, returns empty strings 
// import React, { useState } from 'react';
// import { TextField, Grid } from '@material-ui/core';
// import { useFormContext, Controller } from 'react-hook-form';

// const FormInput = ({name, label }) => {
//    const { control } = useFormContext();

//    return ( 
//       <Grid item xs={12} sm={6}>
//          <Controller
//                control={control}
//                name={name}
//                defaultValue=""
//                render={({ field }) => 
//                <TextField fullWidth label={label} required />}
//             />
//       </Grid>
//     );
// }
 
// export default FormInput;