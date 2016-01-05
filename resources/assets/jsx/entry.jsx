const React = require('react');
const ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function() {
		return (
			<p>
				안녕, <input type="text" placeholder="이름을 여기에 작성하세요." />!<br />
				지금 시간은 {this.props.date.toTimeString()} 입니다.
			</p>
		);
	}
});

setInterval(function() {
	ReactDOM.render(
		<HelloWorld date={new Date()} />,
		document.getElementById('hello')
	);
}, 500);