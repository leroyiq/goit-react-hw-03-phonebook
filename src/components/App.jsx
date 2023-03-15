import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = ({ name, number }) => {
    const idContact = nanoid();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: idContact, name, number },
      ],
    }));
  };

  render() {
    return (
      <>
        <h2>Phone Book</h2>
        <ContactForm onSubmit={this.onSubmit} />
        <ContactList />
      </>
    );
  }
}
