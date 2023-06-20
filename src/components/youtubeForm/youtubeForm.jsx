import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';


YouTuBeForm.propTypes = {
    
};

function YouTuBeForm(props) {
    const { register, control, handleSubmit } = useForm();
    const submit = (data) => console.log(data);

    return (
        <div className='container-form'>
            <div className="form-content">
                <h4 className="title-form">
                    Login
                </h4>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' id='username' {...register("username", {
                        valueAsDate: true, 
                    })}/>
 
                    <label htmlFor='email'>email</label>
                    <input type='email' name='email' id='email' {...register("email")}/>

                    <label htmlFor='channel'>Channel</label>
                    <input type='text' name='channel' id='channel' {...register("channel")}/>
                    <input type="submit" />
                </form>
                <DevTool control={control} />
            </div>
        </div>
    );
}

export default YouTuBeForm;