export type KpType = {
 kode_kp: string;
 kp: string;
};

export type TemaType = {
 kode_tema: string;
 namaTema: string;
 list_kp: [
  {
   kode_kp: string;
   kp: string;
  }
 ];
};

export type ExsumType = {
 kp: string;
 bg_fakta: React.ReactNode;
 bg_goals: React.ReactNode;
 bg_tagging: {
  kebijakan: string;
  keterangan: string;
 };
 bg_segment: React.ReactNode;
 profil_cascading: [
  {
   outcome: string;
   sasaran: string;
   highlight: boolean;
  }
 ];
 profil_ro: [
  {
   kl: string;
   ro: string;
   target: string;
   anggaran: string;
  }
 ];
 profil_stakeholder: React.ReactNode;
 profil_pendanaan: [
  {
   jumlahPerTahun: [
    {
     tahun: string;
     jumlah: string;
    }
   ];
   sumber_dana_apbn: string;
   sumber_dana_non_apbn: string;
   kesiapan_pendanaan: React.ReactNode;
  }
 ];
 policy_roadmap: React.ReactNode;
 policy_profil_ro_kunci: [
  {
   kl_utama: string;
   kl_kontributor: string;
   nomenklatur: string;
   target: string;
   anggaran: string;
   sumberAnggaran: string;
  }
 ];
 policy_critical_path: React.ReactNode;
};

export const data: ExsumType[] = [
 {
  kp: "string",
  bg_fakta: "<>makan</>",
  bg_goals: " {<>Tes</>}",
  bg_tagging: {
   kebijakan: "string",
   keterangan: "string",
  },
  bg_segment: " {<>Tes</>}",
  profil_cascading: [
   {
    outcome: "string",
    sasaran: "string",
    highlight: true,
   },
  ],
  profil_ro: [
   {
    kl: "string",
    ro: "string",
    target: "string",
    anggaran: "string",
   },
  ],
  profil_stakeholder: " {<>Tes</>}",
  profil_pendanaan: [
   {
    jumlahPerTahun: [
     {
      tahun: "string",
      jumlah: "string",
     },
    ],
    sumber_dana_apbn: "string",
    sumber_dana_non_apbn: "string",
    kesiapan_pendanaan: " {<>Tes</>}",
   },
  ],
  policy_roadmap: " {<>Tes</>}",
  policy_profil_ro_kunci: [
   {
    kl_utama: "string",
    kl_kontributor: "string",
    nomenklatur: "string",
    target: "string",
    anggaran: "string",
    sumberAnggaran: "string",
   },
  ],
  policy_critical_path: " {<>Tes</>}",
 },
];

export const stakeholderPendukung = [
 {
  id: 1,
  value: "BPOM",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955901/mrpn/company_logo/logo_bpom_ktik6o.png",
 },
 {
  id: 2,
  value: "Kementan",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956186/mrpn/company_logo/logo_kementan_de8q7e.png",
 },
];

export const stakeholderUtama = [
 {
  id: 1,
  value: "Kemenkes",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956185/mrpn/company_logo/logo_kemenkes_k99chv.png",
 },
 {
  id: 2,
  value: "Kemenpupr",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711725384/mrpn/company_logo/logo_pu_iz386d.png",
 },
];

export const stakeholderMonitoring = [
 {
  id: 1,
  value: "Kemenppn",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711964917/mrpn/company_logo/logo_bappenas_gwhnut.png",
 },
 {
  id: 2,
  value: "Puskesmas",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956111/mrpn/company_logo/logo_puskesmas_ckdzmi.png",
 },
];

export const stakeholderKoordinasi = [
 {
  id: 1,
  value: "Gemah",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711725536/mrpn/company_logo/logo_gemah_ueqink.png",
 },
 {
  id: 2,
  value: "Jaya Raya",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711725384/mrpn/company_logo/logo_jaya_p7hnyk.png",
 },
 {
  id: 3,
  value: "Swatantra",
  imgUrl:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711725384/mrpn/company_logo/logo_swatantra_jq1s4e.png",
 },
];

export const listSelectKp = [
 {
  id: "4",
  value: "4",
  nama_kp: "AP.01 - Transformasi Sosial",
 },
 {
  id: "5",
  value: "5",
  nama_kp: "PP.01.01 - Peningkatan Kesehatan dan Gizi Masyarakat",
 },
 {
  id: "1",
  value: "1",
  nama_kp: "KP.01.01.01 - Penurunan Stunting",
 },
 {
  id: "2",
  value: "2",
  nama_kp: "KP.01.01.02 - Penyelesaian Destinasi Pariwisata",
 },
 {
  id: "3",
  value: "3",
  nama_kp: "KP.01.01.03 - Kawasan Sentra Produksi Pangan Kalimantan Tengah",
 },
 {
  id: "7",
  value: "7",
  nama_kp: "KP.01.01.04 - Reformasi Tata Kelola Persampahan",
 },
];
