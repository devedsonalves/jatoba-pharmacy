import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-16 sm:mt-24 sm:grid sm:grid-cols-2 md:grid-cols-5 border-t border-gray-200 mx-auto max-w-7xl px-0 sm:px-6 lg:px-6">
      <div className="lg:col-span-2 h-full w-full flex justify-center items-center">
        <img
          src="https://scontent.fjdo1-2.fna.fbcdn.net/v/t1.6435-9/122885831_3502091099881234_53342234094039433_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMJZJLv4emcMDpW6-Z5kWjtGNferejRBa0Y196t6NEFuM94CNF_KMKZ-1x1ZgeqFGobRomWfusKkDP9FylHvzZ&_nc_ohc=31lNRoSOwesQ7kNvgHtTwem&_nc_ht=scontent.fjdo1-2.fna&oh=00_AYC0casiiiBMhdV1_srA3guSsGLyVQLfgAMEg0cKFRoA2g&oe=66659E8E"
          alt=""
          className="inset-0 h-fit sm:h-full w-full object-fill"
        />
      </div>
      
      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500"> Ligue </span>

              <Link href="#" className="block text-2xl sm:text-xl font-medium text-gray-900 hover:opacity-75">
                (83) 3421-6689
              </Link>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Segunda a Sábado: 07:00 às 21:00</li>
              <li>Domingo: 08:00 às 12:00 - 16:00 às 20:00</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px"viewBox="0 0 50 50">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between items-baseline">
            <div className="pt-4 sm:pt-0 sm:text-center">
              <p className="font-medium text-gray-900">Empresa</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">Sobre</Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">Carreiras</Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">Marca</Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="pt-12 sm:pt-4 sm:text-center">
              <p className="font-medium text-gray-900">Conta</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">Criar conta</Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">Fazer Login</Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">Alterar dados</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link href="#" className="text-gray-500 transition hover:opacity-75">Termos e Condições</Link>
              </li>

              <li>
                <Link href="#" className="text-gray-500 transition hover:opacity-75">Politica de Privacidade</Link>
              </li>

              <li>
                <Link href="#" className="text-gray-500 transition hover:opacity-75">Cookies</Link>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2022. Farmácia Jatobá. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}