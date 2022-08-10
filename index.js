const load_more = () => {
  document.getElementById(
    "addprojects"
  ).innerHTML += `          <div class="p-4 lg:w-1/3 md:w-1/2">
            <div
              class="h-full rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZHJvb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  Spain
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Living Room
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
                    <div class="p-4 lg:w-1/3 md:w-1/2">
            <div
              class="h-full rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1582417728413-b2347161b864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmluZyUyMHJvb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  Spain
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Living Room
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
                    <div class="p-4 lg:w-1/3 md:w-1/2">
            <div
              class="h-full rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aHJvb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  Spain
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Living Room
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>`;

  document.getElementById("adProjectsRm").style.display = "none";
};

const $collapseEl = document.querySelector("#navbar-collapse-basic");
const $scrollSpyEl = document.querySelector(
  '[data-hs-scrollspy="#scrollspy-1"]'
);

$scrollSpyEl.addEventListener("scroll.hs.scrollspy", () => {
  if (window.outerWidth <= 639 && $collapseEl.classList.contains("open")) {
    HSCollapse.hide($collapseEl);
  }
});

const btn = (e)=>{
  e.preventDefault()
}