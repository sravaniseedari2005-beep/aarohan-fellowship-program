/* =========================================================
   AAROHAN BRANCH GALLERY
   Vue.js Branch Data & Gallery Functions
   ========================================================= */

const { createApp } = Vue;

createApp({

    data() {

        return {

            // Currently selected branch
            activeBranchId: 1,

            // Hovered branch
            hoveredBranch: null,

            // Selected photo for modal
            selectedPhoto: null,

            // =================================================
            // AAROHAN BRANCHES
            // =================================================

            branches: [

                {
                    id: 1,

                    name: "Chintapalli",

                    short: "CHINTAPALLI",

                    area: "Chintapalli",

                    description:
                        "Explore Aarohan learning sessions, classrooms, student activities and memorable moments from Chintapalli.",

                    cover:
                        "images/branches/chintapalli/cover.jpg",

                    photos: [

                        {
                            title: "Aarohan Chintapalli Branch",

                            category: "Branch",

                            image:
                                "images/branches/chintapalli/branch.jpg"
                        },

                        {
                            title: "Classroom Learning Session",

                            category: "Classroom",

                            image:
                                "images/branches/chintapalli/classroom.jpg"
                        },

                        {
                            title: "Teaching Session",

                            category: "Teaching",

                            image:
                                "images/branches/chintapalli/teaching.jpg"
                        },

                        {
                            title: "Students Learning",

                            category: "Students",

                            image:
                                "images/branches/chintapalli/students.jpg"
                        },

                        {
                            title: "Communication Activity",

                            category: "Activity",

                            image:
                                "images/branches/chintapalli/activity.jpg"
                        },

                        {
                            title: "Student Group Activity",

                            category: "Activity",

                            image:
                                "images/branches/chintapalli/group.jpg"
                        }

                    ]
                },


                // =================================================
                // PEDDABAYALU
                // =================================================

                {
                    id: 2,

                    name: "Peddabayalu",

                    short: "PEDDABAYALU",

                    area: "Peddabayalu",

                    description:
                        "Explore classroom sessions, digital learning, communication activities and student experiences from Peddabayalu.",

                    cover:
                        "images/branches/peddabayalu/cover.jpg",

                    photos: [

                        {
                            title: "Aarohan Peddabayalu Branch",

                            category: "Branch",

                            image:
                                "images/branches/peddabayalu/branch.jpg"
                        },

                        {
                            title: "Peddabayalu Classroom",

                            category: "Classroom",

                            image:
                                "images/branches/peddabayalu/classroom.jpg"
                        },

                        {
                            title: "Students Learning",

                            category: "Students",

                            image:
                                "images/branches/peddabayalu/students.jpg"
                        },

                        {
                            title: "Teaching Session",

                            category: "Teaching",

                            image:
                                "images/branches/peddabayalu/teaching.jpg"
                        },

                        {
                            title: "Communication Practice",

                            category: "Activity",

                            image:
                                "images/branches/peddabayalu/activity.jpg"
                        },

                        {
                            title: "Group Activity",

                            category: "Activity",

                            image:
                                "images/branches/peddabayalu/group.jpg"
                        }

                    ]
                },


                // =================================================
                // ARAKU
                // =================================================

                {
                    id: 3,

                    name: "Araku",

                    short: "ARAKU",

                    area: "Araku",

                    description:
                        "Discover Aarohan training sessions, classroom learning and student activities from the Araku branch.",

                    cover:
                        "images/branches/araku/cover.jpg",

                    photos: [

                        {
                            title: "Aarohan Araku Branch",

                            category: "Branch",

                            image:
                                "images/branches/araku/branch.jpg"
                        },

                        {
                            title: "Araku Classroom",

                            category: "Classroom",

                            image:
                                "images/branches/araku/classroom.jpg"
                        },

                        {
                            title: "Student Activity",

                            category: "Activity",

                            image:
                                "images/branches/araku/activity.jpg"
                        },

                        {
                            title: "Teaching Session",

                            category: "Teaching",

                            image:
                                "images/branches/araku/teaching.jpg"
                        },

                        {
                            title: "Digital Skills Training",

                            category: "Training",

                            image:
                                "images/branches/araku/training.jpg"
                        },

                        {
                            title: "Students Together",

                            category: "Students",

                            image:
                                "images/branches/araku/group.jpg"
                        }

                    ]
                },


                // =================================================
                // ITDA PADERU
                // =================================================

                {
                    id: 4,

                    name: "ITDA Paderu",

                    short: "ITDA PADERU",

                    area: "Paderu",

                    description:
                        "Explore the main Aarohan learning environment, training sessions and student activities at ITDA Paderu.",

                    cover:
                        "images/branches/paderu/cover.jpg",

                    photos: [

                        {
                            title: "ITDA Paderu Aarohan",

                            category: "Branch",

                            image:
                                "images/branches/paderu/branch.jpg"
                        },

                        {
                            title: "Paderu Classroom",

                            category: "Classroom",

                            image:
                                "images/branches/paderu/classroom.jpg"
                        },

                        {
                            title: "Students Learning",

                            category: "Students",

                            image:
                                "images/branches/paderu/students.jpg"
                        },

                        {
                            title: "Teaching Session",

                            category: "Teaching",

                            image:
                                "images/branches/paderu/teaching.jpg"
                        },

                        {
                            title: "Web Development Activity",

                            category: "Project",

                            image:
                                "images/branches/paderu/project.jpg"
                        },

                        {
                            title: "Student Interaction",

                            category: "Activity",

                            image:
                                "images/branches/paderu/group.jpg"
                        }

                    ]
                },


                // =================================================
                // KYURU
                // =================================================

                {
                    id: 5,

                    name: "Kyuru",

                    short: "KYURU",

                    area: "Kyuru",

                    description:
                        "Explore Kyuru branch classrooms, training sessions, student activities and learning experiences.",

                    cover:
                        "images/branches/kyuru/cover.jpg",

                    photos: [

                        {
                            title: "Aarohan Kyuru Branch",

                            category: "Branch",

                            image:
                                "images/branches/kyuru/branch.jpg"
                        },

                        {
                            title: "Kyuru Classroom",

                            category: "Classroom",

                            image:
                                "images/branches/kyuru/classroom.jpg"
                        },

                        {
                            title: "Student Activities",

                            category: "Activity",

                            image:
                                "images/branches/kyuru/activity.jpg"
                        },

                        {
                            title: "Teaching Session",

                            category: "Teaching",

                            image:
                                "images/branches/kyuru/teaching.jpg"
                        },

                        {
                            title: "Digital Learning",

                            category: "Training",

                            image:
                                "images/branches/kyuru/training.jpg"
                        },

                        {
                            title: "Student Group",

                            category: "Students",

                            image:
                                "images/branches/kyuru/group.jpg"
                        }

                    ]
                }

            ]

        };

    },


    // =========================================================
    // COMPUTED
    // =========================================================

    computed: {

        // Get currently selected branch

        activeBranch() {

            return this.branches.find(
                branch => branch.id === this.activeBranchId
            );

        },


        // Get photos only from selected branch

        activePhotos() {

            if (!this.activeBranch) {

                return [];

            }

            return this.activeBranch.photos;

        }

    },


    // =========================================================
    // METHODS
    // =========================================================

    methods: {


        // -----------------------------------------------------
        // SELECT BRANCH
        // -----------------------------------------------------

        selectBranch(branch) {

            this.activeBranchId = branch.id;

            this.hoveredBranch = branch.id;

            this.selectedPhoto = null;


            // Scroll to gallery

            this.$nextTick(() => {

                const gallery =
                    document.getElementById("branch-gallery");

                if (gallery) {

                    gallery.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        },


        // -----------------------------------------------------
        // HOVER BRANCH
        // -----------------------------------------------------

        branchHover(branch) {

            this.hoveredBranch = branch.id;

        },


        // -----------------------------------------------------
        // REMOVE HOVER
        // -----------------------------------------------------

        branchLeave() {

            this.hoveredBranch = null;

        },


        // -----------------------------------------------------
        // OPEN PHOTO
        // -----------------------------------------------------

        openPhoto(photo) {

            this.selectedPhoto = photo;

            document.body.style.overflow = "hidden";

        },


        // -----------------------------------------------------
        // CLOSE PHOTO
        // -----------------------------------------------------

        closePhoto() {

            this.selectedPhoto = null;

            document.body.style.overflow = "auto";

        },


        // -----------------------------------------------------
        // BACK TO EVENTS
        // -----------------------------------------------------

        goToEvents() {

            window.location.href = "Events.html";

        },


        // -----------------------------------------------------
        // GO HOME
        // -----------------------------------------------------

        goHome() {

            window.location.href = "index.html";

        }

    },


    // =========================================================
    // MOUNTED
    // =========================================================

    mounted() {

        console.log(
            "Aarohan Branch Gallery loaded successfully."
        );

        console.log(
            "Branches:",
            this.branches.length
        );

    }

}).mount("#app");