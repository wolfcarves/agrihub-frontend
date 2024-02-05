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
