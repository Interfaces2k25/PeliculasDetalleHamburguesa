function Detalle({ titulo, imagen, alt, children }) {
    return (
      <main className="w-full max-w-3xl mx-auto p-6">
        <img src={imagen} alt={alt} className="w-full rounded-xl mb-6" />
  
        <h1 className="text-4xl font-bold mb-4">{titulo}</h1>
  
        <section className="space-y-2 text-lg">
          {children}
        </section>
      </main>
    );
  }
  
  export default Detalle;
  