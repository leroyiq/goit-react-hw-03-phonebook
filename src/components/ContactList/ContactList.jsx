export const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <ul key={id}>
              {name}: {number}
            </ul>
          );
        })}
      </ul>
    </div>
  );
};
