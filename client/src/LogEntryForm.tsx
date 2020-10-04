import React from 'react';

const LogEntryForm: React.FC = () => {
  return (
    <form className="entry-form">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" required />

      <label htmlFor="comments">Comments</label>
      <textarea name="comments" id="" rows={3} />

      <label htmlFor="description">Description</label>
      <textarea name="description" id="" rows={3} />

      <label htmlFor="image">Image</label>
      <input name="image" />

      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" placeholder="mm/dd/yyyy" />

      <button>Create Entry</button>
    </form>
  );
};

export default LogEntryForm;
