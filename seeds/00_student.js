exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("student")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("student").insert([
                {
                    first_name: "R.J.",
                    last_name: "Kirkhope",
                    photo:
                        "https://cf.ltkcdn.net/small-pets/images/orig/200801-2121x1414-goldfish2.jpg",
                    hometown_lat: "32.715738",
                    hometown_long: "-117.161084",
                    prev_occupation: "Stuntman"
                },
                {
                    first_name: "Josh",
                    last_name: "Bardlsey",
                    photo:
                        "http://www.yourpurebredpuppy.com/dogbreeds/photos-RS/sheltiesf2.jpg",
                    hometown_lat: "39.548079",
                    hometown_long: "-104.973933",
                    prev_occupation: "Valet"
                },
                {
                    first_name: "Mark",
                    last_name: "Newcomb",
                    photo:
                        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12194915/French-Bulldog-on-White-14.jpg",
                    hometown_lat: "38.879178",
                    hometown_long: "-99.326770",
                    prev_occupation: "Developer"
                },
                {
                    first_name: "Matthew",
                    last_name: "Riach",
                    photo:
                        "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-19.jpg",
                    hometown_lat: "53.408371",
                    hometown_long: "-2.991573",
                    prev_occupation: "Road map salesman"
                },
                {
                    first_name: "Levi",
                    last_name: "Boenish",
                    photo:
                        "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-4.jpg",
                    hometown_lat: "40.014986",
                    hometown_long: "-105.270546",
                    prev_occupation: "Manager"
                },
                {
                    first_name: "Tom",
                    last_name: "Clukies",
                    photo: "https://i.ytimg.com/vi/dwO06H-IF80/hqdefault.jpg",
                    hometown_lat: "39.548079",
                    hometown_long: "-104.973933",
                    prev_occupation: "Outdoorsman"
                },
                {
                    first_name: "William",
                    last_name: "Kirkhope",
                    photo:
                        "https://i.pinimg.com/736x/21/25/c0/2125c0d98eb7b290e5903355ac0f8e6b--christmas-trees-christmas-cats.jpg",
                    hometown_lat: "32.715738",
                    hometown_long: "-117.161084",
                    prev_occupation: "Personal Trainer"
                },
                {
                    first_name: "Josh",
                    last_name: "Levy",
                    photo:
                        "https://westiegifts.com/11472-large_default/bandana-westie-greetings-card.jpg",
                    hometown_lat: "-26.204103",
                    hometown_long: "28.047305",
                    prev_occupation: "Lesser Developer"
                },
                {
                    first_name: "Ben",
                    last_name: "Austin",
                    photo:
                        "http://www.sheepadoodles.org/uploads/8/2/1/7/82172392/3675770.jpg?603",
                    hometown_lat: "39.739236",
                    hometown_long: "-104.990251",
                    prev_occupation: "Social Work"
                },
                {
                    first_name: "Natalie",
                    last_name: "Todd",
                    photo:
                        "https://laughingsquid.com/wp-content/uploads/2016/01/cat-banana.png",
                    hometown_lat: "61.218056",
                    hometown_long: "-149.900278",
                    prev_occupation: "Technical Recruiter"
                },
                {
                    first_name: "Eldon",
                    last_name: "Dahlin",
                    photo:
                        "http://www.dogwallpapers.net/wallpapers/cute-rottweiler-dog-photo.jpg",
                    hometown_lat: "37.404094",
                    hometown_long: "-120.850474",
                    prev_occupation: "Customer Service Rep"
                },
                {
                    first_name: "Tiffany",
                    last_name: "Ricks",
                    photo:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj4X16RkoIqAFunD36VIldA-y8qr3GH13oe7i_Ao88zE6R_u3Aw",
                    hometown_lat: "33.4942",
                    hometown_long: "111.9261",
                    prev_occupation: "CNA"
                },
                {
                    first_name: "George",
                    last_name: "Chios",
                    photo:
                        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224425/Shiba-Inu-Care.jpg",
                    hometown_lat: "39.522455",
                    hometown_long: "-76.444740",
                    prev_occupation: "Audio Engineer"
                },
                {
                    first_name: "Danny",
                    last_name: "Pifer",
                    photo:
                        "https://i.kym-cdn.com/photos/images/original/000/823/256/8f5.jpg",
                    hometown_lat: "37.7749",
                    hometown_long: "122.4194",
                    prev_occupation: "QA Tester"
                },
                {
                    first_name: "Kimberly",
                    last_name: "Hermosillo",
                    photo:
                        "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-22.jpg",
                    hometown_lat: "39.739236",
                    hometown_long: "-104.990251",
                    prev_occupation: "Student"
                },
                {
                    first_name: "Austin",
                    last_name: "Loveless",
                    photo:
                        "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg",
                    hometown_lat: "30.367420",
                    hometown_long: "-89.092816",
                    prev_occupation: "Navy"
                },
                {
                    first_name: "Jeff",
                    last_name: "Strunk",
                    photo:
                        "https://i.pinimg.com/originals/fc/ea/9a/fcea9a5369ebbdca95dca1c0aa1e1a51.jpg",
                    hometown_lat: "39.122562",
                    hometown_long: "-84.135768",
                    prev_occupation: "Financial Consultant"
                },
                {
                    first_name: "Ciaran",
                    last_name: "Guha-Gilford",
                    photo:
                        "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-5.jpg",
                    hometown_lat: "38.9876",
                    hometown_long: "76.8205",
                    prev_occupation: "Lab Rat"
                },
                {
                    first_name: "Michael",
                    last_name: "Coons",
                    photo: "https://i.huffpost.com/gen/3754046/original.jpg",
                    hometown_lat: "41.079273",
                    hometown_long: "85.139351",
                    prev_occupation: "Director of Information Technology"
                },
                {
                    first_name: "Josh",
                    last_name: "Robbs",
                    photo:
                        "https://images.pexels.com/photos/137049/pexels-photo-137049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
                    hometown_lat: "37.122366",
                    hometown_long: "-76.345777",
                    prev_occupation: "Editorial Assistant"
                },
                {
                    first_name: "Belinda",
                    last_name: "Galiano",
                    photo:
                        "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-14.jpg",
                    hometown_lat: "8.569824",
                    hometown_long: "-71.180499",
                    prev_occupation: "Classical Pianist"
                },
                {
                    first_name: "Thomas",
                    last_name: "Lee",
                    photo:
                        "https://i.ytimg.com/vi/OqQPv78AMw0/maxresdefault.jpg",
                    hometown_lat: "38.878487",
                    hometown_long: "-104.869766",
                    prev_occupation: "Manager of Strange People"
                },
                {
                    first_name: "Ryan",
                    last_name: "McCrory",
                    photo:
                        "http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-1.jpg",
                    hometown_lat: "39.739236",
                    hometown_long: "-104.990251",
                    prev_occupation: "US Army"
                },
                {
                    first_name: "Matthew",
                    last_name: "Huston",
                    photo:
                        "https://buzzsharer.com/wp-content/uploads/2015/11/cute-bengal-cat-lying1.jpg",
                    hometown_lat: "39.613319",
                    hometown_long: "-105.016647",
                    prev_occupation: "Valet"
                }
            ]);
        });
};
