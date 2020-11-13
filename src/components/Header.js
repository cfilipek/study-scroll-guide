import React from 'react';
import injectSheet from 'react-jss';
import Select from './Select';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { useMediaQuery } from './Hooks';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    // padding: '0vh 2vw 70vh',
  },
  scroller: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '6.5rem 0rem',
    display: 'flex',
    flexBasis: 'unset',
    width: '20rem',
    justifyContent: 'space-around',
    fontWeight: '400',
    '& p': {
      fontSize: '1rem',
      marginLeft: '-4.5rem',
    },
  },
  graphic: {
    flexBasis: '100%',
    position: 'sticky',
    width: 'inherit',
    height: '100vh',
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    padding: '5rem 0',
    '& h2': {
      fontSize: '2rem',
      color: '#000000',
      textTransform: 'uppercase',
      fontWeight: '700',
    },
    '& h6': {
      fontWeight: '400',
    },
    '& h4': {
      fontWeight: '400',
    },
  },
  contentContainer: {
    padding: '0 10%',
  },
  headerInfo: {
    margin: '4rem 0',
  },
  '@media screen and (max-width: 768px)': {
    scroller: {
      flexBasis: 'unset',
      marginLeft: '0',
      width: '1rem',
      '& p': {
        display: 'none',
      },
    },
    graphic: {
      flexBasis: '100%',
    },
  },
  socialIcon: {
    padding: '10px !important',
    marginTop: '8px',
    marginLeft: '8px',
  },
  titleContainer: {
    display: 'inline-flex',
  },
};

const Header = ({
  classes,
  children,
  steps,
  object,
  onSelect,
  handleClick,
}) => {
  return (
    <div className={classes.header}>
      <div className={classes.scroller}>
        <p>Introduction</p>
      </div>
      <div className={classes.graphic}>
        <div className={classes.contentContainer}>
          <div className={classes.titleContainer}>
            <h2>Mastering the coding interview</h2>
            <TwitterShareButton
              url="http://clairefilipek.com/#/"
              title="Mastering The Coding Interview Parallax Guide"
              via="iloveclair"
              hashtags={[]}
              className={classes.socialIcon}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <h6>
            compiled, created, and built by{' '}
            <a
              href="http://clairefilipek.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claire Filipek
            </a>
          </h6>
          <h4 className={classes.headerInfo}>
            This is primarily a JavaScript/CS resource.
            <br />
            <br />I created this project to help myself study and become the
            best programmer that I can be. If this is helpful to you, great, and
            if not or you see an area of improvement feel free to reach out. It,
            as we all are, is a work in progress.
          </h4>
          <Select
            label="Prioritize a section"
            placeholder="Pick one or simply scroll:"
            options={steps}
            object={object}
            onSelect={onSelect}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
