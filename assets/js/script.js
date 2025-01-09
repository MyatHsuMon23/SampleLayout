const menuIcon = document.querySelector('.menu-icon');
        const sidebar = document.querySelector('.sidebar');
        const closeBtn = document.querySelector('.close-btn');

        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });

        const searchIcon = document.getElementById("search-container");
        const searchBox = document.getElementById("searchBox");

        searchIcon.addEventListener("click", () => {
            searchBox.classList.toggle("open");
            searchIcon.classList.toggle("hidden");
        });

        searchBox.addEventListener("blur", () => {
            searchBox.classList.remove("open");
            searchIcon.classList.remove("hidden");
        });