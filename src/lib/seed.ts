import { prisma } from "../lib/prisma";

async function main() {
    await prisma.trip.createMany({
        data: [
            {
                name: "Hotel Aurora",
                description:
                    "O Hotel Aurora é um refúgio encantador situado em meio às majestosas montanhas. Com seus jardins exuberantes e uma arquitetura elegante, o Aurora oferece quartos espaçosos e bem decorados, gastronomia premiada, um spa luxuoso e uma variedade de instalações de lazer. É o lugar perfeito para os viajantes que buscam uma escapada relaxante e rejuvenescedora, proporcionando uma experiência memorável em um cenário deslumbrante.",
                startDate: new Date("2024-02-03"),
                endDate: new Date("2024-02-30"),
                location: "Amalfi, Itália",
                locationDescription: "Amalfi, na costa da Itália, é um paraíso costeiro de tirar o fôlego. Com suas encostas íngremes, vilarejos pitorescos e o Mar Tirreno como pano de fundo, é um destino deslumbrante. Suas ruas estreitas e sinuosas levam a praias encantadoras e oferecem uma experiência gastronômica excepcional, destacando-se como um refúgio encantador e romântico na Itália.",
                countryCode: "IT",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-01-it-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-01-it-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-01-it-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-01-it-04.jpg",
                ],
                pricePerDay: 250,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: true,
                maxGuests: 5,
            },
            {
                name: "Hotel Palace",
                description:
                    "O Hotel Palace é uma joia da hospitalidade, um símbolo de luxo e elegância. Localizado em uma localização privilegiada, o hotel oferece aos hóspedes uma experiência verdadeiramente magnífica. Com quartos deslumbrantes, decoração sofisticada e vistas panorâmicas deslumbrantes, o Palace cativa seus visitantes desde o momento em que entram. Os serviços impecáveis ​​e a atenção aos detalhes garantem uma estadia inesquecível, enquanto os restaurantes requintados e bares elegantes satisfazem os paladares mais exigentes. Com uma ampla gama de instalações de lazer, incluindo spa, academia e piscinas deslumbrantes, o Hotel Palace oferece uma experiência de luxo incomparável para aqueles que buscam o ápice da hospitalidade e conforto.",
                startDate: new Date("2024-02-03"),
                endDate: new Date("2024-02-30"),
                location: "New York, Estados Unidos",
                locationDescription: "Nova York, a cidade que nunca dorme, é um epicentro global de cultura, arte e diversidade. Com seus arranha-céus imponentes, como o Empire State Building e Times Square, é uma metrópole vibrante. A riqueza cultural se reflete em seus museus de renome, restaurantes ecléticos e na energia pulsante das ruas, oferecendo uma experiência única e inesquecível a cada esquina.",
                countryCode: "US",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-02-us-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-02-us-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-02-us-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-02-us-04.jpg",
                ],
                pricePerDay: 350,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: true,
                maxGuests: 5,
            },
            {
                name: "Royal Oasis",
                description:
                    "A Royal Oasis é um hotel de luxo exclusivo que combina uma arquitetura imponente, decoração refinada e serviços de alta qualidade para proporcionar aos seus hóspedes uma experiência inigualável. Com quartos espaçosos, restaurantes gourmet, instalações de bem-estar e um serviço impecável, este refúgio de tranquilidade e elegância é o local perfeito para aqueles que buscam o melhor em conforto e sofisticação.",
                startDate: new Date("2024-02-03"),
                endDate: new Date("2024-02-30"),
                location: "Florença, Itália",
                locationDescription: "Florença, berço do Renascimento, é um tesouro histórico e artístico na Itália. Com sua arquitetura magnífica, incluindo a cúpula da Catedral de Santa Maria del Fiore e a Ponte Vecchio sobre o rio Arno, a cidade respira arte e cultura. Abrigando obras-primas de artistas como Michelangelo e Botticelli, Florença encanta com sua beleza clássica e charme renascentista.",
                countryCode: "IT",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-03-it-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-03-it-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-03-it-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-03-it-04.jpg",
                ],
                pricePerDay: 400,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: true,
                maxGuests: 5,
            },
            {
                name: "Azure Haven Retreat",
                description:
                    "O Azure Haven Retreat é um oásis de luxo localizado em uma ilha privativa, onde as águas cristalinas do oceano encontram praias intocadas de areia branca. Com uma arquitetura contemporânea e elegante, este hotel exclusivo oferece aos seus hóspedes uma experiência de refúgio tranquilo e sofisticado. Os quartos e suítes espaçosos e meticulosamente decorados proporcionam um ambiente sereno, enquanto os restaurantes de classe mundial oferecem uma gastronomia requintada com ingredientes frescos e sabores internacionais. Além disso, o Azure Haven Retreat oferece uma variedade de atividades de lazer, como mergulho, iatismo e relaxamento em um spa de luxo, garantindo uma experiência inesquecível de luxo à beira-mar.",
                startDate: new Date("2024-01-15"),
                endDate: new Date("2024-01-30"),
                location: "Lago Sereno, Suíça",
                locationDescription: "Lago Sereno, na Suíça, é um refúgio alpino de beleza serena. Aninhado entre montanhas majestosas, o lago deslumbra com suas águas cristalinas refletindo os picos nevados. Suas margens oferecem trilhas pitorescas, permitindo aos visitantes desfrutar da tranquilidade da natureza e da magnificência dos Alpes suíços.",
                countryCode: "CH",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-04-ch-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-04-ch-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-04-ch-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-04-ch-04.jpg",
                ],
                pricePerDay: 600,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: true,
                maxGuests: 5,
            },
            {
                name: "Palazzo Sereno",
                description:
                    "O Palazzo Sereno é um hotel de luxo localizado em uma cidade histórica da Europa. Com uma arquitetura deslumbrante e um ambiente elegante, o hotel oferece aos hóspedes uma experiência exclusiva de conforto e sofisticação. Os quartos exquisitamente decorados proporcionam um refúgio tranquilo, enquanto os serviços de alta qualidade garantem uma estadia inesquecível. Com uma localização privilegiada, o Palazzo Sereno permite que os hóspedes explorem as belezas da cidade e vivenciem a cultura local com facilidade. Uma estadia neste hotel é uma verdadeira experiência de luxo e requinte.",
                startDate: new Date("2024-01-15"),
                endDate: new Date("2024-01-30"),
                location: "Madrid, Espanha",
                locationDescription: "Madrid, a animada capital da Espanha, é uma mistura apaixonante de cultura, história e energia contemporânea. Suas ruas fervilham com vida e arte, dos museus renomados como o Prado aos vibrantes bairros como Malasaña. A cidade cativa com sua gastronomia deliciosa, arquitetura imponente e uma atmosfera acolhedora que celebra a vida e a paixão espanhola.",
                countryCode: "ES",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-05-es-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-05-es-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-05-es-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-05-es-04.jpg",
                ],
                pricePerDay: 400,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: false,
                maxGuests: 5,
            },
            {
                name: "Mountain Peak Lodge",
                description:
                    "O Mountain Haven Retreat é um hotel boutique de luxo localizado em uma região montanhosa serena, cercada por paisagens deslumbrantes e tranquilidade. Com quartos elegantemente decorados, o hotel oferece aos hóspedes uma estadia confortável e relaxante, em meio à natureza intocada. Os hóspedes podem desfrutar de refeições gourmet preparadas com ingredientes frescos e locais no restaurante do hotel, enquanto apreciam vistas deslumbrantes das montanhas. Com acesso a trilhas para caminhadas, atividades ao ar livre e um spa relaxante, o Mountain Haven Retreat proporciona aos seus hóspedes uma experiência de luxo em um refúgio natural e encantador.",
                startDate: new Date("2024-01-15"),
                endDate: new Date("2024-01-30"),
                location: "Montreal, Canadá",
                locationDescription: "Montreal, uma metrópole cosmopolita no Canadá, é um mosaico fascinante de culturas. Com sua arquitetura histórica, destaca-se pela Basílica de Notre-Dame e pelo charme europeu do bairro antigo. A cidade é conhecida por sua vibrante cena gastronômica, festivais de renome mundial e uma atmosfera que mistura elegância e diversidade cultural de maneira única.",
                countryCode: "CA",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-06-ca-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-06-ca-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-06-ca-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-06-ca-04.jpg",
                ],
                pricePerDay: 700,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: false,
                maxGuests: 5,
            },
            {
                name: "Encanto da Serra",
                description:
                    "O Recanto Sereno é uma pousada encantadora localizada em uma pequena cidade costeira, no litoral sul do Brasil. Com uma atmosfera acolhedora e familiar, a pousada oferece aos hóspedes uma estadia tranquila e relaxante. Os quartos são confortáveis e bem decorados, proporcionando um refúgio aconchegante. Os hóspedes podem desfrutar de um café da manhã delicioso, com opções caseiras e regionais, que é servido com carinho. Além disso, o Recanto Sereno está a uma curta caminhada da praia, permitindo que os hóspedes desfrutem de momentos de descanso e lazer à beira-mar. Com uma equipe atenciosa e simpática, o Recanto Sereno proporciona aos seus hóspedes uma estadia relaxante e memorável em um ambiente sereno no litoral do Brasil.",
                startDate: new Date("2024-03-03"),
                endDate: new Date("2024-03-30"),
                location: "Oslo, Noruega",
                locationDescription: "Oslo, a capital da Noruega, é uma cidade moderna que abraça sua rica herança histórica e sua conexão íntima com a natureza. Situada entre fiordes deslumbrantes, oferece um equilíbrio entre urbanismo e tranquilidade natural. Conhecida por seus museus de classe mundial, como o Museu Munch, e pela sua abordagem inovadora à sustentabilidade, Oslo é uma mistura encantadora de cultura, design escandinavo e uma paisagem espetacular.",
                countryCode: "NO",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-07-no-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-07-no-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-07-no-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-07-no-04.jpg",
                ],
                pricePerDay: 300,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: false,
                maxGuests: 5,
            },
            {
                name: "Rancho Sereno",
                description:
                    "O Rancho Sereno é uma fazenda encantadora situada em uma região rural tranquila. Com acomodações simples e acolhedoras, o rancho oferece aos visitantes uma experiência autêntica de vida no campo. Os hóspedes podem desfrutar de momentos de paz e tranquilidade em meio à natureza exuberante, aproveitando trilhas para caminhadas, passeios a cavalo e atividades ao ar livre.",
                startDate: new Date("2024-02-03"),
                endDate: new Date("2024-02-30"),
                location: "Amsterdam, Holanda",
                locationDescription: "Amsterdã, a cidade dos canais, é um paraíso pitoresco que une charme histórico com uma atmosfera contemporânea. Com seus icônicos canais navegáveis, arquitetura encantadora e museus de renome como o Rijksmuseum, a cidade oferece uma rica mistura de arte, cultura e vida urbana. O espírito acolhedor de Amsterdã transparece em seus cafés aconchegantes, ciclovias movimentadas e na vibrante cena cultural que a torna uma joia única na Europa.",
                countryCode: "NL",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-08-nl-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-08-nl-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-08-nl-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-08-nl-04.jpg",
                ],
                pricePerDay: 100,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: false,
                maxGuests: 5,
            },
            {
                name: "Chalé Serenidade",
                description:
                    "O Chalé Serenidade é um refúgio encantador situado em uma área montanhosa pitoresca. Com sua arquitetura charmosa e ambiente acolhedor, o chalé oferece aos hóspedes uma estadia tranquila e relaxante. Os quartos são aconchegantes e bem decorados, proporcionando um ambiente agradável para descansar e apreciar a beleza da natureza ao redor. Os hóspedes podem desfrutar de momentos de paz em frente à lareira ou explorar trilhas nas proximidades. Com sua localização isolada, o Chalé Serenidade é perfeito para aqueles que buscam uma escapada serena e acolhedora nas montanhas.",
                startDate: new Date("2024-02-03"),
                endDate: new Date("2024-02-30"),
                location: "Paris, França",
                locationDescription: "Paris, a capital francesa, é um ícone de cultura, moda e romance. Com sua arquitetura deslumbrante, museus renomados como o Louvre e a atmosfera boêmia de Montmartre, a cidade é um centro de arte e história. Suas ruas exalam charme, repletas de cafés pitorescos e a imponente Torre Eiffel, tornando-se um destino deslumbrante para os amantes da beleza e da cultura.",
                countryCode: "FR",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-09-fr-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-09-fr-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-09-fr-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-09-fr-04.jpg",
                ],
                pricePerDay: 200,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: false,
                maxGuests: 5,
            },
            {
                name: "Morada do Mar Premium",
                description:
                    "O Morada do Mar Premium é um hotel luxuoso e exclusivo situado em Fernando de Noronha, projetado para oferecer uma experiência única aos seus hóspedes.Com uma localização privilegiada à beira- mar, este hotel combina o charme da ilha com o conforto e a sofisticação de um estabelecimento de alto padrão. Cada detalhe do local foi cuidadosamente pensado para proporcionar uma estadia inesquecível. Seus quartos espaçosos e elegantemente decorados oferecem vistas deslumbrantes do oceano, permitindo que os hóspedes se conectem com a beleza natural da ilha a qualquer momento.",
                startDate: new Date("2024-02-03"),
                endDate: new Date("2024-02-30"),
                location: "Fernando de Noronha, Brasil",
                locationDescription: "Fernando de Noronha é um paraíso tropical intocado no Brasil, conhecido por suas praias de areias brancas e águas cristalinas. Com sua natureza exuberante e preservada, é um santuário para vida marinha, perfeito para mergulho e observação de animais, como golfinhos e tartarugas. A atmosfera tranquila e a beleza natural deslumbrante tornam Noronha um destino de sonho para amantes da natureza e viajantes em busca de serenidade.",
                countryCode: "BR",
                coverImage:
                    "https://best-trip.s3.amazonaws.com/trip-10-br-01.jpg",
                imagesUrl: [
                    "https://best-trip.s3.amazonaws.com/trip-10-br-02.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-10-br-03.jpg",
                    "https://best-trip.s3.amazonaws.com/trip-10-br-04.jpg",
                ],
                pricePerDay: 300,
                highlights: ["Café da manhã incluso", "Piscina", "Wifi grátis", "Estacionamento grátis", "Vista paradisíaca", "Luxuoso"],
                recommended: false,
                maxGuests: 5,
            },
        ],
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
