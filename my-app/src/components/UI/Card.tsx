import type { ReactNode } from 'react';
import './Card.css';

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
