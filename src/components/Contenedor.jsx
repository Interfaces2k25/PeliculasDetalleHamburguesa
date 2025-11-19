function Contenedor({ children }) {

  return (
    <>
      <main
        id="main-content"
        role="main"
        tabIndex="-1"
        className="min-h-screen bg-linear-to-br items-center justify-center p-8 ">
        
        <section aria-labelledby="main-section-title">
          {children}
        </section>
      </main>
    </>
  )
}

export default Contenedor
