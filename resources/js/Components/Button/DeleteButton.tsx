import { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  onDelete: () => void;
}

export default function DeleteButton({ onDelete, children, className}: Props) {
  return (
    <button
      className={className}
      type="button"
      tabIndex={-1}
      onClick={onDelete}
    >
      {children}
    </button>
  );
}
