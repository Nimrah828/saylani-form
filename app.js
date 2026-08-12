/* ==========================
           MOBILE MENU
        =========================== */

        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("show")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* ==========================
           TAB SWITCHING
        =========================== */

        const tabs = document.querySelectorAll(".tab");
        const contents = document.querySelectorAll(".content");


        tabs.forEach(function(tab) {

            tab.addEventListener("click", function() {

                // Remove active from all tabs
                tabs.forEach(function(item) {
                    item.classList.remove("active");
                });


                // Add active to clicked tab
                tab.classList.add("active");


                // Hide all content
                contents.forEach(function(content) {
                    content.classList.remove("active");
                });


                // Get target
                const targetId = tab.getAttribute("data-target");

                const targetContent =
                    document.getElementById(targetId);


                // Show selected content
                targetContent.classList.add("active");

            });

        });


        /* ==========================
           FORM SUBMISSION
        =========================== */

        const registrationForm =
            document.getElementById(
                "registrationFormSubmit"
            );


        registrationForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();

                alert(
                    "Registration submitted successfully! 🎉"
                );

                registrationForm.reset();

            }
        );


        /* ==========================
           DOWNLOAD BUTTON
        =========================== */

        const downloadBtn =
            document.getElementById("downloadBtn");


        downloadBtn.addEventListener(
            "click",
            function() {

                alert(
                    "Your ID Card download will start here."
                );

            }
        );


        /* ==========================
           CLOSE MOBILE MENU
           AFTER CLICK
        =========================== */

        const mobileLinks =
            document.querySelectorAll(
                ".nav-links a"
            );


        mobileLinks.forEach(function(link) {

            link.addEventListener(
                "click",
                function() {

                    navLinks.classList.remove("show");

                    const icon =
                        menuBtn.querySelector("i");

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }
            );

        });
