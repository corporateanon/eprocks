import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList } from '../actions/directoryActions';

const mapStateToProps = state => ({
    items: state.directory.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getList
}, dispatch);

class Directory extends Component {

    componentWillMount() {
        this.props.getList();
    }

    render() {
        const { props: { items } } = this;
        return (
            <div>Directory: {items.join(', ')}</div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
