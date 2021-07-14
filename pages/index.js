import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen background">
      <Head>
        {/* bundle fonts ↓ */}
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap"
          rel="stylesheet"
        ></link>
        {/* bundle icons ↓ */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
        {/* url/title contents */}
        <title>Ygor Gondim | Links</title>
        {/* top url color mobile ↓ */}
        <meta name="theme-color" content="#141318" media="(prefers-color-scheme: dark)"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="#141318"></meta>
        <meta name="msapplication-navbutton-color" content="#141318"></meta>
        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon.ico"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"></link>
        <link rel="manifest" href="site.webmanifest"></link>
      </Head>

      {/* MAIN SECTION */}
      <header class="header"></header>
      <div class="profile-card">
        <div class="profile-card__info">
          <a href="https://www.instagram.com/ygorgondim/" target="_blank">
            <img
              draggable="false"
              class="profile-card__avatar"
              src="ygorprofile.png"
              alt="Ygor Gondim Profile"
            />
          </a>
        </div>
      </div>
      <body cz-shortcut-listen="true">
        <main class="wrapper">
          <h1 class="hero-heading">
            <span class="highlight">Olá</span>,
            <span class="heading-highlight"> sou Ygor</span>
          </h1>
          <paragraph>
            Motion<span className="highlight"> &amp;</span> Gráfico Designer
            <br />
            <span class="highlight">Especialista</span> em criativos para
            {/* <br /> */}
            <span class="highlight"> social medias</span>.
          </paragraph>

          {/* social media */}
          <ul class="link-grid">
            {/* whatsapp */}
            <li class="card-social">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=++558881266540&text=Olá, Ygor Gondim!"
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </li>
            {/* youtube */}
            <li class="card-social">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/user/ygorgondim"
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </li>
            {/* behance */}
            <li class="card-social">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.net/ygorgondim/projects"
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
            </li>
            {/* discord */}
            <li class="card-social">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/fGrzNyanPU"
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-3.288-4.888l-.424-1.48 1.024.952.968.896 1.72 1.52v-14.352c0-.912-.736-1.648-1.64-1.648h-10.72c-.904 0-1.64.736-1.64 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072zm-1.44-3.664c1.768-.056 2.448-1.216 2.448-1.216 0-2.576-1.152-4.664-1.152-4.664-1.152-.864-2.248-.84-2.248-.84l-.112.128c1.36.416 1.992 1.016 1.992 1.016-.832-.456-1.648-.68-2.408-.768-.576-.064-1.128-.048-1.616.016l-.136.016c-.28.024-.96.128-1.816.504l-.472.232s.664-.632 2.104-1.048l-.08-.096s-1.096-.024-2.248.84c0 0-1.152 2.088-1.152 4.664 0 0 .672 1.16 2.44 1.216l.536-.664c-1.016-.304-1.4-.944-1.4-.944l.224.136.032.024.032.018.009.004.031.018c.2.112.4.2.584.272.328.128.72.256 1.176.344.6.112 1.304.152 2.072.008.376-.064.76-.176 1.16-.344.28-.104.592-.256.92-.472 0 0-.4.656-1.448.952l.528.648zm-3.72-3.736c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
                </svg>
              </a>
            </li>
            {/* <li class="card">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
                Facebook
              </a>
            </li> */}

            {/* <li class="card">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
                Behance
              </a>
            </li> */}

            {/* <li class="card">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 160 160"
                >
                  <path
                    class="tsp"
                    d="M47.49 44c2.22 0 4.02-1.79 4.02-4 0-3.81 2.32-5.73 6.43-8.8 4.3-3.21 9.65-7.2 9.65-15.2 0-2.21-1.8-4-4.02-4s-4.02 1.79-4.02 4c0 3.81-2.32 5.73-6.43 8.8-4.3 3.21-9.65 7.2-9.65 15.2 0 2.21 1.8 4 4.02 4zM71.61 44c2.22 0 4.02-1.79 4.02-4 0-3.81 2.32-5.73 6.43-8.8 4.3-3.21 9.65-7.2 9.65-15.2 0-2.21-1.8-4-4.02-4-2.22 0-4.02 1.79-4.02 4 0 3.81-2.32 5.73-6.43 8.8-4.3 3.21-9.65 7.2-9.65 15.2 0 2.21 1.8 4 4.02 4zM95.74 44c2.22 0 4.02-1.79 4.02-4 0-3.81 2.32-5.73 6.43-8.8 4.3-3.21 9.65-7.2 9.65-15.2 0-2.21-1.8-4-4.02-4-2.22 0-4.02 1.79-4.02 4 0 3.81-2.32 5.73-6.43 8.8-4.3 3.21-9.65 7.2-9.65 15.2 0 2.21 1.79 4 4.02 4z"
                  ></path>
                  <path d="M135.94 60h-12.06v-4c0-2.21-1.8-4-4.02-4H67.59v24.74c4.67 1.66 8.04 6.06 8.04 11.26v24c0 2.21-1.8 4-4.02 4H55.53c-2.22 0-4.02-1.79-4.02-4V88c0-5.21 3.37-9.61 8.04-11.26V52H23.37c-2.22 0-4.02 1.79-4.02 4v40c0 11.37 5.43 21.4 13.72 28h77.08c5.21-4.15 9.29-9.66 11.6-16h6.14c11.08 0 20.1-8.97 20.1-20V72c.01-6.62-5.4-12-12.05-12zm4.02 28c0 6.62-5.41 12-12.06 12h-4.26c.15-1.31.24-2.65.24-4V68h12.06c2.22 0 4.02 1.79 4.02 4v16z"></path>
                  <path d="M59.55 88v20h8.04V88c0-2.21-1.8-4-4.02-4-2.21 0-4.02 1.79-4.02 4zM127.22 132H16.02c-1.31 0-2.53.63-3.28 1.69a4.021 4.021 0 00-.51 3.65c2.21 6.2 8.17 10.66 15.16 10.66h88.44c7.41 0 13.14-4.94 15.17-10.67.44-1.22.24-2.58-.51-3.64a3.992 3.992 0 00-3.27-1.69z"></path>
                </svg>
                Buy me a coffee
              </a>
            </li> */}

            {/* <li class="card">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 160 160"
                >
                  <path d="M12.65 105.19l63.99 40.84c2.18 1.28 4.51 1.3 6.72 0l63.99-40.84c1.64-1.04 2.65-2.91 2.65-4.78V59.58c0-1.87-1.01-3.74-2.65-4.78L83.36 13.97c-2.18-1.28-4.51-1.3-6.72 0L12.65 54.8C11.02 55.84 10 57.71 10 59.58v40.83c0 1.87 1.02 3.74 2.65 4.78zm61.34 25.29l-47.11-30.06L47.9 86.96l26.09 16.68v26.84zm12.02 0v-26.84l26.09-16.68 21.02 13.46-47.11 30.06zm51.96-40.84L122.89 80l15.08-9.65v19.29zM86.01 29.52l47.11 30.06-21.02 13.46-26.09-16.67V29.52zM80 66.38L101.25 80 80 93.61 58.75 80 80 66.38zm-6.01-36.86v26.84l-26.1 16.68-21.01-13.46 47.11-30.06zM22.03 70.36L37.11 80l-15.08 9.65V70.36z"></path>
                </svg>
                Codepen
              </a>
            </li> */}

            {/* <li class="card">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 160 160"
                >
                  <path d="M80 13c-38.67 0-70 30.76-70 68.7 0 30.36 20.05 56.11 47.86 65.18 3.5.65 4.79-1.48 4.79-3.3 0-1.63-.06-5.95-.09-11.68-19.47 4.14-23.58-9.22-23.58-9.22-3.19-7.93-7.79-10.05-7.79-10.05-6.34-4.26.49-4.18.49-4.18 7.03.48 10.72 7.08 10.72 7.08 6.24 10.5 16.39 7.47 20.39 5.72.63-4.44 2.43-7.47 4.44-9.19-15.55-1.72-31.88-7.63-31.88-33.95 0-7.5 2.71-13.62 7.2-18.43-.79-1.73-3.15-8.72.61-18.19 0 0 5.86-1.84 19.25 7.04 5.6-1.53 11.55-2.28 17.5-2.32 5.95.03 11.9.79 17.5 2.32 13.3-8.89 19.16-7.04 19.16-7.04 3.76 9.46 1.4 16.45.7 18.19 4.46 4.81 7.17 10.93 7.17 18.43 0 26.39-16.36 32.21-31.94 33.89 2.45 2.06 4.73 6.28 4.73 12.71 0 9.19-.09 16.58-.09 18.82 0 1.8 1.22 3.95 4.81 3.26 28.01-9 48.05-34.77 48.05-65.07C150 43.76 118.66 13 80 13z"></path>
                </svg>
                GitHub
              </a>
            </li> */}

            {/* <li class="card">
              <a
                class="link-grid__item"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <svg
                  class="link-grid__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Twitter
              </a>
            </li> */}
          </ul>

          <h2 class="heading heading-highlight">Power Text</h2>
          <article class="card resource">
            <img
              class="resource__img"
              src="powertext.jpeg"
              alt="Imagem Site Power Text"
              draggable="false"
            ></img>
            <div class="resource__container">
              <h3 class="sub-heading resource__title">
                <img
                  class="resource__icon"
                  src="powertext__logo.jpeg"
                  alt=">Logo Site Power Text"
                  draggable="false"
                ></img>
                Power Text
              </h3>
              <p>
                Produza todo seu texto dento da plataforma. Depois é só copiar e
                colar na legenda do seu post 😉
                <span class="highlight">.</span>
              </p>
              <p class="resource__button">
                <a class="button" href="https://powertext.net/" target="_blank">
                  Acessar Plataforma
                </a>
              </p>
            </div>
          </article>

          {/* <h2 class="heading heading-highlight">Downloads</h2>
          <article class="card resource">
            <img
              class="resource__img"
              src="figma.png"
              alt="Background figma wallpaper"
              draggable="false"
            ></img>
            <div class="resource__container">
              <h3 class="sub-heading resource__title">
                <img
                  class="resource__icon"
                  src="figma-icon.png"
                  alt="Figma logo"
                  draggable="false"
                ></img>
                Figma
              </h3>
              <p>
                Com este modelo você consegue criar posts para suas redes
                sociais. Nele há 2 modelos de carrosséis e 1 story
                <span class="highlight">.</span>
              </p>
              <p class="resource__button">
                <a class="button" href="#">
                  Obter Conteúdo
                </a>
              </p>
            </div>
          </article> */}

          {/* <h2 class="heading heading-highlight">Lorem</h2>
          <article class="card resource">
            <img
              class="resource__img"
              src="figma.png"
              alt="Background figma wallpaper"
            ></img>
            <div class="resource__container">
              <h3 class="sub-heading resource__title">
                <img
                  class="resource__icon"
                  src="figma-icon.png"
                  alt="Figma logo"
                ></img>
                Lorem
              </h3>
              <p>
                Est quis ipsum laboris consequat. Eu ea Lorem est non amet.
                Voluptate voluptate laboris adipisicing ullamco sit. Magna Lorem
                <span class="highlight">.</span>
              </p>
              <p class="resource__button">
                <a class="button" href="" target="_blank">
                  Lorem Button
                </a>
              </p>
            </div>
          </article> */}
        </main>
      </body>

      <footer class="footer">
        Copyright © 2021 Ygor Gondim | Criado por
        <a
          className="text-footer font-bold"
          href="https://www.instagram.com/joaoalcantara.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> João Alcântara</span>.
        </a>
      </footer>
    </div>
  )
}
