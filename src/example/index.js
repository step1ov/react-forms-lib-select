import React, { Component } from 'react';
import InputSelect from "./../lib";
import {InputForm, InputDefault} from "react-forms-lib";

const languages = {
    'en': 'English',
    'ru': 'Russian',
    'de': 'German',
    'sp': 'Spanish',
    'fr': 'French'
};

export const colourOptions = [
    { value: 'ocean', label: 'Ocean Иван Иванович Ocean Иван Иванович Ocean Иван Иванович', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue Иван Иванович', color: '#0052CC', disabled: true },
    { value: 'purple', label: 'Purple Иван Иванович', color: '#5243AA' },
    { value: 'red', label: 'Red Иван Иванович', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange Иван Иванович', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow Иван Иванович', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

export default class SampleForm extends Component
{
    state = {
        data: {}
    };

    handleChange = (data) =>
    {
        console.log(data);
        this.setState({data});
    };

    handleSave = (data) =>
    {
        alert("Save");
    };

    handleCancel = () =>
    {
        alert("Cancel");
    };

    handleExtraButtonClick = (e) =>
    {
        e.preventDefault();
        alert("Extra button click")
    };

    render()
    {
        return (
            <InputForm data={this.state.data}
                       onChange={this.handleChange} clearButton cancelButton
                       onSave={this.handleSave} onCancel={this.handleCancel}
                       languages={languages} title="Form"
                       extraButtons={<a href="#" onClick={this.handleExtraButtonClick} className="float-right">Extra Button</a>}
                       {...this.props}>
                <InputDefault type="text" title="Text" field="text" />
                <InputSelect title="Select single" field="selectSingle" options={colourOptions}/>
                <InputSelect title="Select multi" field="selectMulti" isMulti options={colourOptions}/>
            </InputForm>
        )
    }
}
