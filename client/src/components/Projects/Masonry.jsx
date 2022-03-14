import React from 'react';

const Masonry = ({ cols, gap, children }) => {
  return (
    <div className="masonry">
      {Array.from(Array(cols).keys()).map((col) => {
        return (
          <div className="masonry__col" style={{ marginRight: gap }} key={col}>
            {React.Children.toArray(children)
              .filter((child, i) => i % 3 === col)
              .map((child, i) => {
                return (
                  <div
                    className="masonry__element"
                    style={{ marginBottom: gap }}
                    key={i}
                  >
                    {child}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
