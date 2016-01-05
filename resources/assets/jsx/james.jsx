const React = require('react');
const ReactDOM = require('react-dom');

var contacts = [
  {key: 1, name: "James Nelson", email: "james@jamesknelson.com"},
  {key: 2, name: "Bob"}
]

var listElements = contacts
  .filter(function(contact) { return contact.email; })
  .map(function(contact) {
    return React.createElement('li', {key: contact.key},
      React.createElement('h2', {}, contact.name),
      React.createElement('a', {href: 'mailto:'+contact.email}, contact.email)
    )
  })

var rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Contacts"),

    // If your `children` is an array, you'll need to give each one a unique `key`
    // prop. I'll explain why a little later.
    React.createElement('ul', {}, listElements)
  )

ReactDOM.render(rootElement, document.getElementById('react-app'))