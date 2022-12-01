const Form = (props) => {
  //submit
  const handleSubmit = (event) => {
    props.handleSubmit(event);
  };
  //input
  const handleKeyDown = (event) => {
    props.handleKeyDown(event);
  };
  //OnChange
  const handleChange = (event) => {
    props.handleChange(event);
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
