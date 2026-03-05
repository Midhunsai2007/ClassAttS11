// ============================================
// STUDENT DATA - 24S11 SECTION
// ============================================

const students = [
    { regNo: "99240040066", name: "JUJJAVARAPU RISHYENDRA" },
    { regNo: "99240040874", name: "CHALLA VARUN KUMAR" },
    { regNo: "99240040875", name: "CHALLA CHARUKESH" },
    { regNo: "99240040876", name: "CHAPPIDI AJAYKUMAR VENKAT" },
    { regNo: "99240040877", name: "CHERUKUNOORI MIDHUN SAI" },
    { regNo: "99240040878", name: "CHENNAM VENKATA SANTHOSH" },
    { regNo: "99240040879", name: "NACHUKURU MANJUNATH" },
    { regNo: "99240040880", name: "PAPPIREDDY ISHITHA REDDY" },
    { regNo: "99240040881", name: "DUDDEKUNTA SRI VYSHNAV REDDY" },
    { regNo: "99240040882", name: "DIVYA PRABHA A" },
    { regNo: "99240040883", name: "DEVANDLA YUVIKA" },
    { regNo: "99240040884", name: "DEVARINTI PAVAN KUMAR REDDY" },
    { regNo: "99240040886", name: "DONKINA DURGA NAGA VENKATA" },
    { regNo: "99240040887", name: "DONGA MANI KUMARI" },
    { regNo: "99240040888", name: "RAMI REDDY ADARSH KUMAR REDDY" },
    { regNo: "99240040889", name: "SUDALAGUNTA PRAVEEN KUMAR" },
    { regNo: "99240040891", name: "DUDEKULA FEROZ" },
    { regNo: "99240040892", name: "DESHAM SANTOSH REDDY" },
    { regNo: "99240040893", name: "DERANGULA RAVI TEJA" },
    { regNo: "99240040894", name: "DODDAVULA DINESH REDDY" },
    { regNo: "99240040895", name: "DERANGULA HEMA LATHA" },
    { regNo: "99240040896", name: "DEERAJ A S" },
    { regNo: "99240040897", name: "DEVARAVULA RAJESH" },
    { regNo: "99240040898", name: "DORADLA NAGA VENKATA SRIKAR" },
    { regNo: "99240040899", name: "DUDEKULA DHARMATEJA" },
    { regNo: "99240040900", name: "DHANUNJAY MAITY" },
    { regNo: "99240040901", name: "SUBBARA INDUJA" },
    { regNo: "99240040902", name: "DEVABATHINI CHARISHMA" },
    { regNo: "99240040903", name: "DOKKARI AKSHAY KUMAR YADAV" },
    { regNo: "99240040904", name: "THALLURI SAI JASWANTH" },
    { regNo: "99240040905", name: "THANGIDIKUNTA CHANDRASHEKAR" },
    { regNo: "99240040906", name: "GARLAPATI ESWAR DATTHA" },
    { regNo: "99240040907", name: "GOPAVARAM SIVAKESHAVA REDDY" },
    { regNo: "99240040909", name: "GOOTY MAHIND" },
    { regNo: "99240040910", name: "THALLURI THIRUPATHI RAO" },
    { regNo: "99240040913", name: "THANAKANTI RAKSHITHA" },
    { regNo: "99240040915", name: "THARIBOINA BALU HARI" },
    { regNo: "99240040917", name: "GARAGA UMA RAMALINGESWARA" },
    { regNo: "99240040919", name: "GANJI ESWAR" },
    { regNo: "99240040920", name: "K GNAN JASHWANTH" },
    { regNo: "99240040921", name: "INDUKURI NAVEEN VARMA" },
    { regNo: "99240040922", name: "VEERAMREDDY AJAY KUMAR REDDY" },
    { regNo: "99240040923", name: "GONUGUNTLA JEEVAN SAI" },
    { regNo: "99240040924", name: "GOLLAPALLI ARUN KUMAR" },
    { regNo: "99240040925", name: "GEDDAM PAVAN KUMAR" },
    { regNo: "99240040926", name: "GARSIKUTI SATISH" },
    { regNo: "99240040927", name: "GAVVALA OMSAI" },
    { regNo: "99240040929", name: "KIRAN KRISHNA" },
    { regNo: "99240040930", name: "VIPPARLA VENKATA RAO" },
    { regNo: "99240040931", name: "NAVUDU OMKAR" },
    { regNo: "99240040933", name: "ITHA REVANTH MANI PULLARAO" },
    { regNo: "99240040934", name: "INDUJ R" },
    { regNo: "99240040935", name: "HAMSHINI RAJAN A R K" },
    { regNo: "99240040936", name: "GUVVALA DHARANI KUMAR" },
    { regNo: "99240040937", name: "INDURI SATHVIKA" },
    { regNo: "99240040938", name: "HALVI LINGA" },
    { regNo: "99240040939", name: "INNAMURI YADUNANDAN GUPTA" },
    { regNo: "99240040940", name: "GUVVALA SAI DURGA SANDEEP REDDY" },
    { regNo: "99240040941", name: "GUTTI SIVARAMAKRISHNA" },
    { regNo: "99240040942", name: "HARINI J" },
    { regNo: "99240040944", name: "SANTHIYA S" },
    { regNo: "99240040945", name: "KAAVALI VINEETH" },
    { regNo: "99240040946", name: "KAMMARAPALLI ARJUN" },
    { regNo: "99240040947", name: "KAMALAMARRY JAHNAVI" },
    { regNo: "99240040948", name: "NALLADIMMU NAGA LAKSHMAN" },
    { regNo: "99240040949", name: "KANCHARLA POORNACHANDRA" },
    { regNo: "99240040950", name: "KANAKALA VENKATA PRADEEP" },
    { regNo: "99240040952", name: "RAYADURGAM NARAYANA REDDY" },
    { regNo: "99240040953", name: "KALAVALAPUDI HEMANTH" }
];

// ============================================
// COURSE DATA WITH FACULTY
// ============================================

const courses = [
    {
        code: "212CSE2101",
        name: "Discrete Mathematics",
        credits: 4,
        category: "Program Core Courses",
        type: "Theory Course",
        faculty: "Dr. G. CHITRA"
    },
    {
        code: "212CSE2303",
        name: "Software Engineering",
        credits: 3,
        category: "Program Core Courses",
        type: "Integrated Course Theory",
        faculty: "Ms. Sujitha S"
    },
    {
        code: "212CSE2304",
        name: "Machine Learning",
        credits: 4,
        category: "Program Core Courses",
        type: "Integrated Course Theory",
        faculty: "Mrs. A. M. GURUSIGAAMANI"
    },
    {
        code: "212CSE2305",
        name: "Database Management Systems",
        credits: 4,
        category: "Program Core Courses",
        type: "Integrated Course Theory",
        faculty: "Dr. M. K. NAGARAJAN"
    },
    {
        code: "213CSE2301",
        name: "Predictive Analytics",
        credits: 4,
        category: "Program Elective Courses",
        type: "Integrated Course Theory",
        faculty: "Mrs. P. KALAIARASI"
    }
];
