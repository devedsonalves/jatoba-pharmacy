export default function Footer() {
  return (
    <div className="bg-white dark:bg-gray-800 mt-12">
      <hr className="w-screen my-12 border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div className="w-full grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center sm:justify-items-center">
              <div>
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">Empresa</h3>
                  <ul className="text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">
                      <li className="mb-4">
                          <a href="#" className=" hover:underline">Sobre</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Carreiras</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Marca</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Blog</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">Atendimento</h3>
                  <ul className="text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Email</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Instagram</a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:underline">Whatsapp</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Contato</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">Institucional</h3>
                  <ul className="text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Política de privacidade</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Licenciamento</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Termos</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Trabalhe Conosco</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">Conta</h3>
                  <ul className="text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center">
                      <li className="mb-4">
                          <a href="#" className=" hover:underline">Criar conta</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Fazer login</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Alterar dados</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Acompanhar pedido</a>
                      </li>
                  </ul>
              </div>
          </div>
          
          <hr className="w-screen my-12 border-gray-200 sm:mx-auto dark:border-gray-700" />
          
          <div className="text-center">
              <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                  <img src="LOGO.png" className="h-14 rounded-full sm:h-9" alt="Logo" />
                  <p className="ml-4 text-xl">Farmácia Jatobá</p>
              </a>
              <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© FarmaciaJatoba™. Todos os direitos reservados.
              </span>
              <ul className="flex justify-center mt-5 space-x-5">
                  <li>
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                          <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24"><path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z"></path></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  )
}