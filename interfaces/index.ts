// CardProps and ButtonProps interfaces

export interface CardProps {
  title: string;
  imageSrc: string;
  description?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
