import React from 'react';
import { useForm } from 'react-hook-form';

const Personal = ({ onSubmit, onBack, defaultValues, isFirst }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className='container mx-auto xl:px-24 px-4'>
                <div className='max-w-screen-2xl bg-[#fafafa] py-10 px-4 lg:px-16'>
                    <div className='space-y-5 p-10 flex flex-wrap'>
                        <div className='w-full lg:h-1/3 h-full border-2 border-transparent rounded-4xl bg-cyan-50'>
                            <div className="create-job-flex p-10">
                                <div className="lg:w-1/2 w-full">
                                    <label className='block mb-2 text-lg' htmlFor='jobTitle'>Job Title</label>
                                    <input name='jobTitle' type="text" placeholder='Ex: Software Developer'
                                        {...register("jobTitle", { required: true })} className='create-job-input'
                                        aria-invalid={errors.jobTitle ? "true" : "false"}
                                    />
                                    {errors.jobTitle?.type === "required" && (
                                        <p className='text-amber-900' role='alert'>Job Title is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="create-job-flex p-10">
                                <div className="lg:w-1/2 w-full">
                                    <label className='block mb-2 text-lg' htmlFor='firstname'>First Name</label>
                                    <input name='firstname' type="text" placeholder='Ex: John Doe'
                                        {...register("firstname", { required: true })} className='create-job-input'
                                        aria-invalid={errors.firstname ? "true" : "false"}
                                    />
                                    {errors.firstname?.type === "required" && (
                                        <p className='text-amber-900' role="alert">First name is required</p>
                                    )}
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label className='block mb-2 text-lg' htmlFor='lastname'>Last Name</label>
                                    <input type="text" placeholder='Ex: Microsoft' name='lastname'
                                        {...register("lastname", { required: true })} className='create-job-input'
                                        aria-invalid={errors.lastname ? "true" : "false"}
                                    />
                                    {errors.lastname?.type === "required" && (
                                        <p className='text-amber-900' role='alert'>Last name is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="create-job-flex p-10">
                                <div className="lg:w-1/2 w-full">
                                    <label htmlFor='number' className='block mb-2 text-lg'>Mobile Number</label>
                                    <input name='number' type="text" placeholder='Ex: John Doe'
                                        {...register("number")} className='create-job-input'
                                    />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label htmlFor='email' className='block mb-2 text-lg'>Email</label>
                                    <input name='email' type="email" placeholder='Ex: Microsoft'
                                        {...register("email")} className='create-job-input'
                                    />
                                </div>
                            </div>
                            <div className="create-job-flex p-10">
                                <div className="lg:w-1/2 w-full">
                                    <label htmlFor='city' className='block mb-2 text-lg'>City</label>
                                    <input name='city' type="text" placeholder='Ex: John Doe'
                                        {...register("city")} className='create-job-input'
                                    />
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <label htmlFor='country' className='block mb-2 text-lg'>Country</label>
                                    <input name='country' type="text" placeholder='Ex: Microsoft'
                                        {...register("companyName")} className='create-job-input'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        {!isFirst && (
                            <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-300 rounded">
                                Back
                            </button>
                        )}
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Personal;