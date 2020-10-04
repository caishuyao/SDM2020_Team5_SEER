import * as React from 'react';
import { getter } from '@progress/kendo-react-common';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);
const ccardRegex = new RegExp(/^[0-9-]+$/);
const cvcRegex = new RegExp(/^[0-9]+$/);

export const termsValidator = (value) => value ? "" : "It's required to agree with Terms and Conditions.";
export const emailValidator = (value) => !value ?
    "URL is required." :
    (emailRegex.test(value) ? "" : "URLis not valid format.");
export const titleValidator = (value) => !value ?
    "Please enter title of article!" :
    value.length < 7 ? " please provide title." : "";
export const authorValidator = (value) => !value ?
    "Please enter author!" :
    value.length < 7 ? " please provide title." : "";
export const userNameValidator = (value) => !value ?
    "DOI is required" :
    value.length < 5 ? "User name should be at least 3 characters long." : "";
export const phoneValidator = (value) => !value ?
    "DOI is required." :
    phoneRegex.test(value) ? "" : "Not a valid phone number.";
export const cardValidator = (value) => !value ?
    "Credit card number is required. " :
    ccardRegex.test(value) ? "" : "Not a valid credit card number format.";
export const cvcValidator = (value) => !value ?
    "CVC code is required," :
    cvcRegex.test(value) || value.length !== 3 ? "" : "Not a valid CVC code format.";
export const guestsValidator = (value) => !value ?
    "Please enter source" :
    value < 5 ? "" : "Maximum 5 guests";
export const nightsValidator = (value) => value ? "" : "Number of Nights is required";
export const arrivalDateValidator = (value) => value ? "" : "Please enter public date!";
export const colorValidator = (value) => value ? "" : "Color is required.";
export const requiredValidator = (value) => value ? "" : "Error: This field is required.";
export const passwordValidator = (value) => value && value.length > 8 ? '' : 'Password must be at least 8 symbols.';
export const addressValidator = (value) => value ? "" : "Address is required.";


const userNameGetter = getter('username');
const emailGetter = getter('email');

export const formValidator = (values) => {
    const userName = userNameGetter(values);
    const emailValue = emailGetter(values);

    if (userName && emailValue && emailRegex.test(emailValue)) {
        return {};
    }

    return {
        VALIDATION_SUMMARY: 'Please fill the following fields.',
        ['username']: !userName ? 'User Name is required.' : '',
        ['email']: emailValue && emailRegex.test(emailValue) ? '' : 'Email is required and should be in valid format.'
    };
};
