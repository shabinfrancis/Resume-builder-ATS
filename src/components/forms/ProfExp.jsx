import React from 'react';
import { useForm } from 'react-hook-form';
import RepeatableList from '../common/RepeatableList';

const fieldsConfig = [
  { name: 'company', placeholder: 'Company Name', rules: { required: true } },
  { name: 'role', placeholder: 'Role/Position', rules: { required: true } },
  { name: 'years', placeholder: 'Years (e.g. 2020-2023)', rules: { required: true } },
  { name: 'description', placeholder: 'Description (optional)', rules: {} },
];

const ProfExp = ({ onSubmit, onBack, defaultValues, isFirst }) => {
  const { control, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || { experiences: [{ company: '', role: '', years: '', description: '' }] }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <div className='bg-[#fafafa] py-10 px-4 lg:px-16'>
          <div className='space-y-5 p-10 flex flex-col'>
            <div className='w-full border-2 border-transparent rounded-4xl bg-cyan-50 p-6'>
              <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
              <RepeatableList
                control={control}
                register={register}
                name="experiences"
                fieldsConfig={fieldsConfig}
              />
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

export default ProfExp;