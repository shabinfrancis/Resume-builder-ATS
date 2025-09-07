import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const Education = ({ onSubmit, onBack, defaultValues, isFirst }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues ? defaultValues : { educations: [{ degree: '', institution: '', years: '', grade: '', description: '' }] }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='bg-[#fafafa] py-10 px-4 lg:px-16'>
          <div className='space-y-5 p-10 flex flex-wrap'>
            <div className='w-full border-2 border-transparent rounded-4xl bg-cyan-50 p-6'>
              <div className="create-job-flex gap-8">
                <div className="lg:w-1/2 w-full mb-4">
                  <label className='block mb-2 text-lg' htmlFor='degree'>Degree</label>
                  <input
                    id="degree"
                    type="text"
                    placeholder='Ex: B.Sc. Computer Science'
                    {...register("degree", { required: true })}
                    className='create-job-input'
                    aria-invalid={errors.degree ? "true" : "false"}
                  />
                  {errors.degree && (
                    <p className='text-amber-900' role='alert'>Degree is required</p>
                  )}
                </div>
                <div className="lg:w-1/2 w-full mb-4">
                  <label className='block mb-2 text-lg' htmlFor='institution'>Institution</label>
                  <input
                    id="institution"
                    type="text"
                    placeholder='Ex: MIT'
                    {...register("institution", { required: true })}
                    className='create-job-input'
                    aria-invalid={errors.institution ? "true" : "false"}
                  />
                  {errors.institution && (
                    <p className='text-amber-900' role='alert'>Institution is required</p>
                  )}
                </div>
              </div>
              <div className="create-job-flex gap-8">
                <div className="lg:w-1/2 w-full mb-4">
                  <label className='block mb-2 text-lg' htmlFor='years'>Years Attended</label>
                  <input
                    id="years"
                    type="text"
                    placeholder='Ex: 2018-2022'
                    {...register("years", { required: true })}
                    className='create-job-input'
                    aria-invalid={errors.years ? "true" : "false"}
                  />
                  {errors.years && (
                    <p className='text-amber-900' role='alert'>Years attended is required</p>
                  )}
                </div>
                <div className="lg:w-1/2 w-full mb-4">
                  <label className='block mb-2 text-lg' htmlFor='grade'>Grade/Percentage (optional)</label>
                  <input
                    id="grade"
                    type="text"
                    placeholder='Ex: 8.5 CGPA or 85%'
                    {...register("grade")}
                    className='create-job-input'
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <label className='block mb-2 text-lg' htmlFor='description'>Description (optional)</label>
                <textarea
                  id="description"
                  placeholder='Describe your coursework, achievements, etc.'
                  {...register("description")}
                  className='create-job-input'
                  rows={3}
                />
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

export default Education;