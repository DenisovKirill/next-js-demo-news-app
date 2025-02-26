'use client';

const ErrorPage = ({ error }) => {
  return (
    <div id={'error'}>
      <h2>An error has occurred</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
