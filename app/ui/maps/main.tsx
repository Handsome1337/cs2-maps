export default function Main({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center p-4 overflow-auto min-w-[960]">
      {children}
    </main>
  );
}
