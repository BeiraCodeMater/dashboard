export default function Middleware({ children }: Propos) {
  return (
    <>
      <Middleware.Provider value>{children}</Middleware.Provider>
    </>
  );
}
