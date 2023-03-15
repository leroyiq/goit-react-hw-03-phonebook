import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onSubmit = ({ name, number }) => {
    const idContact = nanoid();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: idContact, name, number },
      ],
      name,
      number,
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phone Book</h2>
        <ContactForm onSubmit={this.onSubmit} />
        {contacts.length > 0 && <h2>Contacts</h2>}
        <ContactList contacts={contacts} />
      </>
    );
  }
}
