import React from 'react';
import {Dialog, Grid} from '@mui/material';
import * as yup from 'yup';
import {useFormik} from 'formik';
import FormikTemplate from '../formik/FormikTemplate';
import {IAuthModal} from '../../types/IAuthModal';
import {StyledButton} from '../../ui/generalComponents/StyledButton';
import {restaurantApi} from '../../services/restaurantApi';
import {createRestaurant} from '../formik/restaurantModalValues';

const validationSchemaRestaurant = yup.object({
  name: yup.string().required('Name is required').max(16, 'Max length 16'),
});
export function RestaurantModal({handleClose, open,flag,data}: any) {
  const [create]= restaurantApi.useCreateRestaurantMutation();

  const [update]= restaurantApi.useUpdateOneRestaurantMutation();
  const {resetForm, handleBlur, handleChange, handleSubmit, touched, values, errors} = useFormik({
    initialValues: {
      name: data.name
    } as any,
    validationSchema: validationSchemaRestaurant,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        console.log(JSON.stringify(values, null, 2));
        let response;
        if (flag) response = await create({name:values.name}).unwrap();
        else response = await update({body:{name:values.name},id:data.name}).unwrap();
        console.log('DATA');
        console.log(response);
        resetForm();
        return handleClose();

      } catch (e: any) {
        return alert(JSON.stringify(e.data.message));
      }
    },

  });
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>

        <Grid container spacing={1} sx={{padding: '20px'}}>
          <Grid item xs={12}>
            <h4>Create Restaurant</h4>
          </Grid>
          <FormikTemplate config={createRestaurant} handleChange={handleChange} touched={touched}
                          errors={errors}
                          handleBlur={handleBlur} values={values}/>

          <Grid item xs={6} display="flex" justifyContent="end">
            <StyledButton type="submit">Submit</StyledButton>
          </Grid>
          <Grid item xs={3} display="flex" justifyContent="end">
            <StyledButton onClick={() => resetForm()}>Clear</StyledButton>
          </Grid>
          <Grid item xs={3} display="flex" justifyContent="end">
            <StyledButton onClick={handleClose}>Cancel</StyledButton>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
}
