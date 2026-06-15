import React, { useState, useEffect } from "react";
import {
  Check,
  Copy,
  MapPin,
  Mail,
  Phone,
  Heart,
  Building2,
  Droplets,
  BookOpen,
  Zap,
  Wrench,
} from "lucide-react";

// Komponen untuk menginjeksi CSS kustom seperti animasi, scrollbar, dan pola batik
const GlobalStyles = () => (
  <style>{`
        /* Import Google Fonts: Lato & Playfair Display */
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        /* Reset Vite default #root styling untuk menjadikannya Full Screen */
        #root {
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
        }
        body, html {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            overflow-x: hidden;
        }

        /* Override Tailwind Font Families for the Preview */
        .font-sans { font-family: 'Lato', sans-serif !important; }
        .font-serif { font-family: 'Playfair Display', serif !important; }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        ::-webkit-scrollbar-thumb {
            background: #863E15; 
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #482611; 
        }
        
        /* Pola Batik Transparan */
        .batik-pattern {
             background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c0 16.569-13.431 30-30 30 16.569 0 30 13.431 30 30 0-16.569 13.431-30 30-30-16.569 0-30-13.431-30-30z' fill='%23f8b430' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        /* Animasi Utility */
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        
        /* Smooth Scroll */
        html { scroll-behavior: smooth; }
    `}</style>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-[#F8B430]/20" : "bg-white/80 backdrop-blur-sm py-4"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif font-bold text-2xl text-[#482611]">
              Masjid Batik Banyumas
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#tentang"
              className="text-[#482611] hover:text-[#863E15] transition duration-150 font-medium"
            >
              Tentang
            </a>
            <a
              href="#program"
              className="text-[#482611] hover:text-[#863E15] transition duration-150 font-medium"
            >
              Program Donasi
            </a>
            <a
              href="#rekening"
              className="bg-[#F2CF0D] text-[#391D0C] px-6 py-2.5 rounded-full font-bold hover:bg-[#F8B430] transition duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Salurkan Donasi
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <a
              href="#rekening"
              className="bg-[#F2CF0D] text-[#391D0C] px-5 py-2 rounded-full font-bold text-sm hover:bg-[#F8B430] transition shadow-sm"
            >
              Donasi
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen md:h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/736x/13/fc/6b/13fc6b7e4246eeed33244b2629e49dd5.jpg"
          alt="Desain Masjid Batik Banyumas"
          className="w-full h-full object-cover scale-105 filter brightness-75"
        />
        {/* Gradient Overlay using palette colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#391D0C]/95 via-[#482611]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        <span className="block text-[#F2CF0D] font-semibold tracking-wider uppercase mb-4 animate-fadeIn">
          Selamat Datang Para Dermawan
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-slideUp">
          Wujudkan Perpaduan Indah <br className="hidden md:block" />
          <span className="text-[#F2CF0D]">Iman & Budaya</span> di Banyumas
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed animate-slideUp delay-100 max-w-3xl mx-auto">
          Mari bersama mengukir sejarah. Jadikan Masjid Batik Banyumas sebagai
          ladang amal jariyah Anda, sebuah ikon kebanggaan yang memadukan
          spiritualitas dan kearifan lokal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp delay-200">
          <a
            href="#rekening"
            className="bg-[#F2CF0D] text-[#391D0C] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F8B430] transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
          >
            <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Investasi Akhirat Sekarang
          </a>
          <a
            href="#tentang"
            className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#391D0C] transition duration-300 flex items-center justify-center"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>

      {/* Decorative wave at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="text-white fill-current w-full h-auto"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="tentang" className="py-24 relative batik-pattern bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-[#863E15] font-bold uppercase tracking-widest text-sm">
          Sekilas Tentang Kami
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#482611] mt-3 mb-8">
          Lebih Dari Sekadar Tempat Ibadah
        </h2>
        <div className="w-24 h-1.5 bg-[#F2CF0D] mx-auto mb-10 rounded-full"></div>

        <div className="prose prose-lg mx-auto text-[#482611]/80 leading-loose">
          <p className="mb-6 text-xl font-medium text-[#391D0C]">
            Assalamu'alaikum Warahmatullahi Wabarakatuh, Sahabat Kebaikan.
          </p>
          <p className="mb-6">
            Masjid Batik Banyumas hadir sebagai wujud impian untuk menyatukan
            nilai luhur agama dengan kekayaan budaya batik Banyumasan. Kami
            percaya, masjid bukan hanya sekadar bangunan fisik, melainkan pusat
            peradaban, tempat hati tertambat, dan wadah pelestarian budaya yang
            bernafaskan Islam.
          </p>
          <p>
            Namun, impian besar ini membutuhkan tangan-tangan dermawan untuk
            mewujudkannya. Setiap kontribusi Anda adalah ukiran indah pada
            bangunan ini, sekaligus pahala yang terus mengalir meskipun kita
            telah tiada kelak.
          </p>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  return (
    <section
      id="program"
      className="py-24 bg-[#391D0C] text-white relative overflow-hidden"
    >
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#863E15] rounded-full mix-blend-screen filter blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F8B430] rounded-full mix-blend-screen filter blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#F8B430] font-bold uppercase tracking-widest text-sm block mb-2">
            Program Jariyah
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#F2CF0D]">
            Pilih Ladang Kebaikan Anda
          </h2>
          <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            Kami membagi peluang amal jariyah ini menjadi dua fokus utama.
            Salurkan kelebihan rezeki Anda pada pos yang paling menggerakkan
            hati Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Program 1: Pembangunan */}
          <div className="bg-white/5 border border-[#F8B430]/20 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F2CF0D]/20 to-transparent rounded-bl-full -z-10"></div>
            <div className="w-16 h-16 bg-[#F2CF0D]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-8 h-8 text-[#F2CF0D]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              Wakaf Pembangunan Fisik
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Menjadi bagian dari setiap batu bata, semen, dan ornamen batik
              yang akan berdiri kokoh. Sedekah Anda di sini adalah fondasi
              'rumah' Allah di dunia yang akan membangunkan istana Anda di
              surga.
            </p>
            <ul className="text-sm md:text-base text-gray-300 space-y-4 mb-10">
              <li className="flex items-start">
                <div className="mt-1 bg-[#F2CF0D]/20 p-1 rounded-full mr-3">
                  <Check className="w-4 h-4 text-[#F2CF0D]" />
                </div>
                <span>Konstruksi Bangunan Utama & Kubah</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 bg-[#F2CF0D]/20 p-1 rounded-full mr-3">
                  <Check className="w-4 h-4 text-[#F2CF0D]" />
                </div>
                <span>Ornamen & Desain Interior Motif Batik</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 bg-[#F2CF0D]/20 p-1 rounded-full mr-3">
                  <Check className="w-4 h-4 text-[#F2CF0D]" />
                </div>
                <span>Fasilitas Wudhu, Toilet & Area Suci</span>
              </li>
            </ul>
            <a
              href="#rekening-pembangunan"
              className="block text-center w-full bg-[#863E15] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#F8B430] hover:text-[#391D0C] transition duration-300"
            >
              Salurkan Wakaf Pembangunan
            </a>
          </div>

          {/* Program 2: Operasional */}
          <div className="bg-white/5 border border-[#F8B430]/20 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F8B430]/20 to-transparent rounded-bl-full -z-10"></div>
            <div className="w-16 h-16 bg-[#F8B430]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-[#F8B430]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif">
              Infak Operasional & Dakwah
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Menghidupkan cahaya masjid setiap hari. Donasi Anda memastikan
              kenyamanan jamaah, kegiatan dakwah yang semarak, dan pemeliharaan
              fasilitas agar selalu siap melayani umat.
            </p>
            <ul className="text-sm md:text-base text-gray-300 space-y-4 mb-10">
              <li className="flex items-start">
                <div className="mt-1 bg-[#F8B430]/20 p-1 rounded-full mr-3">
                  <Zap className="w-4 h-4 text-[#F8B430]" />
                </div>
                <span>Biaya Listrik, Air Bersih & Kebersihan</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 bg-[#F8B430]/20 p-1 rounded-full mr-3">
                  <BookOpen className="w-4 h-4 text-[#F8B430]" />
                </div>
                <span>Operasional Kajian & Program Keumatan</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 bg-[#F8B430]/20 p-1 rounded-full mr-3">
                  <Wrench className="w-4 h-4 text-[#F8B430]" />
                </div>
                <span>Perawatan Fasilitas Berkala</span>
              </li>
            </ul>
            <a
              href="#rekening-operasional"
              className="block text-center w-full bg-[#F8B430] text-[#391D0C] px-6 py-4 rounded-xl font-semibold hover:bg-[#F2CF0D] transition duration-300"
            >
              Salurkan Infak Operasional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const BankAccounts = () => {
  const [copiedPem, setCopiedPem] = useState(false);
  const [copiedOps, setCopiedOps] = useState(false);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "pembangunan") {
        setCopiedPem(true);
        setTimeout(() => setCopiedPem(false), 2000);
      } else {
        setCopiedOps(true);
        setTimeout(() => setCopiedOps(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="rekening" className="py-24 bg-gray-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[#863E15] font-bold uppercase tracking-widest text-sm block mb-2">
            Tunaikan Niat Baik Anda
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#482611] mt-2">
            Rekening Donasi Resmi
          </h2>
          <div className="w-24 h-1.5 bg-[#F2CF0D] mx-auto mt-6 mb-8 rounded-full"></div>
          <p className="text-lg text-[#482611]/80 max-w-2xl mx-auto leading-relaxed">
            Silakan transfer donasi terbaik Anda melalui rekening Bank Syariah
            Indonesia (BSI) berikut. Semoga Allah membalas kebaikan Anda dengan
            berlipat ganda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Rekening Pembangunan */}
          <div
            id="rekening-pembangunan"
            className="bg-white rounded-[2rem] shadow-xl overflow-hidden border-t-8 border-[#391D0C] transform hover:-translate-y-2 transition duration-300"
          >
            <div className="p-8 md:p-10 text-center flex flex-col h-full">
              <div className="inline-flex items-center justify-center p-4 bg-[#391D0C]/5 rounded-full mb-6 mx-auto w-20 h-20">
                <Building2 className="w-10 h-10 text-[#391D0C]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#391D0C] mb-2 font-serif">
                KHUSUS PEMBANGUNAN
              </h3>
              <p className="text-sm text-gray-500 mb-8 flex-grow">
                Diperuntukkan konstruksi fisik, ornamen, dan bangunan masjid.
              </p>

              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl mb-8 border border-gray-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Bank_Syariah_Indonesia.svg"
                  alt="Logo BSI"
                  className="h-10 mx-auto mb-6"
                />
                <p className="text-4xl md:text-5xl font-sans font-bold text-[#391D0C] tracking-tight mb-4 select-all">
                  4400060008
                </p>
                <p className="text-[#863E15] font-medium text-sm md:text-base">
                  a.n. Panitia Pembangunan Masjid Batik
                </p>
              </div>

              <button
                onClick={() => handleCopy("4400060008", "pembangunan")}
                className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-bold transition duration-300 shadow-md ${copiedPem ? "bg-green-600 text-white" : "bg-[#863E15] text-white hover:bg-[#482611]"}`}
              >
                {copiedPem ? (
                  <>
                    <Check className="w-5 h-5 mr-2" /> Tersalin!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" /> Salin Nomor Rekening
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Rekening Operasional */}
          <div
            id="rekening-operasional"
            className="bg-white rounded-[2rem] shadow-xl overflow-hidden border-t-8 border-[#F8B430] transform hover:-translate-y-2 transition duration-300"
          >
            <div className="p-8 md:p-10 text-center flex flex-col h-full">
              <div className="inline-flex items-center justify-center p-4 bg-[#F8B430]/10 rounded-full mb-6 mx-auto w-20 h-20">
                <BookOpen className="w-10 h-10 text-[#F8B430]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#391D0C] mb-2 font-serif">
                DANA OPERASIONAL
              </h3>
              <p className="text-sm text-gray-500 mb-8 flex-grow">
                Diperuntukkan kegiatan ibadah, pemeliharaan, dan dakwah harian.
              </p>

              <div className="bg-[#F8B430]/5 p-6 md:p-8 rounded-2xl mb-8 border border-[#F8B430]/10">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Bank_Syariah_Indonesia.svg"
                  alt="Logo BSI"
                  className="h-10 mx-auto mb-6"
                />
                <p className="text-4xl md:text-5xl font-sans font-bold text-[#391D0C] tracking-tight mb-4 select-all">
                  3300060004
                </p>
                <p className="text-[#863E15] font-medium text-sm md:text-base">
                  a.n. DKM Masjid Batik Banyumas
                </p>
              </div>

              <button
                onClick={() => handleCopy("3300060004", "operasional")}
                className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-bold transition duration-300 shadow-md ${copiedOps ? "bg-green-600 text-white" : "bg-[#F8B430] text-[#391D0C] hover:bg-[#F2CF0D]"}`}
              >
                {copiedOps ? (
                  <>
                    <Check className="w-5 h-5 mr-2" /> Tersalin!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" /> Salin Nomor Rekening
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hadits/Quote Section */}
        <div className="mt-20 text-center bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#F8B430]/20 batik-pattern relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#F8B430]"></div>
          <Heart className="w-10 h-10 text-[#F8B430] mx-auto mb-6 opacity-80" />
          <blockquote className="text-xl md:text-3xl font-serif text-[#482611] italic leading-relaxed max-w-3xl mx-auto">
            "Siapa yang membangun masjid karena Allah, maka Allah akan
            membangunkan baginya semisal itu di surga."
          </blockquote>
          <p className="mt-6 text-[#863E15] font-bold tracking-wide uppercase text-sm">
            (HR. Bukhari no. 450 dan Muslim no. 533)
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#391D0C] text-white pt-16 pb-8 border-t-4 border-[#F8B430]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5">
            <span className="font-serif font-bold text-3xl text-[#F2CF0D] block mb-6">
              Masjid Batik Banyumas
            </span>
            <p className="text-gray-400 leading-relaxed pr-4">
              Menjadi pusat peribadatan dan kebudayaan Islam yang rahmatan lil
              'alamin, dengan kebanggaan memadukan nilai spiritual suci dan
              kearifan lokal seni batik khas Banyumas.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xl font-bold mb-6 text-[#F8B430] font-serif">
              Hubungi Kami
            </h4>
            <ul className="text-gray-300 space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-[#F2CF0D] flex-shrink-0" />
                <span>Banyumas, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#F2CF0D] flex-shrink-0" />
                <a
                  href="mailto:info@masjidbatikbanyumas.com"
                  className="hover:text-white transition"
                >
                  info@masjidbatikbanyumas.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#F2CF0D] flex-shrink-0" />
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  +62 812-3456-7890 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xl font-bold mb-6 text-[#F8B430] font-serif">
              Tautan Cepat
            </h4>
            <ul className="text-gray-300 space-y-3">
              <li>
                <a
                  href="#tentang"
                  className="flex items-center hover:text-[#F2CF0D] transition group"
                >
                  <span className="w-2 h-2 bg-[#863E15] group-hover:bg-[#F2CF0D] rounded-full mr-3 transition"></span>
                  Tentang Masjid
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="flex items-center hover:text-[#F2CF0D] transition group"
                >
                  <span className="w-2 h-2 bg-[#863E15] group-hover:bg-[#F2CF0D] rounded-full mr-3 transition"></span>
                  Program Donasi
                </a>
              </li>
              <li>
                <a
                  href="#rekening"
                  className="flex items-center hover:text-[#F2CF0D] transition group"
                >
                  <span className="w-2 h-2 bg-[#863E15] group-hover:bg-[#F2CF0D] rounded-full mr-3 transition"></span>
                  Rekening Bank
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Masjid Batik Banyumas. Hak Cipta
            Dilindungi.
          </p>
          <p>
            Didesain dengan{" "}
            <Heart
              className="w-4 h-4 inline text-red-500 mx-1"
              fill="currentColor"
            />{" "}
            untuk Umat.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-[#391D0C] selection:bg-[#F8B430] selection:text-[#391D0C]">
      <GlobalStyles />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <BankAccounts />
      </main>

      <Footer />
    </div>
  );
}
