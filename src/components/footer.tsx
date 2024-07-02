export default function Footer() {
  return (
    <footer className="w-screen h-58 bg-gray-800 ">
      <section className="flex justify-center gap-12 items-center py-4 px-">
        <div className="flex flex-col ">
          <h2 className="font-bold text-xl">Main Event</h2>
          <p className="max-w-[500px]">
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl">Links Uteis</h2>
          <p>link1</p>
          <p>link1</p>
          <p>link1</p>
          <p>link1</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <p>Facebook icon</p>
          <p>Insta icon</p>
          <p>Google icon</p>
          <p>Gmail icon</p>
        </div>
      </section>
      <div
        className="bg-gray-900 w-screen h-10 flex items-center
      justify-center"
      >
        <span>@Todos os direito reservados</span>
      </div>
    </footer>
  );
}
