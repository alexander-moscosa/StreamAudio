import { useLocation } from "react-router-dom";


export const Logging_in = () => {

  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const code = params.get('code');

  return (
    <div className="logging_in_content">
      { code }
    </div>
  );
};
