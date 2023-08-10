function Messages(con) {
  const contacts = con;
  const messagesFrom = [];

  return {
    send: function(sender) {
      messagesFrom.push(sender);
    },
    getMessageNotification: function() {
      const validContacts = contacts.filter(contact => messagesFrom.includes(contact));
      
      if (validContacts.length === 0) {
        return "No one sent you a message!";
      } else if (validContacts.length === 1) {
        return `${validContacts[0]} sent you a message!`;
      } else if (validContacts.length === 2) {
        return `${validContacts[0]} and ${validContacts[1]} sent you a message!`;
      } else {
        const othersCount = validContacts.length - 2;
        return `${validContacts[0]}, ${validContacts[1]} and ${othersCount} others sent you a message!`;
      }
    }
  };
}
