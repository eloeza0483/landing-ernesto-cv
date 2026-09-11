export function StatusValue({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 text-sm font-medium"
      style={{ color: 'var(--color-accent)' }}
    >
      <span className="punto" />
      {label}
    </span>
  )
}
