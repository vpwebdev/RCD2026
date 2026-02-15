export default function Scripture({
  verse,
  reference,
}: {
  verse: string;
  reference: string;
}) {
  return (
    <div className="scripture">
      &ldquo;{verse}&rdquo;
      <span className="scripture-ref">{reference}</span>
    </div>
  );
}
