import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { RootState, actions } from '@renderer/redux/store';
import { FaArrowUp } from "react-icons/fa";
import { ConnectedProps, connect } from 'react-redux';

import { incremented } from '@renderer/redux/slices/example';

interface IState {

}

const mapStateToProps = ({ example: { value } }: RootState) => ({
    value
});

const mapDispatchToProps = {
    increment: incremented
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type TProps = ConnectedProps<typeof connector>;

export default connector(class extends React.Component<TProps, IState> {
    constructor(props: Readonly<TProps>) {
        super(props);

        this.state = {

        };

        this.openSettings = this.openSettings.bind(this);
    }

    private openSettings() {
        window.electron.settings.open();
    }

    public render() {
        const { value, increment } = this.props;

        return (
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <h1>Main Window</h1>
                        <Button onClick={() => increment()}><FaArrowUp /> Click Me!</Button>
                        <p>{value}</p>
                        <Button onClick={this.openSettings}>Open Settings</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
});
