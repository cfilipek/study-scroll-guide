import React, { PureComponent, createRef } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import Header from './components/Header';

import dataObj from './Data';
import './App.css';
import Card from './components/Card';

const styles = {
  app: {
    display: 'grid',
    backgroundColor: '#000000',
    fontFamily: "'Roboto Mono', monospace",
  },
  graphicContainer: {
    // padding: '50vh 0vw 70vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  graphic: {
    overflowY: 'scroll',
    height: '100vh',
    flexBasis: '100%',
    position: 'sticky',
    width: '100%',
    top: '0',
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    '& p': {
      fontSize: '5rem',
      textAlign: 'center',
      color: '#000000',
    },
  },
  scroller: {
    flexBasis: 'unset',
    width: '20rem',
    // flexBasis: '25%',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  step: {
    margin: '0 auto 2rem auto',
    paddingTop: 200,
    paddingBottom: 200,
    // border: '1px solid #333',
    '& p': {
      // textAlign: 'center',
      padding: '1rem 2rem',
      fontSize: '1rem',
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  '@media screen and (max-width: 768px)': {
    scroller: {
      flexBasis: 'unset',
      width: '1rem',
    },
    graphic: {
      flexBasis: '100%',
    },
  },
};

class App extends PureComponent {
  state = {
    data: 0,
    keys: ['Big 0', 'Data Structures', 'Sources', 'Fin'],
    steps: Object.keys(dataObj),
    progress: 0,
    value: null,
  };

  onSelect = data => {
    this.setState({ data });
  };

  onStepEnter = ({ data }) => {
    this.setState({ data });
  };

  onStepProgress = ({ element, progress }) => {
    console.log(progress, 'progress');
    this.setState({ progress });
  };

  render() {
    const { data, steps, progress, keys } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <Header steps={keys} object={steps} onSelect={this.onSelect} />
        <div className={classes.graphicContainer}>
          <div className={classes.scroller}>
            <Scrollama
              onStepEnter={this.onStepEnter}
              onStepExit={this.onStepExit}
              progress={true}
              onStepProgress={this.onStepProgress}
              offset={-0.2}
              // debug
            >
              {steps.map(value => (
                <Step data={value} key={value}>
                  <div className={classes.step}>
                    <p>{value}</p>
                  </div>
                </Step>
              ))}
            </Scrollama>
          </div>
          <div className={classes.graphic}>
            <Card steps={steps} data={dataObj[data]} onSelect={this.onSelect} />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
