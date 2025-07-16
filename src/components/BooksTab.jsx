
const BooksTab = () => {
  const books = [
    {
      title: "I Tentacoli del destino",
      description: "Wex si sveglia da quasi cento anni in un letto comodo. Circondato da un mondo in pace e tutto sommato tranquillo. Ma un destino capriccioso si è stancato di tutta quella quiete e ha deciso di smuovere un po' le acque. Forse un po' troppo? Certo è che questo particolare elfo sconvolgerà drasticamente l'intero mondo. Se vi piacciono i fantasy non troppo fantasy, con una storia piena di morti e tanta ironia, siete davanti al libro giusto.",
      image: "/images/copertinaLibro1.jpg",
      amazonLink: "https://www.amazon.it/dp/B09DHNVS6T/ref=sr_1_3?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=principe+sconfitti&qid=1629874249&sr=8-3"
    },
    {
      title: "Il Necro-druido",
      description: "Signori e signore, buon salve a tutti. Siete tornati qui dopo aver letto il primo libro? Bravi bravi avete dei gusti raffinati. Se non avete letto il primo libro e siete qui per sbaglio, vi prego leggetevi il primo perché altrimenti non capireste nulla. Non perché scrivo male io ma perché non ho voglia di fare riassunti brutti. Detto questo, sedetevi comodi e godetevi insieme a me le avventure di Wex e i suoi. Spero che tra uccisioni varie e imprese incredibili possa io sapervi intrattenere ancora una volta.",
      image: "/images/copertinaLibro2.jpg",
      amazonLink: "https://www.amazon.it/Necro-Druido-Principe-degli-sconfitti-Vol-ebook/dp/B0DH3SHSWM?ref_=saga_dp_bnx_dsk_dp&qid=1629874249&sr=8-3"
    },
    {
      title: "La fine del Mondo",
      description: "Il finale emozionante della trilogia che ha conquistato i lettori.",
      image: "/images/isComing.png",
      amazonLink: "https://www.amazon.it/dp/zzzzzzzzz"
    }
  ];
 
  return (
    <div className="text-center p-6">
      <div className="bg-sky-100 rounded-xl p-6 mb-8 shadow">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Il Principe degli sconfitti
        </h2>
        <p className="text-gray-700 italic">
          Collana di romanzi fantasy che raccontano una storia "epica" di vendetta, coraggio e testate.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-2xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-48 h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600 mb-4">{book.description}</p>
            <a
              href={book.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-orange-500 text-white font-medium rounded-full shadow hover:bg-orange-600 transition"
            >
              🛒 Compra su Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksTab;

