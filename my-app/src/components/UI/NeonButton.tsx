import './NeonButton.css';

export default function NeonButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button className="neon-button" onClick={onClick}>
      {children}
    </button>
  );
}
