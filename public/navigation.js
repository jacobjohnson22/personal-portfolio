document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav-container");
  if (!nav) return;

  nav.innerHTML = `
    <nav>
      <ul>
        <div id="nav-grid" class="flex flex-row px-4 py-2 sm:px-8">
          <div id="nav-logo">
            <li>
              <a href="index.html">
                <img src="/JJ logo.png" alt="Logo" class="w-8 md:w-10 xl:w-11">
              </a>
            </li>
          </div>

          <div id="nav-links" class="flex gap-4 justify-end w-full items-center">
            <li class="text-sm px-2.5 py-1 rounded-lg main-transition hover:bg-(--hover-gray) md:text-base xl:text-lg">
              <a href="index.html">Home</a>
            </li>
            <li class="text-sm px-2.5 py-1 rounded-lg main-transition hover:bg-(--hover-gray) md:text-base xl:text-lg">
              <a href="projects.html">Projects</a>
            </li>
            <li class="text-sm px-2.5 py-1 rounded-lg main-transition hover:bg-(--hover-gray) md:text-base xl:text-lg">
              <a href="contact.html">Contact Me</a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  `;
});
