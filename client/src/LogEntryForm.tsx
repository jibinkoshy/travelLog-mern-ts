import React from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from './API';

interface LogEntryFormProps {
  location: addEntryLocation;
}

const LogEntryForm: React.FC<LogEntryFormProps> = ({ location }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any): Promise<void> => {
    try {
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const created = await createLogEntry(data);
      console.log(created);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" required ref={register} />

      <label htmlFor="comments">Comments</label>
      <textarea name="comments" id="" rows={3} ref={register} />

      <label htmlFor="description">Description</label>
      <textarea name="description" id="" rows={3} ref={register} />

      <label htmlFor="image">Image</label>
      <input name="image" ref={register} />

      <label htmlFor="visitDate">Visit Date</label>
      <input
        name="visitDate"
        type="date"
        placeholder="mm/dd/yyyy"
        required
        ref={register}
      />

      <button>Create Entry</button>
    </form>
  );
};

export default LogEntryForm;
