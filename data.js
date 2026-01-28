// ============================================
// STUDENT DATA - 24S11 SECTION
// ============================================

const students = [
    { id: 1, regNo: "99240040066", name: "JUJJAVARAPU RISHYENDRA" },
    { id: 2, regNo: "99240040874", name: "CHALLA VARUN KUMAR" },
    { id: 3, regNo: "99240040875", name: "CHALLA CHARUKESH" },
    { id: 4, regNo: "99240040876", name: "CHAPPIDI AJAYKUMAR VENKAT" },
    { id: 5, regNo: "99240040877", name: "CHERUKUNOORI MIDHUN SAI" },
    { id: 6, regNo: "99240040878", name: "CHENNAM VENKATA SANTHOSH" },
    { id: 7, regNo: "99240040879", name: "NACHUKURU MANJUNATH" },
    { id: 8, regNo: "99240040880", name: "PAPPIREDDY ISHITHA REDDY" },
    { id: 9, regNo: "99240040881", name: "DUDDEKUNTA SRI VYSHNAV REDDY" },
    { id: 10, regNo: "99240040882", name: "DIVYA PRABHA A" },
    { id: 11, regNo: "99240040883", name: "DEVANDLA YUVIKA" },
    { id: 12, regNo: "99240040884", name: "DEVARINTI PAVAN KUMAR REDDY" },
    { id: 13, regNo: "99240040886", name: "DONKINA DURGA NAGA VENKATA" },
    { id: 14, regNo: "99240040887", name: "DONGA MANI KUMARI" },
    { id: 15, regNo: "99240040888", name: "RAMI REDDY ADARSH KUMAR REDDY" },
    { id: 16, regNo: "99240040889", name: "SUDALAGUNTA PRAVEEN KUMAR" },
    { id: 17, regNo: "99240040891", name: "DUDEKULA FEROZ" },
    { id: 18, regNo: "99240040892", name: "DESHAM SANTOSH REDDY" },
    { id: 19, regNo: "99240040893", name: "DERANGULA RAVI TEJA" },
    { id: 20, regNo: "99240040894", name: "DODDAVULA DINESH REDDY" },
    { id: 21, regNo: "99240040895", name: "DERANGULA HEMA LATHA" },
    { id: 22, regNo: "99240040896", name: "DEERAJ A S" },
    { id: 23, regNo: "99240040897", name: "DEVARAVULA RAJESH" },
    { id: 24, regNo: "99240040898", name: "DORADLA NAGA VENKATA SRIKAR" },
    { id: 25, regNo: "99240040899", name: "DUDEKULA DHARMATEJA" },
    { id: 26, regNo: "99240040900", name: "DHANUNJAY MAITY" },
    { id: 27, regNo: "99240040901", name: "SUBBARA INDUJA" },
    { id: 28, regNo: "99240040902", name: "DEVABATHINI CHARISHMA" },
    { id: 29, regNo: "99240040903", name: "DOKKARI AKSHAY KUMAR YADAV" },
    { id: 30, regNo: "99240040904", name: "THALLURI SAI JASWANTH" },
    { id: 31, regNo: "99240040905", name: "THANGIDIKUNTA CHANDRASHEKAR" },
    { id: 32, regNo: "99240040906", name: "GARLAPATI ESWAR DATTHA" },
    { id: 33, regNo: "99240040907", name: "GOPAVARAM SIVAKESHAVA REDDY" },
    { id: 34, regNo: "99240040909", name: "GOOTY MAHIND" },
    { id: 35, regNo: "99240040910", name: "THALLURI THIRUPATHI RAO" },
    { id: 36, regNo: "99240040913", name: "THANAKANTI RAKSHITHA" },
    { id: 37, regNo: "99240040915", name: "THARIBOINA BALU HARI" },
    { id: 38, regNo: "99240040917", name: "GARAGA UMA RAMALINGESWARA" },
    { id: 39, regNo: "99240040919", name: "GANJI ESWAR" },
    { id: 40, regNo: "99240040920", name: "K GNAN JASHWANTH" },
    { id: 41, regNo: "99240040921", name: "INDUKURI NAVEEN VARMA" },
    { id: 42, regNo: "99240040922", name: "VEERAMREDDY AJAY KUMAR REDDY" },
    { id: 43, regNo: "99240040923", name: "GONUGUNTLA JEEVAN SAI" },
    { id: 44, regNo: "99240040924", name: "GOLLAPALLI ARUN KUMAR" },
    { id: 45, regNo: "99240040925", name: "GEDDAM PAVAN KUMAR" },
    { id: 46, regNo: "99240040926", name: "GARSIKUTI SATISH" },
    { id: 47, regNo: "99240040927", name: "GAVVALA OMSAI" },
    { id: 48, regNo: "99240040929", name: "KIRAN KRISHNA" },
    { id: 49, regNo: "99240040930", name: "VIPPARLA VENKATA RAO" },
    { id: 50, regNo: "99240040931", name: "NAVUDU OMKAR" },
    { id: 51, regNo: "99240040933", name: "ITHA REVANTH MANI PULLARAO" },
    { id: 52, regNo: "99240040934", name: "INDUJ R" },
    { id: 53, regNo: "99240040935", name: "HAMSHINI RAJAN A R K" },
    { id: 54, regNo: "99240040936", name: "GUVVALA DHARANI KUMAR" },
    { id: 55, regNo: "99240040937", name: "INDURI SATHVIKA" },
    { id: 56, regNo: "99240040938", name: "HALVI LINGA" },
    { id: 57, regNo: "99240040939", name: "INNAMURI YADUNANDAN GUPTA" },
    { id: 58, regNo: "99240040940", name: "GUVVALA SAI DURGA SANDEEP REDDY" },
    { id: 59, regNo: "99240040941", name: "GUTTI SIVARAMAKRISHNA" },
    { id: 60, regNo: "99240040942", name: "HARINI J" },
    { id: 61, regNo: "99240040944", name: "SANTHIYA S" },
    { id: 62, regNo: "99240040945", name: "KAAVALI VINEETH" },
    { id: 63, regNo: "99240040946", name: "KAMMARAPALLI ARJUN" },
    { id: 64, regNo: "99240040947", name: "KAMALAMARRY JAHNAVI" },
    { id: 65, regNo: "99240040948", name: "NALLADIMMU NAGA LAKSHMAN" },
    { id: 66, regNo: "99240040949", name: "KANCHARLA POORNACHANDRA" },
    { id: 67, regNo: "99240040950", name: "KANAKALA VENKATA PRADEEP" },
    { id: 68, regNo: "99240040952", name: "RAYADURGAM NARAYANA REDDY" },
    { id: 69, regNo: "99240040953", name: "KALAVALAPUDI HEMANTH" }
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
    },
    {
        code: "214PHY1113",
        name: "Renewable Energy Science",
        credits: 3,
        category: "University Elective Courses",
        type: "Theory",
        faculty: "DR. T.THEIVA SANTHI"
    }
];
