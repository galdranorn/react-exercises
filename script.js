var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('getDefaultProps - we use it to set initial props ("parameters") values which are not sent to the component yet')
    },

    getInitialState: function() {
        console.log ('getInitialState - we use it to set initial state for changing components')
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('componentWillMount - do not see much usage')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        console.log ('render is a "clean" method')
        return React.createElement('div', {},
                React.createElement('span', {}, 'Licznik ' + this.state.counter),
                React.createElement('button', {onClick: this.increment}, '+'),
                React.createElement('button', {onClick: this.decrement}, '-'),
        );
    },

    componentDidMount: function() {
        console.log('componentDidMount - we use it to start downloading the data or other time consuming operations')
    },

    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps - we have access to old and new props so we can check what exactly will change and proceed (ex. not act if nothing changed); we can use it to validate new props')
    },

    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate - can be used to avoid wasted renders');
        return true;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate - do not see much usage')
    },

    componentDidUpdate: function() {
        console.log('componentDidUpdate - other chance for download the data or other time consuming operations')
    }

});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));
