import React from 'react';
import { FormGroup, Label, FormFeedback, FormText, Badge } from 'reactstrap';
import InputSelect from "./index";
import Select from 'react-select';

export const RenderLabel = (props) =>
    <Label for={props.id} {...props.labelProps}>
        {props.title} {props.languageName && <Badge color="secondary">{props.languageName}</Badge>}
    </Label>;

export const RenderInput = (props) =>
    <Select id={props.id} name={props.name} required={props.required}
            className={props.inputClassName} classNamePrefix={props.classNamePrefix} isMulti={props.isMulti}
            isDisabled={props.disabled} isLoading={props.isLoading} isClearable={props.isClearable} isRtl={props.isRtl}
            isSearchable={props.isSearchable} options={props.options}
            value={props.state} onChange={props.onChange}/>;

export const RenderFormGroup = (props) =>
    <FormGroup {...props.formGroupProps}>
        {InputSelect.renderLabel(props)}
        {InputSelect.renderInput(props)}
        {InputSelect.renderFormFeedback(props)}
        {InputSelect.renderFormText(props)}
    </FormGroup>;

export const RenderFormFeedback = (props) =>
    <FormFeedback valid={props.valid}>
        {props.formFeedback}
    </FormFeedback>;

export const RenderFormText = (props) =>
    <FormText>{props.formText}</FormText>;