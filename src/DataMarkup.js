import React from 'react';

const DataMarkup = {
  Blank: function() {
    return <div>Blank</div>;
  },
  JohnEricsson: function() {
    return (
      <div>
        <div>Battery Park, Statue of John Ericsson</div>
        <div>This statue has been moved many times, but in this video you can see him facing towards Battery Park, with the Chesebrough Building in the background.</div>
      </div>
    );
  },
}

export default DataMarkup;
