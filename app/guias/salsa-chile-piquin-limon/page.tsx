import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../../components/AdBanner";

export const metadata: Metadata = {
  title: "Salsa de chile piquín con limón — Receta para carne asada — Calcuasada",
  description:
    "Receta de salsa de chile piquín con limón y ajo tostado. Sencilla, picosita y perfecta para carne asada. La favorita de Yeyito, con piquines rojos como le enseñó su abuelito.",
};

export default function SalsaPiquinPage() {
  return (
    <article className="space-y-6 text-gray-700">

      <div className="text-center space-y-2">
        <p className="text-xs font-semibold text-brasa uppercase tracking-wider">La favorita de Yeyito</p>
        <h1 className="text-2xl font-black text-gray-900 leading-tight">
          Salsa de chile piquín con limón
        </h1>
        <p className="text-sm text-gray-500">5 min de lectura · Actualizado junio 2026</p>
      </div>

      <div className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-2">
        <p className="text-sm font-black text-gray-900">Lo que necesitas saber:</p>
        <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
          <li>Sin estufa ni licuadora — solo molcajete</li>
          <li>Lista en 10 minutos</li>
          <li>Rinde para 6 a 8 personas</li>
          <li>El limón es la base líquida — sin agua para que quede más intensa</li>
        </ul>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Una salsa sencilla, picosita y muy buena para carne asada</h2>
        <p className="text-sm leading-relaxed">
          Esta salsa va con chiles piquín enteros, limón, sal y ajo tostado. Es la favorita de Yeyito — los piquines rojos, como le enseñó su abuelito. Queda perfecta para tacos de carne, salchicha, pollo, quesadillas, cebollitas asadas o para ponerle directo a la carne recién salida del asador.
        </p>
        <p className="text-sm leading-relaxed">
          El chile piquín es pequeño pero tiene mucho carácter. El limón lo equilibra y le da frescura; el ajo tostado le da profundidad. Juntos hacen una salsa rústica, ácida y picosita que va de maravilla con la grasa de la carne asada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">¿Piquines verdes o rojos?</h2>
        <p className="text-sm leading-relaxed">
          Los dos funcionan — es cuestión de gusto. Los <strong>verdes</strong> tienen un picante más fresco y un sabor ligeramente herbáceo. Los <strong>rojos</strong> están más secos, tienen un picante más concentrado y un sabor más intenso y terroso.
        </p>
        <p className="text-sm leading-relaxed">
          Yeyito prefiere los rojos porque son los que usaba su abuelito. Si encuentras una mezcla de los dos, también funciona bien — le da complejidad al sabor.
        </p>
      </section>

      <AdBanner />

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Ingredientes</h2>
        <p className="text-sm text-gray-500">Rinde para 6 a 8 personas.</p>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {[
            { emoji: "🌶️", cantidad: "3 a 4 cdas", ingrediente: "Chiles piquín enteros (preferentemente rojos)" },
            { emoji: "🍋", cantidad: "5 a 6 pzas",  ingrediente: "Limones" },
            { emoji: "🧄", cantidad: "2 dientes",   ingrediente: "Ajo" },
            { emoji: "🧂", cantidad: "Al gusto",    ingrediente: "Sal" },
          ].map(({ emoji, cantidad, ingrediente }, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <span className="text-xl flex-shrink-0">{emoji}</span>
              <span className="text-sm font-bold text-gray-500 w-20 flex-shrink-0">{cantidad}</span>
              <span className="text-sm text-gray-800">{ingrediente}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-black text-gray-900">Preparación</h2>

        <div className="space-y-3">
          {[
            {
              n: 1,
              titulo: "Tuesta el ajo",
              texto: "Pon los dientes de ajo en el asador, comal o sartén a fuego medio-alto. Dales vuelta hasta que estén suaves por dentro y con manchas doradas por fuera, unos 6 a 8 minutos. El ajo tostado tiene un sabor más suave y ahumado que el crudo — es clave para esta salsa.",
            },
            {
              n: 2,
              titulo: "Machaca los chiles con la sal",
              texto: "En un molcajete, muele los chiles piquín enteros junto con la sal. No los muelas demasiado fino — la idea es que queden con textura, con pedacitos de chile que se sientan al morderlos.",
            },
            {
              n: 3,
              titulo: "Agrega el ajo tostado",
              texto: "Añade los dientes de ajo al molcajete y machaca hasta integrarlos con el chile. No necesitas que quede una pasta perfectamente lisa — rústica está bien y hasta mejor.",
            },
            {
              n: 4,
              titulo: "Exprime los limones",
              texto: "Exprime los limones directamente sobre la mezcla. El limón es la base líquida de esta salsa — no lleva agua. Revuelve bien para que todo se integre.",
            },
            {
              n: 5,
              titulo: "Prueba y ajusta",
              texto: "Prueba la salsa. Ajusta con más sal, limón o chile según qué tan ácida y picosa la quieras. Si quedó muy densa, un poco más de limón la aligera.",
            },
          ].map(({ n, titulo, texto }) => (
            <div key={n} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brasa text-white font-black text-sm flex items-center justify-center mt-0.5">
                {n}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-900">{titulo}</p>
                <p className="text-sm leading-relaxed text-gray-600">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdBanner />

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Alternativa rápida: sin ajo fresco</h2>
        <p className="text-sm leading-relaxed">
          Si no tienes ajo fresco, puedes usar ajo en polvo. No sabe igual que el ajo tostado en el asador, pero funciona para salir del apuro.
        </p>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="flex items-center gap-4 px-5 py-3">
            <span className="text-xl flex-shrink-0">🧄</span>
            <span className="text-sm font-bold text-gray-500 w-20 flex-shrink-0">½ cdita</span>
            <span className="text-sm text-gray-800">Ajo en polvo</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Agrégalo directamente junto con el chile piquín y la sal, antes de exprimir el limón.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">Nivel de picante</h2>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {[
            { nivel: "Suave",    cantidad: "1 a 2 cdas de chile piquín", color: "text-yellow-600" },
            { nivel: "Medio",   cantidad: "3 a 4 cdas de chile piquín", color: "text-orange-500" },
            { nivel: "Picante", cantidad: "5 cdas o más",               color: "text-red-600"    },
          ].map(({ nivel, cantidad, color }, i) => (
            <div key={i} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <span className={`text-sm font-black w-16 flex-shrink-0 ${color}`}>{nivel}</span>
              <span className="text-sm text-gray-700">{cantidad}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brasa-light border border-brasa/20 rounded-2xl p-5 space-y-3">
        <p className="text-sm font-black text-gray-900">⭐ Recomendación especial de Yeyito</p>
        <p className="text-sm leading-relaxed text-gray-700">
          Esta salsa queda mejor sin agua. La idea es que el limón sea la base líquida y que el sabor quede más intenso, ácido y picosito.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Si la quieres más fuerte, agrega más piquín. Si la quieres más fresca, agrega más limón. Para carne asada, queda especialmente buena cuando está bien acidita porque corta la grasa de la carne y levanta el sabor del taco.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-black text-gray-900">¿Con qué va esta salsa?</h2>
        <p className="text-sm leading-relaxed">
          Con todo lo que sale del asador. Tacos de arrachera, costilla, pollo, salchicha para asar, quesadillas de queso, cebollitas asadas — esta salsa le queda bien a todo. También es perfecta para ponerle directo a la carne recién salida de la parrilla, antes de armar el taco.
        </p>
        <p className="text-sm leading-relaxed">
          Si tienes esta salsa de piquín y una salsa verde en la mesa, ya tienes las dos que necesita cualquier carne asada norteña.
        </p>
      </section>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
        <p className="text-sm font-bold text-gray-900">¿Ya sabes cuánta gente va?</p>
        <p className="text-sm text-gray-600">
          La calculadora te dice exactamente cuánta carne, tortillas, limones y más necesitas — para que no te falte nada.
        </p>
        <Link
          href="/"
          className="inline-block bg-brasa text-white font-bold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Ir a la calculadora →
        </Link>
      </div>

      <AdBanner />

    </article>
  );
}
