import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function ThreadInput({ threadInput }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
      navigate('/');
    }
  }

  return (
    <div className="talk-input">
      <input type="text" placeholder="judul" value={title} onChange={onTitleChange} />
      <input type="text" placeholder="category" value={category} onChange={onCategoryChange} />
      <textarea type="text" placeholder="tanyakan ?" value={body} onChange={onBodyChange} />
      <p className="talk-input__char-left">
        <strong>{body.length}</strong>
        /320
      </p>

      <button type="submit" onClick={threadInputHandler}>submit</button>
    </div>
  );
}

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
