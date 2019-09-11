import React from 'react';
import {BaseInput} from "react-forms-lib";
import {RenderLabel, RenderInput, RenderFormGroup, RenderFormFeedback, RenderFormText} from "./views";
import PropTypes from "prop-types";

export default class InputSelect extends BaseInput
{
    static propTypes = Object.assign(
        {
            classNameSingle: PropTypes.string,
            classNameMulti: PropTypes.string,
            classNamePrefix: PropTypes.string,
            isMulti: PropTypes.bool,
            isLoading: PropTypes.bool,
            isClearable: PropTypes.bool,
            isRtl: PropTypes.bool,
            isSearchable: PropTypes.bool,
            options: PropTypes.array.isRequired
        },
        // eslint-disable-next-line
        BaseInput.propTypes
    );

    static defaultProps = Object.assign(
        {
            classNameSingle: "basic-single",
            classNameMulti: "basic-multi-select",
            classNamePrefix: "select",
            isMulti: false,
            isLoading: false,
            isClearable: true,
            isRtl: false,
            isSearchable: true
        },
        BaseInput.defaultProps
    );

    static renderLabel(props)
    {
        return !props.hideLabel && RenderLabel(props);
    }

    static renderInput(props)
    {
        const inputClassName = props.isMulti ? props.classNameMulti : props.classNameSingle;
        const state = this.getStateFromValue(props);
        return RenderInput(Object.assign({}, props, { inputClassName, state }));
    }

    static renderFormGroup(props)
    {
        return RenderFormGroup(props);
    }

    static renderFormFeedback(props)
    {
        return !!props.formFeedback && RenderFormFeedback(props);
    }

    static renderFormText(props)
    {
        return !!props.formText && RenderFormText(props);
    }

    static getInitialValue(props)
    {
        return '';
    }

    static getRenderValue(props)
    {
        if (props.state)
        {
            return Array.isArray(props.state) ?
                props.state.reduce((prev, curr) => [prev.label, ', ', curr.label]) :
                props.state.label;
        }
        return '';
    }

    static getInitialState(props)
    {
        return this.getStateFromValue(props);
    }

    static getStateFromValue(props)
    {
        if (props.value && Array.isArray(props.options))
        {
            if (Array.isArray(props.value))
            {
                const data = {};
                const result = [];
                props.options.forEach(elem => data[elem.value] = elem);
                props.value.forEach(value => {
                   if (data[value])
                   {
                       result.push(data[value]);
                   }
                });
                return result;
            }
            return props.options.find(elem => elem.value === props.value);
        }
        return '';
    }

    static getValue(e, extraData, props)
    {
        return e ?
            { value: Array.isArray(e) ? e.map(elem => elem.value) : e.value, state: e } :
            { value: '', state: '' };
    }
}