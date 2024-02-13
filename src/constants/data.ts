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
  category: "Initiatives" | "News" | "Our Story"
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

export const blogData:blogSchema[] = [{
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  category: "Initiatives",
  title: "Permaculture Workshop Day 1",
  content: "Bumisita sa Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI) para sa kanilang lakbay-aral sa Quezon City University - San Bartolome Campus bilang bahagi ng pagdiriwang ng buwan ng mga bata ng Quezon City 2023.Bilang bahagi ng pagpapakilala sa Sustainable Urban Agriculture Practices and Activities ng unibersidad, nagtungo rin sila sa QCU-Center for Urban Agriculture and Innovation. Ang mga bata ay binigyan ng praktikal na instruksyon sa mga detalye ng paggawa ng potting mix bilang bahagi ng kanilang pagsasanay sa mga pamamaraan ng urban farming sa pangunguna ng mga out-of-school youth group na SAGIP OSY na sinanay rin ng QCU-CUAI upang magbahagi ng kaalaman sa agrikultura. Ang aktibidad na ito ay ginawa upang itaas ang kaalaman ng mga kabataan sa kahalagahan ng agrikultura at himukin sila na pag-unlad nito. Ang agrikultura ay isa sa mahalagang sektor ng ekonomiya na dapat ipagpatuloy ng susunod na henerasyon. Ang Quezon City University (QCU), sa pakikipagtulungan sa QC Public Employment Service Office (PESO), ang nag-organisa ng `Lakbay Aral ng mga Batang Malaya` noong Nobyembre 17, 2023, sa QCU San Bartolome Campus, na may temang “Discovering Bright Horizons: A Journey of Hope.” Animnapung (60) batang taga-QC ang unang nakaranas sa mga reyalidad ng trabaho. Ayon kay Dr. Theresita V. Atienza na presidente ng QCU sa kanyang pambungad na pahayag sa pasimula ng programa, ang mga kabataang nagsimulang magtrabaho nang maaga ay maaaring gamitin ang kanilang mga karanasan bilang `pasimula` patungo sa mas magandang kinabukasan. Hinihimok ni Dr. Atienza ang mga ito, `Huwag kang susuko sa pagsusumikap na tapusin ang iyong pag-aaral.",
  author: "Jhonil B. Garcia",
  authorTitle: "Masters in English",
  status: "posted",
  isFeatured: true,
  tags:["sustainability","verticalfarming","fertilization"]
}
]

export const blog_image:blogImageSchema[] = [{
  blog_imageId: "1",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image:"https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/404467159_322059487246361_7870595037388001829_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGkzUpPbnxd-wzYHugzjBPMM0YOgC0eenQzRg6ALR56dHw4cSJaV-wf5hJ8Z5RYopBtp7c1UR9AZJbLbGbMKmx7&_nc_ohc=6j4NrtZ78hEAX8aoMTw&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfAy6o5KDeUtK-8ds_kC2PFkWuhEKG_pYMrp070IF7btZw&oe=65D177BD",
  thumbnail:true
},{
  blog_imageId: "2",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image:"https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/404546042_322059627246347_3460358763404893731_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFycnpXUDzYqvYGxEGwYtGdnvhEpY2cI9ue-ESljZwj2yL-QbzWvv_yF6P3yWN24_IRhDRigWXxHM5b4OW5fAxI&_nc_ohc=U2B6rOmWcfgAX_FaFZV&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfCKYZVpri9yL8eXYNVBbuRJo4Yg_tLKTATn8QmS3nYVsw&oe=65D1B43B",
  thumbnail:false
},{
  blog_imageId: "3",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/404468696_322059687246341_9210053701641098222_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeE0ASdc_76TJdSVucdlcC9YC-Fz38C9b-ML4XPfwL1v42lygreAD-jMfxAqEiKD7NwBQ4YO31ddZ5ViIea3rfDa&_nc_ohc=MP42pmkyWzsAX8ty5zH&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfBc0ZPXMObSaHz3aHZ9tiagTvB_YP4GAvwPR_q2Ql48Dw&oe=65D11A58",
  thumbnail:false
},{
  blog_imageId: "4",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image:"https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/404443001_322059703913006_2690740062213982375_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFwnXOsKvg6jJGV1A69V97G4uQoH8tXVAXi5Cgfy1dUBbw8hvLQ8kNAVOQVX-8vzEZcOqqTq0teUckFmNTsGG-e&_nc_ohc=s1BJS1Tj3E4AX_LFW3M&_nc_oc=AQn8lA_CHZpzPTkRJVXgwkA0a2JpXarP6FFAk0-8vRNLr0VeeCLhEkOqeXs_Atg7Xr0&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfDWLrzTYEotscANDJSGsOofJq4-8XzWpSYH4aAYDlZwrg&oe=65D07A37",
  thumbnail:false
},{
  blog_imageId: "5",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image:"https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/404444172_322059720579671_2009798882102671129_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEGaCXZ-g8Lsf9hZ0IrOmbV5R4RGuwN5qLlHhEa7A3mooCMInTyopqSFG8UoVEL1mS6MlJ9LcxKHv7Ctb5D__e7&_nc_ohc=134jM12fZy4AX8QBBYp&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfAwfO0J28KFLSraRiRopDOg_qFytGWYbzFJbAK8DG_chA&oe=65D150E6",
  thumbnail:false
},{
  blog_imageId: "6",
  blogId: "1",
  createdAt: "2023-10-18",
  updatedAt: "2023-10-18",
  image:"https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/404424527_322059763913000_1687210906972273142_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHlW90_duWJLgZ05yeUdjdFbMAFkvxGlvJswAWS_EaW8jglIcuZ7vp0AlMbYP8Rr8OKsTkGDu6hEgf4ma38Q2dy&_nc_ohc=pXzh2A-Nz6cAX_Nruqk&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBOgxjFtV-7vpO-eFoQqoQmg_X4xOgtTOmqGg48xJEQPA&oe=65D1908E",
  thumbnail:false
},]


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