export const validId: string[] = [
  "PhilID",
  "Postal ID",
  "Passport",
  "Social Security System ID",
  "Professional Regulation Commission ID",
  "Home Development Mutual Fund ID",
  "Driver's License",
  "Unified Multi-Purpose ID"
] as const;

export const district: string[] = [
  "District 1",
  "District 2",
  "District 3",
  "District 4",
  "District 5",
  "District 6"
] as const;

export const district1 = [
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
] as const;

export const district2: string[] = [
  "Bagong Silangan",
  "Batasan Hills",
  "Commonwealth",
  "Holy Spirit",
  "Payatas"
] as const;

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
] as const;

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
] as const;

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

export const ownership = [
  {
    title: "Private Property",
    description: "Owned by individuals or companies."
  },
  {
    title: "Public Property",
    description: "Owned collectively or by the government."
  },
  {
    title: "Goverment Property",
    description: "Owned and managed by the government."
  }
];

export const farmType = [
  {
    title: "Rooftop Gardens/Farm",
    description: "Farms located on building rooftops."
  },
  {
    title: "Community Farm",
    description: "Farms managed by a local community."
  },
  {
    title: "School Farm",
    description: "Farms operated by educational institutions "
  },
  {
    title: "Urban Market Farm",
    description: "Farms in urban areas supplying to local markets."
  },
  {
    title: "Backyard  Garden/Farm",
    description: "Farms in residential areas for personal use."
  }
];

export const chartColor: string[] = [
  "#21C45D",
  "#FF4069",
  "#059BFF",
  "#FF9F40",
  "#FFC234",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#e53935",
  "#d81b60",
  "#8e24aa",
  "#5e35b1",
  "#3949ab",
  "#1e88e5",
  "#039be5",
  "#00acc1",
  "#00897b",
  "#43a047",
  "#7cb342",
  "#c0ca33",
  "#fdd835",
  "#ffb300",
  "#fb8c00"
] as const;

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

export interface User {
    avatar: string;
    district: string;
    farm_name: string | null;
    id: string;
    role: string;
    username: string;
}

export interface ChatSchema {
    id: string;
    user: User;
    title: string;
    question: string;
    imagesrc: string[];
    createdat: string;
    updatedat: string;

}

export const chatData: ChatSchema[] = [
    {
        "id": "965041128786919425",
        "user": {
            "avatar": "https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/5979af18fefd69ed",
            "district": "1",
            "farm_name": null,
            "id": "934652927838552065",
            "role": "admin",
            "username": "Kuya Wil"
        },
        "title": "Kamusta mga farm head",
        "question": "<p class=\"min-h-[1rem]\">Hello Farmheads! Ako nga pala si Wil, farmhead ng Farm lang lategame, inaanyayaha  ko nga pala kayo at syempre mga farmers niyo na pumunta  sa event namin patungkol sa Pagtatanim Workshop Libre ang pagpunta, may pagkain pa!</p>",
        "imagesrc": [],
        "createdat": "2024-05-01T07:33:00.411Z",
        "updatedat": "2024-05-01T07:33:00.411Z",

    },{
        "id": "965041128786919425",
        "user": {
            "avatar": "https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/5979af18fefd69ed",
            "district": "1",
            "farm_name": null,
            "id": "934652927838552065",
            "role": "admin",
            "username": "Kuya Nil"
        },
        "title": "Kamusta mga farm head",
        "question": "<p class=\"min-h-[1rem]\">Saan yan, Kuya Wil</p>",
        "imagesrc": [],
        "createdat": "2024-05-01T07:33:00.411Z",
        "updatedat": "2024-05-01T07:33:00.411Z",

    },{
        "id": "936975470650327041",
        "user": {
            "avatar": "https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/5979af18fefd69ed",
            "district": "1",
            "farm_name": null,
            "id": "9346529885520651231",
            "role": "admin",
            "username": "Kuya WIl"
        },
        "title": "Kamusta mga farm head",
        "question": "<p class=\"min-h-[1rem]\">Dito sa QC</p>",
        "imagesrc": [],
        "createdat": "2024-05-01T07:33:00.411Z",
        "updatedat": "2024-05-01T07:33:00.411Z",

    },{
        "id": "936975470650327041",
        "user": {
            "avatar": "https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/5979af18fefd69ed",
            "district": "1",
            "farm_name": null,
            "id": "934652927838552065",
            "role": "admin",
            "username": "akoto"
        },
        "title": "Kamusta mga farm head",
        "question": "<p class=\"min-h-[1rem]\">Pwede, malapit lang sa amin 'yan! Anong araw at oras?</p>",
        "imagesrc": [],
        "createdat": "2024-05-01T07:33:00.411Z",
        "updatedat": "2024-05-01T07:33:00.411Z",

    },{
        "id": "965041128786919425",
        "user": {
            "avatar": "https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/5979af18fefd69ed",
            "district": "1",
            "farm_name": null,
            "id": "934652927838552065",
            "role": "admin",
            "username": "Kuya Wil"
        },
        "title": "Kamusta mga farm head",
        "question": "<p class=\"min-h-[1rem]\">Kahit kailan basta ikaw</p>",
        "imagesrc": [],
        "createdat": "2024-05-01T07:33:00.411Z",
        "updatedat": "2024-05-01T07:33:00.411Z",

    },{
        "id": "936975470650327041",
        "user": {
            "avatar": "https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/5979af18fefd69ed",
            "district": "1",
            "farm_name": null,
            "id": "934652927838552065",
            "role": "admin",
            "username": "akoto"
        },
        "title": "Kamusta mga farm head",
        "question": "<p class=\"min-h-[1rem]\">aguy</p>",
        "imagesrc": [],
        "createdat": "2024-05-01T07:33:00.411Z",
        "updatedat": "2024-05-01T07:33:00.411Z",

    },
];
