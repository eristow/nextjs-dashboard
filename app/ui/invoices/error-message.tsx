interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage(props: ErrorMessageProps) {
  const error = props.error;

  return <p className="mt-2 text-sm text-red-500">{error}</p>;
}
