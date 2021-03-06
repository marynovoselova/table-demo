const UserModel = require('./../models/users');

const USERS_DATA = [
    {
        "firstName": "Alan",
        "lastName": "Medeiros",
        "email": "WCates@libero.ly",
        "phone": "(568)123-4761",
        "address": {
            "streetAddress": "1558 Pulvinar Ct",
            "city": "Franklin",
            "state": "ME",
            "zip": "82795"
        },
        "description": "sagittis dolor amet morbi placerat vitae at sed morbi rutrum tincidunt amet porta et sit morbi pretium et elit magna nec sapien curabitur neque magna et porttitor aliquam dolor consequat id nec"
    },
    {
        "firstName": "Alan",
        "lastName": "Slate",
        "email": "VKandray@lectus.io",
        "phone": "(300)281-0070",
        "address": {
            "streetAddress": "6053 Vitae Rd",
            "city": "Fort Worth",
            "state": "MT",
            "zip": "94404"
        },
        "description": "vitae at odio pulvinar amet dolor aliquam vel id aenean dolor nec porttitor curabitur non sit adipiscing aliquam sed mattis sed vel lacus sed non vestibulum dui neque massa convallis velit donec"
    },
    {
        "firstName": "Beverly",
        "lastName": "Black",
        "email": "VMundie@facilisis.io",
        "phone": "(467)530-7004",
        "address": {
            "streetAddress": "9214 Nec St",
            "city": "Waterford",
            "state": "NM",
            "zip": "14422"
        },
        "description": "tincidunt sollicitudin egestas dolor ac massa dolor fringilla massa donec donec scelerisque etiam in sed sapien dolor et lectus hendrerit porta mi massa magna tincidunt risus eget nunc morbi lacus porttitor elit"
    },
    {
        "firstName": "Wan-Yu",
        "lastName": "Mazza",
        "email": "NDehaven@et.org",
        "phone": "(655)684-2210",
        "address": {
            "streetAddress": "543 Sollicitudin Ave",
            "city": "Grand Ledge",
            "state": "PA",
            "zip": "79937"
        },
        "description": "aenean magna elementum sed sollicitudin hendrerit magna nunc odio sagittis orci consectetur consequat vestibulum at orci tellus massa dolor ipsum at placerat augue massa ante at in non amet ante eros molestie"
    },
    {
        "firstName": "Bruce",
        "lastName": "Ney",
        "email": "CReynolds@placerat.org",
        "phone": "(694)581-8600",
        "address": {
            "streetAddress": "7023 Aliquam Ct",
            "city": "Zionsville",
            "state": "IL",
            "zip": "27966"
        },
        "description": "egestas mattis velit ac egestas egestas massa odio turpis magna et adipiscing augue mattis sagittis ac tortor sollicitudin magna lectus sed id sit risus id vel morbi nec at libero nunc amet"
    },
    {
        "firstName": "Arif",
        "lastName": "Cohen",
        "email": "BCattanach@amet.gov",
        "phone": "(832)093-7130",
        "address": {
            "streetAddress": "8901 Porttitor Rd",
            "city": "Union Springs",
            "state": "NH",
            "zip": "97005"
        },
        "description": "nullam sit morbi sagittis suspendisse pulvinar risus pulvinar hendrerit vitae eros amet mattis dolor at ante scelerisque vitae vitae ac placerat molestie lacus hendrerit massa sit sed tincidunt nec orci porttitor dui"
    },
    {
        "firstName": "Bartley",
        "lastName": "Day",
        "email": "MGibbs@consequat.org",
        "phone": "(342)978-7011",
        "address": {
            "streetAddress": "9342 Sollicitudin Dr",
            "city": "Coeur D'alene",
            "state": "AL",
            "zip": "40155"
        },
        "description": "dolor vel quis pulvinar et consequat non sit porttitor tempor nullam molestie sit elementum amet ipsum pulvinar lacus sed tempor quis convallis eros at consequat dolor odio sit et sed porta augue"
    },
    {
        "firstName": "Dale",
        "lastName": "Grimm",
        "email": "JHaugland@turpis.gov",
        "phone": "(758)032-0546",
        "address": {
            "streetAddress": "9394 Sollicitudin Ct",
            "city": "Kansas City",
            "state": "AK",
            "zip": "48563"
        },
        "description": "tellus sollicitudin fringilla adipiscing tortor sed vitae elit sagittis nunc eros lacus dolor scelerisque hendrerit rutrum lacus convallis sagittis sed curabitur scelerisque placerat turpis sagittis tempor tellus sollicitudin ac eros id elementum"
    },
    {
        "firstName": "Ellis",
        "lastName": "Sommers",
        "email": "BFenton@tellus.org",
        "phone": "(257)302-0768",
        "address": {
            "streetAddress": "2957 Sit Ct",
            "city": "Arvada",
            "state": "MO",
            "zip": "17521"
        },
        "description": "dui libero aliquam odio velit sagittis tortor magna risus fringilla nullam nullam scelerisque eros dolor at neque ante sapien eget odio malesuada libero sagittis vestibulum adipiscing pulvinar amet tincidunt ante ac pharetra"
    },
    {
        "firstName": "Adrienne",
        "lastName": "Sobel",
        "email": "PAntunes@morbi.net",
        "phone": "(403)597-3835",
        "address": {
            "streetAddress": "8284 Tortor Ct",
            "city": "Zionsville",
            "state": "DE",
            "zip": "68145"
        },
        "description": "lacus lacus facilisis et sed et eros sed tincidunt tellus magna morbi malesuada magna odio mattis sit magna pulvinar amet nullam tempor consequat convallis rutrum elementum odio porta neque rutrum libero vitae"
    },
    {
        "firstName": "Sonya",
        "lastName": "User",
        "email": "AGullion@sit.org",
        "phone": "(633)507-9999",
        "address": {
            "streetAddress": "431 Et Rd",
            "city": "Cypress",
            "state": "UT",
            "zip": "50633"
        },
        "description": "at hendrerit at rutrum pharetra placerat suspendisse at egestas ac tellus aliquam amet amet in aenean risus facilisis sit fringilla nunc odio sed odio pharetra sit lorem convallis consectetur sed vitae placerat"
    },
    {
        "firstName": "Jay",
        "lastName": "Symes",
        "email": "ECorson@et.com",
        "phone": "(178)718-9270",
        "address": {
            "streetAddress": "1293 At Ave",
            "city": "Clayton",
            "state": "ID",
            "zip": "59758"
        },
        "description": "odio vel libero amet tellus massa placerat at sit sed turpis fringilla at odio tempor orci sollicitudin ipsum nec dolor pulvinar neque dolor elementum sed nullam aenean rutrum magna donec odio in"
    },
    {
        "firstName": "Cory",
        "lastName": "Malstrom",
        "email": "CIvanoski@eget.gov",
        "phone": "(932)500-6317",
        "address": {
            "streetAddress": "6043 Ipsum Ct",
            "city": "Traverse City",
            "state": "IN",
            "zip": "50442"
        },
        "description": "odio sed dolor odio at tortor velit pharetra vestibulum vestibulum aenean rutrum neque dui elit sollicitudin amet id nec libero donec ipsum massa curabitur vitae etiam tincidunt eros ante nullam nullam consectetur"
    },
    {
        "firstName": "Nadine",
        "lastName": "Logsden",
        "email": "PGrimsley@adipiscing.net",
        "phone": "(983)973-2455",
        "address": {
            "streetAddress": "4639 Et Rd",
            "city": "Canton",
            "state": "LA",
            "zip": "35978"
        },
        "description": "nec tortor pharetra libero morbi egestas ante in sagittis orci augue porta risus odio tortor suspendisse tellus aliquam egestas dolor tincidunt elementum malesuada turpis tincidunt donec non amet porta sapien sit dolor"
    },
    {
        "firstName": "Stuart",
        "lastName": "Preston",
        "email": "BSettle@vestibulum.io",
        "phone": "(901)716-1384",
        "address": {
            "streetAddress": "2723 Ipsum Rd",
            "city": "Kansas City",
            "state": "DE",
            "zip": "95888"
        },
        "description": "egestas malesuada vitae ante tempor augue tellus amet morbi placerat tincidunt nec tellus lacus sollicitudin convallis amet magna pretium ac scelerisque tempor ac et aliquam nunc eget morbi ac non lacus porttitor"
    },
    {
        "firstName": "Ahila",
        "lastName": "Reddy",
        "email": "SZazzara@sed.org",
        "phone": "(202)332-8127",
        "address": {
            "streetAddress": "6851 Et Ct",
            "city": "East Boston",
            "state": "FL",
            "zip": "17858"
        },
        "description": "suspendisse mi consequat aenean nullam pulvinar dui tortor eros dui ac aliquam vel lectus turpis at magna pulvinar aenean turpis at et ac facilisis tortor magna sed sed tortor pulvinar vitae ipsum"
    },
    {
        "firstName": "Pat",
        "lastName": "Ibarrondo",
        "email": "SSchrag@pulvinar.net",
        "phone": "(744)585-2696",
        "address": {
            "streetAddress": "4447 Elit Ln",
            "city": "Winona Lake",
            "state": "AZ",
            "zip": "13450"
        },
        "description": "egestas et porta donec donec augue mi sapien nullam in vestibulum at neque et sapien neque lacus risus mi convallis mi sollicitudin turpis sed in sed vitae magna scelerisque mi tellus dolor"
    },
    {
        "firstName": "Carmerlina",
        "lastName": "Hellems",
        "email": "NSteele@vestibulum.com",
        "phone": "(815)260-5162",
        "address": {
            "streetAddress": "9835 Placerat Ave",
            "city": "North Bend",
            "state": "OH",
            "zip": "88261"
        },
        "description": "convallis magna placerat lacus magna risus sagittis augue pretium eget vestibulum lacus lacus placerat mattis rutrum fringilla morbi in nullam scelerisque libero nunc elementum tempor morbi orci dolor nec ante in sed"
    },
    {
        "firstName": "Tylene",
        "lastName": "Mcwethy",
        "email": "DSwanson@quis.net",
        "phone": "(386)629-7575",
        "address": {
            "streetAddress": "6530 Sed Dr",
            "city": "Middleburg",
            "state": "AR",
            "zip": "84431"
        },
        "description": "curabitur in lacus sollicitudin dolor libero at amet tortor sed et suspendisse turpis curabitur tempor scelerisque tellus dui lorem egestas tempor dolor magna odio morbi sed lorem hendrerit lacus massa aliquam lectus"
    },
    {
        "firstName": "Birbal",
        "lastName": "Adams",
        "email": "BHaglund@dolor.ly",
        "phone": "(520)706-2761",
        "address": {
            "streetAddress": "8856 Pretium Rd",
            "city": "Pine Mountain",
            "state": "NV",
            "zip": "87715"
        },
        "description": "aenean mattis dolor quis magna libero amet adipiscing tortor adipiscing nec dolor pulvinar aliquam porttitor convallis sed placerat mi et massa tincidunt vitae sed tempor sollicitudin magna malesuada molestie sed sed tellus"
    },
    {
        "firstName": "Artem",
        "lastName": "Sutulov",
        "email": "sutulovartemsss@gmail.com",
        "phone": "89099995566",
        "address": {
            "streetAddress": "8856 Pretium Rd",
            "city": "Pine Mountain",
            "state": "NV",
            "zip": "87715"
        },
        "description": "aenean mattis dolor quis magna libero amet adipiscing tortor adipiscing nec dolor pulvinar aliquam porttitor convallis sed placerat mi et massa tincidunt vitae sed tempor sollicitudin magna malesuada molestie sed sed tellus"
    },
    {
        "firstName": "Artem",
        "lastName": "Susulov",
        "email": "susulovartemssss@dolor.ly",
        "phone": "89097774455",
        "address": {
            "streetAddress": "8856 Pretium Rd",
            "city": "Pine Mountain",
            "state": "NV",
            "zip": "87715"
        },
        "description": "aenean mattis dolor quis magna libero amet adipiscing tortor adipiscing nec dolor pulvinar aliquam porttitor convallis sed placerat mi et massa tincidunt vitae sed tempor sollicitudin magna malesuada molestie sed sed tellus"
    },
    {
        "firstName": "Artur",
        "lastName": "Sutulov",
        "email": "sutulovarturrrrr@dolor.ly",
        "phone": "89095558855",
        "address": {
            "streetAddress": "8856 Pretium Rd",
            "city": "Pine Mountain",
            "state": "NV",
            "zip": "87715"
        },
        "description": "aenean mattis dolor quis magna libero amet adipiscing tortor adipiscing nec dolor pulvinar aliquam porttitor convallis sed placerat mi et massa tincidunt vitae sed tempor sollicitudin magna malesuada molestie sed sed tellus"
    },
    {
        "firstName": "Ellis",
        "lastName": "Sommers",
        "email": "BFenton@tellus.org",
        "phone": "(257)302-0768",
        "address": {
            "streetAddress": "2957 Sit Ct",
            "city": "Arvada",
            "state": "MO",
            "zip": "17521"
        },
        "description": "dui libero aliquam odio velit sagittis tortor magna risus fringilla nullam nullam scelerisque eros dolor at neque ante sapien eget odio malesuada libero sagittis vestibulum adipiscing pulvinar amet tincidunt ante ac pharetra"
    },
    {
        "firstName": "Adrienne",
        "lastName": "Sobel",
        "email": "PAntunes@morbi.net",
        "phone": "(403)597-3835",
        "address": {
            "streetAddress": "8284 Tortor Ct",
            "city": "Zionsville",
            "state": "DE",
            "zip": "68145"
        },
        "description": "lacus lacus facilisis et sed et eros sed tincidunt tellus magna morbi malesuada magna odio mattis sit magna pulvinar amet nullam tempor consequat convallis rutrum elementum odio porta neque rutrum libero vitae"
    },
    {
        "firstName": "Sonya",
        "lastName": "User",
        "email": "AGullion@sit.org",
        "phone": "(633)507-9999",
        "address": {
            "streetAddress": "431 Et Rd",
            "city": "Cypress",
            "state": "UT",
            "zip": "50633"
        },
        "description": "at hendrerit at rutrum pharetra placerat suspendisse at egestas ac tellus aliquam amet amet in aenean risus facilisis sit fringilla nunc odio sed odio pharetra sit lorem convallis consectetur sed vitae placerat"
    },
    {
        "firstName": "Jay",
        "lastName": "Symes",
        "email": "ECorson@et.com",
        "phone": "(178)718-9270",
        "address": {
            "streetAddress": "1293 At Ave",
            "city": "Clayton",
            "state": "ID",
            "zip": "59758"
        },
        "description": "odio vel libero amet tellus massa placerat at sit sed turpis fringilla at odio tempor orci sollicitudin ipsum nec dolor pulvinar neque dolor elementum sed nullam aenean rutrum magna donec odio in"
    },
    {
        "firstName": "Cory",
        "lastName": "Malstrom",
        "email": "CIvanoski@eget.gov",
        "phone": "(932)500-6317",
        "address": {
            "streetAddress": "6043 Ipsum Ct",
            "city": "Traverse City",
            "state": "IN",
            "zip": "50442"
        },
        "description": "odio sed dolor odio at tortor velit pharetra vestibulum vestibulum aenean rutrum neque dui elit sollicitudin amet id nec libero donec ipsum massa curabitur vitae etiam tincidunt eros ante nullam nullam consectetur"
    },
    {
        "firstName": "Nadine",
        "lastName": "Logsden",
        "email": "PGrimsley@adipiscing.net",
        "phone": "(983)973-2455",
        "address": {
            "streetAddress": "4639 Et Rd",
            "city": "Canton",
            "state": "LA",
            "zip": "35978"
        },
        "description": "nec tortor pharetra libero morbi egestas ante in sagittis orci augue porta risus odio tortor suspendisse tellus aliquam egestas dolor tincidunt elementum malesuada turpis tincidunt donec non amet porta sapien sit dolor"
    },
    {
        "firstName": "Stuart",
        "lastName": "Preston",
        "email": "BSettle@vestibulum.io",
        "phone": "(901)716-1384",
        "address": {
            "streetAddress": "2723 Ipsum Rd",
            "city": "Kansas City",
            "state": "DE",
            "zip": "95888"
        },
        "description": "egestas malesuada vitae ante tempor augue tellus amet morbi placerat tincidunt nec tellus lacus sollicitudin convallis amet magna pretium ac scelerisque tempor ac et aliquam nunc eget morbi ac non lacus porttitor"
    },
    {
        "firstName": "Ahila",
        "lastName": "Reddy",
        "email": "SZazzara@sed.org",
        "phone": "(202)332-8127",
        "address": {
            "streetAddress": "6851 Et Ct",
            "city": "East Boston",
            "state": "FL",
            "zip": "17858"
        },
        "description": "suspendisse mi consequat aenean nullam pulvinar dui tortor eros dui ac aliquam vel lectus turpis at magna pulvinar aenean turpis at et ac facilisis tortor magna sed sed tortor pulvinar vitae ipsum"
    },
    {
        "firstName": "Pat",
        "lastName": "Ibarrondo",
        "email": "SSchrag@pulvinar.net",
        "phone": "(744)585-2696",
        "address": {
            "streetAddress": "4447 Elit Ln",
            "city": "Winona Lake",
            "state": "AZ",
            "zip": "13450"
        },
        "description": "egestas et porta donec donec augue mi sapien nullam in vestibulum at neque et sapien neque lacus risus mi convallis mi sollicitudin turpis sed in sed vitae magna scelerisque mi tellus dolor"
    },
    {
        "firstName": "Carmerlina",
        "lastName": "Hellems",
        "email": "NSteele@vestibulum.com",
        "phone": "(815)260-5162",
        "address": {
            "streetAddress": "9835 Placerat Ave",
            "city": "North Bend",
            "state": "OH",
            "zip": "88261"
        },
        "description": "convallis magna placerat lacus magna risus sagittis augue pretium eget vestibulum lacus lacus placerat mattis rutrum fringilla morbi in nullam scelerisque libero nunc elementum tempor morbi orci dolor nec ante in sed"
    },
    {
        "firstName": "Tylene",
        "lastName": "Mcwethy",
        "email": "DSwanson@quis.net",
        "phone": "(386)629-7575",
        "address": {
            "streetAddress": "6530 Sed Dr",
            "city": "Middleburg",
            "state": "AR",
            "zip": "84431"
        },
        "description": "curabitur in lacus sollicitudin dolor libero at amet tortor sed et suspendisse turpis curabitur tempor scelerisque tellus dui lorem egestas tempor dolor magna odio morbi sed lorem hendrerit lacus massa aliquam lectus"
    },
    {
        "firstName": "Birbal",
        "lastName": "Adams",
        "email": "BHaglund@dolor.ly",
        "phone": "(520)706-2761",
        "address": {
            "streetAddress": "8856 Pretium Rd",
            "city": "Pine Mountain",
            "state": "NV",
            "zip": "87715"
        },
        "description": "aenean mattis dolor quis magna libero amet adipiscing tortor adipiscing nec dolor pulvinar aliquam porttitor convallis sed placerat mi et massa tincidunt vitae sed tempor sollicitudin magna malesuada molestie sed sed tellus"
    },
    {
        "firstName": "Ellis",
        "lastName": "Sommers",
        "email": "BFenton@tellus.org",
        "phone": "(257)302-0768",
        "address": {
            "streetAddress": "2957 Sit Ct",
            "city": "Arvada",
            "state": "MO",
            "zip": "17521"
        },
        "description": "dui libero aliquam odio velit sagittis tortor magna risus fringilla nullam nullam scelerisque eros dolor at neque ante sapien eget odio malesuada libero sagittis vestibulum adipiscing pulvinar amet tincidunt ante ac pharetra"
    },
    {
        "firstName": "Adrienne",
        "lastName": "Sobel",
        "email": "PAntunes@morbi.net",
        "phone": "(403)597-3835",
        "address": {
            "streetAddress": "8284 Tortor Ct",
            "city": "Zionsville",
            "state": "DE",
            "zip": "68145"
        },
        "description": "lacus lacus facilisis et sed et eros sed tincidunt tellus magna morbi malesuada magna odio mattis sit magna pulvinar amet nullam tempor consequat convallis rutrum elementum odio porta neque rutrum libero vitae"
    },
    {
        "firstName": "Sonya",
        "lastName": "User",
        "email": "AGullion@sit.org",
        "phone": "(633)507-9999",
        "address": {
            "streetAddress": "431 Et Rd",
            "city": "Cypress",
            "state": "UT",
            "zip": "50633"
        },
        "description": "at hendrerit at rutrum pharetra placerat suspendisse at egestas ac tellus aliquam amet amet in aenean risus facilisis sit fringilla nunc odio sed odio pharetra sit lorem convallis consectetur sed vitae placerat"
    },
    {
        "firstName": "Jay",
        "lastName": "Symes",
        "email": "ECorson@et.com",
        "phone": "(178)718-9270",
        "address": {
            "streetAddress": "1293 At Ave",
            "city": "Clayton",
            "state": "ID",
            "zip": "59758"
        },
        "description": "odio vel libero amet tellus massa placerat at sit sed turpis fringilla at odio tempor orci sollicitudin ipsum nec dolor pulvinar neque dolor elementum sed nullam aenean rutrum magna donec odio in"
    },
    {
        "firstName": "Cory",
        "lastName": "Malstrom",
        "email": "CIvanoski@eget.gov",
        "phone": "(932)500-6317",
        "address": {
            "streetAddress": "6043 Ipsum Ct",
            "city": "Traverse City",
            "state": "IN",
            "zip": "50442"
        },
        "description": "odio sed dolor odio at tortor velit pharetra vestibulum vestibulum aenean rutrum neque dui elit sollicitudin amet id nec libero donec ipsum massa curabitur vitae etiam tincidunt eros ante nullam nullam consectetur"
    },
    {
        "firstName": "Nadine",
        "lastName": "Logsden",
        "email": "PGrimsley@adipiscing.net",
        "phone": "(983)973-2455",
        "address": {
            "streetAddress": "4639 Et Rd",
            "city": "Canton",
            "state": "LA",
            "zip": "35978"
        },
        "description": "nec tortor pharetra libero morbi egestas ante in sagittis orci augue porta risus odio tortor suspendisse tellus aliquam egestas dolor tincidunt elementum malesuada turpis tincidunt donec non amet porta sapien sit dolor"
    },
    {
        "firstName": "Stuart",
        "lastName": "Preston",
        "email": "BSettle@vestibulum.io",
        "phone": "(901)716-1384",
        "address": {
            "streetAddress": "2723 Ipsum Rd",
            "city": "Kansas City",
            "state": "DE",
            "zip": "95888"
        },
        "description": "egestas malesuada vitae ante tempor augue tellus amet morbi placerat tincidunt nec tellus lacus sollicitudin convallis amet magna pretium ac scelerisque tempor ac et aliquam nunc eget morbi ac non lacus porttitor"
    },
    {
        "firstName": "Ahila",
        "lastName": "Reddy",
        "email": "SZazzara@sed.org",
        "phone": "(202)332-8127",
        "address": {
            "streetAddress": "6851 Et Ct",
            "city": "East Boston",
            "state": "FL",
            "zip": "17858"
        },
        "description": "suspendisse mi consequat aenean nullam pulvinar dui tortor eros dui ac aliquam vel lectus turpis at magna pulvinar aenean turpis at et ac facilisis tortor magna sed sed tortor pulvinar vitae ipsum"
    },
    {
        "firstName": "Pat",
        "lastName": "Ibarrondo",
        "email": "SSchrag@pulvinar.net",
        "phone": "(744)585-2696",
        "address": {
            "streetAddress": "4447 Elit Ln",
            "city": "Winona Lake",
            "state": "AZ",
            "zip": "13450"
        },
        "description": "egestas et porta donec donec augue mi sapien nullam in vestibulum at neque et sapien neque lacus risus mi convallis mi sollicitudin turpis sed in sed vitae magna scelerisque mi tellus dolor"
    },
    {
        "firstName": "Carmerlina",
        "lastName": "Hellems",
        "email": "NSteele@vestibulum.com",
        "phone": "(815)260-5162",
        "address": {
            "streetAddress": "9835 Placerat Ave",
            "city": "North Bend",
            "state": "OH",
            "zip": "88261"
        },
        "description": "convallis magna placerat lacus magna risus sagittis augue pretium eget vestibulum lacus lacus placerat mattis rutrum fringilla morbi in nullam scelerisque libero nunc elementum tempor morbi orci dolor nec ante in sed"
    },
    {
        "firstName": "Tylene",
        "lastName": "Mcwethy",
        "email": "DSwanson@quis.net",
        "phone": "(386)629-7575",
        "address": {
            "streetAddress": "6530 Sed Dr",
            "city": "Middleburg",
            "state": "AR",
            "zip": "84431"
        },
        "description": "curabitur in lacus sollicitudin dolor libero at amet tortor sed et suspendisse turpis curabitur tempor scelerisque tellus dui lorem egestas tempor dolor magna odio morbi sed lorem hendrerit lacus massa aliquam lectus"
    },
    {
        "firstName": "Birbal",
        "lastName": "Adams",
        "email": "BHaglund@dolor.ly",
        "phone": "(520)706-2761",
        "address": {
            "streetAddress": "8856 Pretium Rd",
            "city": "Pine Mountain",
            "state": "NV",
            "zip": "87715"
        },
        "description": "aenean mattis dolor quis magna libero amet adipiscing tortor adipiscing nec dolor pulvinar aliquam porttitor convallis sed placerat mi et massa tincidunt vitae sed tempor sollicitudin magna malesuada molestie sed sed tellus"
    }
];

const seedDbIfNeed = async () => {
    const existingUsers = await UserModel.find({});
    if (existingUsers.length === 0) {
        try {
            await UserModel.create(USERS_DATA);
        } catch (e) {
            console.log('Error seeding users', e)
        }
    }
}

module.exports = seedDbIfNeed;
