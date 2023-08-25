"use client";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <div>error</div>;
}
