import React from 'react';
import injectSheet from 'react-jss';
import Repl from './Repl';

const styles = {
  card: {},
  infoContainer: {
    padding: '1rem 10%',
    height: '30rem',
    '& h4': {
      fontFamily: "'Roboto', sans- serif",
      fontWeight: '400',
      lineHeight: '1.5rem',
    },
  },
  image: {
    maxWidth: '80%',
  },
  section: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  steps: {
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: '700',
  },
};

const Card = ({ classes, children, data, steps, onSelect }) => {
  const handleClick = (section, index) => {
    onSelect(section);
    document.location = `/#scrollama-${index}`;
  };

  return data ? (
    <div className={classes.card}>
      <div className={classes.infoContainer}>
        <h2>{data.title}</h2>
        {data.image && (
          <div>
            <img className={classes.image} src={data.image} alt={data.title} />
            <h6>
              <a
                href={data.imageSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                Image Source
              </a>
            </h6>
          </div>
        )}
        <h4>{data.information}</h4>
        {data.steps &&
          data.steps.map((step, index) => (
            <h4 key={`steps-${index}`}>
              <span className={classes.steps}>
                {index + 1}. {step.title}:{' '}
              </span>{' '}
              {step.info}
            </h4>
          ))}
        {data.repl && (
          <Repl problem={data.problem} name={data.name} link={data.repl} />
        )}
        {data.sections && (
          <div>
            <h3>Sections:</h3>
            {data.sections.map((section, index) => (
              <div
                className={classes.section}
                key={section}
                onClick={() => handleClick(section, steps.indexOf(section))}
              >
                <h4 key={`section-${index}`}>{section}</h4>
              </div>
            ))}
          </div>
        )}
        {data.sources &&
          data.sources.map((source, index) => (
            <h5 key={`source-${index}`}>
              {source.source}{' '}
              <a href={source.link} target="_blank" rel="noopener noreferrer">
                {source.link}
              </a>
            </h5>
          ))}
      </div>
    </div>
  ) : (
    <div className={classes.card}>
      <div className={classes.infoContainer}>
        <h2>Keep Scrolling...</h2>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Card);
