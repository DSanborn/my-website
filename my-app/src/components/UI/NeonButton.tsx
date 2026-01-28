import './NeonButton.css'

// Extend standard button props
interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string // optional for links
}

export default function NeonButton({ children, href, ...rest }: NeonButtonProps) {
  if (href) {
    return (
      <a href={href} className="neon-button">
        {children}
      </a>
    )
  }
  return (
    <button className="neon-button" {...rest}>
      {children}
    </button>
  )
}
