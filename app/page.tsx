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
    desc: "Escribe cuántos adultos y niños van. Ajusta el slider para indicar cuántos son hombres y cuántas mujeres.",
  },
  {
    num: "2",
    titulo: "Elige el tipo de carne asada",
    desc: "Selecciona si tu raza come ligero, normal o si son tragones. La lista cambia automáticamente.",
  },
  {
    num: "3",
    titulo: "Escoge las proteínas y extras",
    desc: "Activa res, pollo, salchicha o queso según lo que vayas a poner. También puedes agregar cerveza, botanas y más.",
  },
  {
    num: "4",
    titulo: "Comparte o distribuye la lista",
    desc: "Descarga el PDF, imprime o manda la lista por WhatsApp. También puedes dividir quién compra qué entre tus amigos.",
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
      "Depende del apetito: en modo Normal calcula 300 g para hombre y 230 g para mujer. Si son tragones, sube a 400 g y 320 g respectivamente. La calculadora ajusta todo esto automáticamente según cuántos son y cómo comen.",
  },
  {
    pregunta: "¿Cuál es la diferencia entre arrachera y costilla para la parrilla?",
    respuesta:
      "La arrachera es más suave, se cocina rápido (5–7 min por lado) y es fácil de manejar. La costilla tiene más grasa y sabor pero requiere más tiempo y control del fuego. La mejor opción es mezclar las dos — campechana — para tener lo mejor de ambas.",
  },
  {
    pregunta: "¿Puedo incluir pollo, salchicha o queso además de la carne?",
    respuesta:
      "Sí. La calculadora tiene checkboxes para agregar pollo, salchicha para asar y queso. Cuando activas varias proteínas, calcula los gramos de cada una de forma proporcional para que alcance parejo sin pasarte de presupuesto.",
  },
  {
    pregunta: "¿Cómo sé si la parrilla está lista para poner la carne?",
    respuesta:
      "Usa la prueba de la mano: coloca la palma a 10 cm de la parrilla. Si solo aguantas 1–2 segundos, el fuego está listo para arrachera. Si aguantas 3–4 segundos, está perfecto para costilla. Si aguantas más, el carbón necesita más tiempo.",
  },
  {
    pregunta: "¿Cuánta cerveza necesito para una carne asada?",
    respuesta:
      "La calculadora calcula la cerveza según el tipo de persona y el nivel de la reunión. Como referencia rápida: un hombre consume en promedio 3–4 latas en una tarde normal. La calculadora te dice el total en latas y lo convierte a six-packs o cajas para que sea fácil de comprar.",
  },
  {
    pregunta: "¿Qué hago si sobra carne al final?",
    respuesta:
      "La carne asada sobrante aguanta 3–4 días en el refri bien tapada. Puedes recalentarla en comal a fuego medio con un chorrito de agua para que no se reseque, o usarla para hacer quesadillas, tacos de guisado o hasta burritos al día siguiente.",
  },
  {
    pregunta: "¿La calculadora sirve si van niños?",
    respuesta:
      "Sí. Hay un campo específico para niños — la calculadora les asigna porciones más chicas (100–200 g según apetito) y ajusta todos los demás ingredientes en proporción. Así no compras de más pensando en los niños.",
  },
  {
    pregunta: "¿Cómo funciona el distribuidor de lista entre amigos?",
    respuesta:
      "Es una sección que aparece después de calcular. Agregas los nombres de quienes van a comprar y arrastras cada ingrediente al que le toca comprarlo. La app divide las cantidades automáticamente si un ingrediente lo compran entre varios. Al final puedes compartir la lista por WhatsApp para que cada quien sepa qué le toca.",
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
