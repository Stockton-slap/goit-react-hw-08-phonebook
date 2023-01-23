import { ErrorStatus, ErrorMessage } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <ErrorStatus>404 </ErrorStatus>
      <ErrorMessage>Page not found</ErrorMessage>
    </div>
  );
};

export default NotFound;
