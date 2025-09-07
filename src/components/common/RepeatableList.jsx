import React from 'react'
import { useFieldArray } from 'react-hook-form'

const RepeatableList = ({control, register, name, fieldsConfig}) => {

    const {fields, append, remove} = useFieldArray({control, name});
  return (
    <div>
        {fields.map((item, idx) => (
            <div key={item.id} className='flex gap-4 mb-4 items-center'>
                {fieldsConfig.map((field) => (
                    <input 
                      key={field.name}
                      {...register(`${name}.${idx}.${field.name}`, field.rules)}
                      placeholder={field.placeholder}
                      className='border p-2 rounded'
                      defaultValue={item[field.name] || ''}
                    />
                ))}
                <button type='button' onClick={() => remove(idx)} className='button'>
                    Remove
                </button>
            </div>
        ))}
        <button type='button' onClick={() => append({})} className='button'>
            Add
        </button>
    </div>
  )
}

export default RepeatableList