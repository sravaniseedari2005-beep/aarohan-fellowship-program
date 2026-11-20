const { createApp } = Vue;

createApp({

    data() {

        return {

            mobileMenu: false,
            activeFilter: "All",
            selectedPhoto: null,
            selectedPhotoIndex: 0,

            filters: [
                "All",
                "Events",
                "Activities",
                "Visits",
                "Classrooms",
                "Projects"
            ],

            photos: [
                {
                    id: 2,
                    title: "Aarohan Branch Campus",
                    location: "Aarohan branch campus",
                    category: "Events",
                    galleryPage: "branch-campus-gallery.html",
                    image: "Aarohan branch.webp",
                    alt: "Aarohan branch campus"
                },
                {
                    id: 3,
                    title: "Aarohan Classroom",
                    location: "Aarohan classroom",
                    category: "Classrooms",
                    galleryPage: "classroom-gallery.html",
                    image: "Class room.jpg",
                    alt: "Students learning in an Aarohan classroom"
                },
                {
                    id: 4,
                    title: "Digital Skills Teaching",
                    location: "Aarohan learning session",
                    category: "Activities",
                    galleryPage: "teaching-gallery.html",
                    image: "Arohan branch classroom.jpg",
                    alt: "Aarohan digital skills teaching session"
                },
                {
                    id: 5,
                    title: "Students in Action",
                    location: "Aarohan activity session",
                    category: "Activities",
                    galleryPage: "students-in-action-gallery.html",
                    image: "Students in action.jpg",
                    alt: "Aarohan students taking part in an activity"
                },
                {
                    id: 6,
                    title: "Communication Practice",
                    location: "Aarohan communication session",
                    category: "Activities",
                    galleryPage: "communication-practice-gallery.html",
                    image: "Communiation.jpg",
                    alt: "Aarohan communication practice session"
                },
                {
                    id: 7,
                    title: "Project Officer Visit",
                    location: "Official interaction with students",
                    category: "Visits",
                    galleryPage: "project-officer-visit-gallery.html",
                    image: "PO sir VISIT.jpg",
                    alt: "Project Officer visit at Aarohan"
                },
                {
                    id: 8,
                    title: "NITI Aayog Team Visit",
                    location: "Interaction with Aarohan students",
                    category: "Visits",
                    galleryPage: "niti-aayog-team-visit-gallery.html",
                    image: "",
                    alt: "NITI Aayog team visit at Aarohan"
                }
            ],

            upcomingEvents: [],

            activities: [
                {
                    icon: "bi-chat-dots",
                    title: "Conversation Practice",
                    description: "Students build confidence and improve their ability to communicate clearly in real-world situations."
                },
                {
                    icon: "bi-newspaper",
                    title: "Newspaper Reading",
                    description: "Reading together develops vocabulary, awareness, discussion habits and confidence."
                },
                {
                    icon: "bi-person-badge",
                    title: "Introduction Practice",
                    description: "Students practise introducing themselves clearly and confidently in front of others."
                },
                {
                    icon: "bi-briefcase",
                    title: "Mock Interviews",
                    description: "Interview practice strengthens answers, body language, confidence and professional communication."
                },
                {
                    icon: "bi-mic",
                    title: "Public Speaking",
                    description: "Short presentations help students organise ideas, speak clearly and listen thoughtfully."
                },
                {
                    icon: "bi-people",
                    title: "Team Activities",
                    description: "Collaborative tasks help students learn through teamwork, responsibility and shared problem-solving."
                },
                {
                    icon: "bi-chat-square-text",
                    title: "Group Discussions",
                    description: "Students exchange ideas, ask questions and practise respectful, constructive participation."
                },
                {
                    icon: "bi-person-video3",
                    title: "Shadowing",
                    description: "Listening and repeating spoken English supports pronunciation, rhythm, fluency and confidence."
                },
                {
                    icon: "bi-lightbulb",
                    title: "Personality Development",
                    description: "Activities support confidence, presentation, teamwork, positive communication and professional behaviour."
                },
                {
                    icon: "bi-award",
                    title: "Debates",
                    description: "Structured debate helps students research, reason clearly and express a considered point of view."
                }
            ],

            visits: [
                {
                    number: "01",
                    label: "OFFICIAL VISIT",
                    title: "Project Officer Visit & Interaction",
                    description: "Students get an opportunity to interact with the Project Officer, share their experiences and understand the importance of skill development.",
                    image: "PROJECT Officer.webp",
                    alt: "Project Officer speaking with Aarohan participants",
                    galleryPage: "project-officer-visit-gallery.html",
                    points: [
                        "Students interact and ask questions",
                        "Students share their learning experiences",
                        "Students receive guidance and motivation"
                    ]
                },
                {
                    number: "02",
                    label: "EXPERT INTERACTION",
                    title: "NITI Aayog Team Visit",
                    description: "Students interact with the NITI Aayog team and learn about innovation, technology and development.",
                    image: "",
                    alt: "NITI Aayog team visit at Aarohan",
                    galleryPage: "niti-aayog-team-visit-gallery.html",
                    points: [
                        "Students participate in discussions",
                        "Students ask questions and share ideas",
                        "Students connect learning with real-world work"
                    ]
                }
            ],

            projects: [],

            gains: [
                { icon: "bi-chat-heart", title: "Communication", description: "Build confidence and express ideas clearly." },
                { icon: "bi-laptop", title: "Digital Skills", description: "Develop practical technology skills." },
                { icon: "bi-people", title: "Teamwork", description: "Learn through collaboration." },
                { icon: "bi-compass", title: "Leadership", description: "Take initiative and responsibility." },
                { icon: "bi-briefcase", title: "Professional Skills", description: "Prepare for real-world environments." },
                { icon: "bi-stars", title: "Confidence", description: "Present, participate and perform with confidence." }
            ]

        };

    },

    computed: {

        filteredPhotos() {

            if (this.activeFilter === "All") {
                return this.photos;
            }

            return this.photos.filter(photo => photo.category === this.activeFilter);

        },

        hasUpcomingEvents() {
            return this.upcomingEvents.length > 0;
        },

        lightboxPhotos() {
            return this.filteredPhotos.length ? this.filteredPhotos : this.photos;
        }

    },

    mounted() {

        window.addEventListener("scroll", this.updateBackToTop, { passive: true });
        document.addEventListener("keydown", this.handleKeydown);
        this.updateBackToTop();

    },

    beforeUnmount() {

        window.removeEventListener("scroll", this.updateBackToTop);
        document.removeEventListener("keydown", this.handleKeydown);

    },

    methods: {

        openPhoto(photo) {

            this.selectedPhoto = photo;
            this.selectedPhotoIndex = this.lightboxPhotos.findIndex(item => item.id === photo.id);
            document.body.style.overflow = "hidden";

        },

        closePhoto() {

            this.selectedPhoto = null;
            document.body.style.overflow = "";

        },

        nextPhoto() {

            if (!this.lightboxPhotos.length) {
                return;
            }

            this.selectedPhotoIndex = (this.selectedPhotoIndex + 1) % this.lightboxPhotos.length;
            this.selectedPhoto = this.lightboxPhotos[this.selectedPhotoIndex];

        },

        previousPhoto() {

            if (!this.lightboxPhotos.length) {
                return;
            }

            this.selectedPhotoIndex = (this.selectedPhotoIndex - 1 + this.lightboxPhotos.length) % this.lightboxPhotos.length;
            this.selectedPhoto = this.lightboxPhotos[this.selectedPhotoIndex];

        },

        handleKeydown(event) {

            if (!this.selectedPhoto) {
                return;
            }

            if (event.key === "Escape") {
                this.closePhoto();
            } else if (event.key === "ArrowRight") {
                this.nextPhoto();
            } else if (event.key === "ArrowLeft") {
                this.previousPhoto();
            }

        },

        updateBackToTop() {

            const button = document.getElementById("backToTop");

            if (button) {
                button.classList.toggle("is-visible", window.scrollY > 400);
            }

        },

        scrollToTop() {

            window.scrollTo({ top: 0, behavior: "smooth" });

        },

        closeMobileMenu() {

            this.mobileMenu = false;

        },

        handleImageError(event) {

            event.target.classList.add("image-fallback");
            event.target.removeAttribute("src");

        }

    }

}).mount("#app");
