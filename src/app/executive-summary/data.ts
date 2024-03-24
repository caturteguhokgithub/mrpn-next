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
