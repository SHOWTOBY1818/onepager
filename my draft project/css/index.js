index.js

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Spa</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossorigin="anonymous">
</head>
<body id="home"> <!--add id="home" to call the navbar object-->
    <div class="main-content">
        
        <div id="nav" class="clear">
            <div class="logo">
                <img src="img/logo-company.png" alt="Web Development Logo">
            </div>
            <div class="nav-list">
                <ul id="navbarUL" class="navbar">
                <!--add id="navbarUL" to allow javascript to dynamically append <li> -->
                <!-- block comment the current li -->
                <!--
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                -->
                </ul>
            </div>
        </div>
    </div>
    <!--above the close body tag, add the script tag-->
    <script src="js/main.js"></script>
</body>
</html>