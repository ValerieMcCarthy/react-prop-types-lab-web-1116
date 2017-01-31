const React = require('react');

class Product extends React.Component {
	render() {
		return (
			<div className="product">
				<ul>
		          <li>{this.props.name}</li>
		          <li>{this.props.producer}</li>
		          <li>{this.props.hasWatermark}</li>
		          <li>{this.props.color}.</li>
		          <li>{this.props.weight}.</li>
        		</ul>
        	</div>
			)
	}

}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white','eggshell-white', 'salmon']).isRequired,
	weight: weightRange
}

function weightRange(props, propName){  
  var weight = props[propName]
  var validWeight = weight >= 80 && weight <+ 300
  if (!validWeight){
  	return new Error(weight + "is not in valid weight range.")
  }

  
 // assume all ok
  return null;
  }

 


module.exports = Product


