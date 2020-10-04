import * as React from 'react';

import { FieldWrapper } from '@progress/kendo-react-form';
import {
    Input, MaskedTextBox, NumericTextBox,
    Checkbox, ColorPicker, Switch, RadioGroup,
    Slider, SliderLabel, TextArea
} from '@progress/kendo-react-inputs';
import {
    DatePicker, TimePicker, DateTimePicker,
    DateRangePicker, DateInput
} from '@progress/kendo-react-dateinputs';
import { Label, Error, Hint, FloatingLabel } from '@progress/kendo-react-labels';
import { Upload } from '@progress/kendo-react-upload';
import { DropDownList, AutoComplete, MultiSelect, ComboBox } from '@progress/kendo-react-dropdowns';

export const FormInput = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
            <div className={'k-form-field-wrap'}>
                <Input
                    valid={valid}
                    type={type}
                    id={id}
                    disabled={disabled}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    {...others}
                />
                {
                    showHint &&
                    <Hint id={hintId}>{hint}</Hint>
                }
                {
                    showValidationMessage &&
                    <Error id={errorId}>{validationMessage}</Error>
                }
            </div>
        </FieldWrapper>
    );
};


export const FormRadioGroup = (fieldRenderProps) => {
    const { validationMessage, touched, id, label, valid, disabled, hint, visited, modified, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper>
            <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>{label}</Label>
            <RadioGroup
                id={id}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ariaLabelledBy={labelId}
                valid={valid}
                disabled={disabled}
                ref={editorRef}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormNumericTextBox = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} editorDisabled={disabled}>{label}</Label>
            <NumericTextBox
                ariaDescribedBy={`${hintId} ${errorId}`}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormCheckbox = (fieldRenderProps) => {
    const { validationMessage, touched, id, valid, disabled, hint, optional, label, visited, modified, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <Checkbox
                ariaDescribedBy={`${hintId} ${errorId}`}
                label={label}
                labelOptional={optional}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormSwitch = (fieldRenderProps) => {
    const { validationMessage, touched, label, optional, id, valid, disabled, hint, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
                optional={optional}
            >
                {label}
            </Label>
            <Switch
                ref={editorRef}
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormMaskedTextBox = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, hint, optional, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
            <div className={'k-form-field-wrap'}>
                <MaskedTextBox
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    valid={valid}
                    id={id}
                    {...others}
                />
                {
                    showHint &&
                    <Hint id={hintId}>{hint}</Hint>
                }
                {
                    showValidationMessage &&
                    <Error id={errorId}>{validationMessage}</Error>
                }
            </div>
        </FieldWrapper>
    );
};

export const FormTextArea = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, hint, disabled, optional, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
            <TextArea
                valid={valid}
                id={id}
                disabled={disabled}
                ariaDescribedBy={`${hintId} ${errorId}`}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormColorPicker = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
            >
                {label}
            </Label>
            <ColorPicker
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormSlider = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, data, ...others } = fieldRenderProps;

    const editorRef = React.useRef(null);
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
            >
                {label}
            </Label>
            <Slider
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            >
                {
                    data.map(value => (
                        <SliderLabel
                            title={value}
                            key={value}
                            position={value}
                        />
                    ))
                }
            </Slider>
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormUpload = (fieldRenderProps) => {
    const { valid, value, id, optional, label, hint, validationMessage, touched, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    const onChangeHandler = (event) => {
        fieldRenderProps.onChange({ value: event.newState });
    };
    const onRemoveHandler = (event) => {
        fieldRenderProps.onChange({ value: event.newState });
    };

    return (
        <FieldWrapper>
            <Label id={labelId} editorId={id} editorValid={valid} optional={optional}>
                {label}
            </Label>
            <Upload
                id={id}
                valid={valid}
                autoUpload={false}
                showActionButtons={false}
                multiple={false}
                files={value}
                onAdd={onChangeHandler}
                onRemove={onRemoveHandler}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ariaLabelledBy={labelId}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormDropDownList = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
            >
                {label}
            </Label>
            <DropDownList
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormAutoComplete = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label
                id={labelId}
                editorRef={editorRef}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
            >
                {label}
            </Label>
            <AutoComplete
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormComboBox = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
                {label}
            </Label>
            <ComboBox
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormMultiSelect = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
                {label}
            </Label>
            <MultiSelect
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormDatePicker = (fieldRenderProps) => {
    const {
        validationMessage, touched, label, id, valid,
        disabled, hint, wrapperStyle, hintDirection, ...others
    } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
                {label}
            </Label>
            <div className={'k-form-field-wrap'}>
                <DatePicker
                    ariaLabelledBy={labelId}
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    valid={valid}
                    id={id}
                    disabled={disabled}
                    {...others}
                />
                {
                    showHint &&
                    <Hint id={hintId} direction={hintDirection}>{hint}</Hint>
                }
                {
                    showValidationMessage &&
                    <Error id={errorId}>{validationMessage}</Error>
                }
            </div>
        </FieldWrapper>
    );
};

export const FormDateTimePicker = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
                {label}
            </Label>
            <DateTimePicker
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormTimePicker = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
                {label}
            </Label>
            <TimePicker
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormDateInput = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label id={labelId} editorId={id} editorValid={valid} editorDisabled={disabled}>
                {label}
            </Label>
            <DateInput
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormDateRangePicker = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
    const editorRef = React.useRef(null);

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';

    return (
        <FieldWrapper style={wrapperStyle}>
            <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
                {label}
            </Label>
            <DateRangePicker
                ariaLabelledBy={labelId}
                ariaDescribedBy={`${hintId} ${errorId}`}
                ref={editorRef}
                valid={valid}
                id={id}
                disabled={disabled}
                {...others}
            />
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};

export const FormFloatingNumericTextBox = (fieldRenderProps) => {
    const { validationMessage, touched, label, id, valid, disabled, hint, optional, value, ...others } = fieldRenderProps;

    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';

    return (
        <FieldWrapper>
            <FloatingLabel
                optional={optional}
                editorValue={value}
                editorId={id}
                editorValid={valid}
                editorDisabled={disabled}
                label={label}
            >
                <NumericTextBox
                    ariaDescribedBy={`${hintId} ${errorId}`}
                    value={value}
                    valid={valid}
                    id={id}
                    disabled={disabled}
                    {...others}
                />
            </FloatingLabel>
            {
                showHint &&
                <Hint id={hintId}>{hint}</Hint>
            }
            {
                showValidationMessage &&
                <Error id={errorId}>{validationMessage}</Error>
            }
        </FieldWrapper>
    );
};
