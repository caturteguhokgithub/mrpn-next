export type RegistrasiType = {
 sasaran: string;
 is_uraian: string;
 is_target: string;
 is_fisik: string;
 peristiwa: string;
 pemilik: string;
};

export const data: RegistrasiType[] = [
 {
  sasaran: "-",
  is_uraian: "-",
  is_target: "-",
  is_fisik: "-",
  peristiwa: "-",
  pemilik: "-",
 },
];

export const riskCategory = [
 "Risiko Lingkungan",
 "Risiko Sosial",
 "Risiko Geopolitik",
 "Risiko Ekonomi",
 "Risiko Teknologi",
];

export const listPeristiwaRisiko = [
 { id: "1", risk: "Potensi peningkatan suku bunga pinjaman" },
 {
  id: "2",
  risk:
   "Potensi keterlambatan Pembangunan 56 Sabo Dam di Merapi melebihi tahun 2026",
 },
 {
  id: "3",
  risk:
   "Pembiayaan APBN dan dukungan pemerintah pusat yang terbatas untuk proyek Sabo Dam di Merapi",
 },
 {
  id: "4",
  risk: "Potensi terjadinya inflasi dan kenaikan harga-harga barang",
 },
 {
  id: "5",
  risk:
   "Perbedaan arahan Presiden terpilih yang tidak ingin melanjutkan proyek Sabo Dam",
 },
 { id: "6", risk: "Sentimen terhadap Pembangunan proyek Sabo Dam Merapi" },
 { id: "7", risk: "Tanah sepanjang Kawasan lereng Merapi dan 3 DAS" },
];

export const listSasaran = [
 { id: "1", target: "Kesehatan untuk Semua" },
 {
  id: "2",
  target: "Meningkatnya kesehatan dan gizi masyarakat",
 },
 {
  id: "3",
  target:
   "Pengeluaran Wisatawan Mancanegara (average spending per arrival) USD 1.600 /kunjungan",
 },
 {
  id: "4",
  target:
   "Produktivitas Tenaga Kerja (di sektor akmamin) Rp 32.648 (Ribu/Orang/Tahun)",
 },
 {
  id: "5",
  target: "Peningkatan Ketersediaan Pangan Nasional",
 },
 {
  id: "6",
  target:
   "Ketahanan Sosial Budaya dan Ekologi (Berketahanan Energi, Air dan Pangan)",
 },
 {
  id: "7",
  target:
   "Ketahanan Sosial Budaya dan Ekologi (IE 15 Lingkungan Hidup Berkualitas) & Meningkatnya timbulan sampah terolah di fasilitas pengolahan sampah",
 },
 {
  id: "8",
  target:
   "Penanganan sampah rumah tangga dan sampah sejenis sampah rumah tangga (hilir) & Berkurangnya jumlah sampah yang diangkut ke Landfill",
 },
];
