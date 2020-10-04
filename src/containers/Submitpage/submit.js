/*import React from "react";
import { Form, Field } from "@progress/kendo-react-form";
import "@progress/kendo-theme-material/dist/all.css";
 
const NativeInput = ({ label, value, onChange, onBlur, onFocus }) => (
  <label className="k-form-field">
    <span>{label}</span>
    <input
      className="k-textbox"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  </label>
);
 
const submitForm = () => {
  const handleSubmit = data => alert(JSON.stringify(data, null, 2));
 
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ allowSubmit, onSubmit }) => (
        <form onSubmit={onSubmit} className="k-form">
          <fieldset>
            <legend>Submitter form of SEER</legend>
            <div>
              <Field
                title="title"
                label=" Title"
                component={NativeInput}
              />
            </div>
            <div>
              <Field
                name="author"
                label="Author"
                component={NativeInput}
              />
            </div>
            <div>
                <Field 
                name="Abstract"
                label="Abstract"
                component={NativeInput}
                />
            </div>    
            


          </fieldset>
          <button
            type="submit"
            className="k-button"
            disabled={!allowSubmit}
          >
            Submit
          </button>
        </form>
      )}
    />
  );
};

export default submitForm;*/
import './submit.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
    FormDatePicker, FormNumericTextBox, FormInput,
    FormCheckbox, FormMaskedTextBox, FormTextArea
} from './form-components.jsx';

import {
    termsValidator, emailValidator, titleValidator,authorValidator,
    phoneValidator, guestsValidator, nightsValidator,
    arrivalDateValidator
} from './validators.jsx'
import { align } from '@progress/kendo-drawing';

const SubmitForm = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
           
            render={(formRenderProps) => (
                <FormElement >
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Submitter form of SEER</legend>
                        <Field
                            id={'title'}
                            name={'title'}
                            label={'Title of the article'}
                            component={FormInput}
                            validator={titleValidator}
                        />
                        <Field
                            id={'Author'}
                            name={'Author'}
                            label={'Author'}
                            component={FormInput}
                            validator={authorValidator}
                        />


                        <Field
                            id={'doi'}
                            name={'doi'}
                            label={'DOI'}
                         //   mask={'(99999999999999999) 00000000000000000000000000'}
                            hint={'Hint: Please insert right DOI.'}
                            component={FormMaskedTextBox}
                            validator={phoneValidator}
                        />
                        <Field
                            id={'url'}
                            name={'url'}
                            label={'URL'}
                            hint={'Hint: insert.'}
                            type={'email'}
                            component={FormInput}
                            validator={emailValidator}
                        />
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Field
                                id={'Public Date'}
                                name={'Public Date'}
                                label={'Public Date'}
                                hint={'Hint: Please enter public of article'}
                                component={FormDatePicker}
                                validator={arrivalDateValidator}
                                wrapperStyle={{width: '90%', marginRight: '18px'}}
                            />



                           

                        </div>


                         <Field
                            id={'Source'}
                            name={'Source'}
                            label={'Source'}
                            hint={'Please enter source'}
                    
                            component={FormInput}
                            validator={guestsValidator}
                        />




                        <Field
                            id={'Description'}
                            name={'Description'}
                            label={'Description'}
                            optional={true}
                            component={FormTextArea}
                        />
                        
                        <span className={'k-form-separator'} />
                        <Field
                            id={'terms'}
                            name={'terms'}
                            label={'I agree with terms and conditions'}
                            component={FormCheckbox}
                            validator={termsValidator}
                        />
                        <div className="k-form-buttons">
                            <Button
                                primary={true}
                                type={'submit'}
                                disabled={!formRenderProps.allowSubmit}
                            >
                                Send Reservation Request
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>
                                Clear
                            </Button>
                        </div>
                    </fieldset>
                </FormElement>
            )}
        />
    );
};
/*ReactDOM.render(
    <SubmitForm />,
    document.querySelector('my-app')
);*/
export default SubmitForm;