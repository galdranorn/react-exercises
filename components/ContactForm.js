var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        <form className={'contactForm'}>
<<<<<<< Updated upstream
          <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}></input>
          <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}></input>
          <input type={'text'} placeholder={'Email'} value={this.props.contact.email}></input>
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
      )
=======
          <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}/>
          <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}/>
          <input type={'email'} placeholder={'E-mail'} value={this.props.contact.email}/>
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
        )
>>>>>>> Stashed changes
    },
  })