
export const validId: string[] = [
  "PhilID",
  "Postal ID",
  "Passport",
  "Social Security System ID",
  "Professional Regulation Commission ID",
  "Home Development Mutual Fund ID",
  "Driver's License",
  "Unified Multi-Purpose ID"
];
export const district: string[] = [
  "District 1",
  "District 2",
  "District 3",
  "District 4",
  "District 5",
  "District 6"
];

export const district1: string[] = [
  "Vasra",
  "Bagong Pag-asa",
  "Sto. Cristo",
  "Project 6",
  "Ramon Magsaysay",
  "Alicia",
  "Bahay Toro",
  "Katipunan",
  "San Antonio",
  "Veterans Village",
  "Bungad",
  "Phil-Am",
  "West Triangle",
  "Sta. Cruz",
  "Nayong Kanluran",
  "Paltok",
  "Paraiso",
  "Mariblo",
  "Damayan",
  "Del Monte",
  "Masambong",
  "Talayan",
  "Sto. Domingo",
  "Siena",
  "St. Peter",
  "San Jose",
  "Manresa",
  "Damar",
  "Pag-ibig sa Nayon",
  "Balingasa",
  "Sta. Teresita",
  "San Isidro Labrador",
  "Paang Bundok",
  "Salvacion",
  "N.S Amoranto",
  "Maharlika",
  "Lourdes"
];

export const district2: string[] = [
  "Bagong Silangan",
  "Batasan Hills",
  "Commonwealth",
  "Holy Spirit",
  "Payatas"
];

export const district3: string[] = [
  "Silangan",
  "Socorro",
  "E. Rodriguez",
  "West Kamias",
  "East Kamias",
  "Quirino 2-A",
  "Quirino 2-B",
  "Quirino 2-C",
  "Quirino 3-A",
  "Claro (Quirino 3-B)",
  "Duyan-Duyan",
  "Amihan",
  "Matandang Balara",
  "Pansol",
  "Loyola Heights",
  "San Roque",
  "Mangga",
  "Masagana",
  "Villa Maria Clara",
  "Bayanihan",
  "Camp Aguinaldo",
  "White Plains",
  "Libis",
  "Ugong Norte",
  "Bagumbayan",
  "Blue Ridge A",
  "Blue Ridge B",
  "St. Ignatius",
  "Milagrosa",
  "Escopa I",
  "Escopa II",
  "Escopa III",
  "Escopa IV",
  "Marilag",
  "Bagumbuhay",
  "Tagumpay",
  "Dioquino Zobel"
];

export const district4: string[] = [
  "Sacred Heart",
  "Laging Handa",
  "Obrero",
  "Paligsahan",
  "Roxas",
  "Kamuning",
  "South Triangle",
  "Pinagkaisahan",
  "Immaculate Concepcion",
  "San Martin De Porres",
  "Kaunlaran",
  "Bagong Lipunan ng Crame",
  "Horseshoe",
  "Valencia",
  "Tatalon",
  "Kalusugan",
  "Kristong Hari",
  "Damayang Lagi",
  "Mariana",
  "Doña Imelda",
  "Santol",
  "Sto. Niño",
  "San Isidro Galas",
  "Doña Aurora",
  "Don Manuel",
  "Doña Josefa",
  "UP Village",
  "Old Capitol Site",
  "UP Campus",
  "San Vicente",
  "Teachers Village East",
  "Teachers Village West",
  "Central",
  "Pinyahan",
  "Malaya",
  "Sikatuna Village",
  "Botocan",
  "Krus Na Ligas"
];

export const district5: string[] = [
  "Bagbag",
  "Capri",
  "Greater Lagro",
  "Gulod",
  "Kaligayahan",
  "Nagkaisang Nayon",
  "North Fairview",
  "Novaliches Proper",
  "Pasong Putik Proper",
  "San Agustin",
  "San Bartolome",
  "Sta. Lucia",
  "Sta. Monica",
  "Fairview"
];
export const district6: string[] = [
  "Apolonio Samson",
  "Baesa",
  "Balon Bato",
  "Culiat",
  "New Era",
  "Pasong Tamo",
  "Sangandaan",
  "Tandang Sora",
  "Unang Sigaw",
  "Sauyo",
  "Talipapa"
];

export const ownership: string[] = [
  "Private Property",
  "Public Property",
  "Goverment Property"
];

export const farmType: string[] = [
  "Rooftop Gardens/Farm",
  "Community Farm",
  "School Farm",
  "Urban Market Farm",
  "Backyard  Garden/Farm"
];

export interface MemberSchema {
  name: string;
  applicationStatus: "invited" | "member" | "pending" | "rejected";
}

export const memberData: MemberSchema[] = [
  { name: "John Doe", applicationStatus: "invited" },
  { name: "Jane Smith", applicationStatus: "member" },
  { name: "Bob Johnson", applicationStatus: "pending" },
  { name: "Alice Williams", applicationStatus: "rejected" },
  { name: "David Brown", applicationStatus: "invited" },
  { name: "Emma White", applicationStatus: "member" },
  { name: "Frank Miller", applicationStatus: "pending" },
  { name: "Grace Davis", applicationStatus: "rejected" },
  { name: "Henry Clark", applicationStatus: "invited" },
  { name: "Ivy Turner", applicationStatus: "member" },
  { name: "Jackie Ward", applicationStatus: "pending" },
  { name: "Kevin Reed", applicationStatus: "rejected" },
  { name: "Lily Adams", applicationStatus: "invited" },
  { name: "Michael Hill", applicationStatus: "member" },
  { name: "Nora Evans", applicationStatus: "pending" },
  { name: "Oscar Lee", applicationStatus: "rejected" },
  { name: "Pamela Carter", applicationStatus: "invited" },
  { name: "Quincy Foster", applicationStatus: "member" },
  { name: "Rachel Allen", applicationStatus: "pending" },
  { name: "Samuel Moore", applicationStatus: "rejected" }
  // Add more users as needed
];

export interface blogSchema {
  blogId: string;
  createdAt: string;
  updatedAt: string;
  category: "Initiatives" | "News" | "Our Focus"
  title: string;
  content: string;
  author: string;
  authorTitle: string;
  status: string;
  isFeatured: boolean;
  tags: string[];
}

export interface blogImageSchema {
  blog_imageId: string;
  blogId: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  thumbnail: boolean;
}

export interface EventSchema {
  eventId: number;
  createdAt: string;
  updatedAt: string;
  banner: string;
  eventEnd: string;
  eventStart: string;
  where: string;
  title: string;
  about: string;
  status: "upcoming" | "previous" | "draft" | "archived";
  type: "webinar" | "seminar";
  participateGuide: string;
}

export interface EventPartnerSchema {
  eventId: number;
  name: string;
  logo: string;
  organizer: boolean;
  type: string;
}

export interface EventSpeakerSchema {
  eventId: number;
  profile: string;
  name: string;
  occupation: string;
}

export interface ArticleSchema {
  articleId:string
  createdAt: string;
  updatedAt: string;
  title:string
  description:string
  status:"published" | "draft" | "archive"
}

export interface ArticleCreditSchema {
  articleId:string
  name:string
  title:string
}

export interface ArticleImageSchema {
  articleId:string
  title:string
  image:string
  description:string
  photographer:string
}

export const articlesData: ArticleSchema[] = [
  {
    articleId: "1",
    createdAt: "2023-10-28",
    updatedAt: "2023-10-28",
    title: "2024 budget ng DA na tututukan sa food security, agri modernization",
    description: "MANILA – Sinabi ng Department of Agriculture (DA) nitong Huwebes na ang Php167.5 bilyon na proposed budget nito para sa susunod na taon ay tututuon sa mga pamumuhunan na magpapababa sa mga gastos sa produksyon, pagpapabuti ng mga value chain at magsusulong ng agricultural consolidation at modernization. Sa isang pahayag, sinabi ng DA na ang badyet nito para sa 2024 ay naaayon sa direktiba ni Pangulong Ferdinand R. Marcos Jr. na palakasin ang lokal na produksyon ng agrikultura ng bansa para sa seguridad sa pagkain at paglago ng ekonomiya. Inaprubahan ng Kapulungan ng mga Kinatawan noong Setyembre 25 ang iminungkahing 2024 budget ng departamento, na 6 porsiyentong mas mataas kaysa sa 2023 na badyet nito. Kasama sa alokasyon ang PHP30.869 bilyon para sa National Rice Program, PHP6.09 bilyon para sa National Fisheries Program, at PHP5.28 bilyon para sa National Corn Program. Idinagdag ng DA na PHP4.35 bilyon ang nakalaan para sa National Livestock Program habang PHP1.94 bilyon naman ang nakalaan sa National High Value Crops Development Program. Ang National Organic Agriculture Program, National Urban and Peri-urban Agriculture Program, at ang Halal Food Industry Development Program ay tatanggap ng PHP921 milyon, PHP436 milyon, at PHP19 milyon, ayon sa pagkakabanggit. Kabilang sa iba pang mahahalagang tampok ng badyet ng DA ang paglalaan ng PHP9.80 bilyon para sa tulong ng hybrid rice seed, PHP9.55 bilyon para sa tulong sa pataba, PHP2.750 bilyon para sa mga programa sa kredito sa agrikultura. May PHP2.49 bilyon din ang inilaan para sa yellow corn seeds at fertilizers, at PHP2.20 billion para sa hog repopulation at recovery. Ang alokasyon na PHP1 bilyon ay para sa Quick Response Fund, PHP492.7 milyon para sa Kadiwa Program, PHP374 milyon para sa onion cold storage, PHP236.6 milyon para sa aquaculture at mariculture. May kabuuang PHP230 milyon din ang nakalaan para sa mga legislated hatcheries, PHP149.31 milyon para sa pagpapalawak ng durian, at PHP30.91 milyon para sa community gardens. Nagpasalamat si DA Senior Undersecretary Domingo Panganiban sa mababang kamara sa pagpasa ng budget ng ahensya. Samantala, sinabi ni Isabela Rep. Antonio “Tonypet” Albano, sponsor ng badyet ng DA, na ang iminungkahing badyet ay “isang malinaw na paglalahad ng agenda ng administrasyon para sa pagpapaunlad ng agrikultura na siyang pinakapundasyon ng patuloy na paglago ng ating bansa sa mga darating na taon.” Sinabi niya na magagawa ng DA ang pagbabawas ng mga gastos sa produksyon, pagpapahusay ng mga kakayahan para sa lokal na produksyon, magbigay ng mahahalagang serbisyo ng suporta mula sa mga input ng sakahan hanggang sa kailangan ng makinarya at imprastraktura ng sakahan, at isulong ang modernisasyon ng sakahan at pangisdaan. (PNA) ",
    status: "published"
  },
  {
    articleId: "2",
    createdAt: "2021-01-20",
    updatedAt: "2021-01-20",
    title: "Urban Farming: Paano ba ito makakatulong sa inyong pamilya at komunidad?",
    description: "Kayo ba ay certified na plantita o plantito? Ganun din kami ng pamilya ko! Nang nagka-lockdown, bigla tayong lahat nagkaroon ng oras para sa maraming mga bagay na dati’y hindi natin pinapansin. Isa na rito ang gardening o paghahalaman. Kasama sa mga mas nahilig sa paghahalaman ang aking biyenan na otsenta anyos na! Bilang katuwaan, hinamon ng aking mister ang aming mga anak at kanilang lolo sa isang contest kung sino ang makakapagpalago ng pinakaraming gulay sa kani-kanilang lugar sa aming bakuran. Pag-aalaga ng mga halaman at pagpapalaki sa mga anak Kaya naging family bonding activity na namin ang paghahalaman. Masarap sa pakiramdam na magkakatabi kaming nagtatanim at nagsasaya kapag namumunga na ang aming mga pinaghirapan. Umani kami ng okra, spinach, litsugas, talinum, kangkong, at iba pang uri ng gulay at herbs. Kaya kung gusto ninyong kumain ang inyong mga anak ng maraming gulay, kumbinsihin ninyo silang magtanim. Magugustuhan pa nilang kainin ang mga gulay na sila mismo ang nag-alaga. Higit sa lahat, mas matututunan nilang magpasensiya, magtiyaga at maging responsable mula sa pagtatanim ng gulay kaysa sa mga pagsesermon natin. Hindi mo puwedeng madaliin ang isang tanim na tumubo agad. Kailangan mo itong alagaan at bigyan ng panahon bawat araw, na gaya ng iba pa nating mga plano sa buhay. Binhi ng pag-asa Para sa iba, libangan lang ang pagtatanim. Sa iba naman, ito’y importante para may mapagkunan ng pagkain. Para sa mga hirap sa buhay, isang araw lang na walang kita, gugutumin na ang kanilang pamilya. Pero pag mayroon kang tanim na gulay sa iyong bakuran, kahit paano, siguradong mayroon kang makakain. Ito ang kuwento ng mga nanay sa Barangay Botocan sa Quezon City. Dahil sa pandemya, nawalan sila ng trabaho, o nabawasan ng kita ang kanilang mga mister. Walang suweldo, walang ipon at walang paraan para kumita dahil naka-lockdown. “Iniisip namin ng asawa ko, paano kami kakain?” pag-aalala ni Edelwina Bumacod. Dahil pansamantala lang at hindi pangmatagalang solusyon ang pamimigay ng relief goods, nagpasya ang Food Security Task Force ng Quezon City government na bisitahin ang komunidad sa Brgy. Botocan at mamigay ng libreng seed starter kits, bilang bahagi ng urban farming at food security program ng #GrowQC. https://youtu.be/zu1BIh12YNE - Video Kasama sa seed starter kits ang binhi ng iba’t ibang gulay, mga paso at iba pang planting materials na sapat na para gawing gulayan ang dati’y isa lang bakanteng lote na puno ng basura. Dito na sa bagong Villa Berde Food Forest Farm kumukuha ng pagkain ang buong komunidad. Isa na ngayon itong modelo ng matagumpay na urban community farm. Hindi lang pagkain ang ibinibigay nito sa komunidad, kundi dignidad at pag-asa sa bawat isang nagtatanim. Testimonya rin ito kung ano ang kayang gawin ng lahat kung sila’y sama-sama. “Sabi ko nga sa kanila, isa para sa lahat, lahat para sa isa. Sama-sama kaming humaharap sa pandemic ngayon, at sama sama rin kami kung ano ang pwede naming maitutulong,” sabi naman ni Villa Berde president Juvy Bado sa isang interview. Ang green revolution Isang mahalagang bahagi ng #GrowQC ang Joy of Urban Farming na sinimulan ni Mayor Joy Belmonte sampung taon na ang nakararaan. Noon pa ma’y itinatag na niya ito para tulungan ang mga mahihirap na komunidad na kahit paano’y magkaroon ng mapagkukunan ng pagkain. Dati, wala gaanong pumapansin sa urban agriculture. Kinailangan pa ng isang pandemya para magising ang lahat sa katotohanang wala tayong food security o katiyakan pagdating sa pinagkukunan ng ating pagkain. Nang magsara ang mga pantalan at mga national road noong lockdown, agad sumugod ang mga ina sa supermarket at mga palengke. Natakot tayong walang makain, at nagulat sa biglang taas ng presyo ng bilihin. Kahit pa bumalik na sa normal ang supply ng pagkain, sobrang taas naman ang presyo ng gulay! P180 ang isang kilo ng sibuyas -- mas mahal pa sa isang kilo ng manok! Napakadaling maubos ang P1,000 sa isang punta lang sa palengke, kahit hindi ka bumili ng karne o isda. Kaya ang mga tao ngayo’y naghahanap ng paraan para makapagtanim ng gulay sa anumang espasyo na mahanap nila: bubong, balkonahe, at maging sa bote ng softdrinks na sinabit sa pader. Dati, akala nati’y kailangan natin ng hardin para magpalago ng halaman. Ngayon, maaari nang maging hardin ang anumang lugar kung saan maaaring mag-alaga ng halaman. Plant, plant, plant! Isa sa mga prayoridad ng Department of Agriculture (DA) ay ang food security. Hinihikayat ng Plant, Plant, Plant program nito na magtanim ng gulay sa mga hardin Sabi pa nga ni DA Secretary William Dar, “Even if we say there are enough vegetables or supply from the provinces, if possible, we should also plant in Metro Manila, in every household. There are new technologies that can now be used by Metro Manila residents, and we are helping in the distribution of seeds and seedlings.” Nakipag-partner ang DA sa Department of Agrarian Reform at sa local na pamahalaan para sa Buhay sa Gulay project para tulungan ang mahihirap na komunidad na magtanim ng gulay, kahit yung mga nasa siyudad o urban areas. Halimbawa, ang komunidad ng St. John’s Parish sa Tondo ay ginawang taniman ang isang football field maat nakapag-ani na sila noong Enero. Ang parokyang ito ay sumasakop sa 80,000 indibidwal sa kalapit na 17 barangay. Inilunsad din ang kaparehong proyekto sa iba pang siyudad. Naglaan si Caloocan Mayor Oca Malapitan ng 1.5 ektarya para mataniman ng gulay. Si Belmonte naman ay naglaan ng pitong ektaryang sa Quezon City na inaasahang magiging pinakamalaking urban farm sa Metro Manila. Para mas marami pa ang mahikayat na mag-urban agriculture, nag-aalok din ang Quezon City ng tax exemptions sa mga residenteng payag gamitin ang mga bakanteng lupa o idle lands para sa urban farming (para sa karagdagang impormasyon, mag-email sa growqc@quezoncity.gov.ph). https://youtu.be/harGkiyW1f0 - Video Magtanim ng pag-asa Sa wakas, nabigyan na rin ang urban farming ng atensiyong nararapat dito, at umaasa akong mananatili na itong permanenteng bahagi ng New Normal. Ito’y isang napakasimple pero kongkretong ambag para sa laban ng food security. Sa pagtatanim, napapakain ang pamilya, nakatutulong sa bansa at naaalagaan ang kalikasan. Para sa akin, simbulo rin ng pag-asa ang pagtatanim. Nagbibigay ng saya at inspirasyon ang makitang lumalaki ang mga prutas at gulay, kahit pa sa isang magulong siyudad. Sabi nga sa pelikulang Jurassic Park: “Life will find a way.” Tulad ng mga ipinakita ng mga nanay sa Botocan, kayang-kaya kung sama-sama.",
    status: "published"
  },
  {
    articleId: "3",
    createdAt: "2022-06-13",
    updatedAt: "2022-06-13",
    title: "Make urban agriculture a weapon vs Covid-19",
    description: "LOS BAÑOS, Laguna: Isang non-profit na organisasyon na itinatag ng Southeast Asian Ministers of Education Organization ang humimok sa mga local government units (LGUs) na mainstream ang urban agriculture bilang tugon sa pandaigdigang pandemya. Sinabi ni Dr. Glenn Gregorio, Southeast Asian Regional Center for Graduate Study and Research in Agriculture (SEARCA) director, na ang pag-institutionalize ng urban agriculture sa Pilipinas bilang tugon sa Covid-19 pandemic ay nangangailangan ng aktibong pamumuno mula sa lokal na pamahalaan. Ito ang pagbibigay-diin ni Gregorio bilang presenter sa katatapos na idinaos na knowledge-sharing forum na inorganisa ng Philippine Institute for Development Studies at ng Socioeconomic Research Portal para sa Philippines Network. Noong 2020, siya ay nag-co-author ng isang papel ng SEARCA na nagsasaad na ang mga pagkagambala sa mga sistema ng pagkain sa agrikultura ay lilikha ng mga pagkabigla sa supply at demand sa pagganap ng ekonomiya at seguridad sa pagkain sa lokal at internasyonal. Sinabi ni Gregorio na ang pandemya ng Covid-19 ay nagpababa sa dami ng produksiyon sa agrikultura ng 3.11 porsiyento o 17.03 milyong tonelada dahil sa pagbaba ng paggawa sa sakahan sa agrikultura na nakakaapekto sa halos 100.77 milyong katao. 'Ito ay maaaring isalin sa isang 1.4 porsiyentong pagbaba sa gross domestic product ng Southeast Asia, katumbas ng $3.76 bilyon,' sabi niya. Sinabi ni Gregorio na mayroong nagbabagong salaysay sa kung paano tinitingnan ng mga tao ang pagkain at kung paano gumagawa ng pagkain ang mga magsasaka dahil sa pandemya sa lokal na antas. Binanggit din niya na ang agrikultura sa lunsod ay isang mulat na tugon sa pagpindot sa mga alalahanin sa seguridad sa pagkain, katatagan ng klima at ang pangkalahatang kagalingan ng mga tao sa gitna ng urbanisasyon at pagtaas ng populasyon sa lunsod. Sinabi ni Gregorio na binibigyang-diin ng pandemya ang koneksyon sa pagitan ng mga supply chain at mga pattern ng pagkonsumo, at ang agarang pangangailangan na muling tukuyin ang mga sistema ng agrikultura bilang mga sistema ng pagkain, gayundin ang papel ng lokal na pamahalaan sa paglinang ng mga stakeholder na may pagbabagong pag-iisip, na sanay sa pag-unawa sa lumalaking kumplikado. ng panlipunang alalahanin at makakaapekto sa positibong pagbabago ngayon at sa hinaharap. 'Kailangan na i-institutionalize ang urban agriculture sa lokal na pamahalaan, lalo na sa pagpapatupad ng Mandanas ruling, kung saan ang mga LGU ay may mas maraming opsyon at pera para ipatupad ang anumang proyekto,' ani Gregorio. ;'Ngunit bago gamitin ang urban agriculture practices ng ibang mga bansa, dapat isaalang-alang ng Pilipinas ang kalagayan nito, financial resources, at politics,' dagdag ng SEARCA director. Sinabi niya na ang iba't ibang disenyo ng urban agriculture systems at suporta para sa inobasyon ay magiging mahalaga upang matiyak ang compatibility, scalability at applicability sa mga kondisyon ng target adopters. Sinabi ni Gregorio na mayroong ilang kapansin-pansing urban agriculture programs at proyekto ng mga LGU sa bansa na ginamit bilang tugon sa pandemya. Sinabi niya na ang Santa Rosa sa Laguna, kung saan ang mga piling kinatawan ng nayon ay sumailalim sa isang serye ng pagsasanay sa pagsasaka sa lunsod, ay nagpatupad ng isang pilot urban agriculture demonstration project upang palakasin ang climate change adaptation program ng lungsod habang nagtataguyod din ng ligtas, masustansiya at sariwang ani. Ang hydroponics ng Science City of Muñoz, Nueva Ecija, at ang “Joy of Urban Farming” program ng Quezon City ay iba pang mga hakbangin ng LGU, dagdag ni Gregorio. Binibigyang-diin ang kahalagahan ng pakikilahok ng mga lokal na pinuno sa pagtataguyod ng agrikultura sa lunsod, hinikayat niya silang maging malikhain at impluwensyahan ang iba't ibang mga kasosyo upang maisakatuparan ito sa mainstream na agrikultura at tukuyin ang mga proyekto, programa at aktibidad bilang mga priyoridad na estratehiya upang makakuha ng pera mula sa mga LGU sa ilalim ng lokal na klima baguhin ang programa ng adaptasyon. Hinimok din ng SEARCA director ang mga LGU na isama ito sa kanilang mga komprehensibong plano sa paggamit ng lupa.",
    status: "published" 
  },
{
    articleId: "4",
    createdAt: "2022-04-24",
    updatedAt: "2022-04-24",
    title: "Almost 3K urban farmers in Baguio register for gov’t aid",
    description: "BAGUIO CITY – Sinabi ng City Veterinary and Agriculture Office (CVAO) nitong Lunes na halos 3,000 residente na nasa pagsasaka, paggawa ng pagkain, at iba pang produktong agrikultura ang nakarehistro sa Registry System for Basic Sectors in Agriculture (RSBSA) ng gobyerno. Ang RSBA ay isang listahan sa buong bansa na ginagamit ng Department of Agriculture sa pagtukoy kung ang isang tao ay isang lehitimong miyembro ng industriya na may karapatan sa mga benepisyo at tulong na ibinibigay ng gobyerno. Sinabi ni CVAO chief Silardo Bested na target nilang magkaroon ng 5,000 urban farmers sa lungsod na magparehistro sa sistema. Ngunit ang 2,929 residente na hanggang ngayon ay nagparehistro at nagmula sa 32 urban farmer organizations sa Baguio ay nagpapakita na mas maraming tao ang nakikibahagi sa agrikultura sa kabila ng limitadong espasyo at kanilang abalang iskedyul ng trabaho. Sa Ilocano, sinabi niya, 'Ito ay isang magandang senyales na kahit na nakatira tayo sa lungsod, maaari tayong kumain ng sariwa at malinis na gulay at maging ng karne. Ang Baguio ay isang highly urbanized na lungsod na may panahon na kaaya-aya sa paggawa ng mga produktong pang-agrikultura. Ang Mayo ay idineklara na Urban Farmers and Fisherfolk Month sa pamamagitan ng City Ordinance 35, series of 2018, na ipinasa upang palakasin ang industriya ng agrikultura ng lungsod at ang ekonomiya sa kabuuan. Ang tema ng taong ito ay 'Modernisasyon at Industriyalisasyon Tungo sa Mas Mataas na Ani at Higit na Kita. Kabilang sa mga aktibidad para sa Urban Farmers and Fisherfolk Month ay edible landscaping contest; ang Session Road Sunday market showcase; Pagsasanay sa Pagpapahusay ng kakayahan para sa mga Samahang Magsasaka sa pagpaplano ng agri-negosyo at pagsusulat ng mga resolusyon; paglulunsad ng Baguio coffee brand at rabbit food fest; paglulunsad ng Farm Tourism circuit; pagtatanim ng puno ng kape at paglilinis; dispersal ng tilapia fingerlings. Ang pagsasaka sa lunsod ng lungsod ay higit na natambol sa panahon ng pandemya sa tulong ng Kagawaran ng Agrikultura na namahagi ng mga de-kalidad na binhi ng gulay sa mga residente na maaaring itanim sa mga paso at isabit sa mga dingding upang mapakinabangan ang mga espasyo. Bukod sa paggawa ng gulay, binigyan ng pamahalaan ang mga residente ng mga poultry at livestock supplies na maaaring itanim sa maliit na dami. (PNA)",
    status: "published"
  },
{
    articleId: "5",
    createdAt: "2022-01-24",
    updatedAt: "2022-01-24",
    title: "Ang Quezon City ay mayroon na ngayong 1,026 urban farms",
    description: "MANILA, Philippines — Mula sa 754 sa unang kalahati ng taon, umabot na sa 1,026 ang bilang ng urban farms sa Quezon City, sinabi kahapon ng lokal na pamahalaan. 'Ito ay isang pinaka-kagiliw-giliw na pag-unlad, lalo na sa pagtugon sa seguridad ng pagkain sa ating mga komunidad,' sabi ni Mayor Joy Belmonte, na pinalawak ang programa ng agrikultura sa lungsod sa pamamagitan ng inisyatiba ng 'Joy of Urban Farming'. Ayon sa lokal na pamahalaan, nagsimula ang urban farming program ng lungsod sa 750-square-meter area sa Quezon Memorial Circle noong 2010. Ang mga urban farms ay matatagpuan ngayon sa lahat ng 142 barangay ng lungsod.  Itinulak ni Belmonte ang pagpapalawak ng mga urban farm sa panahon ng pandemya bilang bahagi ng GrowQC food security initiative ng lungsod. Nilalayon nitong magbigay ng mga mapagkukunan ng pagkain para sa mga mahihinang komunidad. Noong 2020, nagpasa ang lungsod ng ordinansang nagbubukod sa mga may-ari ng lupa sa pagbabayad ng idle land tax kung gagamitin nila ang kanilang mga idle property para sa urban agriculture nang hindi bababa sa tatlong taon. “Sa halip na pabayaan ang kanilang mga idle na lupain na hindi magamit habang nagbabayad ng buwis, maraming may-ari ng ari-arian ang nagpasya na sumali sa aming GrowQC kasama ang food security initiative sa pamamagitan ng paggamit ng kanilang idle properties sa pamamagitan ng urban agriculture at food production,” sabi ng alkalde. Sa ilalim ng programa, ang buong ari-arian ay dapat gamitin para sa urban agriculture at dapat magbunga ng agricultural produce para sa personal o pampublikong pagkonsumo. Sinabi ni Belmonte na ang programa ay nagbigay din ng mga pagkakataon sa kabuhayan sa humigit-kumulang 25,000 urban farmers. Ayon kay Belmonte, palalakasin pa ng lungsod ang food security initiative nito sa pamamagitan ng pagsusulong ng iba pang programa, kabilang ang beekeeping, mushroom production, aquaculture, hydroponics at smart farming. Magpapatupad din ito ng higit pang environment-friendly na circular economy na mga prinsipyo, tulad ng pag-compost ng biodegradable na basura sa pamamagitan ng iba't ibang pamamaraan. Isusulong din ng lungsod ang mga pagsusumikap sa 'food surplus rescue' 'kung saan ang labis na pagkain na itatapon ay ire-redirect upang pakainin ang mga nagugutom at mahina,' dagdag niya.  ",
    status: "published"
  },
{
    articleId: "6",
    createdAt: "2023-05-30",
    updatedAt: "2023-05-30",
    title: "DA, SM to build more urban agri sites nationwide",
    description: "Alinsunod sa agenda ng food security ni Pangulong Ferdinand R. Marcos Jr., ang Kagawaran ng Agrikultura (DA) ay katuwang ang pribadong sektor upang ituloy ang mga hakbangin sa produksyon ng pagkain sa mas malaking saklaw. Sa isang shared pursuit tungo sa pagpapaunlad ng mas maraming urban agriculture areas sa Pilipinas, nilagdaan ng DA ang isang Memorandum of Agreement (MOA) sa SM Supermalls at SM Foundation, Inc. (SMFI) noong Mayo 29. Sa ilalim ng nasabing kasunduan, ang DA, sa pamamagitan ng National Urban and Peri-Urban Agriculture Program (NUPAP), ay magbibigay ng mga input sa agrikultura, mga aktibidad sa pagpapalaki ng kapasidad, at mga materyales at pagsasanay sa impormasyon na kinakailangan para sa pagpapanatili, pagsunod sa mga kasalukuyang regulasyon, at pagpapatuloy ng mga natukoy na lugar ng proyekto. Ang partnership, paliwanag ni DA Senior Undersecretary Domingo F. Panganiban, ay totoo sa misyon ni Pangulong Ferdinand R. Marcos Jr. na tiyaking accessible, affordable, available, masustansya, at ligtas na pagkain para sa lahat. 'Sa kasalukuyang isyu ng food insecurity sa bansa, ang pagpapaunlad ng mga makabago at sustainable urban farming pamamaraan sa tulong ng mga pribadong sektor ay isang solusyon upang mapabuti ang food accessibility. Ang pribadong sektor ay nagsisilbing tagapagpalawak ng mga sandata ng DA sa pag-abot ng mga bagong taas para sa pagpapatupad ng programa sa pamamagitan ng mga inobasyon na napapanatiling at environment-friendly,” Senior Usec. Sabi ni Panganiban. Sa kabilang banda, isasama ng SMFI ang DA-NUPAP sa Kabalikat sa Kabuhayan on Sustainable Agriculture Program (KSK-SAP), na nagbibigay ng mga kasanayan sa pagpapahusay, napapanatiling kabuhayan, at trabaho sa mga lokal na magsasaka. Tutukuyin nito ang 25 kalahok-benepisyaryo, na sasanayin bilang mga Tagasanay ng Barangay, mula sa barangay kung saan matatagpuan ang lugar ng proyekto. Makikipagtulungan din ang SMFI sa mga institutional market upang maiugnay ang produksyon mula sa mga naitatag na urban gardens gayundin matiyak na ang mga sinanay na Barangay Trainors ay magdadala ng kanilang mga natutunan pababa sa antas ng sambahayan. Samantala, tutukuyin at siguruhin ng SM Supermalls ang mga project sites at iba pang logistical needs para sa mga urban garden na itatayo sa ilalim ng MOA. Inatasan din itong mangampanya para sa urban agriculture sa pamamagitan ng iba't ibang plataporma nito.“Kami ay nagpapasalamat muli sa Kagawaran ng Pagsasaka sa kanilang tiwala na muling makipag-partner sa amin sa programang ito. Umaasa kami sa pamamagitan nito ay marami pang mga Pilipino ang mae-engganyong magtanim ng sariling gulay sa kanilang mga bakuran,” SM Supermalls Senior Vice-President for Operations Engr. Ipinahayag ni Bien Mateo. Sa pagpapahayag ng layunin ng gobyerno na mapanatili hindi lamang ang partnership ng DA at SM group, nanawagan si DA-Bureau of Plant Industry Director Gerald Glenn Panganiban sa bawat Pilipino na makibahagi sa mga gawain ng Departamento tungo sa food security. 'Alam natin na ang gobyerno ay tiyak na hindi makakagawa ng mga resolusyon sa seguridad ng pagkain sa ating sarili. We need partners from the private sector, even partners from the local governments, at iyon pong mga mahilig sa gardening. Please help us kasi tayo pong lahat ay may responsibility for food security,” prompted the DA-BPI Director, who concurrently serves as head of the DA-NUPAP and the DA-High Value Crops Development Program (HVCDP). Ang Chief-of-Staff ng Pasay City na si Peter Eric Pardo, sa ngalan ni Mayor Imelda Gallardo Calixto-Rubiano, ay nanumpa na 'magbahagi ng puwang sa krusada upang maging berde at maging mabuti sa kapaligiran at mulat.' Sa pagbanggit sa ulat noong 2009 ng Food and Agriculture Organization of the United Nations (UN FAO) na nagsiwalat ng humigit-kumulang 32 porsiyento ng pagkain na nasayang sa buong mundo, ang tagapagtatag at editor ng Mesa ni Misis na si Juana Manahan-Yupangco ay nagpahayag din ng kanyang suporta para sa inisyatiba habang ang urban gardening ay “nababawasan oras ng paglalakbay, pinapanatili ang mga sustansya ng mga gulay, maaaring gawin sa maliliit o malalaking bubong, at ito ay mabuti para sa kapakanan ng mga bata at ng buong komunidad",
    status: "published"
  },
{
    articleId: "7",
    createdAt: "2020-10-26",
    updatedAt: "2020-10-26",
    title: "Malacañang sa ‘plantitos at plantitas’: Ipagpatuloy ang urban gardening",
    description: "MANILA, Philippines — Para makatulong sa food stability ng bansa, hinikayat ng Malacañang ang mga “plantito” at “plantita” na ipagpatuloy ang urban gardening. Kasabay nito, hinikayat din ni Cabinet Secretary Karlo Alexi Nograles, ang mga lokal na pamahalaan na magkaroon ng gulayan sa bawat barangay. Paliwanag pa ni No­grales, na malaking tulong ito para sa food stability habang may kinakaharap ang bansa na COVID-19 pandemic. Nakakatuwa umano na marami na ang nahuhu­maling sa pagtatanim ng gulay sa kani-kanilang mga bakuran. Buo umano ang suporta niya dito at bilang patunay ay pino-promote nila sa Task Force Zero Hunger (TFZH) ang urban gardening, community­ gar­dens at urban ag­riculture para ang ba­wat komunidad ay mag­karoon ng sariling taniman at masiguro na mayroong pagkain ang bawat Filipino. Umaasa naman si No­grales na darami pa ang mahihilig sa pagtatanim.",
    status: "published"
  },
{
    articleId: "8",
    createdAt: "2024-02-01",
    updatedAt: "2024-02-01",
    title: "New urban agri project starts in Makati City",
    description: "Mas maraming katuwang mula sa pribadong sektor ang sumasama sa Department of Agriculture (DA) para sa pagpapatupad ng National Urban and Peri-Urban Agriculture Program sa ilalim ng Plant, Plant, Plant umbrella program ng ahensya. Si Agriculture Secretary William D. Dar, Planters Products Inc. President at CEO Ranilo Maderazo, Urban Greens Founder at CEO Ralph Becker, at Philippine Agriculture and Resources Research Foundation Inc. President Candida Adalla ay naglunsad ng indoor vertical farming project noong Hunyo 23, 2022 sa Planters Mga produkto sa Esteban, Makati City. Ang proyektong pinamagatang, 'Enhancement of the Indoor Hydroponics System for Lettuce, Kale, Basil, and Tomato Production' ay suportado ng DA-Bureau of Agricultural Research (BAR) na may inisyal na pondo na P3 milyon. Ito ay ipapatupad bilang isang production site at learning center na may mga katapat mula sa pribadong sektor na katuwang. “Ito ay kinakailangan na ngayon,” giit ni Kalihim Dar habang pinaalalahanan na ang pagtitiyak ng seguridad sa pagkain ay responsibilidad ng lahat, hindi lamang ng mga magsasaka at mangingisda.Hinikayat din niya ang mga local government units (LGUs) na maglaan ng mas mataas na budget para sa food security initiatives at magpasa ng ordinansa na nag-aatas sa mga gusali at pampublikong open space sa lungsod o munisipyo na maglaan ng mga lugar para sa urban agriculture o edible landscape.'Hangga't kaya natin, kailangan nating gawin ang lokal na produksyon sa malaking paraan. We have to prepare para makaligtas tayo sa (looming food) crisis,” panawagan ni Secretary Dar. Sinabi naman ni Maderazo na gagayahin ang proyekto sa ibang mga lugar at umaasa na ang mga LGU representatives na dumalo sa event ay sasabihin sa kanilang mga incoming mayor na ipatupad ang urban agri program para makinabang ang kanilang mga nasasakupan. “Sana po na-inspire ang ating mga LGU representatives dahil napakaganda pong modelo nito na maari nating ma-adopt sa ating mga partikular na munisipyo,” sabi ni Adalla bilang suporta sa modernong proyekto sa pagsasaka. Dumalo rin ang Assistant Secretary for Strategic Communications Noel Reyes, National Urban and Peri-Urban Agriculture Program and High-Value Crops Development Program Director Gerald Glenn Panganiban, BAR Research Coordination Division Head Anthony Obligado, at 2021 Miss Aura International and Food Security Ambassador Faith Garcia. paglulunsad ng proyekto. ",
    status: "published"
  },
{
    articleId: "9",
    createdAt: "2022-07-23",
    updatedAt: "2022-07-23",
    title: " Malacañang sa ‘plantitos at plantitas’: Ipagpatuloy ang urban gardening",
    description: "Maayos na inihikayat ni Quezon City Councilor Alfred Vargas ang pambansang pamahalaan at iba pang lokal na pamahalaan na itaguyod ang mga programa sa urban farming, na gaya ng inilalabas ng Quezon City. Layunin nito ang makatulong sa bawat pamilyang Pilipino na makayanan ang mataas na presyo ng mga pangunahing bilihin. Nag-umpisa ang programa noong 2010 sa ilalim ng pamumuno ni Quezon City Mayor Joy Belmonte. Sa kasalukuyan, umabot na ito sa mahigit 160 organic farms sa mga likuran ng bahay, daycare centers, simbahan, at mga communal na espasyo. Sa ulat, binanggit ni Vargas na ang Sharon Farm sa District V, ang kanyang home district, ay itinuturing na community model farm sa ilalim ng GrowQC Food Security Program. Ang nasabing 5,000 square-meter farm ay nagiging 'feeder farm,' nagbibigay ng seedlings at iba pang agricultural inputs sa mga urban garden at farm sa Quezon City. Hinikayat din ni Vargas na gamitin ang national tax allocation (NTA) ng mga lokal na pamahalaan upang matugunan ang posibleng food crisis sa hinaharap. Ang paggamit ng pondo para sa seguridad sa pagkain ay maaaring magsilbing mahalagang hakbang sa pagtugon sa mga hamon sa suplay ng pagkain.",
    status: "published"
  },
{
    articleId: "10",
    createdAt: "2022-02-16",
    updatedAt: "2022-02-16",
    title: "Urban farming sa Quezon City, pinalawak pa ni Mayor Joy",
    description: "MANILA, Philippines — Binuksan na ng ­Quezon City University ang Center for Urban Agriculture and Innovation. Ayon kay Quezon City Mayor Joy Belmonte, ito ay para mapalawak pa ang kaalaman sa urban farming. Ayon kay Belmonte, katuwang sa programa ang Department of Agriculture – Agricultural Training Institute (DA-ATI) at QC Government’s Sustainable Development Affairs Unit (SDAU). Sinabi pa ni Belmonte na magbibigay ang center ng training at development activities sa urban agriculture. Magbibigay aniya ang DA-ATI ng P14.5 milyon na pondo para ma-deve­lop ang center. “This is part of our effort to create a smart and sustainable city. Through this Center for Urban Agriculture, we can learn how to further expand our urban farming initiatives, and include our students and other stakeholders in the process,” pahayag ni Belmonte. Kabilang sa alok ng center ang bee farm na may inisyal na limang bee colonies na popondohan ng  QCU cooperative. “This program is to reinforce our commitment to the sustainability of QC’s urban farming initiatives. With our vast campus grounds, we aim to maximize it by incorporating programs and projects that are aligned with the development goals of the city government,” pahayag ni QCU President Dr. Theresita Atienza.",
    status: "published"
  }
];

export const articleCreditsData: ArticleCreditSchema[] = [
  {
    articleId: "1",
    name: "Ferdinand Patinio",
    title: "Journalist"
  },
  {
    articleId: "2",
    name: "Jing Castañeda",
    title: "News Reporter, Journalist"
  },
  {
    articleId: "3",
    name: "Leander C Domingo",
    title: "Journalist"
  },
  {
    articleId: "4",
    name: "Liza Agoot",
    title: "Journalist"
  },
  {
    articleId: "5",
    name: "Janvic Mateo",
    title: "Journalist"
  },
  {
    articleId: "6",
    name: "DA-AFID",
    title: ""
  },
  {
    articleId: "7",
    name: "Andy Zapata",
    title: "Journalist"
  },
  {
    articleId: "8",
    name: "DA Press Office",
    title: "Journalist"
  },
  {
    articleId: "9",
    name: "Gemma Garcia",
    title: "Journalist"
  },
  {
    articleId: "10",
    name: "Angie dela Cruz",
    title: "Journalist"
  }
];


export const articleImagesData: ArticleImageSchema[] = [
  {
    articleId: "1",
    title: "Farmers planting rice seedlings",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "BOOSTING AGRICULTURE. Farmers planting rice seedlings in Sumapang Matanda, Malolos, Bulacan on Sept. 14, 2023. The Department of Agriculture advises planting early or using heat-resistant crops in preparation for El Niño that is expected in the last quarter of the year",
    photographer: "Joan Bondoc"
  },
  {
    articleId: "1",
    title: "Gardening as Family Bonding",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Gardening as a family bonding activity with my husband, Nonong, and our daughter, Fiana. Tipid Tip: Use egg trays to grow seedlings, and old cans for pots.",
    photographer: "Jing Castañeda"
  },
  {
    articleId: "2",
    title: "Gardening as Family Bonding",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Gardening as a family bonding activity with my husband, Nonong, and our daughter, Fiana. Tipid Tip: Use egg trays to grow seedlings, and old cans for pots.",
    photographer: "Jing Castañeda"
  },
{
    articleId: "2",
    title: "roof gardening",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hindi problema ang kawalan ng bakuran para kay Brgy Capt. Bimbo Cruz ng Brgy Quirino 3A na ginawang hardin pati ang kanyang bubong.",
    photographer: "Bimbo Cruz"
  },
{
    articleId: "3",
    title: "logo",
    image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Organization Logo",
    photographer: "DA Press Office"
  },
{
    articleId: "4",
    title: "Urban Garden",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A small space in Baguio City turned into an Urban Garden",
    photographer: "PIO Baguio"
  },
{
    articleId: "5",
    title: "Urban Farmers in QC",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "“This is a most welcome development, especially in addressing food security in our communities,” said Mayor Joy Belmonte, who expanded the city’s urban agriculture program through the “Joy of Urban Farming” initiative.",
    photographer: "Quezon City Government"
  },
{
    articleId: "6",
    title: "Legislators reading",
    image: "https://images.unsplash.com/photo-1598715559028-fffef9801534?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Legislators reading the terms of the initiative",
    photographer: "DA AFID"
  },
{
    articleId: "7",
    title: "Plants in a small room",
    image: "https://images.unsplash.com/photo-1454179083322-198bb4daae41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Different plants that grew in urban environment",
    photographer: "Randy Cruz"
  },
{
    articleId: "8",
    title: "Ribbon Cutting",
    image: "https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ribbon cutting celebration of Private sector joining the Department of Agriculture for the implementation of the National Urban and Peri-Urban Agriculture Program under the agency’s Plant, Plant, Plant umbrella program",
    photographer: "DA Press Office"
  },
{
    articleId: "9",
    title: "Planting Rice seedlings in Kalinga",
    image: "https://images.unsplash.com/photo-1462690417829-5b41247f6b0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Farmers in Tabuk, Kalinga take advantage of the good weather, as they transplant rice seedlings on paddies",
    photographer: "Philstar"
  },
{
    articleId: "10",
    title: "Urban Gardening in Quezon City",
    image: "https://images.unsplash.com/photo-1654089669464-dcc57c490d2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Urban Gardening in Quezon City",
    photographer: "DA Press Office"
  }
];


export const eventsData: EventSchema[] = [{
  eventId: 1,
  createdAt: "February 15, 2024",
  updatedAt: "March 10, 2024",
  banner: "",
  eventEnd: "12:00 PM",
  eventStart: "9:00 AM",
  where: "Metro Manila",
  title: "Urban Farming Seminar: Sustainable Practices for Metro Manila",
  about: "This seminar aims to educate urban dwellers on sustainable urban farming         practices to promote food security and sustainability in Metro Manila.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 2,
  createdAt: "February 10, 2024",
  updatedAt: "April 5, 2024",
  banner: "",
  eventEnd: "3:30 PM",
  eventStart: "10:30 AM",
  where: "Quezon City",
  title: "Promoting Agriculture: Empowering Rural Communities",
  about: "This event aims to promote agricultural initiatives and discuss strategies to empower rural communities through sustainable agriculture practices.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 3,
  createdAt: "February 01, 2024",
  updatedAt: "May 20, 2024",
  banner: "",
  eventEnd: "1:00 PM",
  eventStart: "8:00 AM",
  where: "Cebu City Convention Center",
  title: "Urban Agriculture Workshop: Transforming Spaces, Nourishing Communities",
  about: "This workshop aims to provide practical insights and hands-on training for urban residents interested in starting their own urban gardens.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 4,
  createdAt: "February 21, 2024",
  updatedAt: "June 15, 2024",
  banner: "",
  eventEnd: "12:30 PM",
  eventStart: "9:30 AM",
  where: "Davao City Agricultural Center",
  title: "Sustainable Agriculture Forum: Innovations for a Greener Future",
  about: "This forum brings together experts and stakeholders to discuss innovative practices and technologies in sustainable agriculture.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 5,
  createdAt: "February 28, 2024",
  updatedAt: "July 10, 2024",
  banner: "",
  eventEnd: "2:00 PM",
  eventStart: "10:00 AM",
  where: "Zamboanga City Community Hall",
  title: "Urban Farming Expo: Showcasing Innovations in Urban Agriculture",
  about: "This expo aims to showcase innovative urban farming techniques, products, and initiatives to inspire urban communities.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 6,
  createdAt: "March 14, 2024",
  updatedAt: "August 25, 2024",
  banner: "",
  eventEnd: "11:30 AM",
  eventStart: "8:30 AM",
  where: "Baguio City Agricultural Center",
  title: "Youth in Agriculture Symposium: Empowering the Next Generation",
  about: "This symposium aims to engage youth in discussions about the importance of agriculture and its role in sustainable development.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 7,
  createdAt: "March 20, 2024",
  updatedAt: "September 15, 2024",
  banner: "",
  eventEnd: "12:00 PM",
  eventStart: "9:00 AM",
  where: "Iloilo City Convention Center",
  title: "Urban Farming Bootcamp: Practical Skills for Urban Growers",
  about: "This boot camp provides hands-on training and workshops for urban residents interested in starting their own urban farms.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 8,
  createdAt: "March 23, 2024",
  updatedAt: " October 20, 2024",
  banner: "",
  eventEnd: "1:00 PM",
  eventStart: "10:00 AM",
  where: "Bacolod City Agricultural Training Center",
  title: "Agriculture Innovation Summit: Harnessing Technology for Sustainable Farming",
  about: "This summit explores the role of technology in advancing sustainable agriculture practices and promoting food security.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 9,
  createdAt: "March 11, 2024",
  updatedAt: "November 10, 2024",
  banner: "",
  eventEnd: "12:30 PM",
  eventStart: "9:30 AM",
  where: "Tacloban City Agricultural Center",
  title: "Urban Agriculture Symposium: Building Resilient Communities through Urban Farming",
  about: "This symposium explores the role of urban agriculture in building resilient communities and addressing food security challenges.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
},
{
  eventId: 10,
  createdAt: "March 30, 2024",
  updatedAt: "December 5, 2024",
  banner: "",
  eventEnd: "3:00 PM",
  eventStart: "10:00 AM",
  where: "Cagayan de Oro City Convention Center",
  title: "Urban Agriculture Conference: Strategies for Sustainable Urban Food Systems",
  about: "About the event: This conference brings together experts and policymakers to discuss strategies for developing sustainable urban food systems through urban agriculture.",
  status: "previous",
  type: "webinar",
  participateGuide: ""
}

];


export const eventPartners: EventPartnerSchema[] = [{
  eventId: 1,
  name: "Quezon City Agriculture Office (QCAO)",
  logo: "../icons/center-logo.svg",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 2,
  name: "Greenspace Quezon City",
  logo: "",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 3,
  name: "Gawad Kalinga",
  logo: "",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 4,
  name: "UP Gawad Sibol",
  logo: "",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 5,
  name: "Philippine Rural Reconstruction Movement (PRRM)",
  logo: "",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 6,
  name: "Quezon City Agriculture Office (QCAO)",
  logo: "",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 7,
  name: "Gawad Kalinga",
  logo: "",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 8,
  name: "Quezon City Agriculture Office (QCAO)",
  logo: "",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 9,
  name: "Gawad Kalinga",
  logo: "",
  organizer: true,
  type: "Partnership"
},
{
  eventId: 10,
  name: "Philippine Rural Reconstruction Movement (PRRM)",
  logo: "",
  organizer: true,
  type: "Partnership"
}
];

export const eventSpeakers: EventSpeakerSchema[] = [
  {
    eventId: 1,
    profile: "https://via.placeholder.com/150", 
    name: "Dr. Maria Santos",
    occupation: "Urban Agriculture Expert"
  },
  {
    eventId: 2,
    profile: "https://via.placeholder.com/150", 
    name: "Dr. Juan Dela Cruz",
    occupation: "Agricultural Economist"
  },
  {
    eventId: 3,
    profile: "https://via.placeholder.com/150", 
    name: "Ms. Sofia Reyes",
    occupation: "Urban Agriculture Specialist"
  },
  {
    eventId: 4,
    profile: "https://via.placeholder.com/150", 
    name: "Dr. Miguel Santos",
    occupation: "Environmental Scientist"
  },
  {
    eventId: 5,
    profile: "https://via.placeholder.com/150", 
    name: "Mr. Diego Cruz",
    occupation: "Urban Farming Entrepreneur"
  },
  {
    eventId: 6,
    profile: "https://via.placeholder.com/150", 
    name: "Ms. Lorna Reyes",
    occupation: "Youth Agricultural Advocate"
  },
  {
    eventId: 7,
    profile: "https://via.placeholder.com/150", 
    name: "Mr. Roberto Garcia",
    occupation: "Urban Agriculture Educator"
  },
  {
    eventId: 8,
    profile: "https://via.placeholder.com/150", 
    name: "Dr. Andrea Cruz",
    occupation: "Agricultural Technologist"
  },
  {
    eventId: 9,
    profile: "https://via.placeholder.com/150", 
    name: "Dr. Jose Reyes",
    occupation: "Urban Agriculture Researcher"
  },
  {
    eventId: 10,
    profile: "https://via.placeholder.com/150", 
    name: "Dr. Sofia Hernandez",
    occupation: "Urban Agriculture Policy Analyst"
  }
];


export const blogData: blogSchema[] = [{
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  category: "Initiatives",
  title: "Permaculture Workshop Day 1",
  content: "Bumisita sa Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) para sa kanilang lakbay-aral sa Quezon City University - San Bartolome Campus bilang bahagi ng pagdiriwang ng buwan ng mga bata ng Quezon City 2023.Bilang bahagi ng pagpapakilala sa Sustainable Urban Agriculture Practices and Activities ng unibersidad, nagtungo rin sila sa QCU-Center for Urban Agriculture and Innovation. Ang mga bata ay binigyan ng praktikal na instruksyon sa mga detalye ng paggawa ng potting mix bilang bahagi ng kanilang pagsasanay sa mga pamamaraan ng urban farming sa pangunguna ng mga out-of-school youth group na SAGIP OSY na sinanay rin ng QCU-CUAI upang magbahagi ng kaalaman sa agrikultura. Ang aktibidad na ito ay ginawa upang itaas ang kaalaman ng mga kabataan sa kahalagahan ng agrikultura at himukin sila na pag-unlad nito. Ang agrikultura ay isa sa mahalagang sektor ng ekonomiya na dapat ipagpatuloy ng susunod na henerasyon. Ang Quezon City University (QCU), sa pakikipagtulungan sa QC Public Employment Service Office (PESO), ang nag-organisa ng `Lakbay Aral ng mga Batang Malaya` noong Nobyembre 17, 2023, sa QCU San Bartolome Campus, na may temang “Discovering Bright Horizons: A Journey of Hope.” Animnapung (60) batang taga-QC ang unang nakaranas sa mga reyalidad ng trabaho. Ayon kay Dr. Theresita V. Atienza na presidente ng QCU sa kanyang pambungad na pahayag sa pasimula ng programa, ang mga kabataang nagsimulang magtrabaho nang maaga ay maaaring gamitin ang kanilang mga karanasan bilang `pasimula` patungo sa mas magandang kinabukasan. Hinihimok ni Dr. Atienza ang mga ito, `Huwag kang susuko sa pagsusumikap na tapusin ang iyong pag-aaral.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
}, {
  blogId: "2",
  createdAt: "2023-06-19",
  updatedAt: "2023-06-19",
  category: "News",
  title: " PERMACULTURE WORKSHOP DAY 2",
  content: "Sa pangalawang araw ng workshop, itinalakay at pinag-usapan ang mas malalim na kahulugan ng permakultura, ang buhay sa ilalim ng lupa, bahagi, ethics, abstract principle, ekolohiya, stratehiya at mga teknik sa permakultura. Sa tulong ni Sir Sixto Bereber, nagkaroon ng mas malalim na kaalaman sa agrikultura at kalikasan ang ating mga urban farmers na maaari nilang i-apply sa kani-kanilang mga urban farms dito sa Quezon City.Ang pagsasanay na ito ay dahil sa kolaborasyon ng Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI), Public Employment Service Office (PESO) at ang Joy of Urban Farming.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
}, {
  blogId: "3",
  createdAt: "2023-06-20",
  updatedAt: "2023-06-20",
  category: "Initiatives",
  title: "Permaculture Workshop Day 3",
  content: "Matagumpay na naipakilalala sa QC urban farmers ang Permaculture. At masayang nagtapos ngayong araw ang mga participants na urban farmers sa tatlong araw na Permaculture Workshop at may baong mga bagong kaalaman tungkol sa kakaibang konsepto ng permakultura. Lumahok din sa nasabing training ang SAGIP OSY at Greentech Association. Sila ay nakatanggap ng certificates galing sa Quezon City University - Center for Urban Agriculture and Innovation kasama ang Joy of Urban Farming at Quezon City Public Employment Service Office .Ang permakultura sa makatutulong sa seguridad ng pagkain at balanseng ekosistema. Ang disensyo nito ay nakaayon sa libreng enerhiya at nakasandal sa ugnayan ng samut saring buhay. Bawat bahagi ay parte ng isang kabuuan na sumesentro sa pagpapanatiling buhay ang lupa.Bago nagtapos ang programa, nagbigay ng panghuling mensahe ang Department Head ng Public Employment Service Office (PESO) na si Mr. Rogelio Reyes at ang Vice President for Academic Affairs ng Quezon City University na si Dr. Bradford Antonio Martinez.Maraming Salamat sa ating Guest Speaker na si Mr. Sixto Bereber sa pagbahagi ng iyong kaalaman tungkol sa permaculture. Nawa'y maging matagumpay ang ating programa sa Permakultura sa Kyusi.",
  author: "JCenter for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  "blogId": "4",
  "createdAt": "2023-05-10",
  "updatedAt": "2023-05-10",
  "category": "Our Focus",
  "title": "3-DAY URBAN FARM VISIT AND ASSESSMENT with DENR-NCR",
  "content": "Bumisita ang Center for Urban Agriculture and Innovation kasama ang Public Employment Service Office (PESO) at ang Department of Environment and Natural Resources - National Capital Region (DENR-NCR) sa ilan sa mga urban farms ng Quezon City upang ma-assess at alamin kung anong mga seedlings ang kailangan sa kanilang mga urban farms na maaaring maibigay ng DENR-NCR. Ang mga urban farms na inikutan ay ang mga sumusunod: 1. Amlacville Urban Farm, Brgy. Payatas 2. Tau Gamma Urban Farm, Brgy. Payatas 3. Empire Hilltop Urban Farm, Brgy. Payatas 4. Pinagbuklod ng Parkwoods Urban Farm, Brgy. Payatas 5. New Greenland Community Model Farm, Brgy. Bagong Silangan 6. Krunali Farm, Brgy. Krus na Ligas 7. Sitio Payong Urban Farm, Brgy. Matandang Balara 8. Greenthumb Urban Farm, Brgy. Bagong Pag-asa 9. OFC Urban Farmers of Tandang Sora, Brgy. Tandang Sora 10. SAGIP OSY Urban Farm, Brgy. Sta. Lucia 11. Calderon Urban Farms, Brgy. Sta Lucia 12. Sitio Kawayan Urban Gardeners, Brgy. San Agustin 13. Kaligayahan Urban Farm, Brgy. Kaligayahan 14. Gulayan sa Pamantasan ng QCU San Bartolome, Brgy. San Bartolome 15. Gulayan sa Pamantasan ng QCU Batasan, Brgy. Batasan Hills Ang mga urban farms na ito ang ilan lamang sa mahigit 700 na urban farms/garden ng Quezon City na patuloy na sinusuportahan ng lungsod sa pamamagitan ng pagbibigay ng libreng buto, lupa, garden tools, pataba, trainings, at iba pa sa tulong din ng the Joy of Urban Farming at PESO. Karamihan sa kanila ay nakakapagbenta na ng mga ani sa kani-kanilang komunidad na pandagdag-kita. At nakakalibre na rin sa pang araw-araw na pang-ulam. Fresh vegetables from the farm to plate!",
  "author": "Center for Urban Agriculture and Innovation",
  "authorTitle": "Department",
  "status": "posted",
  "isFeatured": true,
  "tags": ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "5",
  createdAt: "2023-05-17",
  updatedAt: "2023-05-17",
  category: "Initiatives",
  title: "2nd session of Urban Agriculture Training Program",
  content: "Magandang araw mga ka-Urban! Dumayo pa sa Lupang Pangako sa Brgy. Payatas ang Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) upang magbahagi ng mga bagong kaalaman tungkol sa Cultural Crops Management at Organic Agriculture Production. Tinuruan sila ng paggawa ng mga organic concoction tulad ng fermented plant juice (FPJ), fermented fruit juice (FFJ) at fish amino acid (FAA). Makakatulong upang magkaroon ng magandang tanim sa kani-kanilang mga bakuran. Ang programang ito ay bahagi pa rin ng programa ng lokal na pamahalaan sa Urban Agriculture kasama ang Joy of Urban Farming , PESO at Sustainable Development Affairs.  Narito ang mga topic na nakapaloob sa training sa loob ng limang (5) araw. Introduction to Urban Farming  Cultural Management of Crops  Organic Agriculture Production - Produce Organic Concoctions and Extracts Aquaculture and Hydroponics Rabbitry and Black Soldier Fly Production Makakatanggap din sila ng certificate at handouts pagkatapos ng limang session. Maraming salamat po sa pagsuporta sa programa.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  category: "Initiatives",
  title: "3rd session of Urban Agriculture Training Program",
  content: "Magandang araw mga ka-Urban! Dumayo muli pa sa Phase 4 Lupang Pangako sa Brgy. Payatas ang Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) at PESO upang magbaba ng libreng training at magbahagi ng mga kaalaman at kasanayan tungkol sa Hydroponics, Aquaculture, Rabbitry at Black Soldier Fly Production sa mga nagnanais na magkaroon ng sariling garden at pagkakakitaan. Ang aktibidad na ito ay bahagi pa rin ng programa ng Quezon City Government sa Urban Agriculture kasama ang Joy of Urban Farming , PESO at Sustainable Development Affairs.  Narito ang mga topic na nakapaloob sa training. Introduction to Urban Farming Cultural Management of Crops Organic Agriculture Production - Produce Organic Concoctions and Extracts  Aquaculture - Hito Farming Hydroponic Rabbitry Black Soldier Fly Production Makakatanggap din sila ng certificate at handouts pagkatapos ng limang session. Maraming salamat po sa pagsuporta sa programa.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  category: "Initiatives",
  title: "Basic Graphic Designing and Photoshop",
  content: "The seminar covered fundamental aspects of graphic design, exploring key concepts and practical applications in Photoshop. Mr. Salcedo's engaging presentation style captivated the audience, fostering a dynamic learning environment. Participants had the opportunity to interact, ask questions, and gain hands-on experience, enhancing their understanding of graphic design principles. The event facilitated networking among diverse groups, fostering collaboration and knowledge-sharing. The active participation of SAGIP OSY, Aspiring Youth Enrichment Society, GIP, GreenTech Innovation and Association, and the Special Program for Employment in Students contributed to the seminar's success. In conclusion, the Basic Graphic Designing and Photoshop seminar was a commendable initiative by Quezon City University - Center for Urban Agriculture and Innovation and Aspiring Youth Enrichment Society. The collaboration brought together passionate individuals and organizations, creating a meaningful learning experience under the guidance of an expert like Mr. Paul Anthony Salcedo. This seminar serves as a model for future educational events, promoting the exchange of ideas and skills within the community.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  category: "Our Focus",
  title: "DISPERSAL OF RABBIT KITS FOR URBAN FARMERS",
  content: "Namigay ang Quezon City University - Center for Urban Agriculture and Innovation (CUAI) ng mga rabbit kits sa mga urban farmers para sa kanilang urban farms. Sila ang mga umattend ng Training on Rabbitry sa Quezon City University - Batasan Hills Campus katulong ang NSTP at QCPESO Ang pag-aalaga ng rabbit ay isa sa pandagdag kabuhayan sa mga urban farmers ngayong pandemya. Ito ay kanilang pararamihin at maaaring ibenta ang karne. DAGDAG KAALAMAN: Lapan ang tawag sa karne ng rabbit o kuneho.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  category: "Our Focus",
  title: "face to face training for Basic Mushroom Cultivation",
  content: "DA-BPI Successfully Conducted Mushroom Production and Steam Pasteurization Seminar on February 15, 2023. The Department of Agriculture -Bureau of Plant Industry (DA-BPI) thru the effort of the Crop Research and Production Support Division (CRPSD) extended assistance face to face training for Basic Mushroom Cultivation in colaboration with the QCPESO, QCU-Center for Urban Agriculture and Innovation, and Joy of Urban Farming. The activity attended 39 participants, QCU-CUAI Team,SAGIP OSY, QCPESO Staff, and selected urban leaders from district 6. All participants are completed the activity and received their respective certificates.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  category: "Initiatives",
  title: "Farm Visit at Netafim-Netaphils Demo Farm",
  content: "Binisita ng Center for Urban Agriculture and Innovation at Joy of Urban Farming kasama ng Project Head na si Ms. Tina Perez ang Netafim-Netaphils Demo Farm sa Silang, Cavite. Ito ay upang magkaroon ng mga bagong kaalaman sa agrikultura tulad ng hydroponics gamit ang Israel Technology na maaaring i-apply sa Quezon City. Isa ang layunin ng Urban Agriculture Program ng lungsod ang magkaroon ng sapat ng produksiyon ng gulay at mataas na kalidad upang maging self-sufficient and food secured ang Quezon City sa kabila ng krisis na ating kinakaharap. Patuloy na gumagawa ng paraan ng Quezon City Government upang makatulong sa mga QCitizens katulong ang Public Employment Service Office at iba pang opisina ng Quezon City.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  category: "Initiatives",
  title: "Food Safety and Sanitation with Cooking Demonstration",
  content: "Tuloy-tuloy na pagbibigay ng kaalaman at pagsasanay para sa mga QCitizen Urban Farmers ng Lungsod Quezon sa pamamagitan ng Quezon City University, Joy of Urban Farming, QC-PESO, at mga volunteer Chefs mula sa Philippine Culinary Guild (PCG) ay masaya at produktibong naidaos ang nasabing pagsasanay na dinaluhan ng mga urban farmer mula sa distrito 6. Ang ilan sa mga sangkap ng mga lutuin ay nanggaling lamang sa Sunnyville Farm. Ito ay makakatulong sa kanila upang magkaroon ng ideya kung paano magkaroon ng karagdagang kita bukod sa pagtitinda ng mga sariwang gulay na manggagaling lamang sa kani-kanilang farm. Thank you chefs! Thank you urban farmers! Introducing: Panseared Hito with Lemon and Herbs  Sinigang sa Mangga na Hito  Kamote Tops Juice  Ensaladang Talinum Stuffed Rolled Petchay Eggplant Tempura ",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  category: "Initiatives",
  title: "LAKBAY-ARAL NG MGA BATANG MALAYA",
  content: "Bumisita sa Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) para sa kanilang lakbay-aral sa Quezon City University - San Bartolome Campus bilang bahagi ng pagdiriwang ng buwan ng mga bata ng Quezon City 2023. Bilang bahagi ng pagpapakilala sa Sustainable Urban Agriculture Practices and Activities ng unibersidad, nagtungo rin sila sa QCU-Center for Urban Agriculture and Innovation. Ang mga bata ay binigyan ng praktikal na instruksyon sa mga detalye ng paggawa ng potting mix bilang bahagi ng kanilang pagsasanay sa mga pamamaraan ng urban farming sa pangunguna ng mga out-of-school youth group na SAGIP OSY na sinanay rin ng QCU-CUAI upang magbahagi ng kaalaman sa agrikultura. Ang aktibidad na ito ay ginawa upang itaas ang kaalaman ng mga kabataan sa kahalagahan ng agrikultura at himukin sila na pag-unlad nito. Ang agrikultura ay isa sa mahalagang sektor ng ekonomiya na dapat ipagpatuloy ng susunod na henerasyon. Ang Quezon City University (QCU), sa pakikipagtulungan sa QC Public Employment Service Office (PESO), ang nag-organisa ng 'Lakbay Aral ng mga Batang Malaya' noong Nobyembre 17, 2023, sa QCU San Bartolome Campus, na may temang “Discovering Bright Horizons: A Journey of Hope.” Animnapung (60) batang taga-QC ang unang nakaranas sa mga reyalidad ng trabaho. Ayon kay Dr. Theresita V. Atienza na presidente ng QCU sa kanyang pambungad na pahayag sa pasimula ng programa, ang mga kabataang nagsimulang magtrabaho nang maaga ay maaaring gamitin ang kanilang mga karanasan bilang pasimula patungo sa mas magandang kinabukasan. Hinihimok ni Dr. Atienza ang mga ito, 'Huwag kang susuko sa pagsusumikap na tapusin ang iyong pag-aaral.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  category: "Initiatives",
  title: "LAST DAY OF LECTURE FOR SAGIP OSY PROGRAM",
  content: "The Center for Urban Agriculture and Innovation (CUAI) of Quezon City University (QCU) successfully conducted its last lecture to the participants of SAGIP OSY Program at Quezon City University - San Bartolome Campus with today's speaker Ms. Jo Ann Mariano from QCU's Entrepreneurship Department. The last session discussed how to market their products. The participants are the first batch of out-of-school youth (OSY) from District 5, Quezon City. They are now establishing their own urban farm as source of additional income and operating a small business by selling chili oil, pastillas and garden soil. After the series of training, QCU-CUAI will continuously support the OSY with their education, employment and/or livelihood through partnership. This program also aims to engage the out-of-school youth in urban agriculture as their livelihood and source of food consumption to support food security in Quezon City. It is in collaboration with the Joy of Urban Farming (JOUF), Public Employment Service Office and Alternative Learning System (ALS).Thank you to the trainors, facilitators, partners, participants and to QCU management who make the program successful. Thank you to the CUAI team who lead this program namely Mr. Romel Sevilla, Engr. Jaylenon Asilo, Engr. Justin Malindao, Mr. Hipolito Lopez and Ms. Jonabelle Orain. More batches to come.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  category: "News",
  title: " SEMINAR ON ENTREPRENEURSHIP MARKETING STRATEGIES AND OPPORTUNITY SEEKING FOR SAGIP OSY",
  content: "The 12th session (Week 12) of SAGIP OSY Training Program successfully conducted at Quezon City University - San Bartolome Campus with today's speakers Ms. Jo Ann Mariano from QCU's Entrepreneurship Department and Ms. Isabel Calvo-Loayon from NSTP Department to discuss Entrepreneurship Marketing Strategies and Opportunity Seeking for the out-of-school youth (OSY). The participants are the first batch of SAGIP OSY Program of the Center for Urban Agriculture and Innovation. They are now operating a small business by selling chili oil, pastillas and garden soil. This series of training aims to engage the out-of-school youth in urban agriculture as their livelihood and source of food consumption to support food security in Quezon City. CUAI will assist and support their employment, capacity buildings, and/or education through partnership. This program includes the following topics: 1. Leadership and Values 2. Introduction to Urban Farming 3. Cultural Management of crops 4. Organic Agriculture Production 5. Vermiculture 6. Rabbitry 7. Black Soldier Fly Production 8. Aquaculture 9. Hydroponics and Aquaponics 10. Mushroom Production 11. Trainors' Trainings 12. Financial Literacy 13. Savings Program 14. Livelihood Program 15. Food Service and Management 16. Marketing Strategies 17. Opportunity Seeking 18. Setting up of Urban Farm 19. Post-harvest 20. Business Planning 21. Community Immersion This activity is in collaboration with the Joy of Urban Farming (JOUF), Public Employment Service Office, Alternative Learning System (ALS), and SDA.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  category: "News",
  title: "Meeting with Benguet State University",
  content: "Nagkaroon ng pagpupulong ang Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI), Joy of Urban Farming (JOUF) at Public Employment Service Office (PESO) kasama ang Horticulture Research and Training Institute (HORTI) ng Benguet State University (BSU) upang pag-usapan ang Memorandum of Agreement (MOA) para suportahan at lalong mapalago ang Urban Agriculture Program ng Quezon City. Pinangunahan ito ng presidente ng QCU, Dr. Theresita Atienza, JOUF Project Head Ms. Cristina Perez, Director ng HORTI ng BSU Ms. Leila Mary B. Alipio at si Mr. Alex Macabulos at Mr. Ruel Reyes ng PESO. Pinag-usapan din dito ang sitwasyon ng mga urban farms sa Quezon City na kanilang binisita at inalam ang mga kakulangan at mga pangangailangan ng bawat urban farm upang mas maging produktibo ang kanilang kabuhayan. Kasama din sa pagpupulong ang BSU-HORTI Assistant Director Dr. Darwin A. Basquial, Head ng Vegetable Production Division Ms. Anelia Kimeu at ang Agriculturist na si Mr. William Villacampa. Kasama rin dito ang team ng CUAI Mr. Romel Sevilla, Engr. Jaylenon Asilo at Engr. Justin Malindao.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "16",
  createdAt: "2023-09-30",
  updatedAt: "2023-09-30",
  category: "News",
  title: "REALIGNMENT MEETING REGARDING URBAN AGRICULTURE PROGRAM",
  content: "Nagkaroon ng pagpupulong ang mga opisina ng Quezon City Public Employment Service Office (QCPESO), Sustainable Development Affairs (SDA), Joy of Urban Farming (JOUF) at Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) tungkol sa pagpapatuloy ng programang Urban Agriculture sa ating lungsod. Napagusapan sa pagpupulong kung anu-ano ang tungkulin ng bawat opisina sa pagiimplementa ng programa. Tinalakay din ang mga plano at susunod na proyekto ng lungsod tungkol sa Urban Agriculture upang mas maging produktibo, makilala at marami ang matulungan na mga Urban Farmers.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  category: "News",
  title: "SEMINAR ON ENTREPRENEURSHIP MARKETING STRATEGIES AND OPPORTUNITY SEEKING FOR SAGIP OSY",
  content: "The 12th session (Week 12) of SAGIP OSY Training Program successfully conducted at Quezon City University - San Bartolome Campus with today's speakers Ms. Jo Ann Mariano from QCU's Entrepreneurship Department and Ms. Isabel Calvo-Loayon from NSTP Department to discuss Entrepreneurship Marketing Strategies and Opportunity Seeking for the out-of-school youth (OSY). The participants are the first batch of SAGIP OSY Program of the Center for Urban Agriculture and Innovation. They are now operating a small business by selling chili oil, pastillas and garden soil. This series of training aims to engage the out-of-school youth in urban agriculture as their livelihood and source of food consumption to support food security in Quezon City. CUAI will assist and support their employment, capacity buildings, and/or education through partnership. This program includes the following topics: 1. Leadership and Values 2. Introduction to Urban Farming 3. Cultural Management of crops 4. Organic Agriculture Production 5. Vermiculture 6. Rabbitry 7. Black Soldier Fly Production 8. Aquaculture 9. Hydroponics and Aquaponics 10. Mushroom Production 11. Trainors' Trainings 12. Financial Literacy 13. Savings Program 14. Livelihood Program 15. Food Service and Management 16. Marketing Strategies 17. Opportunity Seeking 18. Setting up of Urban Farm 19. Post-harvest 20. Business Planning 21. Community Immersion This activity is in collaboration with the Joy of Urban Farming (JOUF), Public Employment Service Office, Alternative Learning System (ALS), and SDA.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  category: "Initiatives",
  title: "SEMINAR ON URBAN GARDENING",
  content: "Inimbitahan ng Bureau of Jail Management and Penology (BJMP) - Quezon City Female Dormitory ang Quezon City University sa pamamagitan ng Center for Urban Agriculture and Innovation (CUAI) sa pagsasanay ng Urban Gardening na dinaluhan ng mga PDL o Persons Deprived of Liberty. Ito ay upang magkaroon ng karagdagang kaalaman ang mga inmates habang nasa kanilang pansamantalang tahanan. Magkakaroon na din sila ng Urban Farm na matatagpuan sa kanilang rooftop at makakapagproduce na rin ng iba't ibang gulay.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "19",
  createdAt: "2023-06-22",
  updatedAt: "2023-06-22",
  category: "Initiatives",
  title: "Seminar-Workshop on Urban Agriculture ",
  content: "Seminar-Workshop on Urban Agriculture was conducted at Quezon City University with 42 participants from different departments of Quezon City University, Sustainable Development Affairs Unit (SDAU), and Public Employment Service Office (PESO) to enhance the knowledge and skills of Urban farming Innovation and Learning Center team and partners for the preparation of the establishment of the project.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  category: "Initiatives",
  title: "TRAINING ON AQUAPONICS",
  content: "Patuloy na dumarami ang gustong matuto ng Aquaponics o ang sabayang pag-aalaga ng isda at gulay sa iisang sistema. Ngayong araw, bumaba ang Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) sa Demetrio Tuazon Elementary School sa Barangay Lourdes, Quezon City upang magbahagi ng karagdagang kaalaman sa mga nanay at mga guro tungkol sa AQUAPONICS.  Ibinahagi ni Engr. Jaylenon Asilo ang tamang pag-aalaga ng isda at halaman sa sistemang ito. Sa tulong ng team ng CUAI, Joy of Urban Farming at PESO District 1 Office, matagumpay na naidaos ang pagsasanay at nakapagbaon ng mga bagong kaalaman na makakatulong sa kanilang Gulayan sa Paaralan. Dito sa Quezon City, marami na tayong mga fish raiser na nag-aalaga na rin ng hito at tilapia na nakakatulong bilang pinagkukunan ng kanilang kabuhayan at pagkain. Ito ay napakagandang programa ng Quezon City Government na payabungin ang Urban Aquaculture sa ating lungsod.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  category: "Initiatives",
  title: "TRAINING ON AQUAPONICS MANAGEMENT ",
  content: "Matagumpay na naisagawa ang Training on Aquaponics Management ng Quezon City University sa pangunguna ng Center for Urban Agriculture and Innovation (CUAI) sa Barangay Hall ng Brgy. Talipapa, Quezon City sa tulong ng Punong Barangay Atty. Eric Juan at ng Joy of Urban Farming na dinaluhan ng mga Urban Farmers ng Quezon City. Ibinahagi ni Engr. Jaylenon Asilo ang sistema ng aquaponics at ang moderno at tamang paraan ng pag-aalaga ng isda at pagtatanim ng gulay sa sistemang ito. Ito ay makakatulong upang magkaroon ng mga bagong kaalaman na maaari ring gawing pangkabuhayan ng mga QCitizens. Patuloy ang mga training sa susunod na mga linggo tungkol sa iba't ibang paraan ng Urban Farming tulad ng Bee keeping, Vermicomposting, Greenhouse Management at iba pa.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  category: "Initiatives",
  title: "TRAINING ON BASIC MUSHROOM CULTIVATION TECHNOLOGY",
  content: "The Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) successfully conducted the Training on Basic Mushroom Cultivation Technology held at the University Multipurpose Hall with Ms. Hazel Pacis of Department of Agriculture - Bureau of Plant Industry (DA-BPI) as a resource speaker. The hands-on training was participated by the urban farmers from all of the districts of Quezon City. Attendees gained knowledge on oyster mushroom production that could be their additional source of income. They demonstrated the basic inoculation procedure from matured grain spawns to sterilized mushroom fruiting bags. They completed the activities and will receive certificates from the university. The training program of QCU-CUAI aims to promote different technologies on urban agriculture in the community and sustain the program thru partnership with the Joy of Urban Farming , Sustainable Development Affairs and Public Employment Service Office.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  category: "Initiatives",
  title: "TRAINING ON BEEKEEPING",
  content: "Matagumpay na naibahagi ni Mr. Amor Lisandro ng Quezon City University sa mga Urban Farmers ng Quezon City ang tamang pag-aalaga ng bee sa pamamagitan ng Training on Beekeeping sa Barangay Hall ng Brgy. Talipapa sa pangunguna ng Center for Urban Agriculture and Innovation (CUAI) katuwang ang Joy of Urban Farming at ang Punong Barangay ng Brgy. Talipapa, Atty. Eric Juan. Ito ay makakatulong sa kanila upang magkaroon ng bagong ideya sa Urban Agriculture na pwedeng gawin sa kani-kanilang mga urban farm. Patuloy ang linggo-linggong training ng aming opisina sa iba't ibang lugar sa lungsod para matulungan at mabigyan ng mga bagong kaalaman ang mga QCitizens.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  category: "Initiatives",
  title: "TRAINING ON CULTURAL MANAGEMENT OF CROPS AND GREENHOUSE STRUCTURE",
  content: "Panibagong kaalaman na naman ang naibahagi ng Center for Urban Agriculture and Innovation (CUAI) ng Quezon City University sa mga urban farmers ng Quezon City. Ito ay dinaluhan ng 50 urban farmers na galing pa sa iba't ibang mga urban farm. Tinuruan sila ni Engr. Justin Malindao ng tamang pagtatanim at pag-aalaga ng mga gulay at pag-manage ng isang greenhouse. Binigyan din sila ng libreng buto ng mga gulay galing sa The Joy of Urban Farming. Ito ay sa pakikipagtulungan rin ng kapitan ng Barangay Talipapa, Atty. Eric Juan.  Patuloy ang mga pagsasanay natin sa mga farmers ng lungsod upang makapagproduce sila ng mga gulay at magkaroon ng alternatibong kabuhayan.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  category: "Initiatives",
  title: "Urban Agriculture Hands-on Training",
  content: "The Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) conducted its first session of hands-on training on Urban Agriculture at Phase 4, Lupang Pangako, Brgy. Payatas, Quezon City and attended by 57 residents from the area. They also learned on how to make a good garden soil, the proper sowing and labelling. This series of training will help them to establish their vertical gardens in their backyard to have safe and fresh vegetables. The center continues to promote urban agriculture, food security and sustainability in the city and has facilitated several trainings and seminsars in the communities in first quarter of the year 2023 and will conduct a lot more in partnership with the Joy of Urban Farming , Sustainable Development Affairs (SDA) and Public Employment Service Office (PESO).",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  category: "Initiatives",
  title: "URBAN FARMING SEMINAR AT PM CONNECT GLOBAL TEAM INC.",
  content: "Mga grupo naman sa simbahan at mga pastor ang binabaan ng Center for Urban Agriculture and Innovation (CUAI) upang makapagbahagi ng mga kaalaman tungkol sa Urban Farming sa PM Connect Global Team Inc. Mayroon silang garden sa kani-kanilang mga bakuran at nais mapalawak ang kaalaman upang mas maging produktibo. Tinalakay dito ang tamang pagtatanim mula sa pagpupunla hanggang sa pag-harvest.  Patuloy na dumadami ang sumusuporta sa Urban Agriculture Program ng Quezon City sa pamamagitan ng Joy of Urban Farming. Ang programa na ito ay naglalayong maging self-sufficient ang Quezon City kahit magkaroon ng anumang krisis. Marami nang urban farms sa Quezon City at patuloy na nadadagdagan sapagkat nakikita ang kahalagahan nito ngayong nagtataasan ang presyo ng mga bilihin.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  category: "Initiatives",
  title: "Urban Farming Training Lecture 1",
  content: "Bumaba sa Barangay Gulod ang Center for Urban Agriculture and Innovation (CUAI) upang magbahagi ng mga kaalaman tungkol sa Urban Farming sa Samahang Maralita ng Gulod Homeowners Association. Ang lahat ng mga participants ay handang matuto at nais magkaroon ng sariling gulayan sa kani-kanilang tahanan upang magkaroon ng sapat na pinagkukunan ng pagkain. Pinangunahan ito ng CUAI Team kasama si Ms. Jo-Anna Beltran bilang speaker sa training na ito. Sila ay nabigyan ng mga buto ng mga gulay na galing Joy of Urban Farming na kanilang itatanim sa kanilang mga bahay at urban farm. Nagbahagi din ang SAGIP-OSY beneficiary na si Mr. Andrei Perez tungkol sa pagkatatag ng Urban Farm ng kanilang grupo na mga out-of-school youth (OSY) galing Barangay Sta. Lucia.  Binisita din ng CUAI Team ang Urban Farm ng mga participants na may mga tanim na ding gulay tulad ng pechay, okra, gabi, patola, sitaw, kangkong at iba pa.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  category: "Initiatives",
  title: "Vermiculture and Vermicomposting Seminar",
  content: "Sama-sama sa Agrikultura upang Ilunsad ang Pagbabago para sa Out of School Youth (SAGIP OSY) ikatlong hirit sa taong 2023. Thank you to our volunteer Guest Speaker Mr. Joven Glipa of Sibol Farm.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  category: "Initiatives",
  title: " Vermiculture and Vermicomposting Seminar",
  content: "Dinaluhan ng mga urban farmers ng Quezon City ang pagsasanay sa pag-aalaga ng bulate o African Night Crawler at ang tamang pagcompost. Tinuruan sila ni Sir Joven, isang urban farmer galing sa Sibol Urban Farm, kung paano ito mapaparami at ang pag-produce ng vermicast na magandang pataba para sa mga gulay sa kanilang mga urban farm. Binigyan din sila ng buto ng Baguio Beans upang itanim sa kanilang mga garden. Ito ay pinangunahan ng Center for Urban Agriculture and Innovation (CUAI) ng Quezon City University sa tulong ng The Joy of Urban Farming, QCPESO at Barangay Captain Eric Juan ng Barangay Talipapa.",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
},
{
  blogId: "30",
  createdAt: "2023-12-29",
  updatedAt: "2023-12-29",
  category: "News",
  title: " Celebrating Excellence and Achievement",
  content: "Celebrating Excellence and Achievement  Heartiest congratulations to Dr. Theresita V. Atienza, the esteemed President of Quezon City University and Dr. Romel Sevilla, the esteemed Head of the Quezon City University - Center for Urban Agriculture and Innovation, on being honored with the prestigious Dangal ng Bayan Gawad Pilipino Award 2023 by Euro TV! Your dedication, leadership, and unwavering commitment to innovation and education have brought immense pride not only to your respective roles but also to our community. This accolade is a testament to your relentless pursuit of excellence, your visionary leadership, and your unwavering dedication to shaping a brighter future. Your contributions have not only made a mark in the academic landscape but also served as an inspiration for countless individuals aspiring to make a difference. Philippians 4:13: 'I can do all things through Christ who strengthens me.'",
  author: "Center for Urban Agriculture and Innovation",
  authorTitle: "Department",
  status: "posted",
  isFeatured: true,
  tags: ["sustainability", "verticalfarming", "fertilization"]
}
]

export const blog_image: blogImageSchema[] = [{
  blog_imageId: "1",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
}, {
  blog_imageId: "2",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "3",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "4",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "5",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
}, {
  blog_imageId: "6",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "7",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "8",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "9",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "10",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "11",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "12",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "13",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "14",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "15",
  blogId: "2",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "16",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/399826753_122123274440064611_6867870766114187542_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHS7eLVNDGa_UgLkZm_bTUudyASy8cnLtl3IBLLxycu2Vm29J3tU6WEKRk6kAXiA3FGktwTBQx0vHEExE7qaonW&_nc_ohc=wJGJ9HRYjQMAX_1ibEQ&_nc_ht=scontent.fmnl4-1.fna&oh=00_AfChqRcn-cmJwWFijL6Y4foZkXphLipb4aApdWbGhPJupg&oe=65D3F37F",
  thumbnail: true
},
{
  blog_imageId: "17",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "18",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "19",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "20",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "21",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "22",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "23",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "24",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "25",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "26",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "27",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "28",
  blogId: "2",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "29",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/352791541_230701053048872_1221509448153532647_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEwD3fhuWcvAHo5FpW4EJiNP6Jr_75yhN0_omv_vnKE3Z2rW9fGStLpBOkWkPqXRgjJCTAnS2bpfc_5ZdPoE0lR&_nc_ohc=qFuu1To-knkAX-mwayv&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfC9rm8QMrpOrESDm47uFZmzrKBahHfcR4fiz1Svpg2pfA&oe=65D2DFDA",
  thumbnail: true
},
{
  blog_imageId: "30",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "31",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "32",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "33",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "34",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "35",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "36",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "37",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "38",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "39",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "40",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "41",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "42",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "43",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "44",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "45",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "46",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "47",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "48",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "49",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "50",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "51",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "52",
  blogId: "3",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "53",
  blogId: "4",
  createdAt: "2023-10-19",
  updatedAt: "2023-10-19",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "54",
  blogId: "4",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/394386332_305856698866640_537619905298291209_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGEAznpmvK_EHpc5c0e6wi5GCCmjoyfSa0YIKaOjJ9JrcqG33CqSP0Imb7v2mYzLoholOXGlGQPv24UfHkcyRfS&_nc_ohc=lBSjZkigpdcAX9pgI8I&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfDQnD_zvmypTuMyRxRCT5LpUp7IqI0t7MgXUxkNKqf-vQ&oe=65D3928B",
  thumbnail: true
},
{
  blog_imageId: "55",
  blogId: "4",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "56",
  blogId: "4",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "57",
  blogId: "4",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "58",
  blogId: "4",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "59",
  blogId: "4",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "60",
  blogId: "4",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "61",
  blogId: "4",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "62",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "63",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/352205376_784006679927368_991346358155178703_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGeTkwJSYLXTdkpQ6AiY-sAf1gBSn21IUt_WAFKfbUhS2sgHM1ijpC70wjye_TG3Ywuz2gN5NeM6V8fiaEphhPU&_nc_ohc=W3jiFdJKkc0AX8bFGmF&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfBE5JrFvb4gCPySxq8MPep02wKKRCtvN-WjGUdrwavx9A&oe=65D4616A",
  thumbnail: true
},
{
  blog_imageId: "64",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "65",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "66",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "67",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "68",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "69",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "70",
  blogId: "5",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "71",
  blogId: "6",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "72",
  blogId: "6",
  createdAt: "2023-03-14",
  updatedAt: "2023-03-14",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "73",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/352279463_984159155929257_4854888709126185136_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHNLlmWzcVfRTuK648E22Xewf-tUCZnaIjB_61QJmdoiHX9AITXiOTnsvCX_XkSLeYwpB7I4r51_vHEOur7jnw0&_nc_ohc=m9tNvHaQR0UAX-eQ5gI&_nc_ht=scontent.fmnl4-1.fna&oh=00_AfBvaTd3f75-j7bxNZM93z7RyJicZLeE0-lo-uwHXcK5wA&oe=65D3B965",
  thumbnail: true
},
{
  blog_imageId: "74",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "75",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "76",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "77",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "78",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "79",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "80",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "81",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "82",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "83",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "84",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "85",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "86",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "87",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "88",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "89",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "90",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "91",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "92",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "93",
  blogId: "6",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "94",
  blogId: "7",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "95",
  blogId: "7",
  createdAt: "2023-03-24",
  updatedAt: "2023-03-24",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "96",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "97",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "98",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "99",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "100",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "101",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "102",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "103",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "104",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "105",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "106",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "107",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "108",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "109",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "110",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},

{
  blog_imageId: "111",
  blogId: "7",
  createdAt: "2023-11-15",
  updatedAt: "2023-11-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "112",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/352093195_6263698137053976_4601924319079191690_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEZLBdmgcxLedoyqDQLteukwqRUxwAA6WrCpFTHAADpajn4dFRr34mRze_JXlFflZmvL3t4FxIgiNk-kD9WZKrm&_nc_ohc=y4NWwXxWRK8AX9vXipb&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfBOfyEAnkFbWu7ufmEHBJhcAlhS9hneiLITDskknkTUGw&oe=65D3DB20",
  thumbnail: true
},
{
  blog_imageId: "113",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "114",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "115",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "116",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "117",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "118",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "119",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "120",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "121",
  blogId: "8",
  createdAt: "2023-08-11",
  updatedAt: "2023-08-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "122",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/352385130_182599398100351_2567491544613003785_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeExgJan69cvaIjlJ0ac9sxfQbT2coo66DdBtPZyijroNzX3MI-VxHKDJPB3D9mtp5TkvjLzjn23jyoW4lUgMenj&_nc_ohc=RMHuOMQJZfYAX97eHkl&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfCURVOvmOX_aIAnuPSK67UqmHUg92n1kF9qXn89LtR9Xg&oe=65D48AF5",
  thumbnail: true
},
{
  blog_imageId: "123",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "124",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "125",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "126",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "127",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "128",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "129",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},

{
  blog_imageId: "130",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "131",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "132",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "133",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "134",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "135",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "136",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "137",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "138",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "139",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "140",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "141",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "142",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "143",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "144",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "145",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "146",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "147",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "148",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "149",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "150",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "151",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "152",
  blogId: "9",
  createdAt: "2023-02-15",
  updatedAt: "2023-02-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "153",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/347084438_748442297062639_2531931647492170091_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFDySpcgPR2XF8ATTFIDgI6fBoE8c7SNzx8GgTxztI3PDIEOnQEOM5lJLWNd86ZzLpXSAq4NgS92XXJBNNx-Au1&_nc_ohc=Ur9_GziArT8AX-XBFJ2&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfCN217eFKDEoyVPGY887K1fRjSueCyqkXo7g5qWIe6ijg&oe=65D3564D",
  thumbnail: true
},
{
  blog_imageId: "154",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "155",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "156",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "157",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "158",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "159",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "160",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "161",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "162",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "163",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "164",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "165",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "166",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "167",
  blogId: "10",
  createdAt: "2023-06-05",
  updatedAt: "2023-06-05",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "168",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/347088272_631124485536943_4143793813506297017_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGWuUGy15AEkNFONroz44SUSktrjXKQL_BKS2uNcpAv8KtXmsXMfa3KARkijSnhb1XVFXFvkbJhUZUR26-J4lEU&_nc_ohc=UfM_LNqy3xcAX9Oz8tq&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfBazQtrWQNMofUaHLCVIq8A0YejJbmq0WG6Hb2L7XN3aw&oe=65D32994",
  thumbnail: true
},
{
  blog_imageId: "169",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "170",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "171",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "172",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "173",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "174",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "175",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "176",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "177",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "178",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "179",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "180",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "181",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "182",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "183",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "184",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "185",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "186",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "187",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "188",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "189",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "190",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "191",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "192",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "193",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "194",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "195",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "196",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "197",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "198",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "199",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "200",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "201",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "202",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "203",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "204",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "205",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "206",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "207",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "208",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "209",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "210",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "211",
  blogId: "11",
  createdAt: "2023-11-27",
  updatedAt: "2023-11-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "212",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/345174224_3364023027184849_156038403559496561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEJErVQ3uxL5cID0-mI7duh7J2PVKRicgLsnY9UpGJyAuSsh9LJY2K21WbucezJKX5APdbL_yAgWIswjRM5oMsh&_nc_ohc=ByTUI0f6paIAX8d5LGG&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfA5sxG7tdvgdSYXrmHff5e2p54TO_-1M3Yj04-ny7JPqA&oe=65D4468B",
  thumbnail: true
},
{
  blog_imageId: "213",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "214",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "215",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "216",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "217",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "218",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "219",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "220",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "221",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "222",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "223",
  blogId: "12",
  createdAt: "2023-11-17",
  updatedAt: "2023-11-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "224",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/345176410_2012787345731635_943294003493432896_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHc4bb0f-sHMwpdp00gYodtPs8Rc6JHDEQ-zxFzokcMRFef9Q_MP1AwZQ5IvgkxGQQEnagvDaaOeivHG2aoh_54&_nc_ohc=qmQdMqAAwQ8AX8c2sS9&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBEQnHxTEWOUMXGXQL1wq00Ja5BDlY2mZFEOLB0nsxbkg&oe=65D47342",
  thumbnail: true
},
{
  blog_imageId: "225",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "226",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "227",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "228",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "229",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "230",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "231",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "232",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "233",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "234",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "235",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "236",
  blogId: "13",
  createdAt: "2023-04-12",
  updatedAt: "2023-04-12",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "237",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/343979221_1254487278501270_1095110744984457138_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFYJ_4BPs_gm5cxMz_-CyDUr8-fkaMMdquvz5-Rowx2qxBtYxyB1M-7fK_S774H2tOF7llkfRKKOzNLTFu38fJR&_nc_ohc=EUp9hOFoXA0AX-aLitM&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfCtShWc1cAD6_MZeKUFRtOmCo7dg_wP4cBIoUlVVu142A&oe=65D49934",
  thumbnail: true
},
{
  blog_imageId: "238",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "239",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "240",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "241",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "242",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "243",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "244",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "245",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "246",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "247",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "248",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "249",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "250",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "251",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "252",
  blogId: "14",
  createdAt: "2023-03-28",
  updatedAt: "2023-03-28",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "253",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/343936622_105062512576662_6981863839819518743_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFDObFZad3ijDpaIek2jTtrhFlY3JwZXkqEWVjcnBleSljm8F-tbTWMghGnk_-nebPsDSG2YK9XAz0Z8ML2SYMU&_nc_ohc=rT0mqA-OG4gAX8QJDVK&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfABxkf5vKEg2WyAu9r4KARGBtHn_8Esznk_6ieV0lvL5g&oe=65D39457",
  thumbnail: true
},
{
  blog_imageId: "254",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "255",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "256",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "257",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "258",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "259",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "260",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "261",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "262",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "263",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "264",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "265",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "266",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "267",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "268",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "269",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "270",
  blogId: "15",
  createdAt: "2023-04-27",
  updatedAt: "2023-04-27",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "271",
  blogId: "16",
  createdAt: "2023-09-30",
  updatedAt: "2023-09-30",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/343967617_227359426580373_6777461313353308975_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEM_pMCnBJWaPnRVsGvz3VLPUG5vfzPcFY9Qbm9_M9wVlwXLZC62_SuvG17eKcHJYDYVD5-GpxRfYvN8eDVVV7X&_nc_ohc=NuU0UXoIAfMAX_OEMra&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfCdS1ooR5QSqQK6MIS9nVG1yhSR3xT4qOfkMdGVmkwYgg&oe=65D2BD23",
  thumbnail: true
},
{
  blog_imageId: "272",
  blogId: "16",
  createdAt: "2023-09-30",
  updatedAt: "2023-09-30",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "273",
  blogId: "16",
  createdAt: "2023-09-30",
  updatedAt: "2023-09-30",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "274",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/344239292_1589812984826794_4873448696611841990_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFfTIkV7V4PilnDbAyvEuYPVpzoycK7PwNWnOjJwrs_A1lozXiTCVPY1B-5aSkq61azb73FgQKyzi88tkxGLnnq&_nc_ohc=eVb3XqgoHOAAX9NkMqk&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfD4fNv4BdyPLhXzFvyjZIJmzY8qYqJu7eCpLhzrOsyd-A&oe=65D48A38",
  thumbnail: true
},
{
  blog_imageId: "275",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "276",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "277",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "278",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "279",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "280",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "281",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "282",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "283",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "284",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "285",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "286",
  blogId: "17",
  createdAt: "2023-03-29",
  updatedAt: "2023-03-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "287",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "288",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "289",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "290",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "291",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "292",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "293",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "294",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "295",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "296",
  blogId: "18",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "297",
  blogId: "19",
  createdAt: "2023-06-22",
  updatedAt: "2023-06-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "298",
  blogId: "19",
  createdAt: "2023-06-22",
  updatedAt: "2023-06-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "299",
  blogId: "19",
  createdAt: "2023-06-22",
  updatedAt: "2023-06-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "300",
  blogId: "19",
  createdAt: "2023-06-22",
  updatedAt: "2023-06-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "301",
  blogId: "19",
  createdAt: "2023-06-22",
  updatedAt: "2023-06-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "302",
  blogId: "19",
  createdAt: "2023-06-22",
  updatedAt: "2023-06-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "303",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "304",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "305",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},

{
  blog_imageId: "306",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "307",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "308",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "309",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "310",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "311",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "312",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "313",
  blogId: "20",
  createdAt: "2023-04-20",
  updatedAt: "2023-04-20",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "314",
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "315",
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "316",
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "317",
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "318",
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "319",
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "320",
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "321",
  blogId: "21",
  createdAt: "2023-09-08",
  updatedAt: "2023-09-08",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "322",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "323",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "324",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "325",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "326",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "327",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "328",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "329",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "330",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "331",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "332",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "333",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "334",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "335",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "336",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "337",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "338",
  blogId: "22",
  createdAt: "2023-03-21",
  updatedAt: "2023-03-21",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "339",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "340",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "341",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "342",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "343",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "344",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "345",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "346",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "347",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "348",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "349",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "350",
  blogId: "23",
  createdAt: "2023-10-06",
  updatedAt: "2023-10-06",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "351",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "352",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "353",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "354",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "355",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "356",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "357",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "358",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "359",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "360",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "361",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "362",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "363",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "364",
  blogId: "24",
  createdAt: "2023-09-22",
  updatedAt: "2023-09-22",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "365",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "366",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "367",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "368",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "369",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "370",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "371",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "372",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "373",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "374",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "375",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "376",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "377",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "378",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "379",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "380",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "380",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "381",
  blogId: "25",
  createdAt: "2023-03-11",
  updatedAt: "2023-03-11",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "382",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "383",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "384",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "385",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "386",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "387",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "388",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "389",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "390",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "391",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "392",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "393",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "394",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "395",
  blogId: "26",
  createdAt: "2023-04-17",
  updatedAt: "2023-04-17",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "396",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "397",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "398",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "399",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "400",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "401",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "402",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "403",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "404",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "405",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "406",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "407",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "408",
  blogId: "27",
  createdAt: "2023-06-07",
  updatedAt: "2023-06-07",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "409",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "410",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "411",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "412",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "413",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "414",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "415",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "416",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "417",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},

{
  blog_imageId: "418",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "419",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "419",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "420",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "421",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "422",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "423",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "424",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "425",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "426",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "427",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "428",
  blogId: "28",
  createdAt: "2023-01-25",
  updatedAt: "2023-01-25",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "429",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
{
  blog_imageId: "430",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "431",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "432",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "433",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "434",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "435",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "436",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "437",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "438",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "439",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "440",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "441",
  blogId: "29",
  createdAt: "2023-09-15",
  updatedAt: "2023-09-15",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: false
},
{
  blog_imageId: "442",
  blogId: "30",
  createdAt: "2023-12-29",
  updatedAt: "2023-12-29",
  image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail: true
},
]




// export const blog_tagsData = [{
//   blog_tagsId: "1",
//   blogId: "1",
//   tags: "sustainability",
//   createdAt: "2023-10-18",
//   updatedAt: "2023-10-18",
// }, {
//   blog_tagsId: "2",
//   blogId: "1",
//   tags: "verticalfarming",
//   createdAt: "2023-10-18",
//   updatedAt: "2023-10-18",
// }, {
//   blog_tagsId: "3",
//   blogId: "1",
//   tags: "fertilization",
//   createdAt: "2023-10-18",
//   updatedAt: "2023-10-18",
// }]


