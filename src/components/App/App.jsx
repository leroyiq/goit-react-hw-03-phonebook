import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Wrapper, Title } from './App.styled';

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
      <Wrapper>
        <Title>Phone Book</Title>
        <ContactForm onSubmit={this.onSubmit} />
        {contacts.length > 0 && <Title>Contacts</Title>}
        <ContactList contacts={contacts} />
      </Wrapper>
    );
  }
}
