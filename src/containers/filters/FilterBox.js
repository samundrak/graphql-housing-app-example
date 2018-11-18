import React from 'react';
import autobind from 'auto-bind';
import renderIf from 'render-if';
import FilterPopup from '../../components/Popup';

class FilterBox extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      visible: false,
      value: {},
    };
  }

  componentWillMount() {
    this.setState({
      value: this.props.value,
    });
  }
  changeVisibleStatus(status) {
    return () => {
      this.setState({ visible: status });
      if (!status) {
        this.setState({
          value: this.props.value,
        });
      }
    };
  }
  handleApplyFilter() {
    this.props.onApply(this.state.value, () => {
      this.changeVisibleStatus(false)();
    });
  }
  handleChange(value) {
    console.log(value);
    this.setState({
      value,
    });
  }
  render() {
    return (
      <div>
        <div onClick={this.changeVisibleStatus(true)}>{this.props.label}</div>
        {renderIf(this.state.visible)(
          <FilterPopup
            onApply={this.handleApplyFilter}
            onCancel={this.changeVisibleStatus(false)}
          >
            {this.props.render({
              state: this.state.value,
              onChange: this.handleChange,
            })}
          </FilterPopup>
        )}
      </div>
    );
  }
}

export default FilterBox;
