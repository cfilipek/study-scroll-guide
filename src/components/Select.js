import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      typed: '',
      values: [],
    };
  }

  onClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  onClickOption = e => {
    const { object } = this.props;

    const { value } = e.currentTarget.dataset;

    this.setState(prevState => {
      return {
        values: [value],
        isOpen: false,
      };
    });

    let index = object.indexOf(value);
    this.props.onSelect(value);
    document.location = `/#scrollama-${index}`;
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  renderValues = () => {
    const { placeholder } = this.props;
    const { values } = this.state;

    if (values.length === 0 || this.state.isOpen === false) {
      return <div className="placeholder">{placeholder}</div>;
    }

    return <div className="value">{values[0]}</div>;
  };

  renderOptions = () => {
    const { options } = this.props;
    const { isOpen } = this.state;

    if (!isOpen) {
      return null;
    }

    return <div className="options">{options.map(this.renderOption)}</div>;
  };

  renderOption = (option, index) => {
    const { options } = this.props;

    const selected = options.includes(option);

    let className = 'option';
    if (selected) className += ' selected';

    return (
      <div
        key={option}
        data-value={option}
        className={className}
        onMouseOver={this.onHoverOption}
        onClick={this.onClickOption}
      >
        {option}
      </div>
    );
  };

  render() {
    const { label } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="select" tabIndex="0">
        <label className="label">{label}</label>
        <div className="selection" onClick={this.onClick}>
          {this.renderValues()}
          <span className="arrow">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        {this.renderOptions()}
      </div>
    );
  }
}

export const ChevronDown = () => (
  <svg viewBox="0 0 10 7">
    <path
      d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z"
      transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) "
    />
  </svg>
);

export const ChevronUp = () => (
  <svg viewBox="0 0 10 8">
    <path
      d="M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z"
      transform="translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) "
    />
  </svg>
);

const X = () => (
  <svg viewBox="0 0 16 16">
    <path d="M2 .594l-1.406 1.406.688.719 5.281 5.281-5.281 5.281-.688.719 1.406 1.406.719-.688 5.281-5.281 5.281 5.281.719.688 1.406-1.406-.688-.719-5.281-5.281 5.281-5.281.688-.719-1.406-1.406-.719.688-5.281 5.281-5.281-5.281-.719-.688z" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 16 16">
    <path
      d="M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z"
      transform="translate(0 1)"
    />
  </svg>
);

export default Select;
