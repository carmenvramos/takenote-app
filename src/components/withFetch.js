import React from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => {
  class WithFetch extends React.PureComponent {
    static propTypes = {
      clear: PropTypes.func,
      fetch: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.fetch();
    }

    componentWillUnmount() {
      this.props.clear && this.props.clear();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return WithFetch;
};
