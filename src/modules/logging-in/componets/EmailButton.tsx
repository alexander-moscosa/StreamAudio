import { useState } from 'react';

function replaceByStars(str: string) {
  return str.replace(/[^\s]/g, '*');
}

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface EmailButtonProps extends ButtonProps {
  email: string;
}

export function EmailButton({ email, onClick, ...rest }: EmailButtonProps) {
  const [showEmail, setShowEmail] = useState(false);

  const handleShowClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <button onClick={handleShowClick} {...rest}>
      {showEmail ? email : replaceByStars(email)}
    </button>
  );
}
