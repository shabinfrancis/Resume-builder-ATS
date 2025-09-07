import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const Skills = ({ onSubmit, onBack, defaultValues, isFirst }) => {
  const { control, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || { skills: [{ skill: '' }] }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills'
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='bg-[#fafafa] py-10 px-4 lg:px-16'>
          <div className='space-y-5 p-10 flex flex-col'>
            <div className='w-full border-2 border-transparent rounded-4xl bg-cyan-50 p-6'>
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              {fields.map((item, idx) => (
                <div key={item.id} className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="Ex: React, JavaScript, Communication"
                    {...register(`skills.${idx}.skill`, { required: true })}
                    className="create-job-input flex-1"
                    aria-invalid={errors.skills?.[idx]?.skill ? "true" : "false"}
                  />
                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(idx)}
                      className="ml-2 px-3 py-1 bg-red-200 text-red-800 rounded"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => append({ skill: '' })}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                + Add Skill
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-6">
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

export default Skills;