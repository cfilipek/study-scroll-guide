import React, { useEffect, useState } from 'react';
import injectSheet from 'react-jss';

const styles = {};

const Repl = ({ problem, link, name }) => {
  const iframe = `<iframe height="500px" style="width: 100%;" scrolling="no" title=${name} src=${link}?lite=true frameborder="0" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"/>`;

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowLoading(false), 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div>
      <h4>
        Challenge {problem}: {name}
      </h4>
      {showLoading ? (
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: iframe }} />
      )}
    </div>
  );
};

export default injectSheet(styles)(Repl);
