import * as React from 'react';

type LoaderProps = {
  size: string,
  style: {
    [key: string]: string;
  };
}

const Loader:React.FC<LoaderProps> = ({size, style}) => {

  return (
    <div className="loader-wrapper" style={style}>
      <div className={`loader ${size}`}/>
    </div>
  );
};

export default Loader;
