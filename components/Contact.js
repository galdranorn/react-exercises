var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className={'contactItem col-lg-6 col-md-6 col-sm-12'}>
            <div className={'contactImg col-lg-4 col-md-4 col-sm-'}>
                <img className={'contactImage'} src={'http://icons.veryicon.com/png/System/gCons/contacts.png'}></img>
            </div>
            <div className={'contactData col-lg-8 col-md-8 col-sm-8'}>
                <p className={'contactLabel'}>Imię: {this.props.contact.firstName}</p>
                <p className={'contactLabel'}>Nazwisko: {this.props.contact.lastName}</p>
                <a href={'mailto:' + this.props.item.email}>{this.props.item.email}></a>
            </div>
        </div>
      )
    },
  });