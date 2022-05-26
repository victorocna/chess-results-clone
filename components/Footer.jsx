import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-2 bg-white">
      <div className="max w-full p-4 lg:p-8 xl:px-12 py-5 gap-10 grid md:grid-cols-4 grid-cols-1">
        <div className="md:col-span-2 flex flex-col gap-4">
          <img className="logo-up" src="/images/logo-frsah-transparent.png" alt="" />
          <p className="text-gray-500 text-base">
            Înființată oficial în anul 1925, Federația Română este una dintre membrele fondatoare a
            FIDE. Misiunea FRȘah este de a promova șahul și a sprijini pasionații sportului minții!
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-primary font-bold text-lg">Link-uri utile</p>
          <div className="flex gap-2">
            <img src="/images/divider-footer.svg" alt="Divider" />
            <img src="/images/divider-footer.svg" alt="Divider" />
            <img src="/images/divider-footer.svg" alt="Divider" />
            <img src="/images/divider-footer.svg" alt="Divider" />
          </div>
          <div className="flex flex-col gap-4 text-base">
            <div className="flex items-center gap-4">
              <i className="fas fa-chevron-right text-xs text-primary"></i>
              <a href="https://frsah.ro/stiri/" className="no-underline text-gray-500">
                Știri
              </a>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-chevron-right text-xs text-primary"></i>
              <a href="https://frsah.ro/calendar/" className="no-underline text-gray-500">
                Calendar
              </a>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-chevron-right text-xs text-primary"></i>
              <a href="https://frsah.ro/loturi/" className="no-underline text-gray-500">
                Loturi Naționale
              </a>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-chevron-right text-xs text-primary"></i>
              <a href="https://frsah.ro/sah-feminin/" className="no-underline text-gray-500">
                Șahul feminin
              </a>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-chevron-right text-xs text-primary"></i>
              <a href="https://frsah.ro/parteneri" className="no-underline text-gray-500">
                Parteneri
              </a>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-chevron-right text-xs text-primary"></i>
              <a href="https://frsah.ro/despre/" className="no-underline text-gray-500">
                Despre
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-primary font-bold text-lg">Contact</p>
          <div className="flex gap-2">
            <img src="/images/divider-footer.svg" alt="Divider" />
            <img src="/images/divider-footer.svg" alt="Divider" />
            <img src="/images/divider-footer.svg" alt="Divider" />
            <img src="/images/divider-footer.svg" alt="Divider" />
          </div>
          <div className="flex flex-col gap-2 text-base">
            <p className="text-primary font-bold">Adresă</p>
            <p className="text-gray-500">Str. Vasile Conta, nr. 16</p>
            <p className="text-primary font-bold">Telefon</p>
            <a href="tel:021.317.47.01" className="no-underline text-gray-500">
              021.317.47.01
            </a>
            <p className="text-primary font-bold">Email</p>
            <a href="mailto:contact@frsah.ro" className="no-underline text-gray-500">
              contact@frsah.ro
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-2 w-full py-4 lg:py-8 text-center text-primary font-bold">
        COPYRIGHT @ 2022 Federația Română de Șah
      </div>
    </footer>
  );
};

export default Footer;
