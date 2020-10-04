import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from './API';

interface LogEntryFormProps {
  location: addEntryLocation;
  onClose: () => void;
}

const LogEntryForm: React.FC<LogEntryFormProps> = ({ location, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any): Promise<void> => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const created = await createLogEntry(data);
      onClose();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}

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

      <button disabled={loading}>
        {loading ? 'loading...' : 'Create Entry'}
      </button>
    </form>
  );
};

export default LogEntryForm;
