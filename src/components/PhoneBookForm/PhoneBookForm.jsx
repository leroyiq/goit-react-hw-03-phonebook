import { Component } from 'react';
import css from './PhoneBookForm.module.css';
import { PropTypes } from 'prop-types';
export class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleCanngeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
   // console.dir(this.props.onSubmit);
    this.props.onSubmitForm({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.formStyle} onSubmit={this.handleFormSubmit}>
        <label>
          <p className={css.labelStyle}>Name</p>
          <input
            className={css.inputStyle}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleCanngeInput}
          />
        </label>
        <label>
          <p className={css.labelStyle}>Number</p>
          <input
            className={css.inputStyle}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleCanngeInput}
          />
        </label>
        <button className={css.addButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

PhoneBookForm.propTypes = {
  onSubmit:PropTypes.object,
}