const Form = (props) => {
  //submit
  const handleSubmit = () => {
    props.handleSubmit();
  };
  //input
  const handleKeyDown = () => {
    props.handleKeyDown();
  };
  //OnChange
  const handleChange = () => {
    props.handleChange();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='title' htmlFor='last-letter'>
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete='off'
        className='form__input'
        maxLength='1'
        type='text'
        name='last-letter'
        id='last-letter'
        value={props.lastLetter}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
