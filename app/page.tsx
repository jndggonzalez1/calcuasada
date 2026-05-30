import type { Metadata } from "next";
import Calculadora from "./components/Calculadora";
import AdBanner from "./components/AdBanner";

export const metadata: Metadata = {
  title: "Calcuasada — Calculadora de Carne Asada para México",
  description:
    "¿Cuánta carne asada necesitas? Calcula carne, tortillas, limones, carbón, hielo y más según el número de personas. Gratis, rápido y en español.",
};

const pasos = [
  {
    num: "1",
    titulo: "Pon cuántos van",
    desc: "Escribe el número de personas que van a comer en tu carne asada.",
  },
  {
    num: "2",
    titulo: "Elige el hambre",
    desc: "Selecciona si tu raza come normal, poco o si son de esos que repiten tres veces.",
  },
  {
    num: "3",
    titulo: "Dale calcular",
    desc: "Presiona el botón y en un segundo te sale la lista completa de lo que necesitas.",
  },
  {
    num: "4",
    titulo: "Llévate la lista al súper",
    desc: "Imprime o toma screenshot y ya tienes todo listo para ir a comprar sin quedarte corto.",
  },
];

const tips = [
  {
    emoji: "🥩",
    titulo: "Compra arrachera o costilla",
    desc: "En Monterrey la costilla de res y la arrachera son las reinas de la parrilla. Si vas a campechana, mezcla mitad y mitad.",
  },
  {
    emoji: "🔥",
    titulo: "El carbón mesquite es el bueno",
    desc: "El carbón de mezquite le da ese sabor ahumado que distingue la carne asada regiomontana. Evita los carbones de dudosa procedencia.",
  },
  {
    emoji: "🌮",
    titulo: "Tortillas de harina, siempre",
    desc: "En Nuevo León no hay debate: tortillas de harina. Cómpralas frescas en la tortillería del barrio, hacen toda la diferencia.",
  },
  {
    emoji: "🍋",
    titulo: "Limones de sobra",
    desc: "Nunca calcules justo los limones — siempre compra de más. La carne, el agua fresca y hasta el michelada los necesitan.",
  },
  {
    emoji: "🧂",
    titulo: "Sal de grano antes de la parrilla",
    desc: "Echa sal de grano a la carne unos 20 minutos antes de ponerla al carbón. Sencillo y hace toda la diferencia en el sabor.",
  },
  {
    emoji: "🧊",
    titulo: "El hielo no puede faltar",
    desc: "Calcula mínimo 1 kg de hielo por persona para las bebidas. En verano en Monterrey, mejor ponle 1.5 kg — el calor no perdona.",
  },
];

const faqs = [
  {
    pregunta: "¿Cuánta carne asada necesito por persona?",
    respuesta:
      "Lo estándar es 300–350 gramos por persona para adultos con buen apetito. Si hay niños o la gente come poco, puedes bajar a 200 gramos. Nuestra calculadora ajusta automáticamente según el nivel de hambre.",
  },
  {
    pregunta: "¿Cuántas tortillas de harina necesito por persona?",
    respuesta:
      "Calcula entre 4 y 6 tortillas por persona. Si la carne es el plato fuerte y hay guarniciones, con 4 está bien. Si la raza es de esas que hacen tacos grandes, sube a 6.",
  },
  {
    pregunta: "¿Cuánto carbón necesito para la carne asada?",
    respuesta:
      "Aproximadamente 1 kg de carbón por cada 4–5 personas. Si la parrillada va a durar más de 2 horas o el asador es grande, calcula 1 kg por cada 3 personas para no quedarte sin brasa.",
  },
  {
    pregunta: "¿Cuántos limones necesito?",
    respuesta:
      "Medio limón por persona como mínimo, pero siempre compra de más. Los limones se usan en la carne, en las bebidas, en el guacamole y en mil cosas más. Una red de 1 kg para 10 personas no está de más.",
  },
  {
    pregunta: "¿Cuánto hielo necesito para una carne asada?",
    respuesta:
      "De 1 a 1.5 kg de hielo por persona dependiendo del calor. En verano, especialmente en el norte del país, siempre cal calcular de más. Es mejor que sobre a que se te acabe el hielo a mitad de la tarde.",
  },
  {
    pregunta: "¿Cuánta carne necesito para 20 personas?",
    respuesta:
      "Para 20 personas con buen apetito necesitas alrededor de 6–7 kg de carne. Nuestra calculadora te da el desglose exacto con todos los demás ingredientes incluidos.",
  },
  {
    pregunta: "¿Cuánta carne necesito para 50 personas?",
    respuesta:
      "Para 50 personas calcula entre 15 y 17 kg de carne. A esa escala también conviene tener más de un asador y calcular bien el carbón — mínimo 10–12 kg.",
  },
  {
    pregunta: "¿La calculadora funciona para cualquier tamaño de reunión?",
    respuesta:
      "Sí, funciona desde 2 personas hasta eventos grandes. Solo pon el número de invitados y el nivel de apetito y la calculadora hace el resto. No importa si son 5 o 200.",
  },
];

export default function HomePage() {
  return (
    <>
      <AdBanner />

      <div className="text-center">
        <h1 className="text-2xl font-black text-gray-900">
          Calculadora de Carne Asada
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Ingresa cuántos van y te decimos exactamente qué comprar
        </p>
      </div>

      <Calculadora />

      <AdBanner />

      {/* Cómo usar */}
      <section className="bg-brasa-light rounded-2xl p-5">
        <h2 className="text-lg font-black text-gray-900 mb-4">
          ¿Cómo usar la calculadora?
        </h2>
        <ol className="space-y-3">
          {pasos.map((paso) => (
            <li key={paso.num} className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brasa text-white text-sm font-black flex items-center justify-center">
                {paso.num}
              </span>
              <div>
                <p className="font-bold text-gray-900 text-sm">{paso.titulo}</p>
                <p className="text-gray-500 text-xs mt-0.5">{paso.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Tips */}
      <section>
        <h2 className="text-lg font-black text-gray-900 mb-4">
          Tips para tu carne asada estilo Monterrey
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {tips.map((tip) => (
            <div key={tip.titulo} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-3 shadow-sm">
              <span className="text-2xl">{tip.emoji}</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">{tip.titulo}</p>
                <p className="text-gray-500 text-xs mt-0.5">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdBanner />

      {/* FAQ */}
      <section>
        <h2 className="text-lg font-black text-gray-900 mb-4">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.pregunta} className="border-b border-gray-100 pb-4 last:border-0">
              <p className="font-bold text-gray-900 text-sm">{faq.pregunta}</p>
              <p className="text-gray-500 text-xs mt-1">{faq.respuesta}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
